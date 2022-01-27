import "./BoardHeader.styles.scss";
import { FaRedoAlt } from "react-icons/fa";

const BoardHeader = ({ currentPlayer, onRedo }) => {
  const handleRedo = () => {
    onRedo();
  };

  return (
    <div className="board-header">
      <section className="board-header_players">
        <span style={{ color: "skyblue" }}>
          <b>X</b>
        </span>
        <span style={{ color: "orange" }}>
          <b>O</b>
        </span>
      </section>

      <span className="board-header_currPlayer">
        <b>{currentPlayer}</b> TURN
      </span>

      <button onClick={handleRedo} className="board-header_redo">
        <FaRedoAlt />
      </button>
    </div>
  );
};

export default BoardHeader;
