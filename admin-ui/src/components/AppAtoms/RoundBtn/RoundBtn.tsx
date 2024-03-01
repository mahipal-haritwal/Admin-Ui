import React, { FC } from "react";
import "./RoundBtn.css";

const RoundBtn: FC<{
  onClick: () => void;
  children: any;
  isSelected: boolean;
  disabled: boolean;
}> = ({ onClick, children, isSelected, disabled }) => {
  const className = `round-btn ${isSelected ? "in-focus" : ""} ${
    disabled ? "disabled" : ""
  }`;

  return (
    <button className={className.trim()} onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundBtn;
