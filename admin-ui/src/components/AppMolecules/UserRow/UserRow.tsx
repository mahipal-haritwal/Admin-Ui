import React, { FC } from "react";
import { User } from "../../shared/Types";

const UserCell: FC<{ val: string }> = ({ val }) => <p>{val}</p>;

const UserRow: FC<User> = ({ name, id, email, role }) => {
  return (
    <div>
      <UserCell val={name} />
      <UserCell val={email} />
      <UserCell val={role} />
      <button>edit</button>
    </div>
  );
};

export default UserRow;
