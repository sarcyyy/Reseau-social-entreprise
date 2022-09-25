import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { deletefetch, dislikefetch, likefetch } from "../script/Allfetch";
import { UserContext } from "../script/UserContext";
import { useContext } from "react";
// import { UserContext } from "../script/UserContext";
// import { useContext } from "react";
const Post = ({ tweet, forceUpdate, admin }) => {
  const { user } = useContext(UserContext);
  const functionLike = (e) => {
    likefetch(tweet._id, forceUpdate);
  };
  const functionDislike = (e) => {
    dislikefetch(tweet._id, forceUpdate);
  };
  const functionDelete = (e) => {
    deletefetch(tweet._id, forceUpdate);
  };
  const storageidmodify = (e) => {
    const id = tweet._id;
    localStorage.setItem("id", JSON.stringify(id));
  };
  const [likeornot, setLikeornot] = useState(false);
  const [isthecreator, setIsthecreator] = useState(false);

  // const { admin, setAdmin } = useContext(UserContext);

  useEffect(() => {
    if (tweet.usersLiked.includes(user._id)) {
      setLikeornot(true);
    } else {
      setLikeornot(false);
    }
    if (tweet.userId === user._id || admin === "true") {
      setIsthecreator(true);
    }
    if ((tweet.userId !== user._id) & (admin !== "true")) {
      setIsthecreator(false);
    }
  }, [tweet, user._id, admin]);

  return (
    <div className="poststyle">
      <div className="bordertop">
        <p>{tweet.name}</p>
        <p>{tweet.description}</p>
        <img src={tweet.imageUrl} alt="" className="tweetpicsize" />
        {likeornot ? (
          <div>
            <FavoriteIcon onClick={functionDislike} />
            <p>{tweet.likes}</p>
          </div>
        ) : (
          <div>
            <FavoriteBorderIcon onClick={functionLike} />
            <p>{tweet.likes}</p>
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
            <Button variant="contained" onClick={storageidmodify}>
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
