import React from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/home/Home";
import Testinomial from "./components/Testinomial";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./components/Product/ProductPage";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home page="Shopio" />} />
        <Route
          exact
          path="/product/:id"
          element={<ProductPage page="Product" />}
        />
      </Routes>
      <Testinomial />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
