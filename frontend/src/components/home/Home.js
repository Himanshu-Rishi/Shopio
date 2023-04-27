/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import Product from "./HomeProduct/HomeProduct";
import Category from "../layout/Header/Category";
import { clearErrors, getProduct } from "../../action/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import Helmet from "react-helmet";
const Home = (props) => {
  let dispatch;
  dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // error alert
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error]);
  return (
    <Fragment>
      <Helmet>
        <title>{props.page}</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="banner">
        <div className="container">
          <div className="slider-container has-scrollbar">
            <div className="slider-item">
              <img
                src="./assets/images/banner-1.jpg"
                alt="women's latest fashion sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending item</p>

                <h2 className="banner-title">Women's latest fashion sale</h2>

                <p className="banner-text">
                  starting at ₹ <b>200</b>
                </p>

                <a href="/" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src="./assets/images/banner-2.jpg"
                alt="modern sunglasses"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending accessories</p>

                <h2 className="banner-title">Modern sunglasses</h2>

                <p className="banner-text">
                  starting at ₹ <b>159</b>
                </p>

                <a href="/" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src="./assets/images/banner-3.jpg"
                alt="new fashion summer sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Sale Offer</p>

                <h2 className="banner-title">New fashion summer sale</h2>

                <p className="banner-text">
                  starting at ₹ <b>299</b>
                </p>

                <a href="/" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <Category />
          <Product product={products} />
        </main>
      )}
    </Fragment>
  );
};

export default Home;
