import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Modifycomponent = () => {
  const [tweet, setTweet] = useState("");
  const [ismodifydone, setIsmodifydone] = useState(false);

  const [newdescri, setNewdescri] = useState("");
  const [newimage, setNewimage] = useState("");
  useEffect(() => {
    const tweetid = JSON.parse(localStorage.getItem("id"));
    const token = JSON.parse(localStorage.getItem("token"))?.token;

    fetch("http://localhost:3000/api/accueil/" + tweetid, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((tweet) => {
        console.log(tweet);
        if (tweet._id !== tweetid) {
          localStorage.removeItem("id");
          window.location = "http://localhost:7200/accueil";
        }
        setTweet(tweet);
      });
  }, []);
  console.log(tweet.usersLiked);
  const onChangedescri = (e) => {
    setNewdescri(e.target.value);
  };
  const onChangeimage = (e) => {
    setNewimage(e.target.files[0]);
  };

  const functionModify = (e) => {
    const filed = new FormData();
    filed.append("image", newimage);
    filed.append("description", newdescri);
    const token = JSON.parse(localStorage.getItem("token"))?.token;
    fetch("http://localhost:3000/api/accueil/" + tweet._id, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      method: "PUT",
      body: filed,
    }).then((rep) => {
      if (rep.ok === true) {
        setIsmodifydone(true);
      } else {
        setIsmodifydone(false);
        alert("Erreur, veuillez ré-essayer");
      }
    });
  };
  return (
    <div className="tweetblock">
      <div className="message">
        <TextField
          type="text"
          label="Ecrivez votre tweet"
          id="textcontent"
          onChange={onChangedescri}
        />
        <Button variant="contained" component="label">
          Importer la nouvelle image
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            id="filecontent"
            onChange={onChangeimage}
          />
        </Button>

        <Button variant="contained" id="creertweet" onClick={functionModify}>
          Modifier
        </Button>
        {ismodifydone
          ? (localStorage.removeItem("id"), (<Navigate to="/accueil" />))
          : ""}
      </div>
    </div>
  );
};

export default Modifycomponent;
