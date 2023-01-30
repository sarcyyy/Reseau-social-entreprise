import React from "react";
import Post from "./Post";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
import { UserContext } from "../script/UserContext";
import { useContext } from "react";
import userdata from "../script/Userdata";
import { verifyvalidity } from "../script/Allfetch";
const Blockpost = ({ forceUpdate, reducerValue }) => {
  const [userId, setUserId] = useState();
  const [data, setData] = useState([]);
  const [rangevalue, setRangevalue] = useState(5);
  const [maplike, setMaplike] = useState(false);
  const [admin, setAdmin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [verifytoken] = useState(
    JSON.parse(localStorage.getItem("token"))?.token
  );
  const navigate = useNavigate();

  useEffect(() => {
    verifyvalidity(verifytoken).then((rep) => {
      if (rep.ok !== true) {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        navigate("/auth/login");
      }
    });

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
      if (user !== null) {
        setUser(user);
      }

      if (user.admin !== null) {
        setAdmin(user.admin);
      }
      console.log("user", user);
      setUserId(user._id);
    });
  }, [reducerValue, maplike, setUser, verifytoken, navigate]);

  const handleclick = (e) => {
    setRangevalue(e.target.value);
  };
  if (user === null)
    return (
      <div className="chargement">
        <p>Chargement..</p>
      </div>
    );
  return (
    <div>
      <Filter
        handleclick={handleclick}
        rangevalue={rangevalue}
        tweet={data}
        maplike={maplike}
        setMaplike={setMaplike}
      />

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
    </div>
  );
};

export default Blockpost;
