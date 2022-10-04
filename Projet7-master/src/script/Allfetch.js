export function deletefetch(tweetid, forceUpdate) {
  const token = JSON.parse(localStorage.getItem("token"));
  return fetch("http://localhost:3000/api/accueil/" + tweetid, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.token,
    },
    method: "DELETE",
  }).then((rep) => {
    forceUpdate();
  });
}
export function likefetch(tweetid, forceUpdate) {
  const token = JSON.parse(localStorage.getItem("token"));
  const like = {
    like: 1,
  };
  return fetch("http://localhost:3000/api/accueil/" + tweetid + "/like", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.token,
    },
    method: "POST",
    body: JSON.stringify(like),
  }).then((rep) => {
    console.log(rep);

    forceUpdate();
  });
}
export function dislikefetch(tweetid, forceUpdate) {
  const token = JSON.parse(localStorage.getItem("token"));
  const dislike = {
    like: 0,
  };
  return fetch("http://localhost:3000/api/accueil/" + tweetid + "/like", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.token,
    },
    method: "POST",
    body: JSON.stringify(dislike),
  }).then((rep) => {
    console.log(rep);

    forceUpdate();
  });
}
export function createfetch(file, forceUpdate) {
  const token = JSON.parse(localStorage.getItem("token"));
  fetch("http://localhost:3000/api/accueil", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token.token,
    },
    method: "POST",
    body: file,
  }).then((rep) => {
    forceUpdate();
  });
}

export function verifyvalidity(token) {
  return fetch("http://localhost:3000/api/auth/validity", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    method: "POST",
  }).then((rep) => {
    return rep;
  });
}
