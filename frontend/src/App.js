import "./styles/App.css";
import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  // states

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState("");

  // handling functions

  const handleLogin = (userId, username) => {
    setIsLoggedIn(true);
    setUserId(userId);
    setUsername(username);
  };

  return (
    <div className="App">
      <h1>FitTracker</h1>
      {isLoggedIn ? (
        <Home
          username={username}
          userId={userId}
          setIsLoggedIn={setIsLoggedIn}
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
