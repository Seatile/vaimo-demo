import React, { useState, useEffect } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import "./QuantitySection.css";

function QuantitySection(props) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (props.data !== undefined) {
      const sample = Object.entries(props.data.product.options);
      setOptions(sample);
    }
  }, []);

  console.log("props data: ", props.data);
  return (
    <div className="quantity-section">
      {options.length > 0
        ? options.map((item, index) => {
            return (
              <QuantitySelector
                key={index}
                product={item[1].label}
                price={index == 2 ? "R 788.50" : `R ${item[1].price.value}`}
                options={index == 0 ? "Options" : null}
              />
            );
          })
        : null}
    </div>
  );
}

export default QuantitySection;
