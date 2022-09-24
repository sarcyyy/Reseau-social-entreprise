import React from "react";
import { UserContext } from "../script/UserContext";
import { useContext } from "react";
const Profilepic = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div className="avatar">
        <img
          src="/img/logogroupo.png"
          alt="profil"
          className="picsize"
          onClick={() => {}}
        />
        <p>{user.name}</p>
      </div>
    </div>
  );
};

export default Profilepic;
