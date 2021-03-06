import React from "react";

import "./ShowCreat.css";

import api from "../services/api";

import logo from "../assets/epass.png";

export default function ShowCreat({ history }) {
  const [name, setName] = React.useState("");
  const [sinopse, setSinopse] = React.useState("");
  const [director, setDirector] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [classificacao, setClassificacao] = React.useState("");
  const [genero, setGenero] = React.useState("");

  const [image, setImage] = React.useState(null);

  async function handlesSubmit(e) {
    e.preventDefault();
    const data = new FormData();

    data.append("name", name);
    data.append("sinopse", sinopse);
    data.append("director", director);
    data.append("duration", duration);
    data.append("classificacao", classificacao);
    data.append("genero", genero);

    data.append("image", image);

    await api.post("/show/create", data);
     window.location.reload();

  }

  //Pode remover os value (para não aparecer no html)
  return (
    <div className="show-create-container">
      <img src={logo} alt="ePass" />
      <form onSubmit={handlesSubmit}>
        <label htmlFor="pecaNome" className="pecaNome">
          NOME DA PEÇA
        </label>
        <input
          required
          type="text"
          placeholder="Nome da Peça"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="Sinopse" className="Sinopse">
          SINOPSE
        </label>
        <textarea
          required
          type="text"
          placeholder="Sinopse"
          value={sinopse}
          onChange={e => setSinopse(e.target.value)}
        />
        <label htmlFor="diretor" className="diretor">
          DIRETOR
        </label>
        <input
          required
          type="text"
          placeholder="Diretor"
          value={director}
          onChange={e => setDirector(e.target.value)}
        />
        <label htmlFor="Duracao" className="Duracao">
          DURAÇÃO <span>(HH:mm)</span>
        </label>
        <input
          required
          type="time"
          placeholder="Duracao"
          value={duration}
          onChange={e => setDuration(e.target.value)}
        />

        <label htmlFor="Classificação" className="Classificação">
          CLASSIFICAÇÃO
        </label>
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
        <label htmlFor="Genero" className="Genero">
          GENERO
        </label>
        <input
          required
          type="text"
          placeholder="Genero"
          value={genero}
          onChange={e => setGenero(e.target.value)}
        />

        <label id="imgpeca">IMAGEM</label>
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
