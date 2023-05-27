import React from "react";
import Header from "./Header";
import Today from "./Today";
import Recent from "./Recent";

export default function Home(props) {
  const { username, userId, setIsLoggedIn } = props;
  return (
    <>
      <Header username={username} setIsLoggedIn={setIsLoggedIn} />
      <Today />
      <Recent />
    </>
  );
}
