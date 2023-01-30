import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const Retour = () => {
  const navigate = useNavigate();
  const retour = (e) => {
    localStorage.removeItem("id");

    navigate("/accueil");
  };
  return (
    <div>
      {/* <Button variant="contained" className="retourstyle" onClick={retour}>
        Retour
      </Button> */}
      <button className="button_style retour_position" onClick={retour}>
        retour
      </button>
    </div>
  );
};

export default Retour;
