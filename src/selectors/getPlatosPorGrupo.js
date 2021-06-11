
export const getGrupos = async () => {

     const url = `https://localhost:44350/api/RubrosArticulos`;
    const resp = await fetch(url, {
        method: "GET",
    })
    const data = await resp.json();


 


    return data;

}

export const getPlatosPorGrupo = async () => {

    const url = `https://localhost:44350/api/Articulos/ParaFront`;
   const resp = await fetch(url, {
       method: "GET",
   })
   const data = await resp.json();





   return data;

}



