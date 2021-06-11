import React from 'react';
import { platos } from '../data/platos';


export const getPlatosPorId = async (id) => {

    const url = `https://localhost:44350/api/Articulos/ParaFront/${id}`;
    const resp = await fetch(url, {
        method: "GET",
    })
  
    const data = await resp.json()


  
   


  
    return data;

}