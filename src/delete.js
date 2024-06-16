async function borrartodo() { 
  console.log("Se elimino el usuario");
  try {
      let tarea = {
          nombre: nombre,
          correo: correo,
          clave: clave
      }
      const respuesta = await fetch('http://localhost:3000/api/task', {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(tarea)
      })
      let agregar = await respuesta.json()
      console.log(agregar);
  // guardarDatos()
      console.log(`La tarea ${tarea.id} fue agregada`);
  } catch (error) {
      console.error(error);
  }
}
export {borrartodo}