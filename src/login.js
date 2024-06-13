//login
import { guardarDatos } from "./get";

let button2 = document.getElementById("boton")
let register = document.getElementById("register")

register.addEventListener('click', function () {
    window.location.href = "registro.html"
})


button2.addEventListener("click", async () => {
    let bandera = false
    let correos = document.getElementById("correos").value
    let password = document.getElementById("password").value
    let datos = await guardarDatos()
    datos.forEach(registrado => {
        if (correos === registrado.correo && password === registrado.clave) {
            window.location.href="principal.html"            
            bandera = true
        }
        if (!bandera) {
            bandera = true
        }
    })
})

//obtener el modal
var modal = document.getElementById("myModal");

//abre el boton var
var btn = document.getElementById("myBtn");

// obtiene el span que cierra el modal
var span = document.getElementsByClassName("close")[0];

// al darle click abre el modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// hace click en <span> cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// hace click afuera del modal se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}