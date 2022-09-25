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
    <div>
      <form method="get">
        <div className="LoginAndsignup paddingT10">
          <div className="textcenter">
            <TextField
              type="email"
              label="email"
              id="createemail"
              onChange={changeemail}
            />
          </div>
          <div className="textcenter">
            <TextField
              type="Password"
              label="Mot de passe"
              id="createpassword"
              onChange={changepassword}
            />
          </div>
          <div className="textcenter">
            <TextField
              type="text"
              label="nom et prénom"
              id="createname"
              onChange={changename}
            />
          </div>
        </div>
      </form>
      <Buttoncreate
        createemail={createemail}
        createpassword={createpassword}
        createname={createname}
      />
    </div>
  );
};

export default Signupoption;
