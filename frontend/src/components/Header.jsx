import React from "react";

export default function Header({ handleLogout, username }) {
  // states

  // handlers

  const goHome = () => {};

  return (
    <header>
      <ul>
        <li onClick={goHome}>Home</li>
        <li>{username}</li>
        <li onClick={handleLogout}>
          <a>Logout</a>
        </li>
      </ul>
    </header>
  );
}
