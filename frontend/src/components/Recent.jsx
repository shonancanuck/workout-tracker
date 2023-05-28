import React, { useState, useEffect } from "react";

export default function Recent({ userId, exerciseList, todaysWorkout }) {
  // state
  const [lastWorkout, setLastWorkout] = useState([]);
  const [selectedExercise, setSelectedExeercise] = useState(null);

  // handling
  const selectExercise = (e) => {
    console.log(e.target.innerText);
  };

  const getLastWorkout = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/user/history/recent/${userId}`
      );
      console.log(res);
      const data = await res.json();
      data.sort((a, b) => a["exercise_id"] - b["exercise_id"]);
      for (let i = 0; i < exerciseList.length; i++) {
        data[i]["exercise_name"] = exerciseList[i];
      }
      setLastWorkout(() => data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLastWorkout();
  }, []);

  const workout = lastWorkout.map((ex) => {
    return (
      <>
        <li key={ex["exercise_name"]}>
          {ex["exercise_name"]}
          <ul>
            <li>{ex.weight}</li>
            <li>{ex.reps}</li>
            <li>{ex.sets}</li>
          </ul>
        </li>
      </>
    );
  });

  return todaysWorkout ? (
    <></>
  ) : (
    <>
      <h4 onClick={selectExercise}>History</h4>
      <h3>Last workout:</h3>
      <ul>{workout}</ul>
    </>
  );
}
