import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, handleClick, important, ...otherProps }) => (
  <button
    className={`${important ? "important" : ""} custom-button`}
    //onClick={handleClick}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
