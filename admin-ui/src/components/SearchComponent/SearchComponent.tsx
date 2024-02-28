import React from "react";
import "./SearchComponent.css";
const SearchComponent = () => {
  return (
    <input
      className="search"
      type="text"
      onChange={(e) => console.log(e.target.value)}
      placeholder="Search by name,email or role"
    />
  );
};

export default SearchComponent;
