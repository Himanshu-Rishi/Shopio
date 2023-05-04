import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import LoginIcon from "@mui/icons-material/Login";
import "./Header.css";
import { useSelector } from "react-redux";
const SignInHeader = (props) => {
  const { cartItems } = useSelector((state) => state.cart);
  const history = useNavigate();
  const [keyword, setkeyword] = useState("");
  const [expand, setexpand] = useState(false);
  const [expand2, setexpand2] = useState(false);
  const [expand3, setexpand3] = useState(false);
  const [expand4, setexpand4] = useState(false);
  const [toggle, settoggle] = useState(false);
    const [another__anchorEl, setanother__AnchorEl] = React.useState(null);
    const another__open = Boolean(another__anchorEl);
    const another__handleClick = (event) => {
      setanother__AnchorEl(event.currentTarget);
    };
    const another__handleClose = () => {
      setanother__AnchorEl(null);
    };
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history(`/products/${keyword}`);
    } else {
      history("/products");
    }
  };

  // button links
  function signin() {
    history("/login");
  }

  function home() {
    history("/");
  }
  
  function cart() {
    history("/cart");
  }
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <a href="/" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="/" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="/" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="/" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>

          <div className="header-alert-news">
            <p>
              <b>Free Shipping </b>
              This Week Order Over - ₹500
            </p>
          </div>

          <div className="header-top-actions">
            <select name="theme">
              <option value="en-US">Spring Green</option>
              <option value="es-ES">Lavender Blue</option>
            </select>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <a href="/" className="header-logo">
            <h1 className="website__logo">Shopio</h1>
          </a>

          <div className="header-search-container">
            <form onSubmit={searchSubmitHandler}>
              <input
                type="search"
                name="search"
                className="search-field"
                placeholder="Enter your product name..."
                onChange={(e) => setkeyword(e.target.value)}
              />

              <button type="submit" value="Search" className="search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </form>
          </div>

          <div className="header-user-actions">
            <button className="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span className="count">0</span>
            </button>

            <button className="action-btn" onClick={cart}>
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span className="count">{cartItems.length}</span>
            </button>

            <button className="action-btn" onClick={handleClick}>
              <ion-icon name="person-outline"></ion-icon>
            </button>
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              ></Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={(handleClose, signin)}>
                  <ListItemIcon>
                    <LoginIcon fontSize="small" />
                  </ListItemIcon>
                  Login
                </MenuItem>
              </Menu>
            </React.Fragment>
          </div>
        </div>
      </div>
      {props.flag && (
        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <a href="/" className="menu-title">
                  Home
                </a>
              </li>

              <li className="menu-category">
                <a href="/" className="menu-title">
                  Categories
                </a>

                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/">Electronics</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Desktop</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Laptop</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Camera</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Tablet</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Headphone</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116447/category%20images/electronics-banner-1_bzguco.jpg"
                          alt="headphone collection"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>

                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/">Men's</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Formal</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Casual</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Sports</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Jacket</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Sunglasses</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116446/category%20images/mens-banner_niguha.jpg"
                          alt="men's fashion"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>

                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/">Women's</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Formal</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Casual</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Perfume</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Cosmetics</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Bags</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116447/category%20images/womens-banner_zqq1em.jpg"
                          alt="women's fashion"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>

                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/">Electronics</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Smart Watch</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Smart TV</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Keyboard</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Mouse</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">Microphone</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="/">
                        <img
                          src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683116447/category%20images/electronics-banner-2_tv10fm.jpg"
                          alt="mouse collection"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-category">
                <a href="/" className="menu-title">
                  Men's
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/">Shirt</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Shorts & Jeans</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Safety Shoes</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Wallet</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="/" className="menu-title">
                  Women's
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/">Dress & Frock</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Earrings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Necklace</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Makeup Kit</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="/" className="menu-title">
                  Jewelry
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/">Earrings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Couple Rings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Necklace</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Bracelets</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="/" className="menu-title">
                  Perfume
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/">Clothes Perfume</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Deodorant</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Flower Fragrance</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="/">Air Freshener</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="/" className="menu-title">
                  Blog
                </a>
              </li>

              <li className="menu-category">
                <a href="/" className="menu-title">
                  Hot Offers
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}

      <div className="mobile-bottom-navigation">
        <button
          className="action-btn"
          data-mobile-menu-open-btn
          onClick={() => settoggle(!toggle)}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button className="action-btn" onClick={cart}>
          <ion-icon name="bag-handle-outline"></ion-icon>

          <span className="count">{cartItems.length}</span>
        </button>

        <button className="action-btn" onClick={home}>
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="heart-outline"></ion-icon>

          <span className="count">0</span>
        </button>

        <button className="action-btn" onClick={another__handleClick}>
          <ion-icon name="person-outline"></ion-icon>
        </button>
        <React.Fragment>
          <Menu
            anchorEl={another__anchorEl}
            id="account-menu"
            open={another__open}
            onClose={another__handleClose}
            onClick={another__handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: -6,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={(another__handleClose, signin)}>
              <ListItemIcon>
                <LoginIcon fontSize="small" />
              </ListItemIcon>
              Login
            </MenuItem>
          </Menu>
        </React.Fragment>
      </div>

      <nav
        className={
          toggle
            ? `mobile-navigation-menu active has-scrollbar`
            : `mobile-navigation-menu has-scrollbar`
        }
        data-mobile-menu
      >
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button
            className="menu-close-btn"
            data-mobile-menu-close-btn
            onClick={() => settoggle(false)}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <a href="/" className="menu-title">
              Home
            </a>
          </li>

          <li className="menu-category">
            <button
              className="accordion-menu"
              data-accordion-btn
              onClick={() => setexpand(!expand)}
            >
              <p className="menu-title">Men's</p>

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
                  ? "submenu-category-list active"
                  : "submenu-category-list "
              }
              data-accordion
            >
              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Shirt
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Shorts & Jeans
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Safety Shoes
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Wallet
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button
              className="accordion-menu"
              data-accordion-btn
              onClick={() => setexpand2(!expand2)}
            >
              <p className="menu-title">Women's</p>

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
                  ? "submenu-category-list active"
                  : "submenu-category-list "
              }
              data-accordion
            >
              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Dress & Frock
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Earrings
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Necklace
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Makeup Kit
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button
              className="accordion-menu"
              data-accordion-btn
              onClick={() => setexpand3(!expand3)}
            >
              <p className="menu-title">Jewelry</p>

              <div>
                <button
                  onClick={() => setexpand3(!expand2)}
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
              data-accordion
              className={
                expand3
                  ? "submenu-category-list active"
                  : "submenu-category-list "
              }
            >
              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Earrings
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Couple Rings
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Necklace
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Bracelets
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button
              className="accordion-menu"
              data-accordion-btn
              onClick={() => setexpand4(!expand4)}
            >
              <p className="menu-title">Perfume</p>

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
                  ? "submenu-category-list active"
                  : "submenu-category-list "
              }
              data-accordion
            >
              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Clothes Perfume
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Deodorant
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Flower Fragrance
                </a>
              </li>

              <li className="submenu-category">
                <a href="/" className="submenu-title">
                  Air Freshener
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <a href="/" className="menu-title">
              Blog
            </a>
          </li>

          <li className="menu-category">
            <a href="/" className="menu-title">
              Hot Offers
            </a>
          </li>
        </ul>

        <div className="menu-bottom">
          <ul className="menu-social-container">
            <li>
              <a href="/" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="/" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="/" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="/" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default SignInHeader;
