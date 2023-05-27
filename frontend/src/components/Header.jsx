import React from "react";

export default function Header(props) {
  const { setIsLoggedIn, username } = props;
  // states

  // handlers
  const handleLogout = (e) => {
    setIsLoggedIn(false);
  };
  const goHome = (e) => {};

  return (
    <header>
      <ul>
        <li onClick={goHome}>Home</li>
        <li>{username}</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </header>
  );
}
