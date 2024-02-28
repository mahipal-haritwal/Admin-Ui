import { createContext, useState, useEffect } from "react";
import {
  Pagination,
  SearchComponent,
  User,
  UsersContainer,
} from "../components";
import axios from "axios";
import { pageData, selectPage } from "./Helper";

type ContextValuetype = {
  currPage: number;
  searchStr: string;
  data: User[];
};

const initialValue = {
  currPage: 1,
  searchStr: "",
  data: [],
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

  function pageSetter(pageNo: number, move: number) {
    const page = move !== 0 ? selectPage(val?.currPage, move) : pageNo;

    if (page !== val?.currPage) {
      setValue((prev) => ({
        ...prev,
        currPage: page,
        data: pageData(page, users),
      }));
    }
  }

  return (
    <AppContextP.Provider value={val}>
      <div
        style={{ height: "100%", boxSizing: "border-box", overflow: "hidden" }}
      >
        <SearchComponent />
        <UsersContainer />
        <Pagination pageSetter={pageSetter} />
      </div>
    </AppContextP.Provider>
  );
};

export default AppContext;
