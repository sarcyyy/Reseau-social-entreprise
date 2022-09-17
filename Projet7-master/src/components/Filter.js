import React from "react";
import { Slider } from "@mui/material";
import { Button } from "@mui/material";
const Filter = ({ handleclick, rangevalue }) => {
  return (
    <div>
      <div className="filterstyle">
        <p className="textcenter">Filtres</p>
        <Slider
          aria-label="Temperature"
          value={rangevalue}
          valueLabelDisplay="auto"
          onChange={handleclick}
          step={5}
          marks
          min={5}
          max={15}
        />

        <Button variant="contained" size="small">
          Post liké
        </Button>
      </div>
    </div>
  );
};

export default Filter;
