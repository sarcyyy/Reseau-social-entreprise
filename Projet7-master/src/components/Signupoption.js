import React from "react";
import Buttonconnect from "./Buttonconnect";

const Signupoption = () => {
  return (
    <div>
      <div className="LoginAndsignup paddingT10">
        <div className="textcenter">
          <p className="">Email d'entreprise</p>
          <label htmlFor="Email"></label>
          <input type="text" />
        </div>
        <div className="textcenter">
          <p>Mot de passe (8 caractères minimum)</p>
          <label htmlFor="Password" className=""></label>
          <input type="Password" name="" id="" />
        </div>
      </div>
      <Buttonconnect />
    </div>
  );
};

export default Signupoption;
