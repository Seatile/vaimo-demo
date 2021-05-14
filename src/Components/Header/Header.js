import React from "react";
import Rating from "../Rating/Rating";
import Tab from "../Tab/Tab";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <Tab />
      {props.data !== undefined ? (
        <>
          <h1>{props.data.product.name}</h1>
          <Rating data={props.data.product} />
        </>
      ) : null}
    </div>
  );
}
export default Header;
