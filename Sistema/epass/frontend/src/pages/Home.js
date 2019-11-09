import React, { useEffect, useState }from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import "./Home.css";
import "./slider-animations.css";

import api from '../services/api';
import logo from "../assets/epass.png";

// import logo from '../assets/epass.png';
const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg"
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg"
  }
];

export default function Home({ history }) {
  const [pecas, setPecas] = useState([]);

  useEffect(()=>{
    async function loadPecas(){
      const response = await api.get('/show/all');

      // console.log(response.data);
      setPecas(response.data);
    }
    loadPecas();
  }, []);

  async function handleDetails(e){

    console.log(pecas.id);
    history.push(`/show/${pecas.id}`);
  }


  return (

    <Slider className="slider-wrapper" autoplay duration={6000}>
      {pecas.map((peca => (
        <div
          key={peca.id}
          className="slider-content"
          autoplay="20"
          style={{ background: `url('http://localhost:3333/files/${peca.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{peca.name}</h1>
            <p>{peca.sinopse}</p>
            <button type="submit" id="detail">Cadastrar</button>

          </div>
        </div>
      )))}
    </Slider>


  );
}



