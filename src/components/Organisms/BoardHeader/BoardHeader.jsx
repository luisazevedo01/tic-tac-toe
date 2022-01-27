import "./BoardHeader.styles.scss";
import { FaRedoAlt } from "react-icons/fa";

/**
 * BoardHeader
 * @param {string} currentPlayer
 * @param {Function} onRedo
 */
const BoardHeader = ({ currentPlayer, onRedo }) => {
  /** Handles the redo click */
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
