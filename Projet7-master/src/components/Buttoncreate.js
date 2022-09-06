import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import islogged from "../script/Islogged";
const Buttoncreate = () => {
  const testtoken = localStorage.getItem("token");

  if (islogged(testtoken) === true) {
    window.location = "http://localhost:7200/accueil";
  }

  const [Islogtrue, setIslogtrue] = useState(false);
  return (
    <div>
      <div className="LoginAndsignup paddingT10">
        <button
          onClick={() => {
            let emailcreer = document.getElementById("createemail");
            let passworldcreer = document.getElementById("createpassword");
            let nomcreer = document.getElementById("createname");

            var login = {
              email: emailcreer.value,
              password: passworldcreer.value,
              name: nomcreer.value,
            };
            fetch("http://localhost:3000/api/auth/signup", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(login),
            }).then((rep) => {
              console.log(rep);
              if (rep.ok === true) {
                console.log("Utilisateur créer");
                setIslogtrue(true);
                alert("veuillez vous connecter avec vos identifiants");
              } else {
                if (rep.ok === false) {
                  alert("mauvaise combinaison");
                }
              }
            });
          }}
        >
          {Islogtrue ? <Navigate to="/auth/login" /> : ""}
          Créer un compte
        </button>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

export default Buttoncreate;
