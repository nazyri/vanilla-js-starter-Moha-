// Inserte el código aquí
//cree las variables
const agregar = document.getElementById("boton")
const input = document.getElementById("input")
const contador = document.getElementById("contadorT")
let cuadro = document.getElementById("cuadro")
const btnBuscar = document.getElementById("btnBuscar")
const barraBusqueda = document.getElementById("barraBusqueda")
//importaciones
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
// Se crean las cosas de las paginas y las funciones 
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
//No hay tarea
            if (partes.length == 0) {
                tarea.style.display="block"
            } else {
                tarea.style.display="none"
            }

//cree el imput de buscar tarea junto con el boton 
            let div = document.createElement("div")
            div.className='mod'
            let boton = document.createElement("button")

            buscar.innerHTML = "Buscar Tarea"



//cree el boton eliminar de las tareas
            boton.innerHTML = "Eliminar"
            boton.className = 'btn'

//Cree el contador de las tareas completas
            check.checked = tareas.estado
            if (check.checked) {
                contadorCompletadas++
            }

//Al darle click se borra la tarea
            boton.addEventListener('click', () => {
                console.log("detecta el click");
                borrar(tareas.id)
            })

//contador de tarea y cree una clase
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

//agregue los elementos nuevos con el appenchild
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
//alerta
    if (input.value.trim()!= "") {

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
            alert("Error en el sistema"+error)
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
//Es para modificar las tareas
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
//Es para eliminar
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

//Es la funcion para darle click a la tecla Enter
input.addEventListener('keypress', (e)=>{
    if (e.key == 'Enter') {
        darDatos()
        
    }
})
