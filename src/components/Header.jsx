import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>My Contact List</h1>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Header;
