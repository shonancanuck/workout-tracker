import React from "react";
import Header from "./Header";
import Today from "./Today";
import Recent from "./Recent";

export default function Home({ userId }) {
  return (
    <>
      <Header userId={userId} />
      <Today />
      <Recent userId={userId} />
    </>
  );
}
