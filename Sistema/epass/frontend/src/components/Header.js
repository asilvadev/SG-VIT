import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/epass.png";
import "./Header.css";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <a href="/" className="">
          <img right src={logo} alt="ePass" />
        </a>
        <ul>
          <li>
            <a href="/" className="">
              INICIO
            </a>
          </li>
          <li>
            <a href="/sobre" className="">
              SOBRE
            </a>
          </li>
          <li>
            <a href="/show" className="">
              ESPETACULOS
            </a>
          </li>
          <li>
            <a href="/signup" className="">
              CRIAR CONTA
            </a>
          </li>
          <li id="entrar">
            <a href="/signin" className="">
              ENTRAR
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
