import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "react-animated-slider/build/horizontal.css";
import Header from '../components/Header';

import "./Detalhes.css";
import "./slider-animations.css";

import time from "../assets/clock.svg";
import placeit from "../assets/place.svg";

import api from "../services/api";

export default function Detalhes({ match, history }) {
  const [espetaculo, setEspetaculo] = useState([]);
  const [peca, setPeca] = useState([]);

  useEffect(() => {
    async function loadInfos() {
      console.log(match.params.id);
      const espet = await api.get(`/espetaculo/${match.params.id}`);
      setEspetaculo(espet.data);
      const response = await api.get(`/show/${espet.data.peca_id}`);
      setPeca(response.data);

      console.log(espet.data);
      console.log(response.data);
    }
    loadInfos();
  }, []);

  return (
    <div className="externo">
              <Header />
      <div className="banner">
        <div className="item">
          <picture>
            <img
              src={`http://localhost:3333/files/${peca.image}`}
              alt=""
            />
          </picture>
        </div>
      </div>
      <div className="conteudo">
        <div className="servicos">
          <div className="btn-comprar">
            <Link to={`/show/"valor"`}>
              <button type="submit" id="comprar" value="valor">
                COMPRAR >
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <Link to={`/`}>
            <a className="pull-left breadcrum">← Voltar para Home</a>
          </Link>
        </div>
        <div className="row">
          <div className="name-event">
            <h2 className="principal">{peca.name}</h2>
            <hr />
          </div>
          <div className="event-data">
            <div className="card-info">
              <div className="info-event">
                <div className="col">
                  <div className="minicard-data">
                    <span className="data-semana">DIA</span>
                    <span className="data-layer">{espetaculo.dia}</span>
                    <span className="data-mes">{espetaculo.mes}</span>
                  </div>
                </div>
                <div className="col">
                  <div className="infoCard horario">
                    <img src={time} alt="" className="time" />
                    <div className="texto bold">{espetaculo.hora}:00</div>
                    <div className="bottom-label">Horario</div>
                  </div>
                </div>
                <div className="col">
                  <div className="infoCard local">
                    <img src={placeit} alt="" className="placeit" />
                    <div className="teatro">
                      <div className="texto-bold">Teatro ePass-Hall</div>
                      <div className="texto-pequeno">Natal-RN</div>
                    </div>
                    <div className="bottom-label">Local</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="descricao-evento">
            <p>
            {peca.sinopse}
            </p>
            <p>
              <strong>
                ________________________________________________________________________________
              </strong>
            </p>
            <p>
              <strong>Duração: {peca.duration} hr</strong>
            </p>
            <p>
              <strong>Classificação Etária:</strong> {peca.classificacao}. Menores de 14 anos,
              somente poderão entrar acompanhados dos pais ou responsáveis.
              Crianças até 24 meses de idade que ficarem no colo dos pais, não
              pagam.
            </p>
          </div>
        </div>
      </div>




    </div>
  );
}
