import React from 'react';
import './Review.css'; 

const Review = ({ review }) => {
  return (
    <li className="review">
      <strong>Rating:</strong> {review.rating}
      <p>{review.review_text}</p>
    </li>
  );
};

export default Review;
