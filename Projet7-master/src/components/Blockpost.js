import React from "react";
import Post from "./Post";
import { useEffect, useState } from "react";
import islogged from "../script/Islogged";
import Filter from "./Filter";
import { UserContext } from "../script/UserContext";
import { useContext } from "react";
import userdata from "../script/Userdata";
const Blockpost = ({ forceUpdate, reducerValue }) => {
  const [userId, setUserId] = useState();
  const [data, setData] = useState([]);
  const [rangevalue, setRangevalue] = useState(5);
  const [maplike, setMaplike] = useState(false);
  const [admin, setAdmin] = useState(false);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const testtoken = localStorage.getItem("token");
    if (islogged(testtoken) === false) {
      window.location = "http://localhost:7200/auth/login";
    }
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
    userdata(verifytoken).then((user) => {
      setUser(user);
      if (user.admin !== true) {
        setAdmin(user.admin);
      }
      console.log("user", user);
      setUserId(user._id);
    });
  }, [reducerValue, maplike, setUser]);

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
                    admin={admin}
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
                  admin={admin}
                />
              ))}
      </div>
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
