import React from "react";
import { useState } from "react";
import Header from "./Header";
import Today from "./Today";
import Recent from "./Recent";

export default function Home({
  username,
  userId,
  handleLogout,
  todaysWorkout,
  handleTodaysWorkout,
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
      <Today
        todaysWorkout={todaysWorkout}
        exerciseList={exerciseList}
        handleTodaysWorkout={handleTodaysWorkout}
      />
      <Recent
        userId={userId}
        exerciseList={exerciseList}
        todaysWorkout={todaysWorkout}
      />
    </>
  );
}
