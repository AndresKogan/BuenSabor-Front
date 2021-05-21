import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListaContext } from '../ListaContext';


export const TarjetaPlato = ({

    id,
    plato,
    Precio,
    descripcion,
    
}) => {

  
    const {lista, setLista} = useContext(ListaContext);
 
   

    const handleClick = () => {

       setLista([...lista, id]);
    }

   
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
<div className="row">
  <Link to={`./plato/${id}`}>
                            Detalles
                        </Link>

                 <button className="btn btn-primary" onClick={handleClick}> Agregar al Carrito</button>
</div>
              
     
                </div>
            </div>
            
        </div>
    )
}
