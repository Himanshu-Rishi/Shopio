import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./Header.css";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../../action/userAction'
const Header = (props) => {
  const {cartItems} = useSelector((state)=>state.cart)
  const history = useNavigate();
  const [keyword, setkeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history(`/products/${keyword}`);
    } else {
      history("/products");
    }
  };
  const dispatch = useDispatch();


// button links
function dashboard() {
  history("/admin/dashboard");
}

function orders() {
  history("/orders");
}
function account() {
  history("/account");
}
function cart() {
  history("/cart");
}
function logoutUser() {
  dispatch(logout());
  toast.success("Logout Successfully");
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
      <Toaster position="top-center" reverseOrder={false} />
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
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  ></IconButton>
                </Tooltip>
              </Box>
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
                <MenuItem onClick={(handleClose, account)}>
                  <Avatar alt="user_profile" src={props.user.avatar.url} />
                  Profile
                </MenuItem>
                <MenuItem onClick={(handleClose, orders)}>
                  <ListItemIcon>
                    <ListAltIcon fontSize="small" />
                  </ListItemIcon>
                  Orders
                </MenuItem>
                {props.user.role === "admin" && (
                  <MenuItem onClick={(handleClose, dashboard)}>
                    <ListItemIcon>
                      <AdminPanelSettingsIcon fontSize="small" />
                    </ListItemIcon>
                    Admin
                  </MenuItem>
                )}
                <MenuItem onClick={(handleClose, logoutUser)}>
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  Logout
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
                      <a href="/products/dekstop">
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
                      <a href="/products/women">
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
                      <a href="/products/smart">
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
        <button className="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>

          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="heart-outline"></ion-icon>

          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="grid-outline"></ion-icon>
        </button>
      </div>

      <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button className="menu-close-btn" data-mobile-menu-close-btn>
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
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Men's</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
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
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Women's</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
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
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Jewelry</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
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
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Perfume</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
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
          <ul className="menu-category-list">
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Language</p>

                <ion-icon
                  name="caret-back-outline"
                  className="caret-back"
                ></ion-icon>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="/" className="submenu-title">
                    English
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="/" className="submenu-title">
                    Espa&ntilde;ol
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="/" className="submenu-title">
                    Fren&ccedil;h
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Currency</p>
                <ion-icon
                  name="caret-back-outline"
                  className="caret-back"
                ></ion-icon>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="/" className="submenu-title">
                    USD &dollar;
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="/" className="submenu-title">
                    EUR &euro;
                  </a>
                </li>
              </ul>
            </li>
          </ul>

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

export default Header;
