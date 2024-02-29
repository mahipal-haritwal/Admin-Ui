import { FC, useContext } from "react";
import { UserCell, UserRow } from "../AppMolecules";
import { AppContextP } from "../../AppContext/AppContext";
import { Checkbox } from "../AppAtoms";
import "./UsersContainer.css";
import { User } from "../shared";
import RecordWrapper from "./RecordWrapper";

const Header: FC<{
  onSelect: (selected: boolean, value: string | number) => void;
  id: string | number;
  checked: boolean;
}> = ({ onSelect, id, checked }) => (
  <UserRow isHeader>
    <Checkbox onChange={onSelect} value={id} checked={checked} />
    <UserCell val="Name" />
    <UserCell val="Email" />
    <UserCell val="Role" />
    <UserCell val="Actions" />
  </UserRow>
);

const UsersContainer: FC<{
  selectValues: (val: string[]) => void;
  onUpdate: (val: User, index: number) => void;
  onDelete: (val: string) => void;
}> = ({ selectValues, onDelete, onUpdate }) => {
  const { data: users, currPage, selectedRows } = useContext(AppContextP);

  function onSelectValue(selected: boolean, value: string | number) {
    if (value === `page-${currPage}` && selected) {
      selectValues(users.map((val) => val.id));
      return;
    }

    if (value === `page-${currPage}` && !selected) {
      selectValues([]);
      return;
    }

    if (selected && value) {
      selectValues([...selectedRows, value + ""]);
      return;
    }

    selectValues(selectedRows.filter((val) => val !== value));
    return;
  }

  const Mapper = users.map((val, index) => (
    <RecordWrapper
      key={val?.id}
      data={val}
      checked={selectedRows.includes(val?.id)}
      onDelete={onDelete}
      onSelectValue={onSelectValue}
      onUpdate={(val) => onUpdate(val, index)}
    />
  ));

  return (
    <div className="container">
      <Header
        onSelect={onSelectValue}
        id={`page-${currPage}`}
        checked={selectedRows?.length === users.length}
      />
      {Mapper}
    </div>
  );
};

export default UsersContainer;
