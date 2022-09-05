import React from "react";
import Filter from "./Filter";
import Post from "./Post";
import { useEffect, useState } from "react";
import islogged from "../script/Islogged";
const Blockpost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const verifytoken = localStorage.getItem("token");
    if (islogged(verifytoken) === false) {
      window.location = "http://localhost:7200/auth/login";
    }
    const token = localStorage.getItem("token").slice(1, -1);
    fetch("http://localhost:3000/api/accueil", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((rep) => {
        setData(rep);
      });
  }, []);
  return (
    <div>
      <div className="blockpost">
        {data.map((tweet, index) => (
          <Post key={index} tweet={tweet} />
        ))}
      </div>
      <div>
        <Filter />
      </div>
    </div>
  );
};

export default Blockpost;
