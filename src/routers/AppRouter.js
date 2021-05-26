import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginScreen from "../componentes/login/LoginScreen";
import NavegacionAdministrador from "./NavegacionAdministrador";
import NavegacionCocinero from "./NavegacionCocinero";

import NavegacionPrincipal from "./NavegacionPrincipal";
import { RutaPrivadaAdministrador } from "./RutaPrivadaAdministrador";
import { RutaPrivadaCocinero } from "./RutaPrivadaCocinero";



const AppRouter = () => {

const {user} = useContext(AuthContext)


  return (
    <Router>
      <div>
        <Switch>
          
          <Route exact path="/login" component={LoginScreen} />
          <RutaPrivadaCocinero 
          path="/cocinero" 
          component = {NavegacionCocinero}
          esCocinero = {(user.rol==='cocinero')}/>
          <RutaPrivadaAdministrador
          path="/administrador" 
          component = {NavegacionAdministrador}
          esAdministrador = {(user.rol==='administrador')}/>
          <Route path="/" component={NavegacionPrincipal} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
