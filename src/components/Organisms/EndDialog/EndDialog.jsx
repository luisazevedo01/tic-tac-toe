import "./EndDialog.styles.scss";

const EndDialog = ({ winner, ...otherProps }) => {
  const onRestart = () => {
    otherProps.handleClose();
  };

  const onNext = () => {
    otherProps.handleClose(true);
  };

  return (
    <div className="end-dialog">
      {winner === "T" ? (
        <h1>It's a tie.</h1>
      ) : (
        <section>
          <h3>YOU WON!</h3>
          <h1 style={{ color: winner === "X" ? "skyblue" : "orange" }}>
            <strong>{winner}</strong> takes the round{" "}
          </h1>
        </section>
      )}
      <section className="end-dialog_footer">
        <button onClick={onRestart}>Restart</button>
        <button onClick={onNext}>Next Round</button>
      </section>
    </div>
  );
};

export default EndDialog;
