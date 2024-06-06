// Inserte el código aquí
const agregar = document.getElementById("boton")
const input = document.getElementById("input")
const contador = document.getElementById("contadorT")
let cuadro = document.getElementById("cuadro")

//GET
async function getTarea() {
    try {
        cuadro.innerHTML = "";
        const respuesta = await fetch("http://localhost:3000/api/task")
        const arreglo = await respuesta.json()
        let contadorCompletadas = 0;
        arreglo.forEach(tareas => {
            let check = document.createElement("input")
            let p = document.createElement("span")
            let div = document.createElement("div")
            let boton = document.createElement("button")
            boton.innerHTML = "Eliminar"
            boton.className = 'btn'

            check.checked = tareas.estado
            if (check.checked) {
                contadorCompletadas++
            }

            boton.addEventListener('click', () => {
                console.log("detecta el click");
                borrar(tareas.id)
            })

            contador.className = 'redondo'
            check.addEventListener('click', () => {
                if (check.checked) {
                    actualizacion(tareas.id)
                    contadorCompletadas++
                } else {
                    contadorCompletadas--
                }
                contador.value = contadorCompletadas
            })
            div.appendChild(p);
            check.type = "checkbox";
            p.innerHTML = tareas.nombre;
            div.appendChild(check)
            div.appendChild(p)
            cuadro.appendChild(div)
            p.appendChild(boton)
            p.appendChild(contador)
            contador.type = "check"
            check.className = "equis"
        })
        contador.value = contadorCompletadas;
    } catch (error) {
        console.error(error);
    }
}

//POST
async function darDatos() {
    if (input.value != '') {

        try {
            let tarea = {
                nombre: input.value,
                estado: false
            };
            //console.log(JSON.stringify(tarea))
            const respuesta = await fetch('http://localhost:3000/api/task', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tarea)
            })
            let registro = await respuesta.json()
            console.log(registro);
            getTarea()
            console.log(`La tarea ${tarea.id} fue agregada`);
        } catch (error) {
            console.error(error);
        }
    } else {
        alert("Ta' vacio")
    }//termina if

}
agregar.addEventListener("click", darDatos)

//PUT
async function actualizacion(id) {
    try {

        let actualizar = {
            estado: true
        }
        const respuesta = await fetch(`http://localhost:3000/api/task/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(actualizar)
        })
        console.log(`La tarea ${actualizar.id} fue agregada`);
        let actual = await respuesta.json()
        console.log(actual);
        //getTarea()
    } catch (error) {
        console.error(error);
    }
}
// //Delete
// async function eliminarTodo(id) {
//     try {
//         const respuesta = await fetch(`http://localhost:3000/api/task/${id}`,{
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         })
//         let eliminado = await respuesta.json()
//         console.log(eliminado);
//         //location.reload()
//     } catch (error) {
//         console.error(error);
//     }
// }
async function borrar(id) {
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

input.addEventListener('keypress', (e)=>{
    if (e.key == 'Enter') {
        darDatos()
        
    }
})