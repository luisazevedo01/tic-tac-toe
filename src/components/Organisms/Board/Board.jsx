import { Fragment } from "react";
import Square from "../../Molecules/Square/Square";
import "./Board.styles.scss";
/** Board
 * @param {Array} squares
 * @param {Function} handleClick
 */
const Board = ({ squares, handleClick }) => {
  /** Handler of a play */
  const handleBoardClick = (i) => {
    handleClick(i);
  };

  /** Draws a square on the board */
  const renderSquare = (i) => {
    return (
      <Square key={i} value={squares[i]} onClick={() => handleBoardClick(i)} />
    );
  };

  return (
    <Fragment>
      <section className="board">
        {squares.map((el, index) => renderSquare(index))}
      </section>
    </Fragment>
  );
};

export default Board;
