import React, { FC, useState } from "react";
import "./SearchComponent.css";

interface SearchComponentProps {
  onSearch: (str: string) => void;
}

const SearchComponent: FC<SearchComponentProps> = ({ onSearch }) => {
  const [val, setVal] = useState<string>("");

  return (
    <input
      className="search"
      type="text"
      name="search"
      value={val}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          onSearch(val);
        }
      }}
      onChange={(e) => setVal(e.target.value)}
      placeholder="Search by name,email or role"
    />
  );
};

export default SearchComponent;
