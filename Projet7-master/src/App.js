import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TimeLine from "./pages/TimeLine";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Modify from "./pages/Modify";
import { UserContext } from "./script/UserContext";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
