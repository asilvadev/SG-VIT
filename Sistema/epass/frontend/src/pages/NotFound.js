import React from 'react';
import { Link } from "react-router-dom";
import './NotFound.css';

// import api from '../services/api';

import notfound from '../assets/404.svg';


export default function NotFound({history}){
    return(
      <div className="not-found-container">
          <Link to={`/`}>
            <a className="pull-left breadcrum">← Voltar para Home</a>
          </Link>
        <img src={notfound} alt=""/>

      </div>

    );
}
