import React from "react";
import Buttoncreate from "./Buttoncreate";

const Signupoption = () => {
  return (
    <div>
      <div className="LoginAndsignup paddingT10">
        <div className="textcenter">
          <p className="">Email d'entreprise</p>
          <label htmlFor="Email"></label>
          <input type="text" id="createemail" />
        </div>
        <div className="textcenter">
          <p>Mot de passe (8 caractères minimum)</p>
          <label htmlFor="Password" className=""></label>
          <input type="Password" name="" id="createpassword" />
        </div>
        <div className="textcenter">
          <p>Votre nom et prénom</p>
          <label htmlFor="name" className=""></label>
          <input type="text" name="" id="createname" />
        </div>
      </div>
      <Buttoncreate />
    </div>
  );
};

export default Signupoption;
