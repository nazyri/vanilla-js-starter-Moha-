// //Delete

export async function borrar(id) {
    console.log("ingresa a la funcion");
    try {
        //console.log('ingresa al try');

        const respuesta = await fetch(`http://localhost:3000/api/task/${id}`, {
            method: "DELETE",
        })
        console.log(`se elimino la tarea con id ${id}`);
        //location.reload()
        getTarea();

    } catch (error) {
        console.error(error);
    }
}
getTarea();