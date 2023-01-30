import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TimeLine from "./pages/TimeLine";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Modify from "./pages/Modify";
import { UserContext } from "./script/UserContext";
import { Backgroundcolor } from "./script/Backgroundcolor";
import { useState } from "react";
import Profile from "./pages/Profile";

const App = () => {
  const [user, setUser] = useState(null);
  const [backgroundcolor, setBackgroundcolor] = useState("#FFFFFF");
  document.body.style.backgroundColor = backgroundcolor;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Backgroundcolor.Provider value={{ backgroundcolor, setBackgroundcolor }}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/auth/signup" element={<Signup />}></Route>
            <Route path="/accueil" element={<TimeLine />}></Route>
            <Route path="/accueil/modifier" element={<Modify />}></Route>
            <Route path="/profile" element={<Profile />}></Route>

            <Route path="*" element={<Navigate to="/auth/signup" />}></Route>
          </Routes>
        </BrowserRouter>
      </Backgroundcolor.Provider>
    </UserContext.Provider>
  );
};

export default App;
