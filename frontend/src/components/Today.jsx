import React from "react";
import { useState } from "react";
import Exercises from "./Exercises";
import InfoSubmit from "./InfoSubmit";

export default function Today({
  userId,
  todaysWorkout,
  handleTodaysWorkout,
  exerciseList,
}) {
  // state
  const [selectedExercise, setSelectedExercise] = useState(null);

  // handling

  const selectExercise = (e) => {
    if (selectedExercise) {
      setSelectedExercise(null);
    } else {
      setSelectedExercise(e.target.className);
    }
    console.log(selectedExercise);
  };
  return (
    <>
      <h2 onClick={handleTodaysWorkout}>{Date()}</h2>
      {todaysWorkout ? (
        <>
          <Exercises
            exerciseList={exerciseList}
            selectExercise={selectExercise}
          />
          <InfoSubmit
            exerciseList={exerciseList}
            submitId={selectedExercise}
            userId={userId}
            selectedExercise={selectedExercise}
          />
        </>
      ) : (
        <p>click the date for todays workout</p>
      )}
    </>
  );
}
