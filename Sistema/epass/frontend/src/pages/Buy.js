import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Buy.css";

import "./slider-animations.css";
import CondHeader from "../components/Headers";

import api from "../services/api";

export default function Buy({ match, history }) {
  const [espetaculo, setEspetaculo] = useState([]);
  const [peca, setPeca] = useState([]);
  const [seats, setSeats] = useState([]);
  const [local, setLocal] = useState([]);

  const expireTime = localStorage.getItem("expiresIn");

  useEffect(() => {
    async function loadInfos() {
      const espet = await api.get(`/espetaculo/${match.params.id}`);
      setEspetaculo(espet.data);
      const response = await api.get(`/show/${espet.data.peca_id}`);
      setPeca(response.data);
      const seat = await api.get(`/seat/all/${match.params.id}`);
      setSeats(seat.data);
    }
    loadInfos();
  }, []);
  useEffect(() => {
    function times() {
      const time = new Date().getTime();
      if (time > expireTime) {
        localStorage.removeItem("app-token");
        localStorage.removeItem("id");
        localStorage.removeItem("admin");
        localStorage.removeItem("expiresIn");
        localStorage.removeItem("currentDate");
      }
    }

    times();
  });
  async function handleRegister({ history, match }) {
    await api.post("/dashboard/buy", {
      user_id: localStorage.getItem("id"),
      espetaculo_id: espetaculo.id,
      seat_id: local
    });
  }
  function CheckE(props) {
    const id = props.id_value;

    return (
      <input type="radio" value={id} onChange={e => setLocal(e.target.value)} />
    );
  }
  function CheckD(props) {
    return <input type="radio" disabled="disabled" />;
  }
  function CheckCB(props) {
    const id = props.id_value;

    const is_ocupada = props.is_ocupada;

    if (is_ocupada) {
      return <CheckD id_value={id} />;
    }

    return <CheckE id_value={id} />;
  }
  function Disponivel() {
    var color = {
      color: "green"
    };
    return (
      <label htmlFor="" style={color}>
        Disponivel
      </label>
    );
  }
  function Indiponivel() {
    var color = {
      color: "red"
    };
    return (
      <label htmlFor="" style={color}>
        Indisponivel
      </label>
    );
  }
  function CheckState(props) {
    const is_ocupada = props.is_ocupada;
    if (!is_ocupada) {
      return <Disponivel />;
    }
    return <Indiponivel />;
  }
  function handleGoBack({ history }) {
    window.history.back();
  }
  function CondComIf(props) {
    return (
      <div className="tabelaz">
        {seats.map(chair => (
          <div className="brb">
            <div className="a">
              <CheckState is_ocupada={chair.is_ocupada} />
            </div>
            <div className="lugar">
              {chair.fila} {chair.cadeira}
            </div>
            <CheckCB id_value={chair.id} is_ocupada={chair.is_ocupada} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="externo">
      <CondHeader />
      <div className="banner">
        <div className="item">
          <picture>
            <img src={`http://localhost:3333/files/${peca.image}`} alt="" />
          </picture>
        </div>
      </div>
      <div className="conteudo">
        <div className="servicos">
          <div className="btn-comprar">
            <Link to={`/dashboard`}>
              <button
                type="submit"
                id="comprar"
                value="valor"
                onClick={handleRegister}
              >
                FINALIZAR >
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <Link onClick={handleGoBack}>
            <a className="pull-left breadcrum">← Voltar</a>
          </Link>
        </div>
        <div className="row">
          <div className="name-event">
            <h2 className="principal">{peca.name}</h2>
            <hr />
          </div>

          <div className="descricao-evento">
            <p>ASSENTOS</p>
            <div className="cadeira"></div>
            <p>
              <CondComIf />
            </p>
            <p>
              <strong>Diretor: {peca.director}</strong>
              <br></br>
              <strong>Genero: {peca.genero}</strong>
            </p>
            <p>
              <strong>Preço: R$ {espetaculo.price},00</strong>
              <br></br>
              <strong>Duração: {peca.duration} hr</strong>
            </p>
            <p>
              <strong>Classificação: {peca.classificacao}</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
