
export async function buscarTarea(nombre) {
    const response = await fetch("http://localhost:3000/api/task");
    const data = await response.json();
    
    let tareasFiltradas = data.filter(tarea => tarea.nombre === nombre);
    
    if (tareasFiltradas.length === 0) {
        alert("No hay tareas con ese nombre.");
    } else {
        // Imprimir las tareas
        tareasFiltradas.forEach(tareaFiltrada => {
            alert(`La tarea encontrada fue ${tareaFiltrada.nombre}`);
            });
            }
            }

btnBuscar.addEventListener("click", () => {
    buscarTarea(barraBusqueda.value);
    });
