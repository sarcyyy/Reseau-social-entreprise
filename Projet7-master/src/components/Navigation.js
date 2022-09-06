import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/auth/signup">
        <li>Créer un compte</li>
      </NavLink>
      <NavLink to="/auth/login">
        <li>Se connecter</li>
      </NavLink>
    </div>
  );
};

export default Navigation;
