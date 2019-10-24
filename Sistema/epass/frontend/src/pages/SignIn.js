import React from 'react';
import './SignIn.css';

import logo from '../assets/epass.png';

export default function Login(){

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handlesSubmit(e){
        e.preventDefault();

        console.log(email);
        console.log(password);
    }


    return (
        <div className="login-container">
            <img src={logo} alt="ePass" />
            <form onSubmit={handlesSubmit}>
                <input type="text" placeholder="E-mail" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Senha" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>

    );
}

