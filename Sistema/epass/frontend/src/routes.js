import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import DashboardAdmin from "./pages/DashboardAdmin";
import NotFound from "./pages/NotFound";
import ShowCreate from "./pages/ShowCreate";
import EditShow from './pages/EditShow';
import EspecCreate from "./pages/EspecCreate";
import EditEspec from './pages/EditEspec';

import PrivateRoute from "./pages/PivateRoute";
import PrivateRouteAdmin from "./pages/PivateRouteAdmin";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <Route path="/show/:id" exact component={Detalhes} />

        <PrivateRouteAdmin path="/admin/dashboard" exact component={DashboardAdmin} />
        <PrivateRouteAdmin path="/show/create" exact component={ShowCreate} />
        <PrivateRouteAdmin path="/show/update/:id" exact component={EditShow} />

        <PrivateRouteAdmin path="/espetaculo/create" exact component={EspecCreate} />
        <PrivateRouteAdmin path="/espetaculo/update/:id" exact component={EditEspec} />

        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
