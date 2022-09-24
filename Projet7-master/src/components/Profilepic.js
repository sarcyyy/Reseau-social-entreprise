import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Profilepic = () => {
  const [nompersonne, setNompersonne] = useState("");
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
        <p>{nompersonne}</p>
      </div>
    </div>
  );
};

export default Profilepic;
