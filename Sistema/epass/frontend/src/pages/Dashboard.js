import React, { useEffect, useState } from 'react';

import api from "../services/api";
import logo from "../assets/epass.png";

import "./Dashboard.css";

export default function Dashboard({history}){
const id = localStorage.getItem('id');
const expireTime = localStorage.getItem('expiresIn');
const curretTime = localStorage.getItem('currentDate');



const [user, setUser] = useState({
  // image: {}
});

useEffect(() => {
  async function loadUser() {

    const response = await api.get(`/user/${id}`);
    console.log(response.data);

    setUser(response.data);
  }
  loadUser();
}, []);

useEffect(()=>{
  function times(){
    const time = new Date().getTime();
    if( time > expireTime){
      localStorage.removeItem('app-token');
      localStorage.removeItem('id');
      localStorage.removeItem('expiresIn');
      localStorage.removeItem('currentDate');
    }
    console.log("TN: " + time);
  }
  console.log("CT: " + curretTime);
  console.log("ET: " + expireTime);
  times();
})

  function handlesSubmit(e) {
    e.preventDefault();
    localStorage.removeItem('app-token');
    localStorage.removeItem('id');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('currentDate');

    history.push("/");
  }

    return(
      <>


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
            <a href="/show" className="ingressos">
              Meus Ingressos
            </a>
          </li>
          <li>
            <a href="/signup" className="sair">
              Sair
            </a>
          </li>
          <li >
            <a href="/signin" className="user">
              Olá, {user.name}
            </a>
          </li>
        </ul>
      </div>
    </header>
      <h1>Esse é o Dashboard</h1>
      <label htmlFor="">Nome</label><strong> {user.name}</strong><br/>
      <label htmlFor="">Email</label><strong> {user.email}</strong><br/>
      <label htmlFor="">CPF</label><strong> {user.cpf}</strong><br/>

      <button className="logout" onClick={handlesSubmit}>logout</button>
      </>
      );

}
