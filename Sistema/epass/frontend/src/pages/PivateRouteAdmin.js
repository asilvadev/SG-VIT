import React from "react";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const isLogged = !!localStorage.getItem("app-token");
  const isAdmin = !!localStorage.getItem("admin");
  return isLogged && isAdmin ? (
    <Route {...props} />
  ) : (
    <Redirect to="/dashboard" />
  );
};
export default PrivateRoute;
