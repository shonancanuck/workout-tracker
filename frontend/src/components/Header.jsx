import React from "react";
import "../styles/Header.css";

export default function Header({ handleLogout, username }) {
  // states

  // handlers

  const goHome = () => {};

  return (
    <header>
      <ul>
        <li>{username}</li>
        <li onClick={handleLogout}>
          <a>Logout</a>
        </li>
      </ul>
    </header>
  );
}
