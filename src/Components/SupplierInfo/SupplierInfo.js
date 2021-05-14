import React from "react";
import "./SupplierInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faEnv } from "@fortawesome/free-solid-svg-icons";

function SupplierInfo(props) {
  return (
    <div className="supplierInfo">
      {props.data !== undefined ? (
        <>
          <div className="supplierInfo-header">
            <div className="left-section">
              <p>Ship to {props.data.product.shipping.method.country}</p>
              <p>by {props.data.product.shipping.method.title}</p>
            </div>
            <div className="price">
              <p>R {props.data.product.shipping.method.cost.value}</p>
            </div>
          </div>
          <p>
            Lead Time{" "}
            <strong>{props.data.product.shipping.lead_time.value}</strong>
            <FontAwesomeIcon icon={faInfoCircle} className="infoIcon" />
          </p>
          <p>
            Shipping time{" "}
            <strong>
              {props.data.product.shipping.method.shipping_time.value}
            </strong>
            <FontAwesomeIcon icon={faInfoCircle} className="infoIcon" />
          </p>
          <div className="button-section">
            <button className="btn-inquire btn-primary">
              Login to Purchase
            </button>
            <button className="btn-inquire btn-secondary">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} className="emailIcon" />{" "}
              Contact the Supplier
            </button>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default SupplierInfo;
