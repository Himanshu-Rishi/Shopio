import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./orderSuccess.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Header from "../layout/Header/Header";
import SignInHeader from "../layout/Header/SignInHeader";
import Footer from "../layout/Footer/Footer";

const OrderSuccess = (props) => {
  return (
    <>
      {props.isAuthenticated ? (
        <Header user={props.user} isAuthenticated={props.isAuthenticated} />
      ) : (
        <SignInHeader />
      )}
      <div className="orderSuccess">
        <CheckCircleIcon />

        <Typography>Your Order has been Placed successfully </Typography>
        <Link to="/orders">View Orders</Link>
      </div>
      <Footer />
    </>
  );
};

export default OrderSuccess;
