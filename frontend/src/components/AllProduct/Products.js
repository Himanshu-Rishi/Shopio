/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { clearErrors, getProduct } from "../../action/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import "./Products.css";
import Item from "../home/HomeProduct/MainProductCard";
import { Slider, Typography } from "@mui/material";
import Header from "../layout/Header/Header";
import Testinomial from "../layout/Footer/Testinomial";
import Footer from "../layout/Footer/Footer";
import SignInHeader from "../layout/Header/SignInHeader";
const Products = (props) => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const [currentPage, setcurrentPage] = useState(1);
  const [price, setprice] = useState([0, 25000]);
  const [category, setcategory] = useState("");
  const [Ratings, setRatings] = useState(0);
  const [expand, setexpand] = useState(false);
  const [expand1, setexpand1] = useState(false);
  const [expand2, setexpand2] = useState(false);
  const [expand3, setexpand3] = useState(false);
  const [expand4, setexpand4] = useState(false);
  const [expand5, setexpand5] = useState(false);
  const [expand6, setexpand6] = useState(false);
  const marks = [
    {
      value: 0,
      label: "₹0",
    },
    {
      value: 5000,
      label: "₹5k",
    },
    {
      value: 10000,
      label: "₹10k",
    },
    {
      value: 15000,
      label: "₹15k",
    },
    {
      value: 20000,
      label: "₹20k",
    },
    {
      value: 25000,
      label: "₹25k",
    },
  ];
  const ratingmarks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 1,
      label: "1⭐",
    },
    {
      value: 2,
      label: "2⭐",
    },
    {
      value: 3,
      label: "3⭐",
    },
    {
      value: 4,
      label: "4⭐",
    },
    {
      value: 5,
      label: "5⭐",
    },
  ];

  const categories = [
    "All",
    "Shirt",
    "Tshirt",
    "Footwear",
    "Bottomwear",
    "Tops",
  ];

  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setcurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setprice(newPrice);
  };

  let count = filteredProductsCount;

  function valuetext(value) {
    return `${value}°C`;
  }

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price, category, Ratings));
  }, [dispatch, keyword, currentPage, price, category, Ratings]);

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
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {props.isAuthenticated ? (
            <Header
              user={props.user}
              isAuthenticated={props.isAuthenticated}
              flag={true}
            />
          ) : (
            <SignInHeader flag={true} />
          )}
          <main>
            <div className="product-container">
              <div className="container">
                <div className="sidebar has-scrollbar" data-mobile-menu>
                  <div
                    className="sidebar-category"
                    style={{ marginTop: "2rem" }}
                  >
                    <div className="sidebar-top">
                      <h2 className="sidebar-title">Category</h2>

                      <button
                        className="sidebar-close-btn"
                        data-mobile-menu-close-btn
                      >
                        <ion-icon name="close-outline"></ion-icon>
                      </button>
                    </div>

                    <ul className="sidebar-menu-category-list">
                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                          onClick={() => setexpand(!expand)}
                        >
                          <div className="menu-title-flex">
                            <img
                              src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683118157/SVG%20Images/jacket_tuvwjh.svg"
                              alt="clothes"
                              width="20"
                              height="20"
                              className="menu-title-img"
                            />

                            <p className="menu-title">Winter Wear</p>
                          </div>

                          <div>
                            <button
                              onClick={() => setexpand(!expand)}
                              style={{
                                display: expand ? "none" : "block",
                              }}
                            >
                              <ion-icon name="add-outline"></ion-icon>
                            </button>
                            <button
                              onClick={() => setexpand(!expand)}
                              style={{
                                display: !expand ? "none" : "block",
                              }}
                            >
                              <ion-icon name="remove-outline"></ion-icon>
                            </button>
                          </div>
                        </button>

                        <ul
                          className={
                            expand
                              ? "sidebar-submenu-category-list active"
                              : "sidebar-submenu-category-list "
                          }
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Shirt</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Blazers & Coat</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">jacket</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Hoodies</p>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                          onClick={() => setexpand1(!expand1)}
                        >
                          <div className="menu-title-flex">
                            <img
                              src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683118159/SVG%20Images/tee_hsaust.svg"
                              alt="footwear"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Summer Wear</p>
                          </div>

                          <div>
                            <button
                              onClick={() => setexpand1(!expand1)}
                              style={{
                                display: expand1 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="add-outline"></ion-icon>
                            </button>
                            <button
                              onClick={() => setexpand1(!expand1)}
                              style={{
                                display: !expand1 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="remove-outline"></ion-icon>
                            </button>
                          </div>
                        </button>

                        <ul
                          className={
                            expand1
                              ? "sidebar-submenu-category-list active"
                              : "sidebar-submenu-category-list "
                          }
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Shirt</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">T-shirt</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Shorts & Frocks</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Sleeveless Tshirt</p>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                          onClick={() => setexpand2(!expand2)}
                        >
                          <div className="menu-title-flex">
                            <img
                              src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683118158/SVG%20Images/shorts_roeevf.svg"
                              alt="clothes"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Casual</p>
                          </div>

                          <div>
                            <button
                              onClick={() => setexpand2(!expand2)}
                              style={{
                                display: expand2 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="add-outline"></ion-icon>
                            </button>
                            <button
                              onClick={() => setexpand2(!expand2)}
                              style={{
                                display: !expand2 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="remove-outline"></ion-icon>
                            </button>
                          </div>
                        </button>

                        <ul
                          className={
                            expand2
                              ? "sidebar-submenu-category-list active"
                              : "sidebar-submenu-category-list "
                          }
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Plain T-shirt</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Shorts</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Oversized Tshirt</p>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                          onClick={() => setexpand3(!expand3)}
                        >
                          <div className="menu-title-flex">
                            <img
                              src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683179347/SVG%20Images/suit_kew0g9.png"
                              alt="perfume"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Formal</p>
                          </div>

                          <div>
                            <button
                              onClick={() => setexpand3(!expand3)}
                              style={{
                                display: expand3 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="add-outline"></ion-icon>
                            </button>
                            <button
                              onClick={() => setexpand3(!expand3)}
                              style={{
                                display: !expand3 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="remove-outline"></ion-icon>
                            </button>
                          </div>
                        </button>

                        <ul
                          className={
                            expand3
                              ? "sidebar-submenu-category-list active"
                              : "sidebar-submenu-category-list "
                          }
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Shirts</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Plain Shirt</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Check Shirts</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Blazers</p>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                          onClick={() => setexpand4(!expand4)}
                        >
                          <div className="menu-title-flex">
                            <img
                              src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683179414/SVG%20Images/costume-party_vfydf1.png"
                              alt="cosmetics"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Party Wear</p>
                          </div>

                          <div>
                            <button
                              onClick={() => setexpand4(!expand4)}
                              style={{
                                display: expand4 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="add-outline"></ion-icon>
                            </button>
                            <button
                              onClick={() => setexpand4(!expand4)}
                              style={{
                                display: !expand4 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="remove-outline"></ion-icon>
                            </button>
                          </div>
                        </button>

                        <ul
                          className={
                            expand4
                              ? "sidebar-submenu-category-list active"
                              : "sidebar-submenu-category-list "
                          }
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Tops</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Women Dress</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Crop Top</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">One Piece</p>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                          onClick={() => setexpand5(!expand5)}
                        >
                          <div className="menu-title-flex">
                            <img
                              src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683179450/SVG%20Images/glasses_x6m0kb.png"
                              alt="glasses"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Glasses</p>
                          </div>

                          <div>
                            <button
                              onClick={() => setexpand5(!expand5)}
                              style={{
                                display: expand5 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="add-outline"></ion-icon>
                            </button>
                            <button
                              onClick={() => setexpand5(!expand5)}
                              style={{
                                display: !expand5 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="remove-outline"></ion-icon>
                            </button>
                          </div>
                        </button>

                        <ul
                          className={
                            expand5
                              ? "sidebar-submenu-category-list active"
                              : "sidebar-submenu-category-list "
                          }
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Sunglasses</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Lenses</p>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                          onClick={() => setexpand6(!expand6)}
                        >
                          <div className="menu-title-flex">
                            <img
                              src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683179498/SVG%20Images/bag_lazd7o.png"
                              alt="bags"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Bags</p>
                          </div>

                          <div>
                            <button
                              onClick={() => setexpand6(!expand6)}
                              style={{
                                display: expand6 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="add-outline"></ion-icon>
                            </button>
                            <button
                              onClick={() => setexpand6(!expand6)}
                              style={{
                                display: !expand6 ? "none" : "block",
                              }}
                            >
                              <ion-icon name="remove-outline"></ion-icon>
                            </button>
                          </div>
                        </button>

                        <ul
                          className={
                            expand6
                              ? "sidebar-submenu-category-list active"
                              : "sidebar-submenu-category-list "
                          }
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Shopping Bag</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Gym Backpack</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Purse</p>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Wallet</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  {/* have to add price filter here */}
                  <div className="product-showcase">
                    <h3 className="showcase-heading">Filters</h3>

                    <div className="showcase-wrapper">
                      <div className="showcase-container">
                        <div className="showcase">
                          <div className="showcase-content">
                            <Typography
                              sx={{ color: "Black", fontWeight: "550" }}
                            >
                              Price
                            </Typography>
                            <div className="price_box">
                              <Slider
                                value={price}
                                onChange={priceHandler}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                                min={0}
                                max={25000}
                                color="secondary"
                                marks={marks}
                                aria-label="Always visible"
                                defaultValue={80}
                                step={10}
                              />
                            </div>
                          </div>
                        </div>

                        <Typography sx={{ color: "Black", fontWeight: "550" }}>
                          Categories
                        </Typography>
                        <ul className="categoryBox">
                          {categories.map((category) => (
                            <li
                              className="category-link"
                              key={category}
                              onClick={() => setcategory(category)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>

                        <Typography sx={{ color: "Black", fontWeight: "550" }}>
                          Ratings Above
                        </Typography>
                        <div className="price_box">
                          <Slider
                            value={Ratings}
                            onChange={(e, newRating) => {
                              setRatings(newRating);
                            }}
                            aria-labelledby="continuous-slider"
                            valueLabelDisplay="auto"
                            min={0}
                            max={5}
                            color="secondary"
                            marks={ratingmarks}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-box">
                  <div className="product-main" style={{ marginTop: "2rem" }}>
                    <h2 className="title">All Products</h2>
                    {filteredProductsCount ? (
                      <div className="product-grid">
                        {products &&
                          products.map((products) => (
                            <Item product={products} key={products._id} />
                          ))}
                      </div>
                    ) : (
                      <div className="no_product">
                        <h1>No such Products</h1>
                        <i className="uil uil-silent-squint"></i>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Fragment>
      )}
      {resultPerPage < count && (
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="First"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )}
      <Testinomial />
      <Footer />
    </Fragment>
  );
};

export default Products;
