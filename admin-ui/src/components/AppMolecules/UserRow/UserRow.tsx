import { FC, ReactNode } from "react";
import "./UserRow.css";

const UserRow: FC<{ isHeader?: boolean; children: ReactNode }> = ({
  isHeader,
  children,
}) => {
  const className = `row ${isHeader ? "header" : ""}`;

  return <div className={className}>{children}</div>;
};

export default UserRow;
