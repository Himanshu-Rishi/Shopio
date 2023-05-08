import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Item = (props) => {
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
          {props.product.images.length > 1 ? (
            <img
              src={props.product.images[1].url}
              alt="Mens Winter Leathers Jackets"
              width="300"
              className="product-img hover"
            />
          ) : (
            <img
              src={props.product.images[0].url}
              alt="Mens Winter Leathers Jackets"
              width="300"
              className="product-img hover"
            />
          )}
          {props.product.tag === "new" ? (
            <p className="showcase-badge angle pink">new</p>
          ) : null}
          {props.product.tag === "sale" ? (
            <p className="showcase-badge angle black">sale</p>
          ) : null}
          {props.product.tag === "15" ? (
            <p className="showcase-badge angle green">{props.product.tag}%</p>
          ) : null}

          <div className="showcase-actions">
            <button className="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div className="showcase-content">
          <p className="showcase-category">{props.product.category}</p>

          <h3 className="showcase-title">{props.product.name}</h3>
          <div
            className="showcase-rating"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Rating
              size="small"
              readOnly="true"
              precision={0.5}
              value={props.product.ratings}
            />
            <span style={{ color: "#707070", fontSize: "0.7rem" }}>
              ({props.product.numOfReviews} Reviews)
            </span>
          </div>

          <div className="price-box">
            <p className="price">₹{props.product.price}</p>
            <del>₹{props.product.orignalPrice}</del>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
