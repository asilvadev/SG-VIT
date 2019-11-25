import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";



import "./Buy.css";
import Header from '../components/Header';

import "./slider-animations.css";



import api from "../services/api";
import { Input } from "@material-ui/core";


export default function Buy({ match, history }) {
  const [espetaculo, setEspetaculo] = useState([]);
  const [peca, setPeca] = useState([]);
  const [seats, setSeats] = useState([]);
  const expireTime = localStorage.getItem("expiresIn");
  const curretTime = localStorage.getItem("currentDate");


  useEffect(() => {
    async function loadInfos() {
      console.log(match.params.id);
      const espet = await api.get(`/espetaculo/${match.params.id}`);
      setEspetaculo(espet.data);
      const response = await api.get(`/show/${espet.data.peca_id}`);
      setPeca(response.data);
      const seat = await api.get(`/seat/all/${match.params.id}`)
      setSeats(seat.data);

      console.log(seat.data);
      console.log(espet.data);
      console.log(response.data);
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
      console.log("TN: " + time);
    }
    console.log("CT: " + curretTime);
    console.log("ET: " + expireTime);
    times();
  });
async function handleRegister({ match }){

}
  function CheckE() {
    console.log("CheckE")
    return (
      <input type="radio"/>
    )
  };
  function CheckD() {
    console.log("CheckD")
    return (<input type="radio" disabled="disabled" />)
  };
  function CheckCB(props){
    const is_ocupada = props.is_ocupada;
    console.log("OCUPADA: " + is_ocupada)
    if(is_ocupada){
      console.log("Entrou no if")
      return <CheckD />
    }
    console.log("Não entrou no if")
    return <CheckE />
  }
  function Disponivel(){
    var color = {
      color: 'green',
    }
    return (<label htmlFor="" style={color}>Disponivel</label>)
  }
  function Indiponivel(){
    var color = {
      color: 'red',
    }
    return (<label htmlFor=""style={color}>Indisponivel</label>)
  }
  function CheckState(props){
    const is_ocupada = props.is_ocupada;
    if(!is_ocupada){
      return <Disponivel />
    }
    return <Indiponivel />
  }

  function CondComIf(props){
    return (
      <div className="tabelaz">

      {seats.map(chair => (
        <div className="brb">
          <div className="a"><CheckState is_ocupada={chair.is_ocupada}/></div>
          <div className="lugar">
            {chair.fila} {chair.cadeira}
          </div>
          <CheckCB is_ocupada={chair.is_ocupada}/>

        </div>
      ))}
    </div>
    );
  }






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

              <button type="submit" id="comprar" value="valor" onSubmit={handleRegister}>
                FINALIZAR >
              </button>

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

          <div className="descricao-evento">
            <p>
              ASSENTOS
            </p>
            <div className="cadeira">

            </div>
            <p>
              <CondComIf />

            </p>
            <p><strong>Genero: {peca.genero}</strong></p>
            <p>


              <strong>Preço: R$ {espetaculo.price},00</strong><br></br>
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
