import React from 'react';
import './ShowCreat.css';

import api from '../services/api';

import logo from '../assets/epass.png';

export default function ShowCreat({history}) {

  /*
   name: DataTypes.STRING,
            sinopse: DataTypes.TEXT,
            director: DataTypes.STRING,
            duration: DataTypes.TIME,
            classificacao: DataTypes.ENUM(
              'Livre',
              'Adulto'
              ),
            genero : DataTypes.STRING,
            price: DataTypes.INTEGER,
            image : DataTypes.STRING,
            */

  const [name, setName] = React.useState('');
  const [sinopse, setSinopse] = React.useState('');
  const [director, setDirector] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [classificacao, setClassificacao] = React.useState('');
  const [genero, setGenero] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [image, setImage] = React.useState('');

  async function handlesSubmit(e) {
    e.preventDefault();

    const response = api.post('/show/create', {
      name,
      sinopse,
      director,
      duration,
      classificacao,
      genero,
      price,
      image
    });
    console.log(response);
    // history.push('/dashboard');
  }

  //Pode remover os value (para não aparecer no html)
  return (
    <div className="show-create-container">
      <img src={logo} alt="ePass" />
      <form onSubmit={handlesSubmit}>

        <input type="text" placeholder="Nome da Peça"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea type="text" placeholder="Sinopse"
          value={sinopse}

          onChange={e => setSinopse(e.target.value)}
        />
        <input type="text" placeholder="Diretor"
          value={director}
          onChange={e => setDirector(e.target.value)}
        />
        <input type="time" placeholder="Duracao"
          value={duration}

          onChange={e => setDuration(e.target.value)}
        />
        <input type="enum" placeholder="Livre ou Adulto"
          value={classificacao}

          onChange={e => setClassificacao(e.target.value)}
        />
        {/* <select name="classificacao" value="Livre">
          <option value="'Livre'"
            onChange={e => setClassificacao(e.target.value)}>Livre</option>
          <option value='Adulto'
            onChange={e => setClassificacao(e.target.value)}>Adulto</option>
        </select> */}


        <input type="text" placeholder="Genero"
          value={genero}
          onChange={e => setGenero(e.target.value)}
        />

        <input type="number" placeholder="Valor"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <input type="file"
          value={image}
          onChange={e => setImage(e.target.value)}
        />



        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

