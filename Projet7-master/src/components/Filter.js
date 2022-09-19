import React from "react";

import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const Filter = ({ handleclick, rangevalue, tweet, maplike, setMaplike }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(tweet);
  }, [data, tweet, maplike]);
  const maplikeedit = (e) => {
    setMaplike(true);
  };

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

        <Button variant="contained" size="small" onClick={maplikeedit}>
          Post liké
        </Button>
      </div>
    </div>
  );
};

export default Filter;
