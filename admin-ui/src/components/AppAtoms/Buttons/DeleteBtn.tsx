import React, { FC } from "react";
import "./Btn.css";

const DeleteBtn: FC<{
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      <span className="material-symbols-outlined">delete</span>
    </div>
  );
};

export default DeleteBtn;
