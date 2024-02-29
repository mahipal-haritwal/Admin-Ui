import { FC } from "react";
import "./UserCell.css";

const UserCell: FC<{ val: string }> = ({ val }) => (
  <p className="cell">{val}</p>
);

export default UserCell;
