import { configureStore } from "@reduxjs/toolkit";
import TicTacToeReducer from "./slices/TicTacToeSlice";

export default configureStore({
  reducer: {
    TicTacToe: TicTacToeReducer
  }
});
