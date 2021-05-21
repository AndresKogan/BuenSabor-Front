import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { CartScreen } from '../componentes/CartScreen'
import { SearchScreen } from '../componentes/search/SearchScreen'
import { Navbar } from '../componentes/ui/Navbar'
import ComidaScreen from '../componentes/ComidaScreen'
import PlatoScreen from '../componentes/platos/PlatoScreen'


const NavegacionPrincipal = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">

                <Switch>
         

                  
                    <Route exact path="/search" component={SearchScreen}/>
                    <Route exact path="/carrito" component={CartScreen}/>
                    <Route exact path="/:comida" component={ComidaScreen}/>
                      <Route exact path="/plato/:platoId" component={PlatoScreen} />
                    {/* <Redirect to="/" /> */}
                </Switch>

            </div>
        </>
    )
}

export default NavegacionPrincipal
