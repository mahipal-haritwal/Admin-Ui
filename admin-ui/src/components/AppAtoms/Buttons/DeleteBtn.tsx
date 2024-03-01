import React, { FC } from "react";
import "./Btn.css";

const DeleteBtn: FC<{
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <span className="material-symbols-outlined">delete</span>
    </button>
  );
};

export default DeleteBtn;
