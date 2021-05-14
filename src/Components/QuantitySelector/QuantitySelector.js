import React from "react";
import "./QuantitySelector.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function QuantitySelector(props) {
  return (
    <div className="row">
      <p className="options">{props.options}</p>
      <div className="quantity-options">
        <p>{props.product}</p>
      </div>
      <div className="quantity-price">
        <p>{props.price}</p>
      </div>

      <div className="quantity-selector">
        <button className="btn minus-btn">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <div className="amount">
          <p>0</p>
        </div>

        <button className="btn plus-btn">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;
