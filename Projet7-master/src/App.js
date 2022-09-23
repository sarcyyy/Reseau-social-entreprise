import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TimeLine from "./pages/TimeLine";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Modify from "./pages/Modify";
import { UserContext } from "./script/UserContext";

const App = () => {
  const [admin, setAdmin] = useState(null);
  // const adminvalue = useMemo(() => ({ admin, setAdmin }), [admin, setAdmin]);
  return (
    <UserContext.Provider value={{ admin, setAdmin }}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/auth/signup" />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/signup" element={<Signup />}></Route>
          <Route path="/accueil" element={<TimeLine />}></Route>
          <Route path="/accueil/modifier" element={<Modify />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
