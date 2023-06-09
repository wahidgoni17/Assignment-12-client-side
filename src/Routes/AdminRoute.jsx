import React from "react";
import useAuth from "../Hooks/useAuth";
import loaderimg from '../assets/loader3.gif';
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/UseAdmin";

const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin()
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <img src={loaderimg} alt="" />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
