import React from "react";
import "./feature.scss";

import CustomButton from "../custom-button/custom-button";

const Feature = ({ title, text }) => (
  <div className="feature">
    <div className="title">{title ? title : null}</div>
    <div className="text">{text ? text : null}</div>
    <CustomButton>{title}</CustomButton>
  </div>
);

export default Feature;
