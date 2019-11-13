import React, { useEffect, useState, } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import "./Home.css";
import "./slider-animations.css";

import api from '../services/api';

export default function Home({ history }) {
  const [pecas, setPecas] = useState([]);

  useEffect(() => {
    async function loadPecas() {
      const response = await api.get('/show/all');


      setPecas(response.data);
    }
    loadPecas();
  }, []);




  return (

    <Slider className="slider-wrapper" autoPlay duration={6000}>
      {pecas.map((peca => (
        <div
          key={peca.id}
          className="slider-content"
          style={{ background: `url('http://localhost:3333/files/${peca.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{peca.name}</h1>
            <p>{peca.sinopse}</p>
            <Link to={`/show/${peca.id}`}>
              <button type="submit" id="detail" value={peca.id}  >Cadastrar</button>
            </Link>

          </div>
        </div>
      )))}
    </Slider>


  );
}



