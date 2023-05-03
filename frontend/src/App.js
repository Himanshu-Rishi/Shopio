import React, { useEffect, useState } from "react";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/Product/ProductPage";
import Products from "./components/AllProduct/Products";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import store from "./Store";
import { loadUser } from "./action/userAction";
import { useSelector } from "react-redux";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/Middleware/ProtectedRoute";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import axios from "axios";
import Payment from "./components/cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const App = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [stripeApiKey, setstripeApiKey] = useState("");
  async function getstripeApiKey() {
    const { data } = await axios.get("/api/v1//stripeapikey");
    setstripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    store.dispatch(loadUser());
    getstripeApiKey();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home page="Shopio" user={user} isAuthenticated={isAuthenticated} />
          }
        />
        <Route
          exact
          path="/product/:id"
          element={
            <ProductPage
              page="Product"
              user={user}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          exact
          path="/products"
          element={
            <Products
              user={user}
              isAuthenticated={isAuthenticated}
              page="All Products"
            />
          }
        />
        <Route
          path="/products/:keyword"
          element={
            <Products
              page="Search Products"
              user={user}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route
          exact
          path="/account"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/profile/update"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/password/update"
          element={
            <ProtectedRoute>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route
          exact
          path="/cart"
          element={<Cart user={user} isAuthenticated={isAuthenticated} />}
        />
        <Route
          exact
          path="/shipping"
          element={
            <ProtectedRoute>
              <Shipping user={user} isAuthenticated={isAuthenticated} />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/order/confirm"
          element={
            <ProtectedRoute>
              <ConfirmOrder user={user} isAuthenticated={isAuthenticated} />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/process/payment"
          element={
            <Elements
              stripe={loadStripe(
                "pk_test_51N3KZWSFyuLceomLzX3BZJ0lSgwF9YatY15eSjOQIdpCTq3bRIWOjcshlejdSzYRtdj8RMbr8vWkJjhzmBJ5K7ja00jF8i1aeD"
              )}
            >
              <ProtectedRoute>
                <Payment user={user} isAuthenticated={isAuthenticated} />
              </ProtectedRoute>
            </Elements>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
