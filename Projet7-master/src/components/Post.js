import { NavLink } from "react-router-dom";
const Post = ({ tweet }) => {
  return (
    <div className="poststyle">
      <div className="bordertop">
        <p>{tweet.name}</p>
        <p>{tweet.description}</p>
        <img src={tweet.imageUrl} alt="" className="tweetpicsize" />
        <button
          onClick={() => {
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
          }}
        >
          like ( {tweet.likes} likes)
        </button>
        {/* utiliser useState pour check si il a like pour changer l'affichage? */}
        <button
          onClick={() => {
            const token = JSON.parse(localStorage.getItem("token")).token;
            fetch("http://localhost:3000/api/accueil/" + tweet._id, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
              method: "DELETE",
            }).then((rep) => {});
          }}
        >
          supprimer
        </button>
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
