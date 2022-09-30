import React from "react";
import Modifycomponent from "../components/Modifycomponent";
import Disconnectorconnect from "../components/Disconnectorconnect";
import Profilepic from "../components/Profilepic";
import Retour from "../components/Retour";

const Modify = () => {
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
