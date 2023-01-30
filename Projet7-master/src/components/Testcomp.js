import React, { useState } from "react";

const Testcomp = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <button onClick={() => setShowList(!showList)}>Open List</button>
      <ul className={showList ? "show" : "hide"}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Testcomp;
