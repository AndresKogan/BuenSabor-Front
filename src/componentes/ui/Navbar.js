import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';



export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext);
    const history = useHistory();

    const validGrupos = ['Hamburguesas', 'Papas', 'Pizzas', 'Lomos'];

    const handleLogout = () => {

        history.replace("/login");
        dispatch({
            type: types.clienteNotLogged
           
        })

    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                El Buen Sabor
            </Link>


            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {
                        validGrupos.map(grupo => (
                            <NavLink
                                key={grupo}
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to={grupo}
                            >
                                {grupo}
                            </NavLink>))
                    }


                </div>
            </div>
            <span className="nav-item nav-link text-info">
                 {user.name}</span>

            <ul className="navbar-nav ml-auto">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/carrito"
                >
                    Carrito
                    </NavLink>
            </ul>



            <ul className="navbar-nav ml-auto">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/search"
                >
                    Buscar
                    </NavLink>
            </ul>

            <ul className="navbar-nav ml-auto">
                <button
                    activeClassName="active"
                    className="nav-item nav-link btn"
                    onClick={handleLogout}
                  
                >
                    Logout
                    </button>
            </ul>

        </nav>
    )
}