import React, { FC } from "react";
import { User } from "../../shared/Types";
import "./UserRow.css";
import { DeleteBtn, EditBtn } from "../../AppAtoms";

const UserCell: FC<{ val: string }> = ({ val }) => (
  <p style={{ background: "transparent" }} className="cell">
    {val}
  </p>
);

const UserRow: FC<User> = ({ name, id, email, role }) => {
  return (
    <div className="row">
      <UserCell val={name} />
      <UserCell val={email} />
      <UserCell val={role} />
      <div className="flex">
        <EditBtn onClick={() => {}} />
        <DeleteBtn onClick={() => {}} />
      </div>
    </div>
  );
};

export default UserRow;
