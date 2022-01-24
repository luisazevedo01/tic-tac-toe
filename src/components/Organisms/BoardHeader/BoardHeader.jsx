import "./BoardHeader.styles.scss";

const BoardHeader = ({ currentPlayer }) => {
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

      <button>Back</button>
    </div>
  );
};

export default BoardHeader;
