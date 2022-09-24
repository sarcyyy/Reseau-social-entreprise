import React, { useReducer } from "react";
import Blockpost from "../components/Blockpost";
import Disconnectorconnect from "../components/Disconnectorconnect";
import Profilepic from "../components/Profilepic";
import Tweet from "../components/Tweet";
// import { UserContext } from "../script/UserContext";
const TimeLine = () => {
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  // const [admin, setAdmin] = useState(null);
  return (
    <div>
      <Profilepic />
      <Disconnectorconnect />
      {/* <UserContext.Provider value={{ admin, setAdmin }}> */}
      <Tweet forceUpdate={forceUpdate} reducerValue={reducerValue} />
      <Blockpost forceUpdate={forceUpdate} reducerValue={reducerValue} />
      {/* </UserContext.Provider> */}
    </div>
  );
};

export default TimeLine;
