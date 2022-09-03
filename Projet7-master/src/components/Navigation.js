import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/auth/signup">
        {/* <ul> */}
        <li>Créer un compte</li>
        {/* </ul> */}
      </NavLink>
      <NavLink to="/auth/login">
        {/* <ul> */}
        <li>Se connecter</li>
        {/* </ul> */}
      </NavLink>
    </div>
  );
};

export default Navigation;
