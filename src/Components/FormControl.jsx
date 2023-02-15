import React from "react";

import formControl from "./formControl.css";

function FormControl({ password }) {
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

  return (
    <div className="form-control">
      {[
        strength === 0 || strength === 1
          ? "check danger"
          : strength === 2
          ? "check warning"
          : strength === 3
          ? "check success"
          : "check",
        strength === 0
          ? "check danger"
          : strength === 1
          ? "check dark"
          : strength === 2
          ? "check warning"
          : strength === 3
          ? "check success"
          : "check",
        strength === 0
          ? "check danger"
          : strength === 1 || strength === 2
          ? "check dark"
          : strength === 3
          ? "check success"
          : "check",
      ].map((item, key) => (
        <div key={key} className={item}></div>
      ))}
    </div>
  );
}

export default FormControl;
