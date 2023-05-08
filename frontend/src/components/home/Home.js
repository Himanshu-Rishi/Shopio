/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import Product from "./HomeProduct/HomeProduct";
import Category from "../layout/Header/HeaderCategory";
import { clearErrors, getProduct } from "../../action/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import Helmet from "react-helmet";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Testinomial from "../layout/Footer/Testinomial";
import SignInHeader from "../layout/Header/SignInHeader";
const Home = (props) => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      <Helmet>
        <title>{props.page}</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      {props.isAuthenticated ? (
        <Header
          user={props.user}
          isAuthenticated={props.isAuthenticated}
          flag={true}
        />
      ) : (
        <SignInHeader flag={true} />
      )}
      <div className="banner">
        <div className="container">
          <div className="slider-container has-scrollbar">
            <div className="slider-item">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1682753600/Banner%20Images/banner-2_ubrb9c.png"
                alt="new fashion summer sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Sale Offer</p>

                <h2 className="banner-title">New fashion summer sale</h2>

                <p className="banner-text">
                  starting at ₹ <b>299</b>
                </p>

                <a href="/products" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
            <div className="slider-item">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1682754523/Banner%20Images/banner-2_v5rlzk.jpg"
                alt="new fashion summer sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Sale Offer</p>

                <h2 className="banner-title">New fashion summer sale</h2>

                <p className="banner-text">
                  starting at ₹ <b>299</b>
                </p>

                <a href="/products" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1682753601/Banner%20Images/banner-3_fzgrw7.png"
                alt="women's latest fashion sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle" style={{ color: "gray" }}>
                  Trending item
                </p>

                <h2 className="banner-title"> latest fashion sale</h2>

                <p className="banner-text">
                  starting at ₹ <b>200</b>
                </p>

                <a
                  href="/products"
                  className="banner-btn"
                  style={{ backgroundColor: "gray" }}
                >
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1682754523/Banner%20Images/banner-1_xpbaol.jpg"
                alt="modern sunglasses"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending accessories</p>

                <h2 className="banner-title">Modern sunglasses</h2>

                <p className="banner-text">
                  starting at ₹ <b>159</b>
                </p>

                <a href="/products" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <Category />
        {loading ? <Loader /> : <Product product={products} />}
      </main>
      <Testinomial />
      <Footer flag={true} />
    </Fragment>
  );
};

export default Home;
