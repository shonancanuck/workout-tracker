import React from "react";
import { useEffect } from "react";

export default function Graph({ userId, selectedHistory }) {
  const getExerciseHistory = async () => {
    console.log(userId, selectedHistory);
    try {
      const res = await fetch(
        `http://localhost:3001/user/history/${userId}/${selectedHistory}`
      );
      console.log(res);
      const graphData = await res.json();
      console.log(graphData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getExerciseHistory();
  }, []);

  return <div className="Graph"></div>;
}
