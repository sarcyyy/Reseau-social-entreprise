import React from "react";
import Post from "./Post";
import { useEffect, useState } from "react";
import islogged from "../script/Islogged";
import Filter from "./Filter";
const Blockpost = ({ forceUpdate, reducerValue }) => {
  const [data, setData] = useState([]);
  const [rangevalue, setRangevalue] = useState(5);
  useEffect(() => {
    const testtoken = localStorage.getItem("token");

    if (islogged(testtoken) === false) {
      window.location = "http://localhost:7200/auth/login";
    }
    const verifytoken = JSON.parse(localStorage.getItem("token")).token;
    const token = verifytoken;
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
  }, [reducerValue]);

  const handleclick = (e) => {
    setRangevalue(e.target.value);
  };

  return (
    <div>
      <div className="blockpost">
        {data.slice(0, rangevalue).map((tweet, index) => (
          <Post
            key={index}
            tweet={tweet}
            forceUpdate={forceUpdate}
            reducerValue={reducerValue}
          />
        ))}
      </div>
      <Filter handleclick={handleclick} rangevalue={rangevalue} />
    </div>
  );
};

export default Blockpost;
