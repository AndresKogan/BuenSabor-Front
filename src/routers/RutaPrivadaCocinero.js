import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router'

export const RutaPrivadaCocinero = ({
    esCocinero,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (esCocinero)
                    ? (<Component {...props} />) 
                    : (<Redirect to="/login" />)
           
       )}

       />
    )
}


RutaPrivadaCocinero.propTypes = {
    esCocinero: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired 
}
