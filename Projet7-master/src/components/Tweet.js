import React from "react";
const Tweet = () => {
  return (
    <div className="tweetblock">
      <div className="message">
        <p>Ecrivez votre tweet</p>
        <input type="text" id="textcontent" />
        <input type="file" name="image" className="file" id="filecontent" />
      </div>
      <input
        type="submit"
        name=""
        id="creertweet"
        onClick={() => {
          let textcontent = document.getElementById("textcontent");
          let fileinput = document.getElementById("filecontent");
          console.log("filename");
          console.log(fileinput.files[0]);
          const file = new FormData();
          file.append("image", fileinput.files[0]);
          file.append("description", textcontent.value);
          file.append("name", " ceci est le nom");
          file.append("userId", "userid");
          fetch("http://localhost:3000/api/accueil", {
            headers: {
              Accept: "application/json",
            },
            method: "POST",
            body: file,
          }).then((rep) => {
            console.log(rep);
          });
        }}
      />
    </div>
  );
};

export default Tweet;
