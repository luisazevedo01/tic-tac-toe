import React from "react";
import "./Square.styles.scss";
/**
 * Square
 * @param {string} value
 * @param {Function} onClick
 */
const Square = ({ value, onClick }) => (
  <button
    className="square"
    onClick={onClick}
    style={{ color: value === "X" ? "skyblue" : "orange" }}
  >
    {value}
  </button>
);

export default React.memo(Square);
