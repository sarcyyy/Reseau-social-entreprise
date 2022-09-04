import React from "react";
import verifyformulaire from "../script/Verifyaccount";
// import { NavLink } from "react-router-dom";
const Buttonconnect = () => {
  return (
    <div className="LoginAndsignup paddingT10">
      {/* <NavLink to="/accueil"> */}
        <button onClick={()=>{
 let verifieremail = document.getElementById("verifyemail");
 let verifierpassword = document.getElementById("verifypassword");
            var login = {
                email : verifieremail.value,
                password : verifierpassword.value,

            }
            verifyformulaire(login);
        }}>Connection</button>
      {/* </NavLink> */}
    </div>
  );
};

export default Buttonconnect;
