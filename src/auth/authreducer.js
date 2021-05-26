import { types } from "../types/types"



export const authReducer = (state = {}, rol) => {
    switch (rol.type) {
        
        case types.clienteLogged:
            return {
                ...rol.payload,
                rol: 'clienteLogged',
                logged: true
            }
            case types.clienteNotLogged:
            return {
                ...rol.payload,
                rol: 'clienteNotLogged',
                logged: false
            }
        case types.administrador:
            return {
                ...rol.payload,
                rol: 'administrador',
                logged: true
            }
        case types.cocinero:
            return {
                ...rol.payload,
                rol: 'cocinero',
                logged: true
            }

        case types.cajero:
            return {
                ...rol.payload,
                rol: 'cajero',
                logged: true
            }



        default:
            return state;
    }

}