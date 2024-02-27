import { createContext, useState } from "react";
import { UsersContainer } from "../components";

type ContextValuetype = {
  currPage: number;
  searchStr: string;
};

const initialValue = {
  currPage: 1,
  searchStr: "",
};

const AppContextP = createContext<ContextValuetype>(initialValue);

const AppContext = () => {
  const [val, setValue] = useState<ContextValuetype>(initialValue);
  return (
    <AppContextP.Provider value={val}>
      <UsersContainer />
    </AppContextP.Provider>
  );
};

export default AppContext;
