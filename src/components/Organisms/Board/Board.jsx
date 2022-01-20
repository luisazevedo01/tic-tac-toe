import { useState } from "react";
import Square from "../../Molecules/Square/Square";
import "./Board.styles.scss";

const Board = () => {
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const copySquares = squares.slice();
    copySquares[i] = currentPlayer;
    setSquares(copySquares);
    setCurrentPlayer((curr) => (curr === "X" ? "O" : "X"));
  };

  const renderSquare = (i) => {
    return <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <section className="board">
      {squares.map((el, index) => renderSquare(index))}
    </section>
  );
};

export default Board;
