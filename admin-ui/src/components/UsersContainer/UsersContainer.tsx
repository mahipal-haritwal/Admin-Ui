import { FC, useContext } from "react";
import { UserCell, UserRow } from "../AppMolecules";
import { AppContextP } from "../../AppContext/AppContext";
import { Checkbox, DeleteBtn, EditBtn } from "../AppAtoms";
import "./UsersContainer.css";

const Header = () => (
  <UserRow isHeader>
    <Checkbox />
    <UserCell val="Name" />
    <UserCell val="Email" />
    <UserCell val="Role" />
    <UserCell val="Actions" />
  </UserRow>
);

const UsersContainer: FC = () => {
  const { data: users } = useContext(AppContextP);

  const Mapper = users.map(({ id, name, email, role }) => (
    <UserRow>
      <Checkbox />
      <UserCell val={name} />
      <UserCell val={email} />
      <UserCell val={role} />
      <div className="flex">
        <EditBtn onClick={() => {}} />
        <DeleteBtn onClick={() => {}} />
      </div>
    </UserRow>
  ));
  return (
    <div className="container">
      <Header />
      {Mapper}
    </div>
  );
};

export default UsersContainer;
