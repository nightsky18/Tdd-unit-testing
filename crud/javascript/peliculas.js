// Definición de la clase Peliculas para gestionar nuestro catálogo en memoria
class Peliculas {
  // El constructor inicializa el estado de cada nueva instancia de la clase
  constructor() {
    // Array interno donde se guardarán los objetos de cada película
    this._peliculas = [];
    // Contador para asignar identificadores únicos y secuenciales
    this._nextId = 1;
  }

  // Método para registrar una nueva película en el sistema
  crear(titulo, genero, anio, calificacion) {
    // Validación: si la calificación no está entre 1 y 10, detenemos la ejecución
    if (calificacion < 1.0 || calificacion > 10.0) {
      // Lanzamos un error que podrá ser capturado por quien llame al método
      throw new Error('La calificación debe estar entre 1.0 y 10.0');
    }
    // Creamos el objeto película agrupando las propiedades pasadas como argumentos
    const pelicula = {
      id: this._nextId++, // Asignamos el ID actual y luego lo incrementamos para la próxima vez
      titulo,             // Sintaxis abreviada (shorthand): equivale a titulo: titulo
      genero,
      anio,
      calificacion,
    };
    // Guardamos la nueva película al final del array interno usando push()
    this._peliculas.push(pelicula);
    // Retornamos el objeto creado para confirmar el éxito de la operación
    return pelicula;
  }

  // Método para recuperar el listado completo de películas
  obtenerTodas() {
    // Retornamos una copia del array usando el operador spread (...)
    // Esto protege nuestro array original de modificaciones externas accidentales
    return [...this._peliculas];
  }

  // Método para buscar una película específica mediante su ID
  obtenerPorId(id) {
    // find() busca el primer elemento que cumpla la condición (p.id === id)
    // Si no lo encuentra, find() devuelve undefined, en cuyo caso devolvemos null
    return this._peliculas.find(p => p.id === id) || null;
  }

  // Método para filtrar películas que pertenezcan a un género dado
  obtenerPorGenero(genero) {
    // filter() devuelve un nuevo array con todos los elementos que coincidan con el género
    return this._peliculas.filter(p => p.genero === genero);
  }

  // Método para actualizar los datos de una película existente
  actualizar(id, datos) {
    // Buscamos el índice (posición) de la película en nuestro array
    const index = this._peliculas.findIndex(p => p.id === id);
    // Si el índice es -1, significa que no existe ninguna película con ese ID
    if (index === -1) return null;
    // Combinamos la película actual con los nuevos datos usando el operador spread
    // Las propiedades en 'datos' sobrescribirán a las de la película original
    this._peliculas[index] = { ...this._peliculas[index], ...datos };
    // Retornamos el objeto actualizado
    return this._peliculas[index];
  }

  // Método para eliminar permanentemente una película del sistema
  eliminar(id) {
    // Localizamos de nuevo la posición de la película en el array
    const index = this._peliculas.findIndex(p => p.id === id);
    // Si no se encuentra, retornamos false indicando que no se pudo borrar nada
    if (index === -1) return false;
    // splice() elimina 1 elemento en la posición especificada por 'index'
    this._peliculas.splice(index, 1);
    // Retornamos true para confirmar que la eliminación fue exitosa
    return true;
  }
}

// Exportamos la clase para que pueda ser utilizada en otros archivos (Node.js CommonJS)
module.exports = { Peliculas };
