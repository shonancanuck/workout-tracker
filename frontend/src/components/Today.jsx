import React from "react";

export default function Today({
  todaysWorkout,
  handleTodaysWorkout,
  exerciseList,
}) {
  return (
    <>
      <h2 onClick={handleTodaysWorkout}>{Date()}</h2>
      {todaysWorkout ? (
        <ul>
          {exerciseList.map((ex) => (
            <li>{ex}</li>
          ))}
        </ul>
      ) : (
        <p>click the date for todays workout</p>
      )}
    </>
  );
}
