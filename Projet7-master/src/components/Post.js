import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { deletefetch, dislikefetch, likefetch } from "../script/Allfetch";
import { UserContext } from "../script/UserContext";
import { useContext } from "react";

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
  const [isthecreator, setIsthecreator] = useState("");

  useEffect(() => {
    if (tweet.usersLiked.includes(user?._id)) {
      setLikeornot(true);
    } else {
      setLikeornot(false);
    }
    if (tweet.userId === user?._id || admin === "true") {
      setIsthecreator(true);
    }
    if ((tweet.userId !== user?._id) & (admin !== "true")) {
      setIsthecreator(false);
    }
  }, [tweet, user?._id, admin, setIsthecreator]);

  return (
    <div className="poststyle">
      <div className="bordertop">
        <p className="person_name">{tweet.name}</p>
        <p className="description_field">{tweet.description}</p>

        <img src={tweet.imageUrl} alt="" className="tweetpicsize" />
        {likeornot ? (
          <div>
            <FavoriteIcon onClick={functionDislike} className="blue_color" />
            <p>{tweet.likes}</p>
          </div>
        ) : (
          <div>
            <FavoriteBorderIcon onClick={functionLike} />
            <p>{tweet.likes}</p>
          </div>
        )}
        {isthecreator ? (
          <button
            type="button"
            className="button_style"
            onClick={functionDelete}
          >
            Supprimer
          </button>
        ) : (
          ""
        )}
        {isthecreator ? (
          <NavLink to="/accueil/modifier">
            <button
              type="button"
              className="button_style"
              onClick={storageidmodify}
            >
              Modifier
            </button>
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Post;
