import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Modifycomponent = () => {
  const [tweet, setTweet] = useState("");
  const [ismodifydone, setIsmodifydone] = useState(false);
  const [descriptionvalue, setDescriptionvalue] = useState("");
  const [newdescri, setNewdescri] = useState("");
  const [newimage, setNewimage] = useState("");
  const [token] = useState(JSON.parse(localStorage.getItem("token"))?.token);
  const navigate = useNavigate();
  useEffect(() => {
    const tweetid = JSON.parse(localStorage.getItem("id"));

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
          navigate("/accueil");
        }
        setTweet(tweet);
        setDescriptionvalue(tweet.description);
        setNewdescri(tweet.description);
      });
  }, [navigate, token]);
  console.log(tweet.usersLiked);
  const onChangedescri = (e) => {
    setNewdescri(e.target.value);
    setDescriptionvalue(e.target.value);
  };
  const onChangeimage = (e) => {
    setNewimage(e.target.files[0]);
  };

  const functionModify = (e) => {
    const filed = new FormData();
    filed.append("image", newimage);
    filed.append("description", newdescri);

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
        <div className="inputbox2">
          <input
            type="text"
            required="required"
            onChange={onChangedescri}
            value={descriptionvalue}
          />
          <span>Modifiez votre message ! </span>
          <i></i>
        </div>
        <label for="file" className="label-file" value="Envoyer le post!">
          Importer une nouvelle image ?
        </label>
        <input
          id="file"
          hidden
          class="input-file"
          type="file"
          onChange={onChangeimage}
        />
        <input
          id="tweet"
          value="Envoyer le post!"
          className="label-file text-size"
          type="submit"
          onClick={functionModify}
        />

        {ismodifydone
          ? (localStorage.removeItem("id"), (<Navigate to="/accueil" />))
          : ""}
      </div>
    </div>
  );
};

export default Modifycomponent;
