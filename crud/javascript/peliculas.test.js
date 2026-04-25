// Importamos la clase Peliculas del archivo local utilizando 'require' (sistema de módulos CommonJS)
const { Peliculas } = require('./peliculas');

// Bloque principal que agrupa todas las pruebas relacionadas con el CRUD de películas en JavaScript
describe('CRUD Películas - JavaScript (Jest)', () => {
  // Declaramos la variable 'db' fuera para que sea accesible en todos los tests del bloque
  let db;

  // beforeEach se ejecuta antes de CADA test individual dentro de este describe
  beforeEach(() => {
    // Instalamos una instancia limpia de Peliculas para que los tests no interfieran entre sí
    db = new Peliculas();
  });

  // Grupo de pruebas específicas para el método crear()
  // ── CREAR ──────────────────────────────────────────────
  describe('crear()', () => {
    // Test: comprueba la creación básica y la asignación automática de ID
    test('debe agregar una película y retornarla con id autogenerado', () => {
      // Ejecutamos la acción de crear
      const pelicula = db.crear('Inception', 'Ciencia Ficción', 2010, 9.3);
      // 'expect' define el resultado que esperamos obtener; '.toBe' realiza la comparación exacta
      expect(pelicula.id).toBe(1);              // El primer ID debe ser 1
      expect(pelicula.titulo).toBe('Inception'); // El título debe coincidir
      expect(pelicula.genero).toBe('Ciencia Ficción'); // El género debe coincidir
      expect(pelicula.anio).toBe(2010);         // El año debe coincidir
      expect(pelicula.calificacion).toBe(9.3);  // La calificación debe coincidir
    });

    // Test: verifica que el ID se incremente correctamente para cada nueva película
    test('los ids deben ser autoincrementales', () => {
      // Creamos la primera película
      db.crear('Película A', 'Acción', 2000, 7.0);
      // Creamos la segunda película
      const segunda = db.crear('Película B', 'Drama', 2005, 8.0);
      // Verificamos que esta segunda película tenga el ID 2
      expect(segunda.id).toBe(2);
    });

    // Test: valida que el sistema rechace calificaciones inválidas
    test('debe lanzar error si la calificación está fuera del rango 1.0 - 10.0', () => {
      // Para probar funciones que lanzan errores, pasamos una función anónima a expect()
      // .toThrow() asegura que se lance una excepción durante la ejecución
      expect(() => db.crear('Mala', 'Terror', 2020, 11.0)).toThrow();
      expect(() => db.crear('Peor', 'Terror', 2020, 0.5)).toThrow();
    });
  });

  // Grupo de pruebas para listar todas las películas
  // ── LEER TODAS ─────────────────────────────────────────
  describe('obtenerTodas()', () => {
    // Test: asegura que al inicio devuelva un array vacío sin errores
    test('debe retornar un arreglo vacío si no hay películas', () => {
      // .toEqual se usa para comparar el contenido de objetos o arrays
      expect(db.obtenerTodas()).toEqual([]);
    });

    // Test: verifica que se recuperen todos los elementos guardados
    test('debe retornar todas las películas creadas', () => {
      // Preparamos los datos
      db.crear('Interstellar', 'Ciencia Ficción', 2014, 8.6);
      db.crear('El Padrino', 'Drama', 1972, 9.2);
      // .toHaveLength(2) verifica que el array tenga exactamente 2 elementos
      expect(db.obtenerTodas()).toHaveLength(2);
    });
  });

  // Grupo de pruebas para recuperar una película por su ID
  // ── LEER POR ID ────────────────────────────────────────
  describe('obtenerPorId()', () => {
    // Test: búsqueda exitosa
    test('debe retornar la película con el id indicado', () => {
      db.crear('Joker', 'Drama', 2019, 8.5);
      const resultado = db.obtenerPorId(1);
      expect(resultado.titulo).toBe('Joker');
    });

    // Test: búsqueda de un ID que no existe
    test('debe retornar null si el id no existe', () => {
      // .toBeNull() es una aserción específica para verificar el valor null
      expect(db.obtenerPorId(99)).toBeNull();
    });
  });

  // Grupo de pruebas para filtrar películas por género
  // ── FILTRAR POR GÉNERO ─────────────────────────────────
  describe('obtenerPorGenero()', () => {
    // Test: filtrado funcional y preciso
    test('debe retornar solo las películas del género indicado', () => {
      // Insertamos datos variados
      db.crear('Matrix', 'Acción', 1999, 8.7);
      db.crear('Titanic', 'Romance', 1997, 7.8);
      db.crear('John Wick', 'Acción', 2014, 7.4);
      // Filtramos por 'Acción'
      const accion = db.obtenerPorGenero('Acción');
      // Verificamos cantidad
      expect(accion).toHaveLength(2);
      // Verificamos que CADA elemento del resultado sea realmente de género 'Acción'
      expect(accion.every(p => p.genero === 'Acción')).toBe(true);
    });

    // Test: caso donde el género buscado no existe en la lista
    test('debe retornar arreglo vacío si no hay películas del género', () => {
      db.crear('Matrix', 'Acción', 1999, 8.7);
      expect(db.obtenerPorGenero('Terror')).toEqual([]);
    });
  });

  // Grupo de pruebas para la actualización de datos
  // ── ACTUALIZAR ─────────────────────────────────────────
  describe('actualizar()', () => {
    // Test: modificación exitosa de campos específicos
    test('debe actualizar los campos indicados de una película', () => {
      db.crear('Avatar', 'Aventura', 2009, 7.8);
      // Actualizamos solo título y calificación
      const actualizada = db.actualizar(1, { calificacion: 8.0, titulo: 'Avatar: Remastered' });
      expect(actualizada.calificacion).toBe(8.0);
      expect(actualizada.titulo).toBe('Avatar: Remastered');
      // Aseguramos que el género original se mantuvo intacto
      expect(actualizada.genero).toBe('Aventura');
    });

    // Test: intento de actualizar una película inexistente
    test('debe retornar null si el id no existe', () => {
      expect(db.actualizar(99, { titulo: 'No existe' })).toBeNull();
    });
  });

  // Grupo de pruebas para la eliminación de registros
  // ── ELIMINAR ───────────────────────────────────────────
  describe('eliminar()', () => {
    // Test: borrado exitoso y confirmación
    test('debe eliminar la película y retornar true', () => {
      db.crear('Parasite', 'Suspenso', 2019, 8.6);
      // Ejecutamos eliminación y verificamos que devuelva true
      expect(db.eliminar(1)).toBe(true);
      // Verificamos que la película ya no esté en el listado general
      expect(db.obtenerTodas()).toHaveLength(0);
    });

    // Test: intento de eliminar un ID que no se encuentra
    test('debe retornar false si el id no existe', () => {
      expect(db.eliminar(99)).toBe(false);
    });
  });
});
