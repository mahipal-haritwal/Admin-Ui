import React, { FC } from "react";

const EditBtn: FC<{
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <span className="material-symbols-outlined">edit</span>;
    </div>
  );
};

export default EditBtn;
