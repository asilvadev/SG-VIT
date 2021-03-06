import React from "react";
import "./SignUp.css";

import api from "../services/api";

import logo from "../assets/epass.png";

export default function SignUp({ history }) {
  const [name, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cpf, setCPF] = React.useState("");
  const [senha, setPassword] = React.useState("");

  async function handlesSubmit(e) {
    e.preventDefault();

    await api.post("/user/create", {
      name,
      email,
      senha,
      cpf
    });
    history.push("/dashboard");
  }

  return (
    <div className="externo">
      <div className="signup-container">
      <img src={logo} alt="ePass" />
      <form onSubmit={handlesSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          required
          onChange={e => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="CPF"
          minLength="11"
          maxLength="11"
          value={cpf}
          required
          onChange={e => setCPF(e.target.value)}
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          required
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>

    </div>



  );
}
