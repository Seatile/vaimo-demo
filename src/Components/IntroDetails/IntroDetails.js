import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PriceRange from "../PriceRange/PriceRange";
import QuantitySection from "../QuantitySection/QuantitySection";

function IntroDetails(props) {
  return (
    <div>
      {props.productDetails !== undefined ? (
        <>
          <Header data={props.productDetails} />
          <PriceRange data={props.productDetails} />
          <QuantitySection data={props.productDetails} />
        </>
      ) : (
        <h1>Loading.....</h1>
      )}
      <Footer />
    </div>
  );
}
export default IntroDetails;
