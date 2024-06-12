

//post
async function darDatos(nombre,correo,clave) {
    console.log("ingreso a darDATOS");
    try {
        let tarea = {
            nombre: nombre,
            correo: correo,
            clave: clave
        }
        const respuesta = await fetch('http://localhost:3000/api/task', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarea)
        })
        let agregar = await respuesta.json()
        console.log(agregar);
    // guardarDatos()
        console.log(`La tarea ${tarea.id} fue agregada`);
    } catch (error) {
        console.error(error);
    }
}

export {darDatos}

//registro