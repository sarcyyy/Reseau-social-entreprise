import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { createfetch } from "../script/Allfetch";

const Tweet = ({ forceUpdate, reducerValue }) => {
  const createtweet = (e) => {
    let textcontent = document.getElementById("textcontent");
    let fileinput = document.getElementById("filecontent");
    let name = JSON.parse(localStorage.getItem("token")).name;
    const file = new FormData();
    file.append("image", fileinput.files[0]);
    file.append("description", textcontent.value);
    file.append("name", name);
    file.append("userId", "userid");
    createfetch(file, forceUpdate);
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
