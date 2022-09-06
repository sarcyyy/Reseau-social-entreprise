import React from "react";

const Filter = ({ handleclick, rangevalue }) => {
  return (
    <div>
      <div
        className="filterstyle"
        onClick={handleclick}
        rangevalue={rangevalue}
      >
        <input
          type="number"
          min="1"
          max="25"
          value={rangevalue}
          onChange={handleclick}
          id="testdd"
        />
        <button>Favoris</button>
      </div>
    </div>
  );
};

export default Filter;
