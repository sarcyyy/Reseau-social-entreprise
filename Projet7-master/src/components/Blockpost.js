import React from "react";
import Filter from "./Filter";
import Post from "./Post";
import { useEffect, useState } from "react";
import islogged from "../script/Islogged";
const Blockpost = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  if (islogged(token) === false) {
    window.location = "http://localhost:7200/auth/login";
  }
  useEffect(() => {
    fetch("http://localhost:3000/api/accueil", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
