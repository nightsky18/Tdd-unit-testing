const { Peliculas } = require('./peliculas');

describe('CRUD Películas - JavaScript (Jest)', () => {
  let db;

  beforeEach(() => {
    db = new Peliculas();
  });

  // ── CREAR ──────────────────────────────────────────────
  describe('crear()', () => {
    test('debe agregar una película y retornarla con id autogenerado', () => {
      const pelicula = db.crear('Inception', 'Ciencia Ficción', 2010, 9.3);
      expect(pelicula.id).toBe(1);
      expect(pelicula.titulo).toBe('Inception');
      expect(pelicula.genero).toBe('Ciencia Ficción');
      expect(pelicula.anio).toBe(2010);
      expect(pelicula.calificacion).toBe(9.3);
    });

    test('los ids deben ser autoincrementales', () => {
      db.crear('Película A', 'Acción', 2000, 7.0);
      const segunda = db.crear('Película B', 'Drama', 2005, 8.0);
      expect(segunda.id).toBe(2);
    });

    test('debe lanzar error si la calificación está fuera del rango 1.0 - 10.0', () => {
      expect(() => db.crear('Mala', 'Terror', 2020, 11.0)).toThrow();
      expect(() => db.crear('Peor', 'Terror', 2020, 0.5)).toThrow();
    });
  });

  // ── LEER TODAS ─────────────────────────────────────────
  describe('obtenerTodas()', () => {
    test('debe retornar un arreglo vacío si no hay películas', () => {
      expect(db.obtenerTodas()).toEqual([]);
    });

    test('debe retornar todas las películas creadas', () => {
      db.crear('Interstellar', 'Ciencia Ficción', 2014, 8.6);
      db.crear('El Padrino', 'Drama', 1972, 9.2);
      expect(db.obtenerTodas()).toHaveLength(2);
    });
  });

  // ── LEER POR ID ────────────────────────────────────────
  describe('obtenerPorId()', () => {
    test('debe retornar la película con el id indicado', () => {
      db.crear('Joker', 'Drama', 2019, 8.5);
      const resultado = db.obtenerPorId(1);
      expect(resultado.titulo).toBe('Joker');
    });

    test('debe retornar null si el id no existe', () => {
      expect(db.obtenerPorId(99)).toBeNull();
    });
  });

  // ── FILTRAR POR GÉNERO ─────────────────────────────────
  describe('obtenerPorGenero()', () => {
    test('debe retornar solo las películas del género indicado', () => {
      db.crear('Matrix', 'Acción', 1999, 8.7);
      db.crear('Titanic', 'Romance', 1997, 7.8);
      db.crear('John Wick', 'Acción', 2014, 7.4);
      const accion = db.obtenerPorGenero('Acción');
      expect(accion).toHaveLength(2);
      expect(accion.every(p => p.genero === 'Acción')).toBe(true);
    });

    test('debe retornar arreglo vacío si no hay películas del género', () => {
      db.crear('Matrix', 'Acción', 1999, 8.7);
      expect(db.obtenerPorGenero('Terror')).toEqual([]);
    });
  });

  // ── ACTUALIZAR ─────────────────────────────────────────
  describe('actualizar()', () => {
    test('debe actualizar los campos indicados de una película', () => {
      db.crear('Avatar', 'Aventura', 2009, 7.8);
      const actualizada = db.actualizar(1, { calificacion: 8.0, titulo: 'Avatar: Remastered' });
      expect(actualizada.calificacion).toBe(8.0);
      expect(actualizada.titulo).toBe('Avatar: Remastered');
      expect(actualizada.genero).toBe('Aventura');
    });

    test('debe retornar null si el id no existe', () => {
      expect(db.actualizar(99, { titulo: 'No existe' })).toBeNull();
    });
  });

  // ── ELIMINAR ───────────────────────────────────────────
  describe('eliminar()', () => {
    test('debe eliminar la película y retornar true', () => {
      db.crear('Parasite', 'Suspenso', 2019, 8.6);
      expect(db.eliminar(1)).toBe(true);
      expect(db.obtenerTodas()).toHaveLength(0);
    });

    test('debe retornar false si el id no existe', () => {
      expect(db.eliminar(99)).toBe(false);
    });
  });
});
