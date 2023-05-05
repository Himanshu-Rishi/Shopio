import React, { Fragment, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import axios from "axios";
import "./payment.css";
import CheckoutSteps from "./CheckoutSteps";
import { Typography } from "@mui/material";
import SignInHeader from "../layout/Header/SignInHeader";
import Header from "../layout/Header/Header";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { Helmet } from "react-helmet";
import Footer from "../layout/Footer/Footer";
import { clearErrors, createOrder } from "../../action/orderAction";

const Payment = (props) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const history = useNavigate();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;
      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

            dispatch(createOrder(order));

          history("/success");
        } else {
          toast.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  return (
    <Fragment>
      <Helmet>
        <title>Order Payment</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      {props.isAuthenticated ? (
        <Header user={props.user} isAuthenticated={props.isAuthenticated} />
      ) : (
        <SignInHeader />
      )}
      <Fragment>
        <CheckoutSteps activeStep={2} />
        <div className="paymentContainer">
          <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
            <Typography className="paymnentHeading">Card Info</Typography>
            <div className="payment__input">
            <div className="input__field">
              <CreditCardIcon label="First" className="payment__icons"/>
              <CardNumberElement className="paymentInput" />
            </div>
              <div className="input__field">
                <EventIcon className="payment__icons"/>
                <CardExpiryElement className="paymentInput" />
              </div>
              <div className="input__field">
                <VpnKeyIcon className="payment__icons"/>
                <CardCvcElement className="paymentInput" />
              </div>
            </div>
           
            <input
              type="submit"
              value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
              ref={payBtn}
              className="paymentFormBtn"
            />
          </form>
        </div>
      </Fragment>
      <Footer />
    </Fragment>
  );
};

export default Payment;

