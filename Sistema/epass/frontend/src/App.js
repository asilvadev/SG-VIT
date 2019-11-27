import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import CondHeader from "./components/Headers";

import Routes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
