//login
import { guardarDatos } from "./get";

let button2 = document.getElementById("boton")
let borrar = document.getElementById("borrar")
let cambiar = document.getElementById("cambiar")
let register = document.getElementById("register")


register.addEventListener('click',function () {
    
    window.location.href="registro.html"
    })
    
    
button2.addEventListener("click", function () {
    let inputcorreos = document.getElementById("correos")
    let inputcontraseñas = document.getElementById("contraseña")
guardarDatos(inputcorreos,inputcontraseñas)

})

//borrar.addEventListener("click")

//get