import React from "react";
const Tweet = () => {
  const createtweet = (e) => {
    let textcontent = document.getElementById("textcontent");
    let fileinput = document.getElementById("filecontent");
    let name = JSON.parse(localStorage.getItem("token")).name;
    const file = new FormData();
    file.append("image", fileinput.files[0]);
    file.append("description", textcontent.value);
    file.append("name", name);
    file.append("userId", "userid");
    const verifytoken = JSON.parse(localStorage.getItem("token")).token;
    const token = verifytoken;
    fetch("http://localhost:3000/api/accueil", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      method: "POST",
      body: file,
    }).then((rep) => {
      console.log(rep);
    });
  };
  return (
    <div className="tweetblock">
      <div className="message">
        <p>Ecrivez votre tweet</p>
        <input type="text" id="textcontent" />
        <input type="file" name="image" className="file" id="filecontent" />
      </div>
      <input type="submit" name="" id="creertweet" onClick={createtweet} />
    </div>
  );
};

export default Tweet;
