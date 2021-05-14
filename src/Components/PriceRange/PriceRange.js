import React from "react";
import ExpoInfo from "../ExpoInfo/ExpoInfo";
import "./PriceRange.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function PriceRange(props) {
  return (
    <div>
      <div className="price-range">
        <div className="main-price-section">
          <p className="main-price">
            <strong>R78.50 - R895.31</strong>
          </p>
          <p className="muted-text default-text">/ Option | </p>
          <p className="default-text">
            <strong>2 Options</strong>{" "}
          </p>
          <p className="muted-text default-text"> (Min Order)</p>
        </div>

        <div>
          <p className="striked-text muted-text default-text">
            <strong> R78.50-R895.31</strong>
          </p>
        </div>
      </div>
      <ExpoInfo />

      <div className="discount">
        <p className="discount-amount">
          <strong>
            {props.data !== undefined
              ? props.data.product.discount.amount
              : null}
            OFF
          </strong>
        </p>
        <p> Discount ends in</p>
        <p className="deadline">
          <FontAwesomeIcon icon={faClock} />
          {props.data !== undefined ? (
            <i>{props.data.product.discount.end_date}</i>
          ) : null}
        </p>
      </div>
    </div>
  );
}
export default PriceRange;
