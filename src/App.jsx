import React, { useState } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  let strength = 0;
  const containsDigits = /\d+/.test(password);
  const containsLetters = /[a-zA-Z]/.test(password);
  const containsSymbols = /[^a-zA-Z0-9]/.test(password);

  if (!password.length) {
    strength = null;
  } else if (password.length < 8) {
    strength = 0;
  } else {
    strength = [containsDigits, containsLetters, containsSymbols].filter(
      (item) => item
    ).length;
  }
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="wrapper">
      <form className="form _container">
        <div>
          <h1 className="form-text">React Password checking app</h1>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              className="input"
              id="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={(e) => handleChange(e)}
            />
            <div className="form-control">
              <div
                className={
                  strength === 0 || strength === 1
                    ? "check danger"
                    : strength === 2
                    ? "check warning"
                    : strength === 3
                    ? "check success"
                    : "check"
                }
              ></div>
              <div
                className={
                  strength === 0
                    ? "check danger"
                    : strength === 1
                    ? "check dark"
                    : strength === 2
                    ? "check warning"
                    : strength === 3
                    ? "check success"
                    : "check"
                }
              ></div>
              <div
                className={
                  strength === 0
                    ? "check danger"
                    : strength === 1 || strength === 2
                    ? "check dark"
                    : strength === 3
                    ? "check success"
                    : "check dark"
                }
              ></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
