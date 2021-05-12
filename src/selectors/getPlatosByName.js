import {platos} from '../data/platos';

export const getPlatosByName = (texto = '' ) => {

if (texto === ""){
    return [];
}

texto = texto.toLocaleLowerCase();


    return  platos.filter(plato => plato.plato.toLocaleLowerCase().includes(texto));
      
    
}
