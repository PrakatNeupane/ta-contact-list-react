import React from "react";

export const SearchFilter = ({ handleOnSearch }) => {
  return (
    <div className="row">
      <div className="col">
        <input
          type="text"
          name=""
          id=""
          className="form-control "
          onChange={handleOnSearch}
          placeholder="Search contacts"
        />
      </div>
    </div>
  );
};
