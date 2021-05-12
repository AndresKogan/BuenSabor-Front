import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import ComidaScreen from '../componentes/ComidaScreen'

import PlatoScreen from '../componentes/platos/PlatoScreen'
import { SearchScreen } from '../componentes/search/SearchScreen'

import { Navbar } from '../componentes/ui/Navbar'

const NavegacionPrincipal = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">

                <Switch>
         
                    <Route exact path="/:comida" component={ComidaScreen}/>
                    <Route exact path="/plato/:platoId" component={PlatoScreen} />
                    <Route exact path="/search" component={SearchScreen}/>

                    <Redirect to="/" />
                </Switch>

            </div>
        </>
    )
}

export default NavegacionPrincipal
