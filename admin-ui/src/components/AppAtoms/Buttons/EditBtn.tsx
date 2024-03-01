import React, { FC } from "react";
import "./Btn.css";

const EditBtn: FC<{
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <span className="material-symbols-outlined">edit</span>
    </button>
  );
};

export default EditBtn;
