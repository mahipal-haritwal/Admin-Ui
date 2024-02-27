import React, { FC } from "react";
import { User } from "../../shared/Types";
import "./UserRow.css";

const UserCell: FC<{ val: string }> = ({ val }) => <p>{val}</p>;

const UserRow: FC<User> = ({ name, id, email, role }) => {
  return (
    <div className="row">
      <UserCell val={name} />
      <UserCell val={email} />
      <UserCell val={role} />
      <div>
        <span className="material-symbols-outlined">edit</span>
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
};

export default UserRow;
