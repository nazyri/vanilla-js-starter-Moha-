import { borrartodo } from "./delete" 
import { actualizar } from "./put" 

let borrar = document.getElementById("borrar")
let cambiar = document.getElementById("cambiar")
let cuadrito = document.getElementById("seccion")
let inputCambio = document.getElementById("cambie")
let inputVerifique = document.getElementById("verifique")



cambiar.addEventListener("click", ()=> {
    let classCuadro = cuadrito.getAttribute("class")
    let classCambio = inputCambio.getAttribute("class")
    let classVerifique = inputVerifique.getAttribute("class")

    if(classCuadro=="oculto" && classCambio == "oculto" && classVerifique == "oculto"){
        cuadrito.classList.toggle("seccion")
        inputCambio.classList.toggle("inicio")
        inputVerifique.classList.toggle("inicio")
        cuadrito.classList.remove("oculto")
        inputCambio.classList.remove("oculto")
        inputVerifique.classList.remove("oculto")
    }else{
        cuadrito.classList.remove("seccion")
        inputCambio.classList.remove("inicio")
        inputVerifique.classList.remove("inicio")
        cuadrito.classList.add("oculto")
        inputCambio.classList.add("oculto")
        inputVerifique.classList.add("oculto")
    }
    
})












