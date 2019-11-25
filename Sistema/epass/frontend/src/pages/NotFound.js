import React from 'react';
import { Link } from "react-router-dom";
import './NotFound.css';


import notfound from '../assets/404.svg';

export default function NotFound({history}){
  function handleGoBack({history}){
    window.history.back()
  }
    return(
      <div className="not-found-container">
          <Link onClick={handleGoBack}>
            <a className="pull-left breadcrum">← Voltar</a>
          </Link>
        <img src={notfound} alt=""/>

      </div>

    );
}
