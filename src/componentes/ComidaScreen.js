import React from 'react';
import { useParams } from 'react-router'
import ListaPlato from './platos/ListaPlato';

const ComidaScreen = () => {

    
    const { comida } = useParams();

    return (
        <div>
        <ListaPlato grupo={comida}/>
 </div>
    )
}

export default ComidaScreen;
