import React from 'react'
import {  Route, Switch } from 'react-router'
import { EmpleadosScreen } from '../componentes/EmpleadosScreen'
import { StockScreen } from '../componentes/StockScreen'




import { NavBarAdministrador } from '../componentes/ui/NavBarAdministrador'

const NavegacionAdministrador = () => {
    return (
        <>
            <NavBarAdministrador />
            <div className="container mt-2">

                <Switch>
         

                  
                    <Route exact path="/administrador/empleados" component={StockScreen}/>
                    <Route exact path="/administrador/stock" component={EmpleadosScreen}/>
                   
                 
                </Switch>

            </div>
        </>
    )
}

export default NavegacionAdministrador;