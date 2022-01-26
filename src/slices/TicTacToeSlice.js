import { createSlice } from "@reduxjs/toolkit";
import getWinner from "../helpers/getWinner";

export const slice = createSlice({
  name: "TicTacToe",
  initialState: {
    squares: Array(9).fill(null),
    currentPlayer: "O",
    winner: undefined,
    scores: { x: 0, t: 0, o: 0 }
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
    },
    setWinner: (state, action) => {
      state.winner = action.payload;
    },
    setScores: (state, action) => {
      state.scores = { ...action.payload };
    }
  }
});

export const {
  setNextPlayer,
  checkWinner,
  setSquares,
  setWinner,
  setScores
} = slice.actions;

export const selectCurrentPlayer = (state) => state.TicTacToe.currentPlayer;

export default slice.reducer;
