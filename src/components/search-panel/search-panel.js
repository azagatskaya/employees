import React from "react";

import styles from "./search-panel.module.scss";

const SearchPanel = ({ onUpdateSearch }) => {
  const onSearchChange = (e) => {
    e.preventDefault();
    const string = e.target.value;
    onUpdateSearch(string);
  };
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      onChange={(e) => onSearchChange(e)}
    />
  );
};

export default SearchPanel;
