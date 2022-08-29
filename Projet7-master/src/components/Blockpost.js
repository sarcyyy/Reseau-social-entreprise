import React from "react";
import Filter from "./Filter";
import Post from "./Post";

const Blockpost = () => {
  return (
    <div>
      {/* dans le futur : fetch tout les elements de la card */}
      <div className="blockpost">
        <Post />
        <Filter />
      </div>
    </div>
  );
};

export default Blockpost;
