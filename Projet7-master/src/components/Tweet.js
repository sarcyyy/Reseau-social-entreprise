import React from "react";
const Tweet = () => {
  return (
    <div className="tweetblock">
      <div className="message">
        <p>Ecrivez votre tweet</p>
        <input type="text" id="textcontent" />
        <input type="file" className="file" id="filecontent" />
      </div>
      <input
        type="submit"
        name=""
        id="creertweet"
        onClick={() => {
          let textcontent = document.getElementById("textcontent");
          let filename = document.getElementById("filecontent").files[0];
          console.log("filename");
          console.log(filename);
          let tweet = {
            name: "nom personne",
            description: textcontent.value,
            userId: "alkreo34yd",
            imageUrl: filename,
          };
          console.log(tweet);
          fetch("http://localhost:3000/api/accueil", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(tweet),
          }).then((rep) => {
            console.log(rep);
          });
        }}
      />
    </div>
  );
};

export default Tweet;
