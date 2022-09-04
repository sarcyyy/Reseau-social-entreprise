import React from "react";

const Post = () => {
  return (
    <div className="poststyle">
      <div className="bordertop">
        <p>Nom personne</p>
        <p>texte</p>
        <img src="/img/logo192.png" alt="" className="tweetpicsize" />
        <button>like</button>
        <button>dislike</button>
        <button>favoris</button>
      </div>
      <div className="bordertop">
        <p>Nom personne</p>
        <p>texte</p>
        <img src="/img/logo192.png" alt="" className="tweetpicsize" />
        <button>like</button>
        <button>dislike</button>
        <button>favoris</button>
      </div>
      <div className="bordertop">
        <p>Nom personne</p>
        <p>texte</p>
        <button>like</button>
        <button>dislike</button>
        <button>favoris</button>
      </div>
    </div>
  );
};

export default Post;
