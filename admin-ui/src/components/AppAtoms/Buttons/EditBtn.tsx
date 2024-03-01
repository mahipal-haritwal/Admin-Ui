import React, { FC } from "react";
import "./Btn.css";

const EditBtn: FC<{
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}> = ({ onClick, className }) => {
  const btnClass = `button ${className}`;
  return (
    <button className={btnClass.trim()} onClick={onClick}>
      <span className="material-symbols-outlined">edit</span>
    </button>
  );
};

export default EditBtn;
