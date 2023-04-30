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
import ProtectedRoute from './components/Middleware/ProtectedRoute'
const App = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
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
              <Profile/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
