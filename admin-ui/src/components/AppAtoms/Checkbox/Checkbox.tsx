import React, { FC } from "react";
import "./Checkbox.css";
import { Flex } from "../Flex";

const Checkbox: FC<{
  onChange: (selected: boolean, value: string | number) => void;
  value: string | number;
  checked: boolean;
}> = ({ value, onChange, checked }) => {
  return (
    <Flex>
      <input
        onChange={(e) => {
          onChange(e.target.checked, value);
        }}
        checked={checked}
        value={value}
        type="checkbox"
      />
    </Flex>
  );
};

export default Checkbox;
