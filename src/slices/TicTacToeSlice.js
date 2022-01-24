import { createSlice } from "@reduxjs/toolkit";
import getWinner from "../helpers/getWinner";

export const slice = createSlice({
  name: "TicTacToe",
  initialState: {
    squares: Array(9).fill(null),
    currentPlayer: "O",
    winner: null
  },
  reducers: {
    setNextPlayer: (state) => {
      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    },
    checkWinner: (state) => {
      state.winner = getWinner(state.squares);
    },
    setSquares: (state, action) => {
      state.squares = action.payload;
    }
  }
});

export const { setNextPlayer, checkWinner, setSquares } = slice.actions;

export const selectCurrentPlayer = (state) => state.TicTacToe.currentPlayer;

export default slice.reducer;
