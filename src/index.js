// Inserte el código aquí
const btnVer = document.getElementById("boton")
async function datos() {
    try {
        const respuesta = await fetch("tareas.json")
        const datos = await respuesta.json()
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}

//GET
async function tarea() {
    try {
        const response = await fetch('http://localhost:3000/api/task')
        const data = await response.json();
        data.forEach(tareas=>{
        let p = document.createElement("p")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        let div = document.createElement("div")
        let cuadro = document.createElement("cuadro")

        p.innerHTML = tareas.nombre

        p.appendChild(checkbox)
        checkbox.appendChild(div)
        div.appendChild(cuadro)
        cuadro.appendChild(p)

       })
    } catch (error) {
        console.error(error);
    }
}

//POST
async function darDatos() {
    try {
        let tarea={
            id:Date.now(),
            nombre:input.value
        }
        const respuesta = await fetch('http://localhost:3000/api/task',{
            method: "POST",
            headers: {
                "Content-type": "aplication/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)
        })


        let registro = await respuesta.json()
        console.log(registro);
        tarea()

        console.log(`La tarea ${tarea.id} fue agregada`);
    } catch (error) {
        console.error(error);
    }  
}

btnVer.addEventListener("click",()=>{
   darDatos()
})




