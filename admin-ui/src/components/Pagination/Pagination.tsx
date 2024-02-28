import { FC, useContext } from "react";
import { RoundBtn } from "../AppAtoms";

import "./Pagination.css";
import { AppContextP } from "../../AppContext/AppContext";

const pages = [1, 2, 3, 4, 5];
const Pagination: FC<{
  pageSetter: (pageNo: number, move: number) => void;
}> = ({ pageSetter }) => {
  const { currPage } = useContext(AppContextP);

  const stepForward = (
    <span className="material-symbols-outlined">chevron_right</span>
  );

  const doubleStepForward = (
    <span className="material-symbols-outlined">
      keyboard_double_arrow_right
    </span>
  );

  const stepBack = (
    <span className="material-symbols-outlined">chevron_left</span>
  );

  const doubleStepBack = (
    <span className="material-symbols-outlined">
      keyboard_double_arrow_left
    </span>
  );

  return (
    <div className="pagination">
      <RoundBtn
        onClick={() => pageSetter(0, -2)}
        disabled={currPage + -2 <= 1}
        isSelected={false}
      >
        {doubleStepBack}
      </RoundBtn>
      <RoundBtn
        onClick={() => pageSetter(0, -1)}
        disabled={currPage + -1 < 1}
        isSelected={false}
      >
        {stepBack}
      </RoundBtn>
      {pages.map((val) => (
        <RoundBtn
          disabled={false}
          onClick={() => pageSetter(val, 0)}
          isSelected={currPage === val}
        >
          <span>{val}</span>
        </RoundBtn>
      ))}
      <RoundBtn
        onClick={() => pageSetter(0, 1)}
        disabled={currPage + 1 > 5}
        isSelected={false}
      >
        {stepForward}
      </RoundBtn>
      <RoundBtn
        onClick={() => pageSetter(0, 2)}
        disabled={currPage + 1 > 5}
        isSelected={false}
      >
        {doubleStepForward}
      </RoundBtn>
    </div>
  );
};

export default Pagination;
