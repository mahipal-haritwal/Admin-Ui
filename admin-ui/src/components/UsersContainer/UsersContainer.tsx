import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { UserRow } from "../AppMolecules";
import { User } from "../shared/Types";

const UsersContainer: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const res = await axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );

    setUsers(res.data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  const Mapper = users.map((user) => (
    <UserRow
      id={user.id}
      key={user.id}
      name={user.name}
      email={user.email}
      role={user.role}
    />
  ));
  return <>{Mapper}</>;
};

export default UsersContainer;
