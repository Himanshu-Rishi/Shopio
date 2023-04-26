import React from 'react'
import './Review.css'
import ReactStars from "react-rating-stars-component"
const Review = (props) => {
  return (
    <>
      <div className="showcase review__container">
        <div className="testimonial-card">
          <i
            className="uil uil-comment"
            style={{ width: "80", height: "80" }}
          ></i>
          <div className="review__box">
            <p className="testimonial-name review__name">{props.review.name}</p>
            <ReactStars
              edit={false}
              color={"lightgray"}
              activeColor={"rgb(246, 163, 85)"}
              size={17}
              isHalf={true}
              value={props.review.rating}
            />
          </div>
          <p className="testimonial-desc">{props.review.comment}</p>
        </div>
      </div>
    </>
  );
}

export default Review