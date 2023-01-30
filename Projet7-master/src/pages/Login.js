import React from "react";
import Loginoption from "../components/Loginoption";
import Navigation from "../components/Navigation";
import { Backgroundcolor } from "../script/Backgroundcolor";
import { useContext } from "react";
const Login = () => {
  const { backgroundcolor, setBackgroundcolor } = useContext(Backgroundcolor);

  setBackgroundcolor("#232735");
  return (
    <div>
      <Navigation />
      <Loginoption className="testa" />
    </div>
  );
};

export default Login;
