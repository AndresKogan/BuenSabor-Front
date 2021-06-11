import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import {  CocineroParaCocinar } from '../componentes/CocineroParaCocinar'

import { PlatosCocinero } from '../componentes/platos/PlatosCocinero'



import { NavBarCocinero } from '../componentes/ui/NavbarCocinero'

const NavegacionCocinero = () => {
    return (
        <>
            <NavBarCocinero />
            <div className="container mt-2">

                <Switch>
         

                <Route exact path="/cocinero" component={CocineroParaCocinar}/>
                    <Route exact path="/cocinero/platos" component={PlatosCocinero}/>
                  
                    {/* <Redirect to="/" /> */}
                </Switch>

            </div>
        </>
    )
}

export default NavegacionCocinero;
