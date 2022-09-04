import React from "react";
import Buttonconnect from "./Buttonconnect";

const Loginoption = () => {
  return (
    <div className="LoginAndsignup paddingT10">
      <div className="textcenter">
        <p>Email</p>
        <label htmlFor="Email"></label>
        <input type="text" id="verifyemail" />
      </div>
      <div className="textcenter">
        <p>Mot de passse</p>
        <label htmlFor="Password"></label>
        <input type="Password" id="verifypassword" />
      </div>
      <Buttonconnect />
    </div>
  );
};

export default Loginoption;
