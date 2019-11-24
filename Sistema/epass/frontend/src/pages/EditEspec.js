import React, { useEffect } from "react";

import "./EditEspec.css";

import api from "../services/api";

import logo from "../assets/epass.png";

export default function EditEspec({ history, match }) {
  const [hora, setHora] = React.useState("");
  const [dia, setDia] = React.useState("");
  const [mes, setMes] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [peca_id, setPecaID] = React.useState();

  const [pecas, setPecas] = React.useState([]);




  useEffect(() => {
    async function loadPecas() {
      const response = await api.get("/show/all");

      setPecas(response.data);
      console.log(response.data);
    }
    loadPecas();
  }, []);



  async function handlesSubmit(e) {
    e.preventDefault();



    await api.put(`/espetaculo/update/${match.params.id}`, {
      hora,
      dia,
      mes,
      price,
      peca_id,

    });
    window.location.reload();

  }

  //Pode remover os value (para não aparecer no html)
  return (
    <div className="show-create-container">
      <img src={logo} alt="ePass" />
      <form onSubmit={handlesSubmit}>
        <label htmlFor="peças" className="peças">
          PEÇA
        </label>
        <select
          required
          name="classificacao-select"
          defaultValue="Livre"
          value={peca_id}
          onChange={e => setPecaID(e.target.value)}
        >
          {pecas.map(peca => (
            <option value={peca.id} onChange={e => setPecaID(e.target.value)}>
              {peca.name}
            </option>
          ))}

        </select>



        <label htmlFor="hora" className="HORA">HORA</label>
        <input
          type="number"
          placeholder="Hora"
          minLength="1"
          maxLength="2"
          min="00"
          max="23"
          value={hora}
          required
          onChange={e => setHora(e.target.value)}
        />
        <label htmlFor="dia" className="DIA">DIA</label>
        <input
          type="number"
          placeholder="Dia"
          minLength="0"
          maxLength="2"
          min="1"
          max="31"
          value={dia}
          required
          onChange={e => setDia(e.target.value)}
        />
        <label htmlFor="mes" className="MES">MES</label>
        <input
          type="text"
          placeholder="Mes"
          value={mes}
          required
          onChange={e => setMes(e.target.value)}
        />

        <label htmlFor="preco" className="preco">
          PREÇO
        </label>
        <input
          required
          type="number"
          placeholder="Valor"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <button type="submit">Editar</button>
      </form>
    </div>
  );
}
