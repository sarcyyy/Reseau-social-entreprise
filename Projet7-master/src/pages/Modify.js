import React from "react";
import Modifycomponent from "../components/Modifycomponent";
import Disconnectorconnect from "../components/Disconnectorconnect";
import Profilepic from "../components/Profilepic";
import Retour from "../components/Retour";
import { Backgroundcolor } from "../script/Backgroundcolor";
import { useContext } from "react";
const Modify = () => {
  const { setBackgroundcolor } = useContext(Backgroundcolor);
  setBackgroundcolor("#232735");
  return (
    <div>
      <Profilepic />
      <Retour />
      <Modifycomponent />
      <Disconnectorconnect />
    </div>
  );
};

export default Modify;
