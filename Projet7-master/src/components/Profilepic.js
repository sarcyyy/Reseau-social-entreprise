import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../script/UserContext";
import { useContext } from "react";

const Profilepic = () => {
  const [nompersonne, setNompersonne] = useState("");
  const { user } = useContext(UserContext);
  useEffect(() => {
    setNompersonne(JSON.parse(localStorage.getItem("token")).name);
    console.log(nompersonne);
  }, [nompersonne]);

  return (
    <div>
      <div className="avatar">
        <img
          src="/img/logogroupo.png"
          alt="profil"
          className="picsize"
          onClick={() => {}}
        />
        <p> {user?.name}</p>
      </div>
    </div>
  );
};

export default Profilepic;
