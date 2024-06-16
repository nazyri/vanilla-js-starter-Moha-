import { borrartodo } from "./delete" 
import { actualizar } from "./put" 

let borrar = document.getElementById("salir")
let cambiar = document.getElementById("cambiar")
let cuadrito = document.getElementById("seccion")
let inputCambio = document.getElementById("cambie")
let inputVerifique = document.getElementById("verifique")
let btnclave = document.getElementById("btnclave")



cambiar.addEventListener("click", ()=> {
    let classCuadro = cuadrito.getAttribute("class")
    let classCambio = inputCambio.getAttribute("class")
    let classVerifique = inputVerifique.getAttribute("class")
    let classClave = btnclave.getAttribute("class")
    
if(classCuadro=="oculto" && classCambio == "oculto" && classVerifique == "oculto" && classClave == "oculto"){
    cuadrito.classList.toggle("seccion")
    inputCambio.classList.toggle("inicio")
    inputVerifique.classList.toggle("inicio")
    btnclave.classList.toggle("inicio")
    cuadrito.classList.remove("oculto")
    inputCambio.classList.remove("oculto")
    inputVerifique.classList.remove("oculto")
    btnclave.classList.remove("oculto")
}else{
    cuadrito.classList.remove("seccion")
    inputCambio.classList.remove("inicio")
    inputVerifique.classList.remove("inicio")
    btnclave.classList.remove("inicio")
    cuadrito.classList.add("oculto")
    inputCambio.classList.add("oculto")
    inputVerifique.classList.add("oculto")
    btnclave.classList.add("oculto")
   }          
})

            
    borrar.addEventListener("click", ()=> {

    window.location.href="registro.html"
    })



            

            

            

