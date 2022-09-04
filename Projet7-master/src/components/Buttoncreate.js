import React from "react";
import envoiformulaire from "../script/Createaccount";
// import { NavLink } from "react-router-dom";
const Buttoncreate = () => {
  return (
    <div>
      <div className="LoginAndsignup paddingT10">
        {/* <NavLink to="/accueil"> */}
        <button
          onClick={() => {
            let emailcreer = document.getElementById("createemail");
            let passworldcreer = document.getElementById("createpassword");
            console.log(emailcreer.value);
            console.log(passworldcreer.value);
            var login = {
              email: emailcreer.value,
              password: passworldcreer.value,
            };
            console.log(login);
            console.log(envoiformulaire(login));
          }}
        >
          Créer un compte
        </button>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

export default Buttoncreate;
