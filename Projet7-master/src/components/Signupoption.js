import React, { useState } from "react";
import Buttoncreate from "./Buttoncreate";
import { TextField } from "@mui/material";

const Signupoption = () => {
  const [createemail, setCreateemail] = useState("");
  const [createpassword, setCreatepassword] = useState("");
  const [createname, setCreatename] = useState("");
  const changeemail = (e) => {
    setCreateemail(e.target.value);
  };
  const changepassword = (e) => {
    setCreatepassword(e.target.value);
  };
  const changename = (e) => {
    setCreatename(e.target.value);
  };
  return (
    <div className="big">
      <div className="login_and_signup">
        <div className="form">
          <h2> Créez votre compte !</h2>
          <div className="inputbox">
            <input type="text" required="required" onChange={changeemail} />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputbox">
            <input
              type="password"
              required="required"
              onChange={changepassword}
            />
            <span>Mot de passe</span>
            <i></i>
          </div>
          <div className="inputbox">
            <input type="text" required="required" onChange={changename} />
            <span>Nom et Prénom</span>
            <i></i>
          </div>
          <Buttoncreate
            createemail={createemail}
            createpassword={createpassword}
            createname={createname}
          />
        </div>
      </div>
    </div>
  );
};

export default Signupoption;
