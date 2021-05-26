import React, { useEffect, useReducer, useState } from 'react'
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authreducer';
import { ListaContext } from './componentes/ListaContext';



import AppRouter from './routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


const BuenSaborApp = () => {




  const [lista, setLista] = useState([]);
  const [user, dispatch] = useReducer(authReducer, {
    rol: 'cliente',
    logged: true
  }, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    
  }, [user])

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <ListaContext.Provider value={{
        lista,
        setLista
      }}>
        <AppRouter />
      </ListaContext.Provider>
    </AuthContext.Provider>


  )
}

export default BuenSaborApp;

