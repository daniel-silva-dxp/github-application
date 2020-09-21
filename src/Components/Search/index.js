import React from "react";

import "./style.css";

export const Search = ({ placeholder, handleSearch }) => {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <div className="input-group">
        <input
          type="search"
          required
          autoFocus
          onKeyUp={handleSearch}
          className="form-control"
        />
        <span className="bar"></span>
        <label>{placeholder}</label>
      </div>
    </form>
  );
};
