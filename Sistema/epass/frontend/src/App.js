import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Routes from "./routes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
