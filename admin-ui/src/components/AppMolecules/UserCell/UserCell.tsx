import { FC } from "react";

const UserCell: FC<{ val: string }> = ({ val }) => (
  <p style={{ background: "transparent" }} className="cell">
    {val}
  </p>
);

export default UserCell;
