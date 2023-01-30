import React, { useContext } from "react";
import { UserContext } from "../script/UserContext";

const Profileedit = () => {
  const { user } = useContext(UserContext);
  if (user !== null) {
    const result = Object.entries(user);
    return (
      <div>
        {result?.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user[0]} &nbsp;:&nbsp; &nbsp; {user[1]}
              </p>
              <p></p>
            </div>
          );
        })}
      </div>
    );
  }
  if (user === null) {
    return (
      <div>
        <p>chargement</p>
      </div>
    );
  }
};

export default Profileedit;
