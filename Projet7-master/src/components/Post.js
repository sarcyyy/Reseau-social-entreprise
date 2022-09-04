import React from "react";

const Post = ({ tweet }) => {
  return (
    <div className="poststyle">
      <div className="bordertop">
        <p>{tweet.name}</p>
        <p>{tweet.description}</p>
        <img src="/img/logo192.png" alt="" className="tweetpicsize" />
        {/* dans le futur : {tweet.imageUrl} */}
        <button>like</button>
        <button>dislike</button>
        <button>favoris</button>
      </div>
    </div>
  );
};

export default Post;
