import React from 'react'
import './Review.css'
import { Rating } from '@mui/material';
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
            <Rating
              size="small"
              readOnly="true"
              precision={0.5}
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