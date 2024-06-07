export async function buscarTarea(nombre) {
    const response = await fetch("http://localhost:3000/api/task")
    const data = await response.json()
    data.forEach(tareaFiltrada=>{
        if(barraBusqueda.value==nombre){
        console.log(`La tarea encontrada fue ${tareaFiltrada.nombre}`);
        }
    })
}
btnBuscar.addEventListener("click",()=>{
    buscarTarea(barraBusqueda.value)
})