import React from "react";
import Filter from "./Filter";
import Post from "./Post";
import { useEffect, useState } from "react";
const Blockpost = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/accueil")
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
