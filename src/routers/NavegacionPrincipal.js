import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import BebidaScreen from '../componentes/BebidaScreen'
import BurgerScreen from '../componentes/BurgerScreen'
import LomoScreen from '../componentes/LomoScreen'
import PapasScreen from '../componentes/PapasScreen'
import PizzaScreen from '../componentes/PizzaScreen'
import PlatoScreen from '../componentes/platos/PlatoScreen'
import { SearchScreen } from '../componentes/search/SearchScreen'

import { Navbar } from '../componentes/ui/Navbar'

const NavegacionPrincipal = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">

                <Switch>
                    <Route exact path="/lomos" component={LomoScreen} />
                    <Route exact path="/burgers" component={BurgerScreen} />
                    <Route exact path="/pizzas" component={PizzaScreen} />
                    <Route exact path="/papas" component={PapasScreen} />
                    <Route exact path="/bebidas" component={BebidaScreen} />
                    <Route exact path="/plato/:platoId" component={PlatoScreen} />
                    <Route exact path="/search" component={SearchScreen}/>

                    <Redirect to="/" />
                </Switch>

            </div>
        </>
    )
}

export default NavegacionPrincipal
