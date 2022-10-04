import React from "react";
import Buttonconnect from "./Buttonconnect";
import { TextField } from "@mui/material";
import { useState } from "react";
const Loginoption = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const changeemail = (e) => {
    setEmail(e.target.value);
    console.log("email", email);
  };
  const changepassword = (e) => {
    setPassword(e.target.value);
    console.log("password", password);
  };
  const tryingsome = (e) => {
    if (e.key === "Enter") {
      console.log("entré");
    }
  };
  return (
    <div className="LoginAndsignup paddingT10">
      <div className="textcenter">
        <TextField
          type="text"
          label="email"
          id="verifyemail"
          onChange={changeemail}
        />
      </div>
      <div className="textcenter">
        <TextField
          type="Password"
          label="mot de passe"
          id="verifypassword"
          onChange={changepassword}
          onKeyDown={tryingsome}
        />
      </div>
      <Buttonconnect email={email} password={password} />
    </div>
  );
};

export default Loginoption;
