import { Fragment } from "react";
import { Provider } from "react-redux";
import TicTacToe from "./components/Templates/TicTacToe/TicTacToe";
import store from "./store";
import "./styles.scss";

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <TicTacToe />
      </Provider>
    </Fragment>
  );
}
