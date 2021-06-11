import React, { useMemo, useState } from 'react'
import { Redirect, useParams } from 'react-router'
import { getPlatosPorId } from '../../selectors/getPlatosPorId';


const PlatoScreen = ({history}) => {

   const [platoEncontrado, setPlatoEncontrado] = useState({})

    const { platoId } = useParams();

// getPlatosPorId(platoId)
// .then(plato => setPlatoEncontrado(plato))

  useMemo(() => getPlatosPorId(platoId).then(plato =>setPlatoEncontrado(plato)),[platoId]) ;
    

    if (!platoEncontrado) {
        return <Redirect to="/" />
    }
    
    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        }
        else {
            history.goBack();
        }
    }
    const {
        id,
        plato,
        PrecioVenta,
        Descripcion } = platoEncontrado;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/imagenes/${platoId}.jpg`}
                    alt={id}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{plato}</h3>
                <ul className="list-group list-group-flush animate__animated animate__fadeIn">
                    <li className="list-group-item"> <b>${PrecioVenta}</b></li>
                    <li className="list-group-item"> {Descripcion}</li>

                </ul>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Volver
                </button>
            </div>

        </div>
    )
}

export default PlatoScreen
