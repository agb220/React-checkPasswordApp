import React, { useState } from "react";

import FormControl from "./FormControl";
import Input from "./Input";

import checkPassword from "./checkedPassword.css";

function CheckPassword() {
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="form-group">
      <Input password={password} handleChange={handleChange} />
      <FormControl password={password} />
    </div>
  );
}

export default CheckPassword;
