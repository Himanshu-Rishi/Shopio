import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, elemnet: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Navigate to="/login" />;
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               return <Navigate to="/login" />;
//             }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </>
//   );
// };




const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  
  return children;
};

export default ProtectedRoute;