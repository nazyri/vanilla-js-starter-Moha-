// Inserte el código aquí
const agregar = document.getElementById("boton")
const input = document.getElementById("input")
const contador = document.getElementById("contadorT")
let cuadro = document.getElementById("cuadro")
const btnBuscar = document.getElementById("btnBuscar")
const barraBusqueda = document.getElementById("barraBusqueda")
import Swal from 'sweetalert2'
import { buscarTarea } from './export'


const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1600,
    timerProgressBar: true,
  })

//GET
async function getTarea() {
    try {
        cuadro.innerHTML = "";
        const respuesta = await fetch("http://localhost:3000/api/task")
        const arreglo = await respuesta.json()
        let contadorCompletadas = 0;
        let partes = Array.from(arreglo)
        arreglo.forEach(tareas => {

            let buscar = document.createElement("button")
            let check = document.createElement("input")
            let p = document.createElement("span")
            p.classList.add("texto2")

            if (partes.length == 0) {
                tarea.style.display="block"
            } else {
                tarea.style.display="none"
            }


            let div = document.createElement("div")
            div.className='mod'
            let boton = document.createElement("button")

            buscar.innerHTML = "Buscar Tarea"




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
        await Toast.fire({
            title: 'Error!',
            text: 'Ingrese el texto de la tarea',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
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


input.addEventListener('keypress', (e)=>{
    if (e.key == 'Enter') {
        darDatos()
        
    }
})
