import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../script/UserContext";
import { useContext } from "react";
import { verifyvalidity } from "../script/Allfetch";
import userdata from "../script/Userdata";
import { useNavigate } from "react-router-dom";
const Profilepic = () => {
  const [nompersonne, setNompersonne] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [verifytoken] = useState(
    JSON.parse(localStorage.getItem("token"))?.token
  );
  const navigate = useNavigate();
  useEffect(() => {
    setNompersonne(JSON.parse(localStorage.getItem("token"))?.name);
    console.log(nompersonne);

    if (user === null) {
      verifyvalidity(verifytoken).then((rep) => {
        if (rep.ok !== true) {
          localStorage.removeItem("token");
          localStorage.removeItem("id");
          navigate("/auth/login");
        }
      });
      userdata(verifytoken).then((user) => {
        if (user !== null) {
          setUser(user);
        }
      });
    }
  }, [nompersonne, setUser, user, verifytoken, navigate]);

  return (
    <div>
      <div className="avatar">
        <img
          src="/img/logogroupo.png"
          alt="profil"
          className="picsize"
          onClick={() => {}}
        />

        <p className="nompersonne"> {user?.name}</p>
      </div>
    </div>
  );
};

export default Profilepic;
