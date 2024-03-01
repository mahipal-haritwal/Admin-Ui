import { FC, useState } from "react";
import { Button, Checkbox, DeleteBtn, EditBtn, Flex, Input } from "../AppAtoms";
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
    <UserForm
      userForm={userForm}
      onFormChange={onFormChange}
      onCancel={() => {
        setIsEditing(false);
        setUserForm(data);
      }}
      onSave={() => {
        onUpdate(userForm);
        setIsEditing(false);
      }}
    />
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

const UserForm: FC<{
  userForm: User;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
}> = ({ userForm, onFormChange, onCancel, onSave }) => {
  return (
    <>
      <Input name="name" value={userForm?.name} onChange={onFormChange} />
      <Input name="email" value={userForm.email} onChange={onFormChange} />
      <Input name="role" value={userForm.role} onChange={onFormChange} />
      <Flex>
        <Button onClick={onSave} text="Save" />
        <Button onClick={onCancel} text="Cancel" />
      </Flex>
    </>
  );
};

export default RecordWrapper;
