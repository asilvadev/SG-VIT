import React from 'react';
import './SignUp.css';

import api from '../services/api';

import logo from '../assets/epass.png';

export default function SignUp(history ) {

  const [name, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cpf, setCPF] = React.useState('');
  const [senha, setPassword] = React.useState('');

  async function handlesSubmit(e) {
    e.preventDefault();

    const response = api.post('/user/create', {
      nome,
      email,
      password,
      cpf
    });
    console.log(response);
    history.push('/dashboard');
  }

  //Pode remover os value (para não aparecer no html)
  return (
    <div className="login-container">
      <img src={logo} alt="ePass" />
      <form onSubmit={handlesSubmit}>

        <input type="text" placeholder="Nome"
          value={name}
          onChange={e => setNome(e.target.value)}
        />

        <input type="text" placeholder="CPF" maxLength="11"
          value={cpf}
          onChange={e => setCPF(e.target.value)}
        />

        <input type="text" placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input type="password" placeholder="Senha"
          value={senha}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

