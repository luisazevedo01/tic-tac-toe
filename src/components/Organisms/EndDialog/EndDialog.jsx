import "./EndDialog.styles.scss";
/**
 * EndDialog
 * @param {string} winner
 * @param {object} handleClose
 */
const EndDialog = ({ winner, handleClose }) => {
  /** Handles restart click */
  const onRestart = () => {
    handleClose();
  };

  /** Handles next round click */
  const onNext = () => {
    handleClose(true);
  };

  return (
    <div className="end-dialog">
      {winner === "T" ? (
        <h1>It's a tie.</h1>
      ) : (
        <section>
          <h3>Congrats! YOU WON!</h3>
          <h1 style={{ color: winner === "X" ? "skyblue" : "orange" }}>
            <strong className="end-dialog_winner">{winner}</strong> takes the
            round
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
