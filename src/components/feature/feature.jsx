import React from "react";
import "./feature.scss";
import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button";

const Feature = ({ title, text, a }) => (
  <div className="feature">
    <div className="title">{title ? title : null}</div>
    <div className="text">{text ? text : null}</div>
    <Link to={a}>
      <CustomButton>{title}</CustomButton>
    </Link>
  </div>
);

export default Feature;
