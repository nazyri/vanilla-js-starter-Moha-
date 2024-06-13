//put
async function actualizar(id) { 
    try{

        const respuesta = await fetch('http://localhost:3000/api/task/${id}',{
          
        })
        const datos = await respuesta.json();


        return datos
    } catch (error){
      console.error(error);
  }
}

export {actualizar}