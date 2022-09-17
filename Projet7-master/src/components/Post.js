import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// regarder MaterialUI
const Post = ({ tweet, forceUpdate, reducerValue }) => {
  const functionLike = (e) => {
    const token = JSON.parse(localStorage.getItem("token")).token;
    const test = {
      like: 1,
    };
    fetch("http://localhost:3000/api/accueil/" + tweet._id + "/like", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "POST",
      body: JSON.stringify(test),
    }).then((rep) => {
      console.log(rep);
    });
    setLikeornot(true);
    setNblike(nblike + 1);
  };
  const functionDislike = (e) => {
    const token = JSON.parse(localStorage.getItem("token")).token;
    const test = {
      like: 0,
    };
    fetch("http://localhost:3000/api/accueil/" + tweet._id + "/like", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "POST",
      body: JSON.stringify(test),
    }).then((rep) => {
      console.log(rep);
    });
    setLikeornot(false);
    setNblike(nblike - 1);
  };
  const functionDelete = (e) => {
    const token = JSON.parse(localStorage.getItem("token")).token;
    fetch("http://localhost:3000/api/accueil/" + tweet._id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "DELETE",
    }).then((rep) => {
      forceUpdate();
    });
    forceUpdate();
  };
  const [likeornot, setLikeornot] = useState(false);
  const [isthecreator, setIsthecreator] = useState(false);
  const [tablelike] = useState(tweet.usersLiked);
  const [nblike, setNblike] = useState(tweet.likes);
  const userId = JSON.parse(localStorage.getItem("token")).userId;

  useEffect(() => {
    if (tablelike.includes(userId)) {
      setLikeornot(true);
    } else {
      setLikeornot(false);
    }
    if (tweet.userId === userId) {
      setIsthecreator(true);
    }
    if (tweet.userId !== userId) {
      setIsthecreator(false);
    }
  }, [tablelike, tweet.userId, userId, reducerValue]);

  return (
    <div className="poststyle">
      <div className="bordertop">
        <p>{tweet.name}</p>
        <p>{tweet.description}</p>
        <img src={tweet.imageUrl} alt="" className="tweetpicsize" />
        {likeornot ? (
          <div>
            <FavoriteIcon onClick={functionDislike} />
            <p>{nblike}</p>
          </div>
        ) : (
          <div>
            <FavoriteBorderIcon onClick={functionLike} />
            <p>{nblike}</p>
          </div>
        )}
        {isthecreator ? (
          <Button variant="contained" onClick={functionDelete}>
            supprimer
          </Button>
        ) : (
          ""
        )}
        {isthecreator ? (
          <NavLink to="/accueil/modifier">
            <Button
              variant="contained"
              onClick={() => {
                const id = tweet._id;
                localStorage.setItem("id", JSON.stringify(id));
              }}
            >
              modifier
            </Button>
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Post;
