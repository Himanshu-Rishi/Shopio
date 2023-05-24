import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";

const ProtectedRoute = ({ children, isAdmin}) => {
  const {loading, isAuthenticated, user} = useSelector((state) => state.user);
  
  if(loading===false)
  {
    if (isAuthenticated === false) {
      return <Navigate to={"/login"}></Navigate>;
    }
    if (isAdmin === true) {
      if (isAuthenticated && user.role !== 'admin') 
      {
        return <Navigate to={"/login"}></Navigate>;
      }
    }
  }
  
  return children;
};

export default ProtectedRoute;