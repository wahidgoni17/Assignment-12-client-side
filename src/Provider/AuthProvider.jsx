import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const newUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name , photo)=>{
    return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photo
    })
  }
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log(loggedUser);
      setUser(loggedUser);
      if(loggedUser){
        axios.post('https://summer-camp-server-side-omega.vercel.app/jwt',{
          email: loggedUser.email
        })
        .then(data =>{
          localStorage.setItem('access-token', data.data.token)
          setLoading(false);
        })
      }
      else{
        localStorage.removeItem('access-token')
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const authData = {
    user,
    loading,
    newUser,
    updateUserProfile,
    googleLogIn,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
