import React from "react";
// import Filter from "./Filter";
import Post from "./Post";
import { useEffect, useState } from "react";
import islogged from "../script/Islogged";
const Blockpost = () => {
  const [data, setData] = useState([]);
  const [rangevalue, setRangevalue] = useState(2);
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
  const handleclick = (e) => {
    setRangevalue(e.target.value);
  };
  return (
    <div>
      <div className="blockpost">
        {data.slice(0, rangevalue).map((tweet, index) => (
          <Post key={index} tweet={tweet} />
        ))}
      </div>
      <div
        className="filterstyle"
        onClick={handleclick}
        rangevalue={rangevalue}
      >
        <input
          type="number"
          min="1"
          max="25"
          value={rangevalue}
          onChange={handleclick}
          id="testdd"
        />
      </div>
    </div>
  );
};

export default Blockpost;
