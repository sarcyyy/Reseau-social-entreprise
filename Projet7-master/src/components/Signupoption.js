import React from "react";
import Buttoncreate from "./Buttoncreate";
import { TextField } from "@mui/material";

const Signupoption = () => {
  return (
    <div>
      <form method="get">
        <div className="LoginAndsignup paddingT10">
          <div className="textcenter">
            <TextField type="email" label="email" id="createemail" />
          </div>
          <div className="textcenter">
            <TextField
              type="Password"
              label="Mot de passe"
              id="createpassword"
            />
          </div>
          <div className="textcenter">
            <TextField type="text" label="nom et prénom" id="createname" />
          </div>
        </div>
      </form>
      <Buttoncreate />
    </div>
  );
};

export default Signupoption;
