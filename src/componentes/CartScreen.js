import React, { useMemo, useState } from 'react'
import { useContext } from 'react';
import { getPlatosPorGrupo } from '../selectors/getPlatosPorGrupo';
import { ListaContext } from './ListaContext';
import { TarjetaCarro } from './platos/TarjetaCarro';

export const CartScreen = () => {
 const [platos, setPlatos] = useState([])
   const {lista} = useContext(ListaContext)



useMemo(() => getPlatosPorGrupo()
 .then(platos => platos.filter(platos=> lista.includes(platos.id)))
.then(elemento => setPlatos(elemento)) , lista.includes(platos.id))

    return (
        <div>
            <h1>Carrito Loco</h1>
           <ul>
               {
               platos.map(plato =>(
                   <TarjetaCarro key={plato.id} {...plato}/>
                    
               )

               
                   
               )}
               
           </ul>
        </div>
    )
}

export default CartScreen;