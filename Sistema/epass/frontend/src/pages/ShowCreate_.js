import React, { Component } from "react";
import "./ShowCreat.css";

// import api from "../services/api";

import logo from "../assets/epass.png";
class ShowCreat extends Component {
  state = {
    name: "",
    sinopse: "",
    director: "",
    duration: "",
    classificacao: "",
    genero: "",
    price: "",
    image: null
  };

  handlesSubmit = e => {
    e.preventDefault();

    const data = new FormData();

    console.log(this.state);
    data.append("name", this.state.name);
    data.append("sinopse", this.state.sinopse);
    // data.append("director", this.state.director);
    // data.append("duration", this.state.duration);
    // data.append("classificacao", this.state.classificacao);
    // data.append("genero", this.state.genero);
    // data.append("price", this.state.price);
    // data.append("image", this.state.image);
  };
  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="show-create-container">
        <img src={logo} alt="ePass" />
        <form onSubmit={this.handlesSubmit}>
          <input
            type="text"
            placeholder="Nome da Peça"
            onChange={this.handleChange}
            value={this.setState.name}
          />
          <textarea
            type="text"
            placeholder="Sinopse"
            value={this.state.sinopse}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Diretor"
            // value={this.state.director}
            onChange={this.handleChange}
          />
          <input
            type="time"
            placeholder="Duracao"
            // value={this.state.duration}
            onChange={this.handleChange}
          />
          <input
            type="enum"
            placeholder="Livre ou Adulto"
            // value={this.state.classificacao}
            onChange={this.handleChange}
          />
          {/* <select name="classificacao" value="Livre">
          <option value="'Livre'"
          value={e => setClassificacao(e.target.value)}>Livre</option>
          <option value='Adulto'
          value={e => setClassificacao(e.target.value)}>Adulto</option>
        </select> */}

          <input
            type="text"
            placeholder="Genero"
            // value={this.state.genero}
            onChange={this.handleChange}
          />

          <input
            type="number"
            placeholder="Preço"
            // value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="file" onChange={this.handleImageChange} />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default ShowCreat;
