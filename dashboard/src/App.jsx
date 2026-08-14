import "./App.css";
import React from "react";
import Home from "./components/Home.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn.jsx";

//form ma use-state use krvanu chhe
//data backend ma jay avu krvanu chhe form mathi
//sacho hse id pass to now backend ma seccuss massage chhe & app.jsx ma id-pass sacho hoy to dash ma jse
//note ma flow drwa kri smjvanu chhe + chatGPT cheat

function App() {
  const isLoggedIn = false; // aanu create krvanu chhe later this will come from auth (JWT/localStorage)

  return (
    <>
      {/* Default route */}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <LogIn />} />;
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
