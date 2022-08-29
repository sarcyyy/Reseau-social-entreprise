import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/signup">
        {/* <ul> */}
        <li>Créer un compte</li>
        {/* </ul> */}
      </NavLink>
      <NavLink to="/login">
        {/* <ul> */}
        <li>Se connecter</li>
        {/* </ul> */}
      </NavLink>
    </div>
  );
};

export default Navigation;
