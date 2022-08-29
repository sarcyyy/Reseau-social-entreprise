import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeLine from "./pages/TimeLine";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/accueil" element={<TimeLine />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
