import React, { useEffect, useState } from "react";
import IntroDetails from "./Components/IntroDetails/IntroDetails";
import Image from "./Components/Image/Image";
import SupplierInfo from "./Components/SupplierInfo/SupplierInfo";
import "./App.css";

function App() {
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    getProductInfo();
  }, []);

  const getProductInfo = async () => {
    var response = await fetch("https://fe-assignment.vaimo.net/").then(
      (resp) => resp.json()
    );
    setProductDetails(response);
  };

  console.log(productDetails);
  return (
    <div className="App">
      {productDetails !== undefined ? (
        <Image style="droneImg" url={productDetails.product.gallery[0].main} />
      ) : (
        <h1>Loading Image...</h1>
      )}
      <IntroDetails productDetails={productDetails} />
      <SupplierInfo data={productDetails} />
    </div>
  );
}

export default App;
