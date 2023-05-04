import React, { useState } from "react";
import Item from "./MainProductCard";

const Product = (props) => {
  const [expand, setexpand] = useState(false);
  const [expand1, setexpand1] = useState(false);
  const [expand2, setexpand2] = useState(false);
  const [expand3, setexpand3] = useState(false);
  const [expand4, setexpand4] = useState(false);
  const [expand5, setexpand5] = useState(false);
  const [expand6, setexpand6] = useState(false);
  return (
    <>
      <div className="product-container">
        <div className="container">
          <div className="sidebar  has-scrollbar" data-mobile-menu>
            <div className="sidebar-category">
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

            <div className="product-showcase">
              <h3 className="showcase-heading">best sellers</h3>

              <div className="showcase-wrapper">
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="/" className="showcase-img-box">
                      <img
                        src="./assets/images/products/1.jpg"
                        alt="baby fabric shoes"
                        width="75"
                        height="75"
                        className="showcase-img"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/">
                        <h4 className="showcase-title">baby fabric shoes</h4>
                      </a>

                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$5.00</del>
                        <p className="price">$4.00</p>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/" className="showcase-img-box">
                      <img
                        src="./assets/images/products/2.jpg"
                        alt="men's hoodies t-shirt"
                        className="showcase-img"
                        width="75"
                        height="75"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/">
                        <h4 className="showcase-title">
                          men's hoodies t-shirt
                        </h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$17.00</del>
                        <p className="price">$7.00</p>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/" className="showcase-img-box">
                      <img
                        src="./assets/images/products/3.jpg"
                        alt="girls t-shirt"
                        className="showcase-img"
                        width="75"
                        height="75"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/">
                        <h4 className="showcase-title">girls t-shirt</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$5.00</del>
                        <p className="price">$3.00</p>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/" className="showcase-img-box">
                      <img
                        src="./assets/images/products/4.jpg"
                        alt="woolen hat for men"
                        className="showcase-img"
                        width="75"
                        height="75"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/">
                        <h4 className="showcase-title">woolen hat for men</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$15.00</del>
                        <p className="price">$12.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-box">
            <div className="product-minimal">
              <div className="product-showcase">
                <h2 className="title"> </h2>

                <div className="showcase-wrapper has-scrollbar">
                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/clothes-1.jpg"
                          alt="relaxed short full sleeve t-shirt"
                          width="70"
                          className="showcase-img"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Relaxed Short full Sleeve T-Shirt
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Clothes
                        </a>

                        <div className="price-box">
                          <p className="price">$45.00</p>
                          <del>$12.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/clothes-2.jpg"
                          alt="girls pink embro design top"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Girls pnk Embro design Top
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Clothes
                        </a>

                        <div className="price-box">
                          <p className="price">$61.00</p>
                          <del>$9.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/clothes-3.jpg"
                          alt="black floral wrap midi skirt"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Black Floral Wrap Midi Skirt
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Clothes
                        </a>

                        <div className="price-box">
                          <p className="price">$76.00</p>
                          <del>$25.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shirt-1.jpg"
                          alt="pure garment dyed cotton shirt"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Pure Garment Dyed Cotton Shirt
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Mens Fashion
                        </a>

                        <div className="price-box">
                          <p className="price">$68.00</p>
                          <del>$31.00</del>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jacket-5.jpg"
                          alt="men yarn fleece full-zip jacket"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            MEN Yarn Fleece Full-Zip Jacket
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Winter wear
                        </a>

                        <div className="price-box">
                          <p className="price">$61.00</p>
                          <del>$11.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jacket-1.jpg"
                          alt="mens winter leathers jackets"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Mens Winter Leathers Jackets
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Winter wear
                        </a>

                        <div className="price-box">
                          <p className="price">$32.00</p>
                          <del>$20.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jacket-3.jpg"
                          alt="mens winter leathers jackets"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Mens Winter Leathers Jackets
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Jackets
                        </a>

                        <div className="price-box">
                          <p className="price">$50.00</p>
                          <del>$25.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shorts-1.jpg"
                          alt="better basics french terry sweatshorts"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Better Basics French Terry Sweatshorts
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Shorts
                        </a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$10.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-showcase">
                <h2 className="title">Trending</h2>

                <div className="showcase-wrapper  has-scrollbar">
                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/sports-1.jpg"
                          alt="running & trekking shoes - white"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Running & Trekking Shoes - White
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">$49.00</p>
                          <del>$15.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/sports-2.jpg"
                          alt="trekking & running shoes - black"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Trekking & Running Shoes - black
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">$78.00</p>
                          <del>$36.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/party-wear-1.jpg"
                          alt="womens party wear shoes"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Womens Party Wear Shoes
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Party wear
                        </a>

                        <div className="price-box">
                          <p className="price">$94.00</p>
                          <del>$42.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/sports-3.jpg"
                          alt="sports claw women's shoes"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Sports Claw Women's Shoes
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">$54.00</p>
                          <del>$65.00</del>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/sports-6.jpg"
                          alt="air tekking shoes - white"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Air Trekking Shoes - white
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">$52.00</p>
                          <del>$55.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shoe-3.jpg"
                          alt="Boot With Suede Detail"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Boot With Suede Detail
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          boots
                        </a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$30.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shoe-1.jpg"
                          alt="men's leather formal wear shoes"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Men's Leather Formal Wear shoes
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          formal
                        </a>

                        <div className="price-box">
                          <p className="price">$56.00</p>
                          <del>$78.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shoe-2.jpg"
                          alt="casual men's brown shoes"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Casual Men's Brown shoes
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Casual
                        </a>

                        <div className="price-box">
                          <p className="price">$50.00</p>
                          <del>$55.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-showcase">
                <h2 className="title">Top Rated</h2>

                <div className="showcase-wrapper  has-scrollbar">
                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/watch-3.jpg"
                          alt="pocket watch leather pouch"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Pocket Watch Leather Pouch
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Watches
                        </a>

                        <div className="price-box">
                          <p className="price">$50.00</p>
                          <del>$34.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jewellery-3.jpg"
                          alt="silver deer heart necklace"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Silver Deer Heart Necklace
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Jewellery
                        </a>

                        <div className="price-box">
                          <p className="price">$84.00</p>
                          <del>$30.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/perfume.jpg"
                          alt="titan 100 ml womens perfume"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Titan 100 Ml Womens Perfume
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Perfume
                        </a>

                        <div className="price-box">
                          <p className="price">$42.00</p>
                          <del>$10.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/belt.jpg"
                          alt="men's leather reversible belt"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Men's Leather Reversible Belt
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Belt
                        </a>

                        <div className="price-box">
                          <p className="price">$24.00</p>
                          <del>$10.00</del>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jewellery-2.jpg"
                          alt="platinum zircon classic ring"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            platinum Zircon Classic Ring
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          jewellery
                        </a>

                        <div className="price-box">
                          <p className="price">$62.00</p>
                          <del>$65.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/watch-1.jpg"
                          alt="smart watche vital plus"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Smart watche Vital Plus
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          Watches
                        </a>

                        <div className="price-box">
                          <p className="price">$56.00</p>
                          <del>$78.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shampoo.jpg"
                          alt="shampoo conditioner packs"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            shampoo conditioner packs
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          cosmetics
                        </a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$30.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="/" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jewellery-1.jpg"
                          alt="rose gold peacock earrings"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/">
                          <h4 className="showcase-title">
                            Rose Gold Peacock Earrings
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          jewellery
                        </a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$30.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* - PRODUCT FEATURED */}

            <div className="product-featured">
              <h2 className="title">Deal of the day</h2>

              <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <div className="showcase-banner">
                      <img
                        src="./assets/images/products/shampoo.jpg"
                        alt="shampoo, conditioner & facewash packs"
                        className="showcase-img"
                      />
                    </div>

                    <div className="showcase-content">
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <a href="/">
                        <h3 className="showcase-title">
                          shampoo, conditioner & facewash packs
                        </h3>
                      </a>

                      <p className="showcase-desc">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                        dolor sit amet consectetur Lorem ipsum dolor
                      </p>

                      <div className="price-box">
                        <p className="price">$150.00</p>

                        <del>$200.00</del>
                      </div>

                      <button className="add-cart-btn">add to cart</button>

                      <div className="showcase-status">
                        <div className="wrapper">
                          <p>
                            already sold: <b>20</b>
                          </p>

                          <p>
                            available: <b>40</b>
                          </p>
                        </div>

                        <div className="showcase-status-bar"></div>
                      </div>

                      <div className="countdown-box">
                        <p className="countdown-desc">
                          Hurry Up! Offer ends in:
                        </p>

                        <div className="countdown">
                          <div className="countdown-content">
                            <p className="display-number">360</p>

                            <p className="display-text">Days</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">24</p>
                            <p className="display-text">Hours</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">59</p>
                            <p className="display-text">Min</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">00</p>
                            <p className="display-text">Sec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="showcase-container">
                  <div className="showcase">
                    <div className="showcase-banner">
                      <img
                        src="./assets/images/products/jewellery-1.jpg"
                        alt="Rose Gold diamonds Earring"
                        className="showcase-img"
                      />
                    </div>

                    <div className="showcase-content">
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <h3 className="showcase-title">
                        <a href="/" className="showcase-title">
                          Rose Gold diamonds Earring
                        </a>
                      </h3>

                      <p className="showcase-desc">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                        dolor sit amet consectetur Lorem ipsum dolor
                      </p>

                      <div className="price-box">
                        <p className="price">$1990.00</p>
                        <del>$2000.00</del>
                      </div>

                      <button className="add-cart-btn">add to cart</button>

                      <div className="showcase-status">
                        <div className="wrapper">
                          <p>
                            {" "}
                            already sold: <b>15</b>{" "}
                          </p>

                          <p>
                            {" "}
                            available: <b>40</b>{" "}
                          </p>
                        </div>

                        <div className="showcase-status-bar"></div>
                      </div>

                      <div className="countdown-box">
                        <p className="countdown-desc">
                          Hurry Up! Offer ends in:
                        </p>

                        <div className="countdown">
                          <div className="countdown-content">
                            <p className="display-number">360</p>
                            <p className="display-text">Days</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">24</p>
                            <p className="display-text">Hours</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">59</p>
                            <p className="display-text">Min</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">00</p>
                            <p className="display-text">Sec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* - PRODUCT GRID */}

            <div className="product-main">
              <h2 className="title">New Products</h2>

              <div className="product-grid">
                {props.product &&
                  props.product.map((product) => (
                    <Item product={product} key={product._id} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
