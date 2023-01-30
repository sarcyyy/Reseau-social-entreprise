import React, { useReducer } from "react";
import Blockpost from "../components/Blockpost";
import Disconnectorconnect from "../components/Disconnectorconnect";
import Profilepic from "../components/Profilepic";
import Tweet from "../components/Tweet";
import { Backgroundcolor } from "../script/Backgroundcolor";
import { useContext } from "react";
const TimeLine = () => {
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const { setBackgroundcolor } = useContext(Backgroundcolor);
  setBackgroundcolor("#232735");

  return (
    <div>
      <Profilepic />
      <Disconnectorconnect />
      <Tweet forceUpdate={forceUpdate} reducerValue={reducerValue} />
      <Blockpost forceUpdate={forceUpdate} reducerValue={reducerValue} />
    </div>
  );
};

export default TimeLine;
