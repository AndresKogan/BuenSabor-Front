import React from 'react'
import { useContext } from 'react';
import { ListaContext } from './ListaContext';

export const CartScreen = () => {

   const {lista} = useContext(ListaContext)
   console.log("papad")
   console.log(lista)

    return (
        <div>
            <h1>Carrito Loco</h1>
           <ul>
               {
               lista.map(id =>(
                   <li key={id}>
                       {id}
                   </li>
               )

               
                   
               )}
               
           </ul>
        </div>
    )
}

export default CartScreen;