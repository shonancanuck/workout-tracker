import React from "react";
import { useState } from "react";
import Header from "./Header";
import History from "./History";
import Today from "./Today";
import Recent from "./Recent";

export default function Home({
  username,
  userId,
  handleLogout,
  todaysWorkout,
  handleTodaysWorkout,
  exHistory,
  selectHistory,
}) {
  // states

  // handlers

  const exerciseList = [
    "Overhead Press",
    "Bench Press",
    "Pull Up",
    "Row",
    "Squat",
    "Deadlift",
  ];

  return (
    <>
      <Header username={username} userId={userId} handleLogout={handleLogout} />
      <History />
      <Today
        todaysWorkout={todaysWorkout}
        exerciseList={exerciseList}
        handleTodaysWorkout={handleTodaysWorkout}
        userId={userId}
      />
      <Recent
        userId={userId}
        exerciseList={exerciseList}
        todaysWorkout={todaysWorkout}
        exHistory={exHistory}
        selectHistory={selectHistory}
      />
    </>
  );
}
