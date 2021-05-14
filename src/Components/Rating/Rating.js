import React from "react";
import "./Rating.css";

function Rating(props) {
  return (
    <div className="rating-section">
      {props.data !== undefined ? (
        <p>
          * * * * * <strong>5.0</strong> {props.data.reviews.count}
          <strong>{props.data.reviews.total_buyers} buyers</strong>
        </p>
      ) : null}
    </div>
  );
}
export default Rating;
