import React, { useMemo } from 'react'
import { getPlatosPorGrupo } from '../../selectors/getPlatosPorGrupo'
import { TarjetaPlato } from './TarjetaPlato';

const ListaPlato = ({grupo}) => {

  const platos  = useMemo(() => getPlatosPorGrupo(grupo), [grupo])



    return (
        <div className="row animate__animated animate__fadeIn">
           {
           
           platos.map(plato => (
               <TarjetaPlato key={plato.id}
                   {...plato}/>
          
           ))

           } 
        </div>
    )
}

export default ListaPlato
