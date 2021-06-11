import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListaContext } from '../ListaContext';


export const TarjetaCarro = ({

    id,
    plato,
    PrecioVenta,
    Descripcion,
    
}) => {

  
  
    const {lista, setLista} = useContext(ListaContext);
 
   

    const handleClick = (idButton) => {
        console.log(idButton)
        console.log(lista)
        const listaNueva = lista.splice(lista.indexOf(idButton),1);
        console.log("nueva ")
        console.log(listaNueva)

       
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
                           <p className="card-text">{Descripcion}</p>
                           <h4 >${PrecioVenta}</h4>
                </div>
<div className="row">
  <Link to={`./plato/${id}`}>
                            Detalles
                        </Link>

                 <button className="btn btn-danger" onClick={handleClick(id)}> Quitar</button>
</div>
              
     
                </div>
            </div>
            
        </div>
    )
}