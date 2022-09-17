import React from "react";
import Buttonconnect from "./Buttonconnect";
import { TextField } from "@mui/material";
const Loginoption = () => {
  return (
    <div className="LoginAndsignup paddingT10">
      <div className="textcenter">
        <TextField type="text" label="email" id="verifyemail" />
      </div>
      <div className="textcenter">
        <TextField type="Password" label="mot de passe" id="verifypassword" />
      </div>
      <Buttonconnect />
    </div>
  );
};

export default Loginoption;
