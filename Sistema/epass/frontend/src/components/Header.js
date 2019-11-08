import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/epass.png'
 import './Header.css';

export default function Header() {
  return (
<header id="main-header">
  <dev className="header-content">
  <Link to="/">
    <img src={logo} alt="ePass"/>
    </Link>
     <ul>
     <li><a href="/">Home</a></li>
  <li><a href="/">News</a></li>
  <li><a href="/">Contact</a></li>
  <li><a href="/">About</a></li>
    </ul>
  </dev>
</header>

  );
}
