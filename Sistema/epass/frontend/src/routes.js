import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Home from './pages/Home';
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
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/show/create" exact component={ShowCreate} />

        <Route path='/404' component={NotFound} />
        <Redirect to="/404"/>

        </Switch>


        </BrowserRouter>
    );
}
