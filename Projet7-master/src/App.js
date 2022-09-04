import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TimeLine from "./pages/TimeLine";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <Navigate to="/auth/signup" /> } ></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
        <Route path="/accueil" element={<TimeLine />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
