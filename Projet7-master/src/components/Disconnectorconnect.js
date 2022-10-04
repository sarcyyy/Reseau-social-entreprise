import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
const Disconnectorconnect = () => {
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
