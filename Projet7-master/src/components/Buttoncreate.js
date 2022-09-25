import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import islogged from "../script/Islogged";
const Buttoncreate = ({ createemail, createpassword, createname }) => {
  const testtoken = localStorage.getItem("token");
  const fetchcreate = (e) => {
    // let emailcreer = document.getElementById("createemail");
    // let passworldcreer = document.getElementById("createpassword");
    // let nomcreer = document.getElementById("createname");

    var login = {
      email: createemail,
      password: createpassword,
      name: createname,
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
  };
  if (islogged(testtoken) === true) {
    window.location = "http://localhost:7200/accueil";
  }

  const [Islogtrue, setIslogtrue] = useState(false);
  return (
    <div>
      <div className="LoginAndsignup paddingT10">
        <Button variant="contained" onClick={fetchcreate}>
          {Islogtrue ? <Navigate to="/auth/login" /> : ""}
          Créer un compte
        </Button>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

export default Buttoncreate;
