import React, { useLayoutEffect } from "react";
import { useEffect, useState } from "react";

export default function Graph({ userId, selectedHistory }) {
  const [historyData, setHistoryData] = useState([]);

  const getExerciseHistory = async () => {
    console.log(userId, selectedHistory);
    try {
      const res = await fetch(
        `https://fittracker-gvxi.onrender.com/user/history/extended/${userId}/${selectedHistory}`
      );
      console.log(res);
      const graphData = await res.json();
      setHistoryData(graphData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getExerciseHistory();
  }, []);

  return (
    <div className="Graph">
      {historyData.map((day) => {
        return (
          <ul key={day.date.toString()}>
            {day.date}
            <li>weight: {day.weight}</li>
            <li>reps: {day.reps}</li>
            <li>sets: {day.sets}</li>
          </ul>
        );
      })}
    </div>
  );
}
