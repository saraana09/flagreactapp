import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
