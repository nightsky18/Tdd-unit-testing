class Peliculas {
  constructor() {
    this._peliculas = [];
    this._nextId = 1;
  }

  crear(titulo, genero, anio, calificacion) {
    if (calificacion < 1.0 || calificacion > 10.0) {
      throw new Error('La calificación debe estar entre 1.0 y 10.0');
    }
    const pelicula = {
      id: this._nextId++,
      titulo,
      genero,
      anio,
      calificacion,
    };
    this._peliculas.push(pelicula);
    return pelicula;
  }

  obtenerTodas() {
    return [...this._peliculas];
  }

  obtenerPorId(id) {
    return this._peliculas.find(p => p.id === id) || null;
  }

  obtenerPorGenero(genero) {
    return this._peliculas.filter(p => p.genero === genero);
  }

  actualizar(id, datos) {
    const index = this._peliculas.findIndex(p => p.id === id);
    if (index === -1) return null;
    this._peliculas[index] = { ...this._peliculas[index], ...datos };
    return this._peliculas[index];
  }

  eliminar(id) {
    const index = this._peliculas.findIndex(p => p.id === id);
    if (index === -1) return false;
    this._peliculas.splice(index, 1);
    return true;
  }
}

module.exports = { Peliculas };
