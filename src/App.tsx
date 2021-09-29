import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Auth from "./screens/Auth";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Auth} path="/auth" />
        <PrivateRoute path="/" exact>
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
