import React, { useReducer, useState } from "react";
import Blockpost from "../components/Blockpost";
import Disconnectorconnect from "../components/Disconnectorconnect";
import Profilepic from "../components/Profilepic";
import Tweet from "../components/Tweet";
import { UserContext } from "../script/UserContext";

const TimeLine = () => {
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const [user, setUser] = useState(null);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Profilepic />
        <Disconnectorconnect />
        <Tweet forceUpdate={forceUpdate} reducerValue={reducerValue} />
        <Blockpost forceUpdate={forceUpdate} reducerValue={reducerValue} />
      </UserContext.Provider>
    </div>
  );
};

export default TimeLine;
