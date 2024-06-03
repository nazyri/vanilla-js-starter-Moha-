let tarea = document.getElementById('input')
let agregar = document.getElementById('boton-2')
let lista = document.getElementById('cuadro')
let circulo = document.getElementById('contador')
let check = document.getElementById('check1')

agregar.addEventListener('click', function () {
  lista.innerHTML = tarea.value
  circulo.innerHTML =
    parseInt(contador.innerHTML) + 1
  alert("Agregue el nombre de la tarea")
});

let arreglo = [
 
]
