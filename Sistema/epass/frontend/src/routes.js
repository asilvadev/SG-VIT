import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

export default function Routes(){
    return(
        <BrowserRouter>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        
        
        </BrowserRouter>
    );
}