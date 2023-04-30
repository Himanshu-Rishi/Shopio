import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  
  return children;
};

export default ProtectedRoute;