// Inserte el código aquí
const btnVer = document.getElementById("ver")

async function datos() {
    try {
        const respuesta = await fetch("tareas.json")
        const datos = await respuesta.json()
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}

async function darDatos() {
    try {
        let tarea={
            id:Date.now(),
            nombre:InputDeviceInfo.value
        }
        const respuesta = await fetch("",{
            method: "POST",
            headers: {
                "content-type": "aplication/json; charset=utf-8"
            },
            body: JSON.stringify(tarea)
        })
        console.log(`La tarea ${tarea.id} fue agregada`);
    } catch (error) {
        console.error(error);
    }
}
btnVer.addEventListener("click", datos)