import React from "react";
import CreateTweet from "../script/Createtweet";
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
          let filecontent = document.getElementById("filecontent");
          let tweetcontent = {
            texte: textcontent.value,
            file: filecontent.value,
          };
          console.log(CreateTweet(tweetcontent));
        }}
      />
    </div>
  );
};

export default Tweet;
