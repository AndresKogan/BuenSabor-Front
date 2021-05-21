import React, { useState } from 'react'
import { ListaContext } from './componentes/ListaContext';



import AppRouter from './routers/AppRouter';

const BuenSaborApp = () => {

  const [lista, setLista] = useState([]);



  return (
    
<ListaContext.Provider value={{
  lista,
  setLista
 
}}>
  
        <AppRouter/>
</ListaContext.Provider>
    
     
  
  )
}

export default BuenSaborApp;

