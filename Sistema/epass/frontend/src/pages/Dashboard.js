import React, { useEffect, useState } from 'react';

import api from "../services/api";

export default function Dashboard({history}){
const id = localStorage.getItem('id');


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

  function handlesSubmit(e) {
    e.preventDefault();
    localStorage.removeItem('app-token');

    history.push("/");
  }

    return(
      <>
      <h1>Esse é o Dashboard</h1>
      <label htmlFor="">Nome</label><strong> {user.name}</strong><br/>
      <label htmlFor="">Email</label><strong> {user.email}</strong><br/>
      <label htmlFor="">CPF</label><strong> {user.cpf}</strong><br/>

      <button className="logout" onClick={handlesSubmit}>logout</button>
      </>
      );

}
