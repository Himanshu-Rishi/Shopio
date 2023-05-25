import React, { useEffect } from "react";
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
import ProtectedRoute from "./components/RouteMiddleware/ProtectedRoute";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./components/cart/OrderSuccess";
import MyOrders from "./components/Order/Myorders";
import OrderDetails from "./components/Order/OrderDetails";
import Liked from "./components/Favourite/LikedItem";
import Dashboard from "./components/admin/Dashboard.js";
import ProductList from "./components/admin/ProductList";
const App = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const stripePromise = loadStripe(
    "pk_test_51N3KZWSFyuLceomLzX3BZJ0lSgwF9YatY15eSjOQIdpCTq3bRIWOjcshlejdSzYRtdj8RMbr8vWkJjhzmBJ5K7ja00jF8i1aeD"
  );
  useEffect(() => {
    store.dispatch(loadUser());
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
          path="/favourite"
          element={<Liked user={user} isAuthenticated={isAuthenticated} />}
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
            <ProtectedRoute>
              <Elements stripe={stripePromise}>
                <Payment user={user} isAuthenticated={isAuthenticated} />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/success"
          element={
            <OrderSuccess user={user} isAuthenticated={isAuthenticated} />
          }
        />
        <Route
          exact
          path="/orders"
          element={
            <ProtectedRoute>
              <MyOrders user={user} isAuthenticated={isAuthenticated} />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetails user={user} isAuthenticated={isAuthenticated} />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard user={user} isAuthenticated={isAuthenticated} />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/products"
          element={
            <ProtectedRoute isAdmin={true}>
              <ProductList user={user} isAuthenticated={isAuthenticated} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
