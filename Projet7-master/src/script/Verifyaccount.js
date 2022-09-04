function verifyformulaire(formulaire) {
    console.log(JSON.stringify(formulaire));
    fetch("http://localhost:3000/api/auth/login",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(formulaire),
        
}
)
.then( () =>console.log("good"))
.catch( () => console.log("not good"))
}
export default verifyformulaire;
