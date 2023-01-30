import { NavLink } from "react-router-dom";
import { verifyvalidity } from "../script/Allfetch";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Navigation = () => {
  const [verifytoken] = useState(
    JSON.parse(localStorage.getItem("token"))?.token
  );
  const navigate = useNavigate();
  useEffect(() => {
    verifyvalidity(verifytoken).then((rep) => {
      if (rep.ok === true) {
        navigate("/accueil");
      }
    });
  }, [navigate, verifytoken]);
  return (
    <ul className="navigation">
      <NavLink to="/auth/signup">
        <li>Créer un compte</li>
      </NavLink>
      <NavLink to="/auth/login">
        <li>Se connecter</li>
      </NavLink>
    </ul>
  );
};

export default Navigation;
