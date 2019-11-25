import React from "react";
import "./SignIn.css";

import api from "../services/api";
import Header from "../components/Header";

import logo from "../assets/epass.png";

export default function SignIn({ history }) {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  function handlesSubmit(e) {
    e.preventDefault();

    api
      .post("/user/login", {
        email,
        senha
      })
      .then(response => {
        const { data } = response;
        if (data.success) {
          console.log(data);
          console.log(data.admin);
          if (data.admin) {
            localStorage.setItem("app-token", data.token);
            localStorage.setItem("admin", data.admin);
            localStorage.setItem("id", data.id);
            localStorage.setItem("expiresIn", data.expira);
            localStorage.setItem("currentDate", new Date().getTime());
            history.push("/admin/dashboard");
          } else {
            localStorage.setItem("app-token", data.token);
            localStorage.setItem("id", data.id);
            localStorage.setItem("expiresIn", data.expira);
            localStorage.setItem("currentDate", new Date().getTime());
            history.goBack();
          }
        }
      });
  }

  return (
    <div className="externo">
      <Header />
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
    </div>
  );
}
