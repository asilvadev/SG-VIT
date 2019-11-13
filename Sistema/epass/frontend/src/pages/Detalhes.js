import React, { useEffect, useState, } from "react";
import { Link } from 'react-router-dom';

import "react-animated-slider/build/horizontal.css";

import "./Home.css";
import "./slider-animations.css";

import api from '../services/api';

export default function Detalhes({ match, history }) {

  const [peca, setPeca] = useState({
    image : {}
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
    <div>
      <Link to={`/`}>
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
            </Link>
    </div>


  );
}



