import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkWinner,
  selectCurrentPlayer,
  setNextPlayer,
  setScores,
  setSquares,
  setWinner
} from "../../../slices/TicTacToeSlice";
import Board from "../../Organisms/Board/Board";
import BoardFooter from "../../Organisms/BoardFooter/BoardFooter";
import BoardHeader from "../../Organisms/BoardHeader/BoardHeader";
import EndDialog from "../../Organisms/EndDialog/EndDialog";

export default function TicTacToe() {
  /** List of all the squares on the board */
  const squares = useSelector((state) => state.TicTacToe.squares);
  /** Winner of the game */
  const winner = useSelector((state) => state.TicTacToe.winner);
  /** Players scores*/
  const scores = useSelector((state) => state.TicTacToe.scores);
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

  const closeEndDialog = (next) => {
    if (next) {
      const currScores = { ...scores };
      switch (winner) {
        case "O": {
          currScores.o = currScores.o + 1;
          break;
        }
        case "X": {
          currScores.x = currScores.x + 1;
          break;
        }
        default: {
          currScores.t = currScores.x + 1;
        }
      }
      dispatch(setScores(currScores));
    }
    dispatch(setSquares(Array(9).fill(null)));
    dispatch(setWinner(undefined));
  };

  return (
    <Fragment>
      {winner && <EndDialog winner={winner} handleClose={closeEndDialog} />}
      <BoardHeader currentPlayer={currentPlayer} />
      <Board squares={squares} handleClick={handlePlay} />
      <BoardFooter scores={scores} />
    </Fragment>
  );
}
