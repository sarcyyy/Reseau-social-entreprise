import React from "react";
import Buttonconnect from "./Buttonconnect";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Loginoption = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const changeemail = (e) => {
    setEmail(e.target.value);
    console.log("email", email);
  };
  const changepassword = (e) => {
    setPassword(e.target.value);
    console.log("password", password);
  };
  const navigate = useNavigate();
  const gotocreate = (e) => {
    navigate("/auth/signup");
  };
  return (
    <div className="big">
      <div className="login_and_signup">
        <div className="form">
          <h2> Connectez-vous !</h2>
          <div className="inputbox">
            <input type="text" required="required" onChange={changeemail} />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputbox">
            <input
              type="password"
              required="required"
              onChange={changepassword}
            />
            <span>Mot de passe</span>
            <i></i>
          </div>
          <div class="links">
            <button
              type="button"
              className="no_button_style"
              onClick={gotocreate}
            >
              Créer un compte ?
            </button>
          </div>
          <Buttonconnect email={email} password={password} className="bla" />
        </div>
      </div>
    </div>
  );
};

export default Loginoption;
