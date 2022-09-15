import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// regarder MaterialUI
const Post = ({ tweet }) => {
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
    }).then((rep) => {});
  };
  const [likeornot, setLikeornot] = useState(false);
  const [tablelike] = useState(tweet.usersLiked);
  const [nblike, setNblike] = useState(tweet.likes);
  const userId = JSON.parse(localStorage.getItem("token")).userId;
  useEffect(() => {
    if (tablelike.includes(userId)) {
      setLikeornot(true);
    }
  }, []);

  return (
    <div className="poststyle">
      <div className="bordertop">
        <p>{tweet.name}</p>
        <p>{tweet.description}</p>
        <img src={tweet.imageUrl} alt="" className="tweetpicsize" />
        {likeornot ? (
          <button onClick={functionDislike}>dislike ( {nblike} likes)</button>
        ) : (
          <button onClick={functionLike}>like ( {nblike} likes)</button>
        )}
        <button onClick={functionDelete}>supprimer</button>
        <NavLink to="/accueil/modifier">
          <button
            onClick={() => {
              const id = tweet._id;
              localStorage.setItem("id", JSON.stringify(id));
            }}
          >
            modifier
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Post;
