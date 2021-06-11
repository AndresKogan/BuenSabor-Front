import React, { useMemo, useState } from 'react';
import { getPlatosPorGrupo } from '../../selectors/getPlatosPorGrupo';
import { TarjetaPlato } from './TarjetaPlato';

const ListaPlato = ({grupo}) => {

  const [platos, setPlatos] = useState(null)
  
 useMemo(() => getPlatosPorGrupo()
 .then(elemento => elemento.filter(plato => plato.grupo === grupo))
 .then(elemento=> setPlatos(elemento)), [grupo])




if(platos===null){
    return(
    <h1>Loading...</h1>)
}

    return (
        <div className="row animate__animated animate__fadeIn">
           {
           
           platos.map(plato => 
               <TarjetaPlato key={plato.id}
                   {...plato}/>
          
           )

           } 
        </div>
    )
}

export default ListaPlato
