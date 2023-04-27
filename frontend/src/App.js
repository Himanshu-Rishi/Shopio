import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/Product/ProductPage";
import Products from "./components/AllProduct/Products";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home page="Shopio" />} />
        <Route
          exact
          path="/product/:id"
          element={<ProductPage page="Product" />}
        />
        <Route
          exact
          path="/products"
          element={<Products page="All Products" />}
        />
        <Route
          path="/products/:keyword"
          element={<Products page="Search Products" />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
