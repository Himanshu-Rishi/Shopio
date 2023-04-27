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
const Products = (props) => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const [currentPage, setcurrentPage] = useState(1);
  const [price, setprice] = useState([0, 25000]);
  const [category, setcategory] = useState("")
  const [Ratings, setRatings] = useState(0)

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
    "Tops"
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
          <main>
            <div className="product-container">
              <div className="container">
                <div className="sidebar  has-scrollbar" data-mobile-menu>
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
                        >
                          <div className="menu-title-flex">
                            <img
                              src="./assets/images/icons/dress.svg"
                              alt="clothes"
                              width="20"
                              height="20"
                              className="menu-title-img"
                            />

                            <p className="menu-title">Clothes</p>
                          </div>

                          <div>
                            <ion-icon
                              name="add-outline"
                              className="add-icon"
                            ></ion-icon>
                            <ion-icon
                              name="remove-outline"
                              className="remove-icon"
                            ></ion-icon>
                          </div>
                        </button>

                        <ul
                          className="sidebar-submenu-category-list"
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Shirt</p>
                              <data
                                value="300"
                                className="stock"
                                title="Available Stock"
                              >
                                300
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">shorts & jeans</p>
                              <data
                                value="60"
                                className="stock"
                                title="Available Stock"
                              >
                                60
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">jacket</p>
                              <data
                                value="50"
                                className="stock"
                                title="Available Stock"
                              >
                                50
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">dress & frock</p>
                              <data
                                value="87"
                                className="stock"
                                title="Available Stock"
                              >
                                87
                              </data>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                        >
                          <div className="menu-title-flex">
                            <img
                              src="./assets/images/icons/shoes.svg"
                              alt="footwear"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Footwear</p>
                          </div>

                          <div>
                            <ion-icon
                              name="add-outline"
                              className="add-icon"
                            ></ion-icon>
                            <ion-icon
                              name="remove-outline"
                              className="remove-icon"
                            ></ion-icon>
                          </div>
                        </button>

                        <ul
                          className="sidebar-submenu-category-list"
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Sports</p>
                              <data
                                value="45"
                                className="stock"
                                title="Available Stock"
                              >
                                45
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Formal</p>
                              <data
                                value="75"
                                className="stock"
                                title="Available Stock"
                              >
                                75
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Casual</p>
                              <data
                                value="35"
                                className="stock"
                                title="Available Stock"
                              >
                                35
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Safety Shoes</p>
                              <data
                                value="26"
                                className="stock"
                                title="Available Stock"
                              >
                                26
                              </data>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                        >
                          <div className="menu-title-flex">
                            <img
                              src="./assets/images/icons/jewelry.svg"
                              alt="clothes"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Jewelry</p>
                          </div>

                          <div>
                            <ion-icon
                              name="add-outline"
                              className="add-icon"
                            ></ion-icon>
                            <ion-icon
                              name="remove-outline"
                              className="remove-icon"
                            ></ion-icon>
                          </div>
                        </button>

                        <ul
                          className="sidebar-submenu-category-list"
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Earrings</p>
                              <data
                                value="46"
                                className="stock"
                                title="Available Stock"
                              >
                                46
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Couple Rings</p>
                              <data
                                value="73"
                                className="stock"
                                title="Available Stock"
                              >
                                73
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Necklace</p>
                              <data
                                value="61"
                                className="stock"
                                title="Available Stock"
                              >
                                61
                              </data>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                        >
                          <div className="menu-title-flex">
                            <img
                              src="./assets/images/icons/perfume.svg"
                              alt="perfume"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Perfume</p>
                          </div>

                          <div>
                            <ion-icon
                              name="add-outline"
                              className="add-icon"
                            ></ion-icon>
                            <ion-icon
                              name="remove-outline"
                              className="remove-icon"
                            ></ion-icon>
                          </div>
                        </button>

                        <ul
                          className="sidebar-submenu-category-list"
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Clothes Perfume</p>
                              <data
                                value="12"
                                className="stock"
                                title="Available Stock"
                              >
                                12 pcs
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Deodorant</p>
                              <data
                                value="60"
                                className="stock"
                                title="Available Stock"
                              >
                                60 pcs
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">jacket</p>
                              <data
                                value="50"
                                className="stock"
                                title="Available Stock"
                              >
                                50 pcs
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">dress & frock</p>
                              <data
                                value="87"
                                className="stock"
                                title="Available Stock"
                              >
                                87 pcs
                              </data>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                        >
                          <div className="menu-title-flex">
                            <img
                              src="./assets/images/icons/cosmetics.svg"
                              alt="cosmetics"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Cosmetics</p>
                          </div>

                          <div>
                            <ion-icon
                              name="add-outline"
                              className="add-icon"
                            ></ion-icon>
                            <ion-icon
                              name="remove-outline"
                              className="remove-icon"
                            ></ion-icon>
                          </div>
                        </button>

                        <ul
                          className="sidebar-submenu-category-list"
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Shampoo</p>
                              <data
                                value="68"
                                className="stock"
                                title="Available Stock"
                              >
                                68
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Sunscreen</p>
                              <data
                                value="46"
                                className="stock"
                                title="Available Stock"
                              >
                                46
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Body Wash</p>
                              <data
                                value="79"
                                className="stock"
                                title="Available Stock"
                              >
                                79
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Makeup Kit</p>
                              <data
                                value="23"
                                className="stock"
                                title="Available Stock"
                              >
                                23
                              </data>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                        >
                          <div className="menu-title-flex">
                            <img
                              src="./assets/images/icons/glasses.svg"
                              alt="glasses"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Glasses</p>
                          </div>

                          <div>
                            <ion-icon
                              name="add-outline"
                              className="add-icon"
                            ></ion-icon>
                            <ion-icon
                              name="remove-outline"
                              className="remove-icon"
                            ></ion-icon>
                          </div>
                        </button>

                        <ul
                          className="sidebar-submenu-category-list"
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Sunglasses</p>
                              <data
                                value="50"
                                className="stock"
                                title="Available Stock"
                              >
                                50
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Lenses</p>
                              <data
                                value="48"
                                className="stock"
                                title="Available Stock"
                              >
                                48
                              </data>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="sidebar-menu-category">
                        <button
                          className="sidebar-accordion-menu"
                          data-accordion-btn
                        >
                          <div className="menu-title-flex">
                            <img
                              src="./assets/images/icons/bag.svg"
                              alt="bags"
                              className="menu-title-img"
                              width="20"
                              height="20"
                            />

                            <p className="menu-title">Bags</p>
                          </div>

                          <div>
                            <ion-icon
                              name="add-outline"
                              className="add-icon"
                            ></ion-icon>
                            <ion-icon
                              name="remove-outline"
                              className="remove-icon"
                            ></ion-icon>
                          </div>
                        </button>

                        <ul
                          className="sidebar-submenu-category-list"
                          data-accordion
                        >
                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Shopping Bag</p>
                              <data
                                value="62"
                                className="stock"
                                title="Available Stock"
                              >
                                62
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Gym Backpack</p>
                              <data
                                value="35"
                                className="stock"
                                title="Available Stock"
                              >
                                35
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Purse</p>
                              <data
                                value="80"
                                className="stock"
                                title="Available Stock"
                              >
                                80
                              </data>
                            </a>
                          </li>

                          <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                              <p className="product-name">Wallet</p>
                              <data
                                value="75"
                                className="stock"
                                title="Available Stock"
                              >
                                75
                              </data>
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

                          <Typography
                            sx={{ color: "Black", fontWeight: "550" }}
                          >
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
                        <h1>No Products</h1>
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
    </Fragment>
  );
};

export default Products;
