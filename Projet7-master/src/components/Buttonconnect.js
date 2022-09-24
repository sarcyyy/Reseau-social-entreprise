import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import islogged from "../script/Islogged";
import { Button } from "@mui/material";

const Buttonconnect = () => {
  const [Islogtrue, setIslogtrue] = useState(false);
  const testtoken = localStorage.getItem("token");

  const fetchconnect = (e) => {
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
          const token = {
            name: rep.name,
            token: rep.token,
            userId: rep.userId,
          };

          console.log("Utilisateur vérifié");

          localStorage.setItem("token", JSON.stringify(token));

          setIslogtrue(true);
        }
      });
  };
  if (islogged(testtoken) === true) {
    window.location = "http://localhost:7200/accueil";
  }

  return (
    <div className="LoginAndsignup paddingT10">
      <Button variant="outlined" onClick={fetchconnect}>
        {Islogtrue ? <Navigate to="/accueil" /> : ""}
        Connection
      </Button>
    </div>
  );
};

export default Buttonconnect;
