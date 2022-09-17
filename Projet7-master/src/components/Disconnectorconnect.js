// import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
const Disconnectorconnect = () => {
  //   const [trueornot, setTrueornot] = useState(true);
  //   const [Isconnected, setIsconnected] = useState(
  "Appel de la fonction connected";
  //   );
  const removetoken = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
  };
  return (
    <div className="disconnect">
      <NavLink to="/">
        <Button variant="outlined" onClick={removetoken}>
          Déconnection
        </Button>
      </NavLink>
    </div>
  );
};

export default Disconnectorconnect;
