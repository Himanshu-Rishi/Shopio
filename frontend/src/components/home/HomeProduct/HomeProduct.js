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
                        src="https://www.linkpicture.com/q/shirt-1_1.jpg"
                        alt="shirt"
                        width="75"
                        height="75"
                        className="showcase-img"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/product/64564acfb9d4e1f2cbcaf243">
                        <h4 className="showcase-title">Men's Stylish Shirt</h4>
                      </a>

                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>₹2000</del>
                        <p className="price">₹1250</p>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a
                      href="/product/64565246b9d4e1f2cbcaf37f"
                      className="showcase-img-box"
                    >
                      <img
                        src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683378205/products/jacket-3_jzp3q1.jpg"
                        alt="jacket"
                        width="75"
                        height="75"
                        className="showcase-img"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/product/64565246b9d4e1f2cbcaf37f">
                        <h4 className="showcase-title">Men's Leather Jacket</h4>
                      </a>

                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>₹1999</del>
                        <p className="price">₹3000</p>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a
                      href="/product/64565180b9d4e1f2cbcaf32f"
                      className="showcase-img-box"
                    >
                      <img
                        src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683378195/products/party-wear-1_fqjg28.jpg"
                        alt="footwear"
                        width="75"
                        height="75"
                        className="showcase-img"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/product/64565180b9d4e1f2cbcaf32f">
                        <h4 className="showcase-title">
                          Women's Stylish Footwear
                        </h4>
                      </a>

                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>₹2999</del>
                        <p className="price">₹5000</p>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/" className="showcase-img-box">
                      <img
                        src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683377644/products/watch-2_nvckgf.jpg"
                        alt="smart watches"
                        width="75"
                        height="75"
                        className="showcase-img"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/product/64564eacb9d4e1f2cbcaf275">
                        <h4 className="showcase-title">Men's Smart Watch</h4>
                      </a>

                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>₹2000</del>
                        <p className="price">₹1250</p>
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
                <h2 className="title">new arrivals</h2>

                <div className="showcase-wrapper has-scrollbar">
                  <div className="showcase-container">
                    <div className="showcase">
                      <a
                        href="/product/64565be45dfede3d2f716f6d"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116709/One%20image%20Products/clothes-1_tgroni.jpg"
                          alt="relaxed short full sleeve t-shirt"
                          width="70"
                          className="showcase-img"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/64565be45dfede3d2f716f6d">
                          <h4 className="showcase-title">
                            Relaxed Short full Sleeve T-Shirt
                          </h4>
                        </a>

                        <a href="/products/tops" className="showcase-category">
                          Clothes
                        </a>

                        <div className="price-box">
                          <p className="price">₹1999</p>
                          <del>₹2000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/64565ba45dfede3d2f716f69"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116710/One%20image%20Products/clothes-2_xbbnq3.jpg"
                          alt="girls pink embro design top"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/64565ba45dfede3d2f716f69">
                          <h4 className="showcase-title">
                            Girls pnk Embro design Top
                          </h4>
                        </a>

                        <a href="/products/tops" className="showcase-category">
                          Clothes
                        </a>

                        <div className="price-box">
                          <p className="price">₹999</p>
                          <del>₹1000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/64564fffb9d4e1f2cbcaf2ba"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683378071/products/clothes-3_jgb2es.jpg"
                          alt="black floral wrap midi skirt"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/products/bottomwear">
                          <h4 className="showcase-title">
                            Black Floral Wrap Midi Skirt
                          </h4>
                        </a>

                        <a
                          href="/product/64564fffb9d4e1f2cbcaf2ba"
                          className="showcase-category"
                        >
                          Clothes
                        </a>

                        <div className="price-box">
                          <p className="price">₹1050</p>
                          <del>₹2000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/64564acfb9d4e1f2cbcaf243"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683511257/products/shirt-1_tqujwo.jpg"
                          alt="pure garment dyed cotton shirt"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/64564acfb9d4e1f2cbcaf243">
                          <h4 className="showcase-title">
                            Pure Garment Dyed Cotton Shirt
                          </h4>
                        </a>

                        <a href="/products/men" className="showcase-category">
                          Mens Fashion
                        </a>

                        <div className="price-box">
                          <p className="price">₹1250</p>
                          <del>₹2000</del>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-container">
                    <div className="showcase">
                      <a
                        href="/product/645650b6b9d4e1f2cbcaf2bf"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683378190/products/jacket-5_fsuyyz.jpg"
                          alt="men yarn fleece full-zip jacket"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/645650b6b9d4e1f2cbcaf2bf">
                          <h4 className="showcase-title">
                            MEN Yarn Fleece Full-Zip Jacket
                          </h4>
                        </a>

                        <a
                          href="/products/jacket"
                          className="showcase-category"
                        >
                          Winter wear
                        </a>

                        <div className="price-box">
                          <p className="price">₹2199</p>
                          <del>₹4000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/64565246b9d4e1f2cbcaf37f"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683378205/products/jacket-4_abrcr9.jpg"
                          alt="mens winter leathers jackets"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/64565246b9d4e1f2cbcaf37f">
                          <h4 className="showcase-title">
                            Mens Winter Leathers Jackets
                          </h4>
                        </a>

                        <a
                          href="/products/jacket"
                          className="showcase-category"
                        >
                          Winter wear
                        </a>

                        <div className="price-box">
                          <p className="price">₹1999</p>
                          <del>₹3000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/645651f3b9d4e1f2cbcaf355"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683378200/products/jacket-2_ojmw7e.jpg"
                          alt="mens winter leathers jackets"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/645651f3b9d4e1f2cbcaf355">
                          <h4 className="showcase-title">
                            Mens Winter Leathers Jackets
                          </h4>
                        </a>

                        <a
                          href="/products/jacket"
                          className="showcase-category"
                        >
                          Jackets
                        </a>

                        <div className="price-box">
                          <p className="price">₹1999</p>
                          <del>₹3000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/6456549a87a78b78669a2996"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116710/One%20image%20Products/sports-1_uccdft.jpg"
                          alt="better basics french terry sweatshorts"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/6456549a87a78b78669a2996">
                          <h4 className="showcase-title">
                            Better Basics French Terry Sweatshorts
                          </h4>
                        </a>

                        <a
                          href="/products/shorts"
                          className="showcase-category"
                        >
                          Shorts
                        </a>

                        <div className="price-box">
                          <p className="price">₹999</p>
                          <del>₹2000</del>
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
                      <a
                        href="/product/64585aaec5a1ece7e7789afa"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116711/One%20image%20Products/sports-5_eowudq.jpg"
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

                        <a href="/products/shoes" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">₹2999</p>
                          <del>₹5000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/6456578787a78b78669a29d0"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116711/One%20image%20Products/sports-2_xb8zqi.jpg"
                          alt="trekking & running shoes - black"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/6456578787a78b78669a29d0">
                          <h4 className="showcase-title">
                            Trekking & Running Shoes - black
                          </h4>
                        </a>

                        <a href="/products/shoes" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">₹3999</p>
                          <del>₹8000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/64565180b9d4e1f2cbcaf32f"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683378195/products/party-wear-1_fqjg28.jpg"
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

                        <a
                          href="/product/64565180b9d4e1f2cbcaf32f"
                          className="showcase-category"
                        >
                          Party wear
                        </a>

                        <div className="price-box">
                          <p className="price">₹2999</p>
                          <del>₹5000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/6456531fb9d4e1f2cbcaf46f"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683378221/products/shoe-1_ikjzpp.jpg"
                          alt="leather shoes"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/6456531fb9d4e1f2cbcaf46f">
                          <h4 className="showcase-title">Leather Shoes</h4>
                        </a>

                        <a href="/products/shoes" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">₹1499</p>
                          <del>₹3000</del>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-container">
                    <div className="showcase">
                      <a
                        href="/product/64585ce77a2620544691e28c"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116711/One%20image%20Products/sports-6_xfbbml.jpg"
                          alt="air tekking shoes - white"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/64585ce77a2620544691e28c">
                          <h4 className="showcase-title">
                            Air Trekking Shoes - white
                          </h4>
                        </a>

                        <a href="/products/shoes" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">₹2999</p>
                          <del>₹5000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/6456540687a78b78669a28fe"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683378226/products/shoe-5_cebcwp.jpg"
                          alt="Boot With Suede Detail"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/6456540687a78b78669a28fe">
                          <h4 className="showcase-title">
                            Boot With Suede Detail
                          </h4>
                        </a>

                        <a href="/products/shoes" className="showcase-category">
                          boots
                        </a>

                        <div className="price-box">
                          <p className="price">₹13499</p>
                          <del>₹15000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/64564dcfb9d4e1f2cbcaf263"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683377386/products/shoe-2_1_i5nav2.jpg"
                          alt="men's leather formal wear shoes"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/64564dcfb9d4e1f2cbcaf263">
                          <h4 className="showcase-title">
                            Casual Men's Brown shoes
                          </h4>
                        </a>

                        <a href="/products/shoes" className="showcase-category">
                          formal
                        </a>

                        <div className="price-box">
                          <p className="price">₹1250</p>
                          <del>₹2400</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/6456531fb9d4e1f2cbcaf46f"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683378221/products/shoe-1_ikjzpp.jpg"
                          alt="casual men's brown shoes"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/6456531fb9d4e1f2cbcaf46f">
                          <h4 className="showcase-title">
                            Men's Leather Formal Wear shoes
                          </h4>
                        </a>

                        <a href="/products/shoes" className="showcase-category">
                          Casual
                        </a>

                        <div className="price-box">
                          <p className="price">₹1499</p>
                          <del>₹3000</del>
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
                      <a
                        href="/product/64564f61b9d4e1f2cbcaf28b"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683377991/products/watch-3_yevg18.jpg"
                          alt="pocket watch leather pouch"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/64564f61b9d4e1f2cbcaf28b">
                          <h4 className="showcase-title">
                            Pocket Watch Leather Pouch
                          </h4>
                        </a>

                        <a href="/products/watch" className="showcase-category">
                          Watches
                        </a>

                        <div className="price-box">
                          <p className="price">₹8050</p>
                          <del>₹17000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/64565c825dfede3d2f716fdd"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116709/One%20image%20Products/jewellery-3_mpuija.jpg"
                          alt="silver deer heart necklace"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/64565c825dfede3d2f716fdd">
                          <h4 className="showcase-title">
                            Silver Deer Heart Necklace
                          </h4>
                        </a>

                        <a
                          href="/products/jewelry"
                          className="showcase-category"
                        >
                          Jewellery
                        </a>

                        <div className="price-box">
                          <p className="price">₹19999</p>
                          <del>₹20000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/64565cad5dfede3d2f716fe1"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116710/One%20image%20Products/perfume_srtt46.jpg"
                          alt="titan 100 ml womens perfume"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/64565cad5dfede3d2f716fe1">
                          <h4 className="showcase-title">
                            Titan 100 Ml Womens Perfume
                          </h4>
                        </a>

                        <a
                          href="/products/perfume"
                          className="showcase-category"
                        >
                          Perfume
                        </a>

                        <div className="price-box">
                          <p className="price">₹1999</p>
                          <del>₹2000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/64565c225dfede3d2f716f71"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116709/One%20image%20Products/belt_ssma50.jpg"
                          alt="men's leather reversible belt"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/64565c225dfede3d2f716f71">
                          <h4 className="showcase-title">
                            Men's Leather Reversible Belt
                          </h4>
                        </a>

                        <a href="/products/belt" className="showcase-category">
                          Belt
                        </a>

                        <div className="price-box">
                          <p className="price">₹1999</p>
                          <del>₹2000</del>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-container">
                    <div className="showcase">
                      <a
                        href="/product/645861f9105e2fac32daa90f"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116709/One%20image%20Products/jewellery-2_ckumnn.jpg"
                          alt="platinum zircon classic ring"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/645861f9105e2fac32daa90f">
                          <h4 className="showcase-title">
                            platinum Zircon Classic Ring
                          </h4>
                        </a>

                        <a href="/" className="showcase-category">
                          jewellery
                        </a>

                        <div className="price-box">
                          <p className="price">₹7999</p>
                          <del>₹15000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/64564eacb9d4e1f2cbcaf275"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116712/One%20image%20Products/watch-1_kz3rnj.jpg"
                          alt="smart watche vital plus"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/64564eacb9d4e1f2cbcaf275">
                          <h4 className="showcase-title">
                            Smart watche Vital Plus
                          </h4>
                        </a>

                        <a href="/products/watch" className="showcase-category">
                          Watches
                        </a>

                        <div className="price-box">
                          <p className="price">₹3250</p>
                          <del>₹7000</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/645657f587a78b78669a2a62"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116710/One%20image%20Products/shampoo_lamua7.jpg"
                          alt="shampoo conditioner packs"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/645657f587a78b78669a2a62">
                          <h4 className="showcase-title">
                            shampoo conditioner packs
                          </h4>
                        </a>

                        <a
                          href="/products/shampoo"
                          className="showcase-category"
                        >
                          cosmetics
                        </a>

                        <div className="price-box">
                          <p className="price">₹999</p>
                          <del>₹1200</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a
                        href="/product/6456591e5dfede3d2f716e19"
                        className="showcase-img-box"
                      >
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116710/One%20image%20Products/jewellery-1_ojht9r.jpg"
                          alt="rose gold peacock earrings"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="/product/6456591e5dfede3d2f716e19">
                          <h4 className="showcase-title">
                            Rose Gold Peacock Earrings
                          </h4>
                        </a>

                        <a href="/products/jewelry" className="showcase-category">
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
                        src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116710/One%20image%20Products/shampoo_lamua7.jpg"
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

                      <a href="/product/645657f587a78b78669a2a62">
                        <h3 className="showcase-title">
                          shampoo, conditioner & facewash packs
                        </h3>
                      </a>

                      <p className="showcase-desc">
                        Transform your hair with our advanced formula shampoo.
                        Crafted with the finest ingredients.
                      </p>

                      <div className="price-box">
                        <p className="price">₹999</p>

                        <del>₹1200</del>
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
                        src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116710/One%20image%20Products/jewellery-1_ojht9r.jpg"
                        alt="Rose Gold diamonds Earring"
                        className="showcase-img"
                      />
                    </div>

                    <div className="showcase-content">
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <h3 className="showcase-title">
                        <a
                          href="/product/6456591e5dfede3d2f716e19"
                          className="showcase-title"
                        >
                          Rose Gold diamonds Earring
                        </a>
                      </h3>

                      <p className="showcase-desc">
                        From stunning diamond necklaces to elegant pearl
                        earrings.
                      </p>

                      <div className="price-box">
                        <p className="price">₹8999</p>
                        <del>₹12000</del>
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
