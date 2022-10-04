import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { createfetch } from "../script/Allfetch";

const Tweet = ({ forceUpdate, reducerValue }) => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [valuefield, setValuefield] = useState("");
  const recupmessage = (e) => {
    setMessage(e.target.value);
    setValuefield(e.target.value);
  };
  const recupfile = (e) => {
    setImage(e.target.files[0]);
  };
  const createtweet = (e) => {
    let name = JSON.parse(localStorage.getItem("token"))?.name;
    const file = new FormData();

    file.append("image", image);
    file.append("description", message);
    file.append("name", name);
    file.append("userId", "userid");
    createfetch(file, forceUpdate);
    setValuefield("");
  };
  return (
    <div className="tweetblock">
      <div className="message">
        <TextField
          type="text"
          label="Ecrivez votre tweet"
          id="textcontent"
          value={valuefield}
          onChange={recupmessage}
        />
        <Button variant="contained" component="label" onChange={recupfile}>
          Importer image
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
