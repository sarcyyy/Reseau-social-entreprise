import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Buttonconnect = () => {
  const [Islogtrue, setIslogtrue] = useState(false);
  return (
    <div className="LoginAndsignup paddingT10">
      <button
        onClick={() => {
          let verifieremail = document.getElementById("verifyemail");
          let verifierpassword = document.getElementById("verifypassword");
          var login = {
            email: verifieremail.value,
            password: verifierpassword.value,
          };
          fetch("http://localhost:3000/api/auth/login", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(login),
          }).then((rep) => {
            if (rep.ok === true) {
              console.log("Utilisateur vérifié");
              setIslogtrue(true);
            } else {
              if (rep.ok === false) {
                alert("mauvaise combinaison");
              }
            }
          });
        }}
      >
        {Islogtrue ? <Navigate to="/accueil" /> : ""}
        Connection
      </button>
    </div>
  );
};

export default Buttonconnect;
