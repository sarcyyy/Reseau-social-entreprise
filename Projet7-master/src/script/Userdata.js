function userdata(token) {
  return fetch("http://localhost:3000/api/auth/validity", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    method: "POST",
  }).then((rep) => {
    return rep.json();
  });
}

export default userdata;
