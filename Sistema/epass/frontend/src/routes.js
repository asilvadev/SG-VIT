import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ShowCreate from './pages/ShowCreate';
import NotFound from './pages/NotFound';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/show/create" component={ShowCreate} />
        <Route path="/show/:id" component={Detalhes} />

        <Route path='/404' component={NotFound} />
        <Redirect to="/404"/>

        </Switch>


        </BrowserRouter>
    );
}
