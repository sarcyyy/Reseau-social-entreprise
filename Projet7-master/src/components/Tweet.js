import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import React from "react";

const Tweet = ({ forceUpdate, reducerValue }) => {
  const createtweet = (e) => {
    let textcontent = document.getElementById("textcontent");
    let fileinput = document.getElementById("filecontent");
    console.log(fileinput);
    let name = JSON.parse(localStorage.getItem("token")).name;
    const file = new FormData();
    file.append("image", fileinput.files[0]);
    file.append("description", textcontent.value);
    file.append("name", name);
    file.append("userId", "userid");
    const verifytoken = JSON.parse(localStorage.getItem("token")).token;
    const token = verifytoken;
    fetch("http://localhost:3000/api/accueil", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      method: "POST",
      body: file,
    }).then((rep) => {
      console.log(rep);
    });
    console.log(reducerValue);
    forceUpdate();
    console.log(reducerValue);
  };
  return (
    <div className="tweetblock">
      <div className="message">
        <TextField type="text" label="Ecrivez votre tweet" id="textcontent" />
        <Button variant="contained" component="label">
          Importer l'image
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            id="filecontent"
          />
        </Button>

        <Button variant="contained" id="creertweet" onClick={createtweet}>
          Envoyer
        </Button>
      </div>
    </div>
  );
};

export default Tweet;
