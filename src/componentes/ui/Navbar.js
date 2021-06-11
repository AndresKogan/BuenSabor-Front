import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { getGrupos } from '../../selectors/getPlatosPorGrupo';
import { types } from '../../types/types';



export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);
    const history = useHistory();
    const [validGrupos, setValidGrupos] = useState(null)

    useEffect(() => {
        getGrupos()
        .then(grupo => grupo.filter(elemento => elemento.denominacion !== "Ingredientes"))
        .then(grupo => setValidGrupos(grupo))
        

     } , [])

  


    const handleLogout = () => {

        history.replace("/login");
        dispatch({
            type: types.clienteNotLogged

        })

    }
  
    if (validGrupos === null) {
        return <h1>Loading...</h1>
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
                        validGrupos.map(grupo =>

                            <NavLink
                                key={grupo.id}
                                activeclassname="active"
                                className="nav-item nav-link"
                                exact
                                to={`/${grupo.denominacion}`}
                            >
                                {grupo.denominacion}
                            </NavLink>)
                    }


                </div>
            </div>
            <span className="nav-item nav-link text-info">
                {user.name}</span>

            <ul className="navbar-nav ml-auto">
                <NavLink
                    activeclassname="active"
                    className="nav-item nav-link"
                    exact
                    to="/carrito"
                >
                    Carrito
                    </NavLink>
            </ul>



            <ul className="navbar-nav ml-auto">
                <NavLink
                    activeclassname="active"
                    className="nav-item nav-link"
                    exact
                    to="/search"
                >
                    Buscar
                    </NavLink>
            </ul>

            <ul className="navbar-nav ml-auto">
                <button
                    activeclassname="active"
                    className="nav-item nav-link btn"
                    onClick={handleLogout}

                >
                    Logout
                    </button>
            </ul>

        </nav>
    )
}