import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <div>
        <p1>
          <strong>Trade Assurance</strong>
        </p1>
        <p2> protects your Alibaba.com orders|</p2>
      </div>

      <div className="paymentTypes-section">
        <div>
          <p3>
            <strong> Payments: </strong>
          </p3>
        </div>
        <div className="option1">
          <p>Visa</p>
        </div>

        <div className="option2">
          <p>Mastercard</p>
        </div>

        <div className="option3">
          <p>PayPal</p>
        </div>
      </div>

      <div>
        <p4> Alibaba.com Logistics Inspection Solutions</p4>
      </div>
    </div>
  );
}
export default Footer;
