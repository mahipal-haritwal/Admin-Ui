import { FC, useContext } from "react";
import { RoundBtn } from "../AppAtoms";

import "./Pagination.css";
import { AppContextP } from "../../AppContext/AppContext";

const Pagination: FC<{
  pageSetter: (pageNo: number, move: number) => void;
  pages: number[];
}> = ({ pageSetter, pages }) => {
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

  const lastPage = pages[pages.length - 1];

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
        disabled={currPage + 1 > lastPage}
        isSelected={false}
      >
        {stepForward}
      </RoundBtn>
      <RoundBtn
        onClick={() => pageSetter(0, 2)}
        disabled={currPage + 2 > lastPage}
        isSelected={false}
      >
        {doubleStepForward}
      </RoundBtn>
    </div>
  );
};

export default Pagination;

// 20000+6000 , 10000, 10000, 41600, 8000,4000,7000,7000,
//emis => 11000, 4000,5000
