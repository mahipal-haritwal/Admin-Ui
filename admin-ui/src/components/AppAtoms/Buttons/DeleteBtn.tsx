import React, { FC } from "react";

const DeleteBtn: FC<{
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <span className="material-symbols-outlined">delete</span>;
    </div>
  );
};

export default DeleteBtn;
