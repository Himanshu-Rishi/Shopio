import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const Item = (props) => {
  const options = {
    edit: false,
    color: "lightgray",
    activeColor: "rgb(246, 163, 85)",
    size: 17,
    value: props.product.ratings,
    isHalf: true,
  };
  return (
    <Link to={`/product/${props.product._id}`} target="_blank">
      <div className="showcase">
        <div className="showcase-banner">
          <img
            src={props.product.images[0].url}
            alt="Mens Winter Leathers Jackets"
            width="300"
            className="product-img default"
          />
          <img
            src="./assets/images/products/jacket-4.jpg"
            alt="Mens Winter Leathers Jackets"
            width="300"
            className="product-img hover"
          />

          <p className="showcase-badge angle green">15%</p>
          {/* <p className="showcase-badge angle black">sale</p> */}
          {/* <p className="showcase-badge angle pink">new</p> */}

          <div className="showcase-actions">
            <button className="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button className="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button className="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div className="showcase-content">
          <p className="showcase-category">Jacket</p>

          <h3 className="showcase-title">{props.product.name}</h3>
          <div
            className="showcase-rating"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ReactStars {...options} />
            <span style={{ color: "#707070", fontSize: "0.7rem" }}>
              ({props.product.numOfReviews} Reviews)
            </span>
          </div>

          <div className="price-box">
            <p className="price">₹{props.product.price}</p>
            <del>$75.00</del>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
