import React from "react";
import useAuth from "../Hooks/useAuth";
import loaderimg from "../assets/loader3.gif";
import { Navigate, useLocation } from "react-router-dom";
import useInstuctor from "../Hooks/useInstructor";
const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstuctor();
  const location = useLocation();
  if (loading || isInstructorLoading) {
    return <img src={loaderimg} alt="" />;
  }
  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
