import React from "react";
import { RoundBtn } from "../AppAtoms";

import "./Pagination.css";

const Pagination = () => {
  const pages = ["1", "2", "3", "4", "5"];

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
      <RoundBtn onClick={() => console.log("clicked", "d")} isSelected={false}>
        {doubleStepForward}
      </RoundBtn>
      <RoundBtn onClick={() => console.log("clicked", "s")} isSelected={false}>
        {stepForward}
      </RoundBtn>
      {pages.map((val) => (
        <RoundBtn
          onClick={() => console.log("clicked", val)}
          isSelected={false}
        >
          <span>{val}</span>
        </RoundBtn>
      ))}
      <RoundBtn onClick={() => console.log("clicked", "b")} isSelected={false}>
        {stepBack}
      </RoundBtn>
      <RoundBtn onClick={() => console.log("clicked", "bb")} isSelected={false}>
        {doubleStepBack}
      </RoundBtn>
    </div>
  );
};

export default Pagination;
