import userEvent from "@testing-library/user-event";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { UserContext } from "../script/UserContext";
// import { useContext } from "react";
// import userdata from "../script/Userdata";
const Profilepic = () => {
  // const { user, setUser } = useContext(UserContext);
  const [nompersonne, setNompersonne] = useState("");
  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("token")).token;
    //   userdata(token).then((user) => {
    //     setUser(user);
    //     if (user.admin !== true) {
    //       setUser(user);
    //     }
    //   });
    // }, []);
    setNompersonne(JSON.parse(localStorage.getItem("token")).name);
    console.log(nompersonne);
  }, [nompersonne]);
  // if (!user) {return null}
  return (
    <div>
      <div className="avatar">
        <img
          src="/img/logogroupo.png"
          alt="profil"
          className="picsize"
          onClick={() => {}}
        />
        <p> {nompersonne && nompersonne}</p>
      </div>
    </div>
  );
};

export default Profilepic;
