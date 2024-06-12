import { darDatos } from "./post";

// //registro
let boton = document.getElementById("registro")
let button = document.getElementById('button')
let clave = document.getElementById("clave")



button.addEventListener('click',function () {
  
  window.location.href="login.html"
  })
  
  boton.addEventListener('click', function () {
  let inputnombre = document.getElementById("nombre").value
  let inputcorreo = document.getElementById("correo").value
  let inputclave = document.getElementById("contraseña").value
  darDatos(inputnombre,inputcorreo,inputclave)
})

