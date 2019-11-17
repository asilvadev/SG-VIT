import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "react-animated-slider/build/horizontal.css";

import "./Detalhes.css";
import "./slider-animations.css";

import time from "../assets/clock.svg";
import placeit from "../assets/place.svg";

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
          <Link to={`/`}>
            <a className="pull-left breadcrum">← Voltar para Home</a>
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
                    <img src={time} alt="" className="time" />
                    <div className="texto bold">22:00</div>
                    <div className="bottom-label">Horario</div>
                  </div>
                </div>
                <div className="col">
                  <div className="infoCard local">
                    <img src={placeit} alt="" className="placeit" />
                    <div className="teatro">
                      <div className="texto-bold">Teatro VillageMall</div>
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
              Pink Floyd Experience In Concert é uma imersão musical e visual na
              histórias e mentes de David Gilmour e Roger Waters, que juntos,
              foram responsáveis pela história musical de uma das maiores bandas
              de todos os tempos! Além de efeitos visuais, projeções em Mapping
              3D e um palco temático, o show conta com orquestra ao vivo regida
              por um maestro que agregam ainda mais qualidade e elevam o nível
              musical do espetáculo. O público pode esperar uma verdadeira
              viagem no tempo com as fases e músicas mais importantes desta
              grande banda, num espetáculo que promete emocionar a todos.
            </p>
            <p>
              <strong>
                ________________________________________________________________________________
              </strong>
            </p>
            <p>
              <strong>Duração: 80 minutos</strong>
            </p>
            <p>
              <strong>Classificação Etária:</strong> Livre. Menores de 14 anos,
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
