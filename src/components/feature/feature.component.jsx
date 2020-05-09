import React from "react";
import "./feature.scss";

import CustomButton from "../custom-button/custom-button.component";

const Feature = () => (
  <div className="feature">
    <div className="title">Title</div>
    <div className="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis
      posuere purus, ac placerat metus efficitur a. Aenean aliquam, purus sit
      amet sagittis sodales, justo enim semper lectus, eget consequat nibh sem
      ac ipsum.
    </div>
    <CustomButton>Joaca</CustomButton>
  </div>
);

export default Feature;
