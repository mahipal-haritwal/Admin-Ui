import React, { FC } from "react";

const Button: FC<{
  onClick: () => void;
  disabled?: boolean;
  text: string;
  className?: string;
}> = ({ onClick, disabled, text, className }) => {
  const btnClasses = `delete-selected ${
    disabled ? "disabled" : ""
  } ${className}`;

  return (
    <button className={btnClasses.trim()} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
