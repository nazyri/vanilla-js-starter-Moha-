let lista = document.querySelector('#lista')
let input = document.querySelector('#input')
let btnEnter = document.querySelector('#boton-enter')
let check = "checkbook"
let lineThrough = 'line-through'
const id = 0

// funcion agregar tarea 
function agregarTarea(tarea,id,rezlizado,eliminado) {
    const elemento = `            
                    <li id="elemento>
                    <input type="checkbox" id="0">
                    <p class="text">${tarea}</p>
                    <button id="0">eliminar</button>
                    </li>
                     `
    lista.insertAdjacentHTML("beforeend",elemento)
}

btnEnter.addEventListener('click', ()=> {
    const tarea = input.value
    if (tarea) {
        agregarTarea(tarea,id,false,false)
    }
    input.value=''

})