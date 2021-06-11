import React from 'react'
import { Link, NavLink } from 'react-router-dom';



export const NavBarCocinero = () => {


    const validGrupos = ['Hamburguesas', 'Papas', 'Pizzas', 'Lomos'];


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/cocinero"
            >
                Pedidos Para Cocinar
            </Link>
           
           
            <div className="navbar-collapse">
                <div className="navbar-nav">
                   
                      <NavLink 
                 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/cocinero/platos"
                    >
                       Platos Cocinero
                    </NavLink> )  )


                    
                </div>
            

           
           
            </div>

            
            <div className="">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}