import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import islogged from "../script/Islogged";
const Buttonconnect = () => {
  const [Islogtrue, setIslogtrue] = useState(false);
  const verifytoken = localStorage.getItem("token");
  if (islogged(verifytoken) === true) {
    window.location = "http://localhost:7200/accueil";
  }
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
          })
            .then((res) => res.json())
            .then((rep) => {
              if (rep.token === undefined) {
                alert("mauvaise combinaison");
              } else {
                const token = rep.token;
                console.log("Utilisateur vérifié");
                localStorage.setItem("token", JSON.stringify(token));
                setIslogtrue(true);
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
