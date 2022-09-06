import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Listederoulante from "./Listederoulante";

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
          src="/img/logo192.png"
          alt="profil"
          className="picsize"
          onClick={() => {}}
        />
        <p>{nompersonne}</p>
      </div>

      <Listederoulante />
    </div>
  );
};

export default Profilepic;
