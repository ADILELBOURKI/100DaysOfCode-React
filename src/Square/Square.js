import React from "react";
import "./square.css";
const Square = ({ onClick, style }) => {
  return <div className=".square-color " onClick={onClick} style={style}></div>;
};

export default Square;
