import React, { FC } from "react";

import "./Input.css";

interface InputProps {
  name: string;
  value: string;
  placeHolder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ name, value, onChange, placeHolder }) => {
  const className = `input`;
  return (
    <input
      placeholder={placeHolder}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
