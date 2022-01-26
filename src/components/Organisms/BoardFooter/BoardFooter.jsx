import "./BoardFooter.styles.scss";

const BoardFooter = ({ scores }) => {
  return (
    <section className="board-footer">
      <span className="board-footer_o-wins">
        O (orange)<strong>{scores.o}</strong>
      </span>
      <span>
        Ties <strong>{scores.t}</strong>
      </span>
      <span className="board-footer_x-wins">
        X (blue)<strong>{scores.x}</strong>
      </span>
    </section>
  );
};

export default BoardFooter;
