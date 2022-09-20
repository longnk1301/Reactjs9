import React, { useState } from "react";
import logo from "../logo.svg";

export const Header = ({ userData }) => {
  const [title, setTitle] = useState("Title");

  const handleTitle = () => {
    setTitle("New title");
  };

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{title}</p>
      <button onClick={handleTitle}>Click to change title</button>
      <p>User: {userData.name}</p>
    </header>
  );
};

export default Header;
