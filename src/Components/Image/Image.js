import React from "react";
import "./Image.css";

function Image(props) {
  return (
    <div>
      <img
        src={props.url !== undefined ? props.url : ""}
        alt="Drone Image"
        className={props.style}
      />
    </div>
  );
}

export default Image;
