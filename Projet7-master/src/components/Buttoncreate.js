import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";
// import islogged from "../script/Islogged";
const Buttoncreate = ({ createemail, createpassword, createname }) => {
  // const testtoken = localStorage.getItem("token");
  const fetchcreate = (e) => {
    let regexpassword = new RegExp("^[a-zA-Z -]{3,}$");
    let regexemail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (
      regexemail.test(createemail) === false ||
      regexpassword.test(createpassword) === false
    ) {
      if (regexemail.test(createemail) === false) {
        alert("veuillez entrer une adresse email valide");
      } else {
        alert(
          "Veuillez verifier que le mot de passe contient plus de 3 caractères."
        );
      }
    } else {
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
    }
  };

  const [Islogtrue, setIslogtrue] = useState(false);
  return (
    <div>
      <div className="LoginAndsignup paddingT10">
        <Button variant="contained" onClick={fetchcreate}>
          {Islogtrue ? <Navigate to="/auth/login" /> : ""}
          Créer un compte
        </Button>
      </div>
    </div>
  );
};

export default Buttoncreate;
