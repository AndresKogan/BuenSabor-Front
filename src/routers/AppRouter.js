import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from "../componentes/login/LoginScreen";
import NavegacionCocinero from "./NavegacionCocinero";

import NavegacionPrincipal from "./NavegacionPrincipal";



const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/cocinero" component = {NavegacionCocinero}/>
          <Route path="/" component={NavegacionPrincipal} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
