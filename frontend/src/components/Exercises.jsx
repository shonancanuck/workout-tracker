import React from "react";
import { useState } from "react";

export default function Exercises({
  exerciseList,
  selectExercise,
  selectHistory,
}) {
  // states

  // handling

  return (
    <>
      <ul>
        {exerciseList.map((ex, index) => (
          <li
            key={ex.toString()}
            className={index + 1}
            exname={ex}
            onClick={selectExercise}
          >
            {ex}
          </li>
        ))}
      </ul>
    </>
  );
}
