const Post = ({ tweet }) => {
  return (
    <div className="poststyle">
      <div className="bordertop">
        <p>{tweet.name}</p>
        <p>{tweet.description}</p>
        <img src={tweet.imageUrl} alt="" className="tweetpicsize" />
        <button>like</button>
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

        <button
          onClick={() => {
            const token = JSON.parse(localStorage.getItem("token")).token;
            fetch("http://localhost:3000/api/accueil/" + tweet._id, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
              method: "PUT",
            }).then((rep) => {
              console.log(rep);
            });
          }}
        >
          modifier
        </button>
      </div>
    </div>
  );
};

export default Post;
