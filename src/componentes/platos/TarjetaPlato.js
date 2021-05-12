import React from 'react';
import { Link } from 'react-router-dom';

export const TarjetaPlato = ({

    id,
    plato,
    Precio,
    descripcion,
    
}) => {
    return (
        <div className="card ms-4" style={{maxWidth:540}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/imagenes/${id}.jpg`} className="card-img" alt={plato}></img>

                </div>
                <div className="col-md-8"> 
                <div className="card-body">
                           <h5 className="card-title">{plato}</h5>
                           <p className="card-text">{descripcion}</p>
                           <h4 >${Precio}</h4>
                </div>

                <Link to={`./plato/${id}`}>
                            Más...

                        </Link>
     
                </div>
            </div>
            
        </div>
    )
}
