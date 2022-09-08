// import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Disconnectorconnect = () => {
  //   const [trueornot, setTrueornot] = useState(true);
  //   const [Isconnected, setIsconnected] = useState(
  "Appel de la fonction connected";
  //   );

  return (
    <div className="disconnect">
      {/* <ul>
         <div className="navigation">{trueornot ? component disconnect : nothing}</div>
      </ul> */}
      <NavLink to="/">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("id");
          }}
        >
          Déconnection
        </button>
      </NavLink>
    </div>
  );
};

export default Disconnectorconnect;
