import React from "react";

const Filter = ({ onclick, rangevalue }) => {
  return (
    <div className="filterstyle">
      <input
        type="number"
        min="1"
        max="25"
        onChange={onclick}
        defaultValue={rangevalue}
        id="testdd"
        value={rangevalue}
      />
    </div>
  );
};

export default Filter;
