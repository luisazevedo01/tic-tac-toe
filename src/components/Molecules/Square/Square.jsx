import "./Square.styles.scss";

const Square = ({ value, onClick }) => (
  <button
    className="square"
    onClick={onClick}
    style={{ color: value === "X" ? "skyblue" : "orange" }}
  >
    {value}
  </button>
);

export default Square;
