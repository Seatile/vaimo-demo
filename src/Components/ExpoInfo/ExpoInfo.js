import React from "react";
import "./ExpoInfo.css";
import logo from "../../../src/Assets/Logo.png";

function ExpoInfo() {
  return (
    <div className="expo-section">
      <img src={logo} alt="Logo" className="logo" />

      <div className="expo-content">
        <p>• Free shipping (up to $40)</p>
        <p className="expo-paragraph">• On-time delivery guaranteed</p>
      </div>
    </div>
  );
}
export default ExpoInfo;
