function Verifyformulaire(formulaire) {
  let b = "fassslse";
  fetch("http://localhost:3000/api/auth/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formulaire),
  })
    .then((reponse) => reponse.json())
    .then((tweet) => {
      if (tweet.ok === true) {
        return (b = true);
      } else {
        return (b = false);
      }
    });
  return b;
}
export default Verifyformulaire;
