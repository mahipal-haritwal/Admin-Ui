import React, { FC } from "react";
import "./Btn.css";

const EditBtn: FC<{
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      <span className="material-symbols-outlined">edit</span>
    </div>
  );
};

export default EditBtn;
