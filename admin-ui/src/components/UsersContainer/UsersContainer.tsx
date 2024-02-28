import { FC, useContext } from "react";
import { UserRow } from "../AppMolecules";
import { AppContextP } from "../../AppContext/AppContext";
import "./UsersContainer.css";

const UsersContainer: FC = () => {
  const { data: users } = useContext(AppContextP);

  const Mapper = users.map((user) => (
    <UserRow
      id={user.id}
      key={user.id}
      name={user.name}
      email={user.email}
      role={user.role}
    />
  ));
  return <div className="container">{Mapper}</div>;
};

export default UsersContainer;
