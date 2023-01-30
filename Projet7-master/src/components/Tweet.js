import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { createfetch } from "../script/Allfetch";

const Tweet = ({ forceUpdate, reducerValue }) => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const resetfile = (e) => {
    e.target.value = null;
  };
  const recupmessage = (e) => {
    setMessage(e.target.value);
    console.log("img", image);
  };
  const recupfile = (e) => {
    setImage(e.target.files[0]);
    console.log("file", e.target?.files[0]);
  };
  const createtweet = (e) => {
    let name = JSON.parse(localStorage.getItem("token"))?.name;
    const file = new FormData();

    file.append("image", image);
    file.append("description", message);
    file.append("name", name);
    file.append("userId", "userid");
    createfetch(file, forceUpdate);
    setMessage("");
    setImage("");
  };
  return (
    <div className="tweetblock">
      <div className="message">
        <div className="inputbox2">
          <input
            type="text"
            required="required"
            onChange={recupmessage}
            value={message}
          />
          <span>Ecrivez votre message ! </span>
          <i></i>
        </div>
        <label for="file" className="label-file" value="Envoyer le post!">
          Importer une image
        </label>
        <input
          id="file"
          hidden
          class="input-file"
          type="file"
          onChange={recupfile}
          onClick={resetfile}
        />
        <input
          id="tweet"
          value="Envoyer le post!"
          className="label-file text-size"
          type="submit"
          onClick={createtweet}
        />
      </div>
    </div>
  );
};

export default Tweet;
