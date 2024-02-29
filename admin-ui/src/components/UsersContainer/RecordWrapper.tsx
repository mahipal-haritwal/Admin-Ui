import { FC, useState } from "react";
import { Checkbox, DeleteBtn, EditBtn } from "../AppAtoms";
import { UserCell, UserRow } from "../AppMolecules";
import { User } from "../shared";

import "./UsersContainer.css";

const RecordWrapper: FC<{
  data: User;
  onUpdate: (val: User) => void;
  onDelete: (val: string) => void;
  checked: boolean;
  onSelectValue: (selected: boolean, value: string | number) => void;
}> = ({ data, onDelete, onUpdate, onSelectValue, checked }) => {
  const { id, name, email, role } = data;

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [userForm, setUserForm] = useState<User>(data);

  function onFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }

  const content = isEditing ? (
    <>
      <input name="name" value={userForm?.name} onChange={onFormChange} />
      <input name="email" value={userForm.email} onChange={onFormChange} />
      <input name="role" value={userForm.role} onChange={onFormChange} />
      <div className="flex">
        <button
          onClick={() => {
            onUpdate(userForm);
            setIsEditing(false);
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            setIsEditing(false);
            setUserForm(data);
          }}
        >
          Cancel
        </button>
      </div>
    </>
  ) : (
    <>
      <UserCell val={name} />
      <UserCell val={email} />
      <UserCell val={role} />
      <div className="flex">
        <EditBtn onClick={() => setIsEditing(true)} />
        <DeleteBtn onClick={() => onDelete(id)} />
      </div>
    </>
  );

  return (
    <UserRow>
      <Checkbox onChange={onSelectValue} checked={checked} value={id} />
      {content}
    </UserRow>
  );
};

export default RecordWrapper;
