import { CssBaseline } from "@material-ui/core";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Auth from "./screens/Auth";
import Dashboard from "./screens/Dashboard";
import { AuthContextProvider } from "./context/AuthContext";
import NewService from "./screens/NewService";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route component={Auth} path="/auth" />
            <PrivateRoute path="/" exact>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/new-service" exact>
              <NewService />
            </PrivateRoute>
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
