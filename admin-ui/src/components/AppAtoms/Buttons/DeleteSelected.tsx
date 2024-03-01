import React, { FC } from "react";

const DeleteSelected: FC<{ onClick: () => void; disabled: boolean }> = ({
  onClick,
  disabled,
}) => {
  const className = `delete-selected ${disabled ? "disabled" : ""}`;

  return (
    <button className={className.trim()} onClick={onClick}>
      Delete Selected
    </button>
  );
};

export default DeleteSelected;
