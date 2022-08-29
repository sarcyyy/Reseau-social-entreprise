import React from "react";
import { NavLink } from "react-router-dom";
const Buttonconnect = () => {
  return (
    <div className="LoginAndsignup paddingT10">
      <NavLink to="/accueil">
        <button>Connection</button>
      </NavLink>
    </div>
  );
};

export default Buttonconnect;
