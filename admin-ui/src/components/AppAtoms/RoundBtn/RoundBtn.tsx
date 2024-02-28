import React, { FC } from "react";
import "./RoundBtn.css";

const RoundBtn: FC<{
  onClick: () => void;
  children: any;
  isSelected: boolean;
}> = ({ onClick, children, isSelected }) => {
  const className = `round-btn ${isSelected ? "in-focus" : ""}`;

  return (
    <div className={className.trim()} onClick={onClick}>
      {children}
    </div>
  );
};

export default RoundBtn;
