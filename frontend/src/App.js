import "./styles/App.css";
import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  // states

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState("");
  const [todaysWorkout, setTodaysWorkout] = useState(false);
  const [exHistory, setExHistory] = useState(false);

  // handling functions

  const handleLogin = (userInfo) => {
    setIsLoggedIn(true);
    setUsername(userInfo[0]);
    setUserId(userInfo[1]);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleTodaysWorkout = () => {
    setTodaysWorkout((current) => !current);
  };

  const selectHistory = () => {
    setExHistory((current) => !current);
  };
  const goHome = () => {
    setExHistory(false);
    setTodaysWorkout(false);
  };

  return (
    <div className="App">
      <h1>FitTracker</h1>
      {isLoggedIn ? (
        <Home
          username={username}
          userId={userId}
          handleLogout={handleLogout}
          todaysWorkout={todaysWorkout}
          handleTodaysWorkout={handleTodaysWorkout}
          exHistory={exHistory}
          selectHistory={selectHistory}
          goHome={goHome}
        />
      ) : (
        <Login
          username={username}
          setUsername={setUsername}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;
