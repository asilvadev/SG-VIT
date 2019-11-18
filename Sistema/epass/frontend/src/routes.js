import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import DashboardAdmin from "./pages/DashboardAdmin";
import ShowCreate from "./pages/ShowCreate";
import NotFound from "./pages/NotFound";

import PrivateRoute from "./pages/PivateRoute";
import PrivateRouteAdmin from "./pages/PivateRouteAdmin";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRouteAdmin path="/admin/dashboard" component={DashboardAdmin} />
        <Route path="/show/create" exact component={ShowCreate} />
        <Route path="/show/:id" exact component={Detalhes} />

        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
