import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import "./Home.css";
import "./slider-animations.css";

import api from "../services/api";

export default function Home({ history }) {
  const [pecas, setPecas] = useState([]);

  useEffect(() => {
    async function loadPecas() {
      const response = await api.get("/show/all");

      setPecas(response.data);
      console.log(response.data);
    }
    loadPecas();
  }, []);

  return (
    <div className="externo">
      <Slider className="slider-wrapper" autoPlay duration={6000}>
        {pecas.map(peca => (
          <div
            key={peca.id}
            className="slider-content"
            style={{
              background: `url('http://localhost:3333/files/${peca.image}') no-repeat center center`
            }}
          >
            <div className="inner">
              <h1>{peca.name}</h1>
              <p>{peca.sinopse}</p>
              <Link to={`/show/${peca.id}`}>
                <button type="submit" id="detail" value={peca.id}>
                  Cadastrar
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>

      <div className="seeall">
        <h2 className="destaque"> Destaques </h2>
        <a href="/destaques" className="ver-todos">
          ver todos →
        </a>
      </div>
      {/* {pecas.map((peca=>(

)))} */}

      <div className="cont-widget">
        <div
          class="item card-evento slick-slide slick-current slick-active"
          id="portal-card-event-8571"
          tabindex="0"
          data-slick-index="0"
          aria-hidden="false"
        >
          <a
            class="link"
            href="https://uhuu.com/evento/rs/porto-alegre/luccas-neto-com-os-aventureiros-8571"
            tabindex="0"
          >
            <span class="container-img">
              <img
                class="lozad"
                src="https://imagens.uhuu.com/imgs/17287-510x310-imgproguhuu-luccasneto-1.jpg"
                alt=""
              ></img>
            </span>
            <div class="card-info">
              <div class="info-evento">
                <div class="minicard-data">
                  <span class="data-semana">Sex</span>
                  <span class="data-layer">15</span>
                  <span class="data-mes">NOV</span>
                </div>
                <div class="infoCardDesk">
                  <span class="evento-cidade">Porto Alegre/RS</span>
                  <span
                    class="evento-nome"
                    title="Luccas Neto com Os Aventureiros"
                  >
                    Luccas Neto com Os Aventureir...
                  </span>
                  <span class="local-nome">Ginásio Gigantinho</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
