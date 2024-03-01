import React, { FC } from "react";
import "./RoundBtn.css";

const RoundBtn: FC<{
  onClick: () => void;
  children: any;
  isSelected: boolean;
  disabled: boolean;
  className?: string;
}> = ({ onClick, children, isSelected, disabled, className }) => {
  const btnClass = `round-btn ${className} ${isSelected ? "in-focus" : ""} ${
    disabled ? "disabled" : ""
  }`;

  return (
    <button className={btnClass.trim()} onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundBtn;
