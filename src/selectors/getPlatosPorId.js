import React from 'react';
import {platos} from '../data/platos';


export const getPlatosPorId = (id) => {



    return platos.find(plato => plato.id === id) ;

}