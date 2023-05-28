import React from "react";

export default function InfoSubmit({ selectedExercise, exerciseList }) {
  return (
    <>
      {selectedExercise ? (
        <>
          <h4>{exerciseList[selectedExercise - 1]}</h4>
          <form>
            <label htmlFor="weight">weight</label>
            <input type="number" id="weight" />
            <label htmlFor="reps">reps</label>
            <input type="number" id="reps" />
            <label htmlFor="sets">sets</label>
            <input type="number" id="sets" />
          </form>
        </>
      ) : (
        <>
          <h4>Choose an exercise</h4>
        </>
      )}
    </>
  );
}
