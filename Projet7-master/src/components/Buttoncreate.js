import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
const Buttoncreate = () => {
  const [Islogtrue, setIslogtrue] = useState(false);
  return (
    <div>
      <div className="LoginAndsignup paddingT10">
        <button
          onClick={() => {
            let emailcreer = document.getElementById("createemail");
            let passworldcreer = document.getElementById("createpassword");

            var login = {
              email: emailcreer.value,
              password: passworldcreer.value,
            };
            fetch("http://localhost:3000/api/auth/signup", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(login),
            }).then((rep) => {
              if (rep.ok === true) {
                console.log("Utilisateur créer");
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
          Créer un compte
        </button>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

export default Buttoncreate;
