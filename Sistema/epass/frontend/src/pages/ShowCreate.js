import React from "react";
import "./ShowCreat.css";

import api from "../services/api";

import logo from "../assets/epass.png";

export default function ShowCreat({ history }) {
  const [name, setName] = React.useState();
  const [sinopse, setSinopse] = React.useState();
  const [director, setDirector] = React.useState();
  const [duration, setDuration] = React.useState();
  const [classificacao, setClassificacao] = React.useState();
  const [genero, setGenero] = React.useState();
  const [price, setPrice] = React.useState();
  const [image, setImage] = React.useState();

  var options = [
    { value: "Livre", label: "Livre" },
    { value: "Adulto", label: "Adulto" }
  ];

  async function handlesSubmit(e) {
    e.preventDefault();

    const response = api.post("/show/create", {
      name,
      sinopse,
      director,
      duration,
      classificacao,
      genero,
      price,
      image
    });
    console.log(response);
    // history.push('/dashboard');
  }

  //Pode remover os value (para não aparecer no html)
  return (
    <div className="show-create-container">
      <img src={logo} alt="ePass" />
      <form onSubmit={handlesSubmit}>
        <input
          required
          type="text"
          placeholder="Nome da Peça"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          required
          type="text"
          placeholder="Sinopse"
          value={sinopse}
          onChange={e => setSinopse(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Diretor"
          value={director}
          onChange={e => setDirector(e.target.value)}
        />
        <input
          required
          type="time"
          placeholder="Duracao"
          value={duration}
          onChange={e => setDuration(e.target.value)}
        />
        {/* <input
          type="enum"
          placeholder="Livre ou Adulto"
          value={classificacao}
          onChange={e => setClassificacao(e.target.value)}
        /> */}
        {/* <select name="classificacao">
          <option value="Livre" onChange={e => setClassificacao("Livre")}>
            Livre
          </option>
          <option value="Adulto" onChange={e => setClassificacao("Adulto")}>
            Adulto
          </option>
        </select> */}

        <select
          required
          name="classificacao-select"
          defaultValue="Livre"
          value={classificacao}
          onChange={e => setClassificacao(e.target.value)}
        >
          <option defaultValue="Livre" value="Livre">
            Livre
          </option>
          <option value="Adulto">Adulto</option>
        </select>

        <input
          required
          type="text"
          placeholder="Genero"
          value={genero}
          onChange={e => setGenero(e.target.value)}
        />

        <input
          required
          type="number"
          placeholder="Valor"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <input
          required
          type="file"
          onChange={e => setImage(e.target.files[0])}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
