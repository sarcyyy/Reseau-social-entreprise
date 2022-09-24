import React from "react";
import Post from "./Post";
import { useEffect, useState } from "react";
// import islogged from "../script/Islogged";
import Filter from "./Filter";

import { UserContext } from "../script/UserContext";
import { useContext } from "react";

const Blockpost = ({ forceUpdate, reducerValue }) => {
  const [userId, setUserId] = useState();
  const [data, setData] = useState([]);
  const [rangevalue, setRangevalue] = useState(5);
  const [maplike, setMaplike] = useState(false);
  const { admin, setAdmin } = useContext(UserContext);

  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("token")).userId);
    // const testtoken = localStorage.getItem("token");

    // if (islogged(testtoken) === false) {
    //   window.location = "http://localhost:7200/auth/login";
    // }
    const verifytoken = JSON.parse(localStorage.getItem("token")).token;

    // userId a généraliser Timeline

    fetch("http://localhost:3000/api/accueil", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + verifytoken,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((rep) => {
        setData(rep);
      });
    fetch("http://localhost:3000/api/auth/validity", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + verifytoken,
      },
      method: "POST",
    })
      .then((rep) => rep.json())
      .then((user) => {
        if (user.admin !== true) {
          setAdmin(user.admin);
        }
      });
  }, [reducerValue, maplike, setAdmin]);

  const handleclick = (e) => {
    setRangevalue(e.target.value);
  };

  return (
    <div>
      <div className="blockpost">
        {maplike
          ? data.map((tweet, index) => {
              if (tweet.usersLiked.includes(userId)) {
                return (
                  <Post
                    key={index}
                    tweet={tweet}
                    forceUpdate={forceUpdate}
                    reducerValue={reducerValue}
                  />
                );
              } else {
                return "";
              }
            })
          : data
              .slice(0, rangevalue)
              .map((tweet, index) => (
                <Post
                  key={index}
                  tweet={tweet}
                  forceUpdate={forceUpdate}
                  reducerValue={reducerValue}
                />
              ))}
      </div>
      <button onClick={console.log(admin)}>cliquer</button>{" "}
      <Filter
        handleclick={handleclick}
        rangevalue={rangevalue}
        tweet={data}
        maplike={maplike}
        setMaplike={setMaplike}
      />
    </div>
  );
};

export default Blockpost;
