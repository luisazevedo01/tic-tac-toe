import "./EndDialog.styles.scss";

const EndDialog = ({ winner }) => {
  return (
    <div className="end-dialog">
      <h3>YOU WON!</h3>
      <h1 style={{ color: winner === "X" ? "skyblue" : "orange" }}>
        <strong>{winner}</strong> takes the round{" "}
      </h1>
      <section className="end-dialog_footer">
        <button>Quit</button>
        <button>Next Round</button>
      </section>
    </div>
  );
};

export default EndDialog;
