import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkWinner,
  selectCurrentPlayer,
  setNextPlayer,
  setSquares
} from "../../../slices/TicTacToeSlice";
import Board from "../../Organisms/Board/Board";
import BoardHeader from "../../Organisms/BoardHeader/BoardHeader";
import EndDialog from "../../Organisms/EndDialog/EndDialog";

export default function TicTacToe() {
  /** List of all the squares on the board */
  const squares = useSelector((state) => state.TicTacToe.squares);
  /** Winner of the game */
  const winner = useSelector((state) => state.TicTacToe.winner);
  /** Player with the move */
  const currentPlayer = useSelector(selectCurrentPlayer);
  /** Dispatch function from redux store */
  const dispatch = useDispatch();

  /** Handler of a play */
  const handlePlay = (i) => {
    const copySquares = squares.slice();

    if (copySquares[i] || winner) return;
    copySquares[i] = currentPlayer;

    dispatch(setSquares(copySquares));
    dispatch(setNextPlayer());
    dispatch(checkWinner());
  };

  return (
    <Fragment>
      {winner && <EndDialog winner={winner} />}
      <BoardHeader currentPlayer={currentPlayer} />
      <Board squares={squares} handleClick={handlePlay} />
    </Fragment>
  );
}
