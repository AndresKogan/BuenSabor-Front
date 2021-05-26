import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router'

export const RutaPrivadaAdministrador = ({
    esAdministrador,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (esAdministrador)
                    ? (<Component {...props} />) 
                    : (<Redirect to="/login" />)
           
       )}

       />
    )
}


RutaPrivadaAdministrador.propTypes = {
    esAdministrador: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired 
}
