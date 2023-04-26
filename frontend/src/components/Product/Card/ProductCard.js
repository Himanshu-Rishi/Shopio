import Carousel from "react-material-ui-carousel";
import ReactStars from "react-rating-stars-component";
import "./ProductCard.css";
import Review from "../Review/Review";
const ProductPage = ({ product }) => {
  console.log(product.ratings);
  return (
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
              MRP: <del>₹2075.00</del>
            </span>

            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button className="quantity__button">-</button>
                <input className="quantity__input" value="1" type="number" />
                <button className="quantity__button">+</button>
              </div>
              <button
                disabled={product.Stock < 1 ? true : false}
                className="add__button"
              >
                Add to Cart
              </button>
            </div>

            <p>
              Status:
              <b
                className={product.Stock < 1 ? "redColor" : "greenColor"}
                style={{
                  color: product.Stock < 1 ? "#c16469" : "#46c288",
                }}
              >
                {product.Stock < 1 ? " OutOfStock" : " InStock"}
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
    </>
  );
};

export default ProductPage;
