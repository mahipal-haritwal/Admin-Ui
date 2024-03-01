import { createContext, useState, useEffect } from "react";
import {
  Button,
  Flex,
  Pagination,
  SearchComponent,
  User,
  UsersContainer,
} from "../components";
import axios from "axios";
import { calculatePageNumbers, pageData, selectPage } from "./Helper";

type ContextValuetype = {
  currPage: number;
  pages: number[];
  data: User[];
  filteredUsers: User[];
  isSearching: boolean;
  selectedRows: string[];
};

const initialValue = {
  currPage: 1,
  pages: [1, 2, 3, 4, 5],
  data: [],
  filteredUsers: [],
  selectedRows: [],
  isSearching: false,
};

export const AppContextP = createContext<ContextValuetype>(initialValue);

const AppContext = () => {
  const [val, setValue] = useState<ContextValuetype>(initialValue);
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const res = await axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );

    setUsers(res.data);

    setValue((prev) => {
      return { ...prev, data: pageData(1, res.data) };
    });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function resetFilters() {
    setValue(() => {
      return { ...initialValue, data: pageData(1, users) };
    });
  }

  function pageSetter(pageNo: number, move: number) {
    const page = move !== 0 ? selectPage(val?.currPage, move) : pageNo;
    const data = val?.isSearching ? val?.filteredUsers : users;

    const selections = page === val?.currPage ? val?.selectedRows : [];
    setValue((prev) => ({
      ...prev,
      currPage: page,
      selectedRows: selections,
      data: pageData(page, data), // Include data update
    }));
  }

  function filterData(str: string) {
    if (str.length === 0) {
      resetFilters();
      return;
    }

    const data = users.filter(
      (val) =>
        val.email.includes(str.toLowerCase()) ||
        val.name.includes(str.toLowerCase()) ||
        val.role.includes(str.toLowerCase())
    );

    setValue((prev) => ({
      ...prev,
      data: pageData(1, data),
      currPage: 1,
      pages: calculatePageNumbers(data?.length),
      filteredUsers: data,
      isSearching: true,
    }));
  }

  function onSelection(newValues: string[]) {
    setValue((prev) => {
      return {
        ...prev,
        selectedRows: newValues,
      };
    });
  }

  function onUpdate(user: User, index: number) {
    const updatedRecords = [...val?.data];
    updatedRecords[index] = user;
    setValue((prev) => {
      return { ...prev, data: updatedRecords };
    });

    setUsers((prev) => {
      return prev.map((val) => (val?.id === user.id ? user : val));
    });
  }

  function onDelete(id: string) {
    const filteredRecords = users.filter((val) => val?.id !== id);
    const pages = calculatePageNumbers(filteredRecords.length);

    const currPage = pages.includes(val?.currPage)
      ? val?.currPage
      : pages[pages.length - 1];

    setValue((prev) => {
      return {
        ...prev,
        currPage: currPage,
        selectedRows: prev.selectedRows.filter((val) => val !== id),
        data: pageData(prev.currPage, filteredRecords),
      };
    });

    setUsers(filteredRecords);
  }

  function deleteSelected(rows: string[]) {
    const updatedUsers = users.filter((val) => !rows?.includes(val?.id));

    const pages = calculatePageNumbers(updatedUsers.length);

    const currPage = pages.includes(val?.currPage)
      ? val?.currPage
      : pages[pages.length - 1];

    setValue((prev) => {
      return {
        ...prev,
        data: pageData(currPage, updatedUsers),
        pages: pages,
        selectedRows: [], // reset selection
      };
    });
    setUsers(updatedUsers);
  }

  return (
    <AppContextP.Provider value={val}>
      <div
        style={{
          height: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
          padding: "10px",
        }}
      >
        <h3>Admin UI</h3>
        <SearchComponent onSearch={filterData} />
        <UsersContainer
          selectValues={onSelection}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />

        <Flex>
          <Button
            onClick={() => deleteSelected(val?.selectedRows)}
            disabled={val?.selectedRows?.length === 0}
            text="Delete Selected"
          />
          <Pagination pages={val?.pages} pageSetter={pageSetter} />
        </Flex>
      </div>
    </AppContextP.Provider>
  );
};

export default AppContext;
