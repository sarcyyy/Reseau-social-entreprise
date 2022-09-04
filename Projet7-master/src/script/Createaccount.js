function envoiformulaire(formulaire) {
  console.log(JSON.stringify(formulaire));
  fetch("http://localhost:3000/api/auth/signup", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formulaire),
  });
}
export default envoiformulaire;
