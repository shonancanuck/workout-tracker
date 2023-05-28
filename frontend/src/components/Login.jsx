import React, { useState } from "react";

export default function Login({ onLogin, username, setUsername }) {
  // state
  const [password, setPassword] = useState("");

  // handlers

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername(e.target.value);

    try {
      const response = await fetch(
        "https://fittracker-gvxi.onrender.com/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        console.log("Welcome!");
        const userInfo = await response.json();
        console.log(userInfo);
        onLogin(userInfo);
      } else {
        console.log("login unsuccessful");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login">
      <h2>Please log in to continue</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <input type="submit" className="submit-button" />
      </form>
      {/* <p>
        Don't have an account?{" "}
        <span onClick={handleIsRegistering}>Sign up.</span>
      </p> */}
    </div>
  );
}
