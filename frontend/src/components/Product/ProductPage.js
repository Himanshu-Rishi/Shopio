/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../action/productAction";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "../layout/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
import "./ProductPage.css";
import Carousel from "react-material-ui-carousel";
import Review from "./Review/Review";
import Header from "../layout/Header/Header";
import Testinomial from "../layout/Footer/Testinomial";
import Footer from "../layout/Footer/Footer";
import SignInHeader from "../layout/Header/SignInHeader";
import { addItemsToCart } from "../../action/cartAction";

const SpecificProduct = (props) => {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const decreaseQuantity = () => {
    let qty = quantity - 1;
    if (qty <= 1) {
      qty = 1;
    }
    setquantity(qty);
  };
  const increaseQuantity = () => {
    let qty = quantity + 1;
    if (qty >= product.stock) {
      qty = product.stock;
    }
    setquantity(qty);
  };
  const { loading, error, product, categoryProduct } = useSelector(
    (state) => state.productDetails
  );
  let { id } = useParams();

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    toast.success("Items added to cart.");
  };
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);

  // error alert
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error]);
  return (
    <>
      <Helmet>
        <title>{props.page} Page</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      {loading ? (
        <Loader />
      ) : (
        <>
          {props.isAuthenticated ? (
            <Header user={props.user} isAuthenticated={props.isAuthenticated} />
          ) : (
            <SignInHeader />
          )}
          <div className="ProductDetails container">
            <Carousel className="carousel">
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    src={item.url}
                    key={item.url}
                    alt={`${i} Slid`}
                    className="product__img"
                  />
                ))}
            </Carousel>
            <div className="text__container">
              <div className="DetailsBlock-1">
                <h1 className="product__name">{product.name}</h1>
                <p>Product #{product._id}</p>
              </div>
              <div className="DetailsBlock-2">
                <ReactStars
                  edit={false}
                  color={"lightgray"}
                  activeColor={"rgb(246, 163, 85)"}
                  size={17}
                  isHalf={true}
                  value={product.ratings}
                />
                <span>({product.numOfReviews} Reviews)</span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <span>
                  MRP: <del>₹{product.orignalPrice}</del>
                </span>

                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button
                      onClick={decreaseQuantity}
                      className="quantity__button"
                    >
                      -
                    </button>
                    <input
                      className="quantity__input"
                      value={quantity}
                      type="number"
                      readOnly={true}
                    />
                    <button
                      onClick={increaseQuantity}
                      className="quantity__button"
                    >
                      +
                    </button>
                  </div>
                  <button
                    disabled={product.stock < 1 ? true : false}
                    className="add__button"
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b
                    className={product.stock < 1 ? "redColor" : "greenColor"}
                    style={{
                      color: product.stock < 1 ? "#c16469" : "#46c288",
                    }}
                  >
                    {product.stock < 1 ? " Out Of Stock" : " In Stock"}
                  </b>
                </p>
              </div>
              <div className="description_box">
                <span className="description__span">Description:</span>
                <p className="description__text">{product.description}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="reviewDetails product-main container">
            <h2 className="title">Reviews</h2>

            <div className="product-grid">
              {product.reviews &&
                product.reviews.map((r) => <Review review={r} key={r.user} />)}
            </div>
            <div className="review__button">
              <button className="add__button">Submit Review</button>
            </div>
          </div>
          <hr />
          <div className="category container">
            <h2 className="title">Recommended Products</h2>
            <div className="container">
              <div className="category-item-container has-scrollbar">
                {categoryProduct &&
                  categoryProduct.map((product) => (
                    <Link to={`/product/${product._id}`} target="_blank">
                      <div className="category-item category_box">
                        <img
                          src={product.images[0].url}
                          alt={product.images[0].public_id}
                          width="100"
                        />

                        <div className="category-content-box">
                          <div className="category-content-flex">
                            <h3 className="category-item-title">
                              {product.name}
                            </h3>
                          </div>
                          <ReactStars
                            edit={false}
                            color={"lightgray"}
                            activeColor={"rgb(246, 163, 85)"}
                            size={17}
                            isHalf={true}
                            value={product.ratings}
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
      <Testinomial />
      <Footer />
    </>
  );
};

export default SpecificProduct;
