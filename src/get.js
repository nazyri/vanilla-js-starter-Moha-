//Get
async function guardarDatos(correo,clave) { 
    try{
        let tarea = {
            correo: correo,
            clave: clave
        }
        const respuesta = await fetch('http://localhost:3000/api/task', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarea)
        })
        let agregar = await respuesta.json()
        console.log(agregar);

  
    } catch (error) {
        console.error(error);
    }
}

export {guardarDatos}












