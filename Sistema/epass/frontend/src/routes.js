import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ShowCreate from './pages/ShowCreate';

export default function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/show/create" component={ShowCreate} />
        </BrowserRouter>
    );
}
