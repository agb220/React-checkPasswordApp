import React from "react";

import CheckPassword from "./Components/CheckPassword";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="form _container">
        <h1 className="form-title">React Password checking app</h1>
        <CheckPassword />
      </div>
    </div>
  );
}

export default App;
