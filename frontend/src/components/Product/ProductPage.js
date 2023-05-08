/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../action/productAction";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "../layout/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import "./ProductPage.css";
import Carousel from "react-material-ui-carousel";
import Review from "./Review/Review";
import Header from "../layout/Header/Header";
import Testinomial from "../layout/Footer/Testinomial";
import Footer from "../layout/Footer/Footer";
import SignInHeader from "../layout/Header/SignInHeader";
import { addItemsToCart } from "../../action/cartAction";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
} from "@mui/material";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const SpecificProduct = (props) => {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const [open, setopen] = useState(false);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  let { id } = useParams();
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
  const submitReview = () => {
    const myform = new FormData();
    myform.set("rating", rating);
    myform.set("comment", comment);
    myform.set("productId", id);
    dispatch(newReview(myform));
    setopen(false);
  };

  const submitReviewToggle = () => {
    open ? setopen(false) : setopen(true);
  };
  const { loading, error, product, categoryProduct } = useSelector(
    (state) => state.productDetails
  );

  const {success, error: ReviewError}= useSelector((state)=>state.newReview);
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    toast.success("Items added to cart.");
  };
  // error alert
  useEffect(() => {
    dispatch(getProductDetails(id));

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if(ReviewError)
    {
      toast.error(ReviewError);
      dispatch(clearErrors());
    }
    if(success)
    {
      toast.success("Review Submitted Successfully")
      dispatch({type: NEW_REVIEW_RESET});
    }
  }, [dispatch, error, success, ReviewError]);
  return (
    <>
      <Helmet>
        <title>{props.page} Page</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      {props.isAuthenticated ? (
        <Header
          user={props.user}
          isAuthenticated={props.isAuthenticated}
          flag={true}
        />
      ) : (
        <SignInHeader flag={true} />
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
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
                <Rating
                  size="small"
                  readOnly="true"
                  precision={0.5}
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
              <button className="add__button" onClick={submitReviewToggle}>
                Submit Review
              </button>
              <Dialog
                aria-labelledby="simple-dialog-title"
                open={open}
                onClose={submitReviewToggle}
              >
                <DialogTitle>Submit Review</DialogTitle>
                <DialogContent className="submitDialog">
                  <Rating
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    size="large"
                  />
                  <textarea
                    className="submitDialogTextArea"
                    cols={30}
                    rows={5}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={submitReviewToggle} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={submitReview} color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
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
                          <Rating
                            size="small"
                            readOnly="true"
                            precision={0.5}
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
