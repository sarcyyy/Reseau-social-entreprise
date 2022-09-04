export default async function Verifyformulaire(formulaire) {
  fetch("http://localhost:3000/api/auth/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formulaire),
  })
    // .then((reponse) => reponse.json())
    .then((tweet) => {
      console.log(tweet.ok);
      if (tweet.ok === true) {
        return true;
      } else {
        return false;
      }
    });
  // return tweet.ok;
}
