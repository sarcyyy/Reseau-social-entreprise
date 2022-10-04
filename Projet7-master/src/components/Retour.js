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
      {" "}
      <Button variant="contained" onClick={retour}>
        {" "}
        Retour{" "}
      </Button>{" "}
    </div>
  );
};

export default Retour;
