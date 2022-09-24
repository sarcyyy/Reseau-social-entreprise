import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
const Modifycomponent = () => {
  const [tweet, setTweet] = useState("");
  const [ismodifydone, setIsmodifydone] = useState(false);
  // const [newfile, setNewfile] = useState();
  const [newdescri, setNewdescri] = useState();
  useEffect(() => {
    const tweetid = JSON.parse(localStorage.getItem("id"));
    const token = JSON.parse(localStorage.getItem("token")).token;

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
        setTweet(tweet);
      });
  }, []);
  console.log(tweet.usersLiked);
  const onChangedescri = (e) => {
    setNewdescri(e.target.value);
  };

  const functionModify = (e) => {
    // let newdescri = document.getElementById("newdescri");
    let newfile = document.getElementById("newfile");
    // useState
    // console.log(newfile);
    // console.log("descri", newdescri);
    const filed = new FormData();
    filed.append("image", newfile.files[0]);
    filed.append("description", newdescri);
    const token = JSON.parse(localStorage.getItem("token")).token;
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
      }
    });
  };
  return (
    <div className="poststyle">
      <div className="bordertop">
        <p>{tweet.name}</p>
        <input
          type="text"
          value={newdescri}
          onChange={onChangedescri}
          id="newdescri"
        />
        <input
          type="file"
          defaultValue={tweet.imageUrl}
          id="newfile"
          // onChange={onChangefile}
        />

        <button onClick={functionModify}>modifier</button>
        {ismodifydone
          ? (localStorage.removeItem("id"), (<Navigate to="/accueil" />))
          : ""}
      </div>
    </div>
  );
};

export default Modifycomponent;
