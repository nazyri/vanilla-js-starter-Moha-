// Lista de tareas
const tasks = [
    { id: 1, title: 'Hacer la compra' },
    { id: 2, title: 'Limpiar la casa' },
    { id: 3, title: 'Preparar la cena' },
    { id: 4, title: 'Ir al gimnasio' }
  ];
  
  // Función asíncrona para buscar una tarea por título
  async function searchTaskByTitle(query) {
    // Simulando una búsqueda asíncrona con un delay de 1 segundo
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const results = tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));
        if (results.length > 0) {
          resolve(results);
        } else {
          reject(new Error('No se encontraron tareas que coincidan con la búsqueda.'));
        }
      }, 1000);
    });
  }
  
  // Ejemplo de uso
  async function handleSearch(query) {
    try {
      const results = await searchTaskByTitle(query);
      console.log('Resultados de la búsqueda:', results);
      // Aquí puedes actualizar la interfaz de usuario para mostrar los resultados de la búsqueda
    } catch (error) {
      console.error(error.message);
      // Aquí puedes manejar el caso en que no se encuentren tareas que coincidan con la búsqueda
    }
  }
  
  // Llamada a la función de búsqueda
  handleSearch('hacer');




  data.forEach(tareaFiltrada=>{
    if(barraBusqueda.value==nombre){
    console.log(`La tarea encontrada fue ${tareaFiltrada.nombre}`);
    }
})