import React from "react";
import { Link, History } from "react-router-dom";

import logo from "../assets/epass.png";
import "./Headers.css";

export default function Headers({history}) {

  function HeaderDefault(props, {history}){
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
  </header>);
  }
function HeaderUser(props){
  function handlesSubmit(e){
    console.log("entou no submit")
    e.preventDefault();
      localStorage.removeItem("app-token");
      localStorage.removeItem("admin");
      localStorage.removeItem("id");
      localStorage.removeItem("expiresIn");
      localStorage.removeItem("currentDate");

      window.location.href = "/";
      window.location.reload(true);
    }
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
          <a href="/dashboard" className="">
            DASHBOARD
          </a>
        </li>



        <li id="entrar">
          <a href="#" className="" onClick={handlesSubmit}>
            SAIR
          </a>
        </li>
      </ul>
    </div>
  </header>
  );
}
function HeaderAdmmin(props){
  function handlesSubmit(e){
    console.log("entou no submit")
    e.preventDefault();
      localStorage.removeItem("app-token");
      localStorage.removeItem("admin");
      localStorage.removeItem("id");
      localStorage.removeItem("expiresIn");
      localStorage.removeItem("currentDate");

      window.location.href = "/";
    }
return(
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
        <a href="/admin/dashboard" className="">
          DASHBOARD
        </a>
      </li>



      <li id="entrar">
        <a href="#" className="" onClick={handlesSubmit}>
          SAIR
        </a>
      </li>
    </ul>
  </div>
</header>
);

}


function CondHeader({history}){
  const isLogged = !!localStorage.getItem("app-token");
  const isAdmin = !!localStorage.getItem("admin");

console.log("LOGADO: " + isLogged)
console.log("Admin: " +isAdmin)
  if (isLogged && isAdmin){
    console.log("PRIMEIRO IF")
    return (<HeaderAdmmin isLogged={isLogged} isAdmin={isAdmin}/>)
  }else if(isLogged && !isAdmin){
    console.log("SEGUNDO IF")
    return (<HeaderUser isLogged={isLogged} isAdmin={isAdmin}/>)
  }else{
    console.log("ELSE")
    return (<HeaderDefault isLogged={isLogged} isAdmin={isAdmin}/>)

  }
}

  return (
    <CondHeader />
  );
}
