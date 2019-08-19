import React from "react";
import { Input } from "antd";

import "./Search.css";

const Search = () => {
  return (
    <Input.Search
      className="search-input"
      placeholder="Search for a product"
      enterButton
      size="large"
      onSearch={value => console.log(value)}
    />
  );
};

export default Search;
