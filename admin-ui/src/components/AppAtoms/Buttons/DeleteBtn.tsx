import React, { FC } from "react";
import "./Btn.css";

const DeleteBtn: FC<{
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}> = ({ onClick, className }) => {
  const btnClass = `button ${className}`;
  return (
    <button className={btnClass.trim()} onClick={onClick}>
      <span className="material-symbols-outlined">delete</span>
    </button>
  );
};

export default DeleteBtn;
