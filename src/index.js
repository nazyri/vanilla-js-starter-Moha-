// Inserte el código aquí
const agregar = document.getElementById("boton")
const input = document.getElementById("input")


// 
async function getTarea() {
    try {
        cuadro.innerHTML=""
        const respuesta = await fetch("http://localhost:3000/api/task")
        const arreglo = await respuesta.json()
        arreglo.forEach(tareas=>{
        let ex = document.createElement("INPUT")
        let p = document.createElement("span")
        let div = document.createElement("div")
        let boton = document.createElement("button")
        boton.innerHTML = "Eliminar"
        boton.className='btn'
        boton.addEventListener('click',()=>{
            console.log("detecta el click");
            borrar(tareas.id)
        })
        div.appendChild(p)
        ex.type = "checkbox"
        p.innerHTML = tareas.nombre
        let cuadro = document.getElementById("cuadro")

        div.appendChild(ex)
        div.appendChild(p)
        cuadro.appendChild(div)

        p.appendChild(boton)

        ex.className="equis"
    })
    } catch (error) {
        console.error(error);
    }
}
//POST
async function darDatos() {
    try {
        let tarea={
            nombre:input.value,
            estado:false
        }
        console.log(JSON.stringify(tarea))
        const respuesta = await fetch('http://localhost:3000/api/task',{
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
}
agregar.addEventListener("click",()=>{
   darDatos()
})
//PUT
async function actualizacion(id) {
    try {
        let actualizar={
            estado:true
        }
        const respuesta = await fetch(`http://localhost:3000/api/task/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(actualizar)
        })
        console.log(`La tarea ${actualizar.id} fue agregada`);
        let actual = await respuesta.json()
        console.log(actual);
        darDatos()
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
function borrar(id) {
    console.log("ingresa a la funcion");
    try {
console.log('ingresa al try');
         fetch(`http://localhost:3000/api/task/${id}`,{
            method: "DELETE",
        })
        console.log(`se elimino la tarea con id `+id);
        location.reload()
    } catch (error) {
        console.error(error);
    }  
}
getTarea()