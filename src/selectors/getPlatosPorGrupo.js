import {platos} from '../data/platos';


export const getPlatosPorGrupo = (grupo) => {

    const validGrupos = ['Hamburguesas', 'Papas', 'Pizzas', 'Lomos'];

    if (!validGrupos.includes(grupo)) {
        throw new Error (`no existe el grupo "${grupo}"`);
    }

    return platos.filter(plato => plato.grupo === grupo) ;

}


