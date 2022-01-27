import "./BoardFooter.styles.scss";
import { BiRightArrow } from "react-icons/bi";
/**
 * BoardFooter
 * @param {object} scores
 */
const BoardFooter = ({ scores }) => {
  return (
    <section className="board-footer">
      <span className="board-footer_o-wins">
        O<BiRightArrow />
        <strong>{scores.o}</strong>
      </span>
      <span>
        Ties <BiRightArrow />
        <strong>{scores.t}</strong>
      </span>
      <span className="board-footer_x-wins">
        X<BiRightArrow />
        <strong>{scores.x}</strong>
      </span>
    </section>
  );
};

export default BoardFooter;
