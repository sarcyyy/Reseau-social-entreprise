import React from "react";
import Blockpost from "../components/Blockpost";
import Disconnectorconnect from "../components/Disconnectorconnect";
import Profilepic from "../components/Profilepic";

const TimeLine = () => {
  return (
    <div>
      {/* Dans le futur, si connecter, navigation contiendra Disconnectedorconnect */}
      <Profilepic />
      <Disconnectorconnect />
      <Blockpost />
    </div>
  );
};

export default TimeLine;
