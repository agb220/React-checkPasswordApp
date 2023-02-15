import React from "react";

import input from "./input.css";

function Input({ handleChange, password }) {
  return (
    <div className="form-input">
      <label htmlFor="password"></label>
      <input
        className="input"
        type="password"
        id="password"
        placeholder="Password"
        name="password"
        required
        value={password}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Input;
