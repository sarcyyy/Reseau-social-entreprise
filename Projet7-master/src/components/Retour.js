import { Button } from "@mui/material";
import React from "react";

const Retour = () => {
  const retour = (e) => {
    localStorage.removeItem("id");
    window.location = "http://localhost:7200/accueil";
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
