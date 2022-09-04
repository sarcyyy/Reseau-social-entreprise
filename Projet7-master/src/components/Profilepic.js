import React from "react";
// import { useState } from "react";
import Listederoulante from "./Listederoulante";

const Profilepic = () => {
  // const [Isactive, setIsactive] = useState(false);
  return (
    <div>
      <div className="avatar">
        <img
          src="/img/logo192.png"
          alt="profil"
          className="picsize"
          onClick={() => {
            // setIsactive(true);
          }}
        />
        <p>Nom de la personne</p>
      </div>
      {/* { Isactive ? <Listederoulante /> : ""} */}
      <Listederoulante />
    </div>
  );
};

export default Profilepic;
