import { createContext, useState, useEffect } from "react";
import {
  Pagination,
  SearchComponent,
  User,
  UsersContainer,
} from "../components";
import axios from "axios";

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

  async function fetchUsers() {
    const res = await axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );

    setValue((prev) => {
      return { ...prev, data: res.data };
    });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AppContextP.Provider value={val}>
      <div
        style={{ height: "100%", boxSizing: "border-box", overflow: "hidden" }}
      >
        <SearchComponent />
        <UsersContainer />
        <Pagination />
      </div>
    </AppContextP.Provider>
  );
};

export default AppContext;
