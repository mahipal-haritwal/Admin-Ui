import React, { FC, ReactNode } from "react";
import "./Flex.css";

const Flex: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flex">{children}</div>;
};

export default Flex;
