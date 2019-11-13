import React from "react";
import "./SignIn.css";

import api from "../services/api";

import logo from "../assets/epass.png";

export default function SignIn(history) {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  function handlesSubmit(e) {
    e.preventDefault();

    const response = api.post("/user/login", {
      email,
      senha
    });

    console.log(response);
    if (response.success) {
      console.log(response.id);
    }

    // history.push(`/dashboard/${id}`);
  }

  return (
    <div className="signin-container">
      <img src={logo} alt="ePass" />
      <form onSubmit={handlesSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
