import React from 'react';
import './NotFound.css';

// import api from '../services/api';

import notfound from '../assets/404.svg';

export default function NotFound(){
    return(
      <div className="not-found-container">
        <img src={notfound} alt=""/>

      </div>

    );
}
