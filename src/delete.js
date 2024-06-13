async function borrartodo() { 
    try{

        const respuesta = await fetch('http://localhost:3000/api/task')
        const datos = await respuesta.json();


        return datos
    } catch (error){
      console.error(error);
  }
}

export {borrartodo}