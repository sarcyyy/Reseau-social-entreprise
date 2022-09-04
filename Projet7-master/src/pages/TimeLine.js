import React from "react";
import Blockpost from "../components/Blockpost";
import Disconnectorconnect from "../components/Disconnectorconnect";
import Profilepic from "../components/Profilepic";
import Tweet from "../components/Tweet";

const TimeLine = () => {
  return (
    <div>
      {/* Dans le futur, si connecter, navigation contiendra Disconnectedorconnect */}
      <Profilepic />
      <Disconnectorconnect />
      <Tweet />
      <Blockpost />
    </div>
  );
};

export default TimeLine;
