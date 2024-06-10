
export async function buscarTarea(nombre) {
    const response = await fetch("http://localhost:3000/api/task");
    const data = await response.json();
    
    let tareasFiltradas = data.filter(tarea => tarea.nombre === nombre);
    
    if (tareasFiltradas.length === 0) {
        // Muestra la tarea no encontrada
        alert("No hay tareas con ese nombre.");
    } else {
        // Muestra la tarea encontrada
        tareasFiltradas.forEach(tareaFiltrada => {
            alert(`Se encontro la tarea "${tareaFiltrada.nombre}"`);
            });
        }
    }

    //Al darle click muestra la tarea encontrada
btnBuscar.addEventListener("click", () => {
    buscarTarea(barraBusqueda.value);
    });
