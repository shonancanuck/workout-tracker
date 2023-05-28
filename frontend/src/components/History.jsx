import React, { useState } from "react";
import Exercises from "./Exercises";
import Graph from "./Graph";

export default function History({ userId, exerciseList }) {
  // state
  const [showHistory, setShowHistory] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState(null);

  // handling

  const handleHistory = () => {
    setShowHistory((current) => !current);
  };

  const selectHistory = (e) => {
    if (selectedHistory) {
      setSelectedHistory(null);
    } else {
      setSelectedHistory(e.target.className);
    }
    console.log(selectedHistory);
  };

  return (
    <>
      <h3 onClick={handleHistory}>History</h3>
      {showHistory ? (
        <>
          {selectedHistory ? (
            <>
              <h4 onClick={selectHistory}>
                {exerciseList[selectedHistory - 1]}
              </h4>
              <Graph
                userId={userId}
                selectedHistory={selectedHistory}
                className={"graph"}
              />
            </>
          ) : (
            <>
              <ul>
                {exerciseList.map((ex, index) => (
                  <li
                    key={ex.toString()}
                    className={index + 1}
                    exname={ex}
                    onClick={selectHistory}
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
