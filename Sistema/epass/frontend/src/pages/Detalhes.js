import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "react-animated-slider/build/horizontal.css";

import "./Detalhes.css";
import "./slider-animations.css";

import api from "../services/api";

export default function Detalhes({ match, history }) {
  const [peca, setPeca] = useState({
    image: {}
  });

  useEffect(() => {
    async function loadPeca() {
      console.log(match);
      const response = await api.get(`/show/${match.params.id}`);
      console.log(response.data);

      setPeca(response.data);
    }
    loadPeca();
  }, []);

  return (
    <div className="externo">
      <div className="banner">
        <div className="item">
          <picture>
            <img
              src="https://imagens.uhuu.com/imgs/16463-banner-uhuu-2000x580-pink-floyd.jpg"
              alt=""
            />
          </picture>
        </div>
      </div>
      <div className="conteudo">
        <div className="servicos">
          <div className="btn-comprar">
            <Link to={`/show/${peca.id}`}>
              <button type="submit" id="comprar" value={peca.id}>
                COMPRAR >
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <Link to={`/show/${peca.id}`}>
            <a href="/" className="pull-left breadcrum">
              ← Voltar para Home
            </a>
          </Link>
        </div>
        <div className="row">
          <div className="name-event">
            <h2 className="principal">Pink Floyd - Experience in Concert</h2>
            <hr />
          </div>
          <div className="event-data">
            <div className="card-info">
              <div className="info-event">
                <div className="col">
                  <div className="minicard-data">
                    <span className="data-semana">Sáb</span>
                    <span className="data-layer">16</span>
                    <span className="data-mes">Nov</span>
                  </div>
                </div>
                <div className="col">
                  <div className="infoCard horario">
                    <div className="texto bold">22:00</div>
                    <div className="bottom-label">Horario</div>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Link to={`/`}>
              <button type="submit" id="detail">Voltar</button>
            </Link>
      <h1>{peca.name}</h1>
      <h2>{peca.sinopse}</h2>
      <h2>{peca.director}</h2>
      <h2>{peca.genero}</h2>
      <h2>{peca.duration}h - R$ {peca.price},00</h2>
      <img src={`http://localhost:3333/files/${peca.image}`} alt=""/>
      <Link to={`/comprar/${peca.id}`}>
              <button type="submit" id="detail" >Comprar</button>
            </Link> */}
    </div>
  );
}
