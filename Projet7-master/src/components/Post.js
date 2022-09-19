import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { deletefetch, dislikefetch, likefetch } from "../script/Allfetch";
// regarder MaterialUI
const Post = ({ tweet, forceUpdate, reducerValue }) => {
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
  // const [isthecreator, setIsthecreator] = useState(false);
  const userId = JSON.parse(localStorage.getItem("token")).userId;

  useEffect(() => {
    if (tweet.usersLiked.includes(userId)) {
      setLikeornot(true);
    } else {
      setLikeornot(false);
    }
    // if (tweet.userId === userId) {
    //   setIsthecreator(true);
    // }
    // if (tweet.userId !== userId) {
    //   setIsthecreator(false);
    // }
  }, [tweet.usersLiked, tweet.userId, userId, reducerValue]);

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
        {/* {isthecreator ? ( */}
        <Button variant="contained" onClick={functionDelete}>
          supprimer
        </Button>
        {/* ) : (
          ""
        )} */}
        {/* {isthecreator ? ( */}
        <NavLink to="/accueil/modifier">
          <Button variant="contained" onClick={storageidmodify}>
            modifier
          </Button>
        </NavLink>
        {/* ) : (
          ""
        )} */}
      </div>
    </div>
  );
};

export default Post;
