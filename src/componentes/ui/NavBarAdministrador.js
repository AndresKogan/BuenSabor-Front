import React from 'react'
import { Link, NavLink } from 'react-router-dom';



export const NavBarAdministrador = () => {




    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/administrador"
            >
                El Buen Sabor
            </Link>
           
           
            <div className="navbar-collapse">
                <div className="navbar-nav">
                   
                      <NavLink 
                 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/administrador/stock"
                    >
                       stock
                    </NavLink> )  )


                    
                </div>
            </div>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                   
                      <NavLink 
                 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/administrador/empleados"
                    >
                       empleados
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