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
        <button
          onClick={() => {
            const token = localStorage.getItem("token").slice(1, -1);
            fetch("http://localhost:3000/api/accueil", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
              method: "DELETE",
            }).then((rep) => {
              console.log(rep);
            });
          }}
        >
          supprimer
        </button>
        <button>favoris</button>
      </div>
    </div>
  );
};

export default Post;
