import React from 'react'
import "./Footer.css";
const Footer = (props) => {
  return (
    <>
      {props.flag && (
      <section className="footer__section newsletter">
        <div className="footer__container">
          <div className="newsletter-card">
            <h2 className="card-title">Subscribe Newsletter</h2>

            <p className="card-text">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>

            <form action="" className="card-form">
              <div className="input-wrapper">
                <ion-icon name="mail-outline"></ion-icon>

                <input
                  type="email"
                  name="emal"
                  placeholder="Enter your email"
                  required
                  className="footer__input-field"
                />
              </div>

              <button
                type="submit"
                className="footer__btn footer__btn-primary w-100"
              >
                <span>Subscribe</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </form>
          </div>
        </div>
      </section>
      )}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer__container">
            <div className="footer-brand">
              <a
                href="/"
                className="logo footer-list-title"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1682849027/Logo/Shopio_Logo_kk6db2.png"
                  style={{ width: "55px" }}
                  alt="Casmart logo"
                />
                <p style={{ marginLeft: "6px" }}>Shopio</p>
              </a>

              <p className="footer-text">
                Casmart is a fashion theme for presents a complete wardrobe of
                uniquely crafted Ethnic Wear, Casuals, Edgy Denims, &
                Accessories inspired from the most contemporary
              </p>

              <ul className="social-list">
                <li>
                  <a href="/" className="footer__social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="/" className="footer__social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="/" className="footer__social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="/" className="footer__social-link">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Information</p>
              </li>

              <li>
                <a href="/" className="footer-link">
                  About Company
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Payment Type
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Awards Winning
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  World Media Partner
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Become an Agent
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Refund Policy
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Category</p>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Handbags & Wallets
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Women's Clothing
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Plus Sizes
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Complete Your Look
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Baby Corner
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Man & Woman Shoe
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Help & Support</p>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Dealers & Agents
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  FAQ Information
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Return Policy
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  Order Tranking
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  List of Shops
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer__container">
            <p className="copyright">
              &copy; 2022 <a href="/">Shopio</a>. All Rights Reserved
            </p>

            <ul className="footer-bottom-list">
              <li>
                <a href="/" className="footer-bottom-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/" className="footer-bottom-link">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="/" className="footer-bottom-link">
                  Sitemap
                </a>
              </li>
            </ul>

            <div className="mader">
              <p className="mader-title">Made by Himanshu Rishi</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer