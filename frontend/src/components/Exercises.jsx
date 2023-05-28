import React from "react";
import { useState } from "react";

export default function Exercises({ exerciseList, selectExercise }) {
  // states

  // handling

  return (
    <>
      <ul>
        {exerciseList.map((ex, index) => (
          <li
            key={ex.toString()}
            id={index + 1}
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
