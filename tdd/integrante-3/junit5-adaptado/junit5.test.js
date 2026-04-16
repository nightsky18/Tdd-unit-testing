describe('Pruebas de ejemplo para JUnit 5 adaptado a JavaScript (jest)', () => {


let contador = 0;

    beforeAll(() => {
    
        contador = 0;
    });

    beforeEach(() => {
        contador++;
    });


  /*
   * AFTER EACH (Después de cada uno)
   * --> Equivalente en JUnit5: @AfterEach
   * ¿Cuándo corre?: Se ejecuta DESPUÉS DE CADA test individual, independientemente de si
   * el test pasó (verde) o falló (rojo).
   * Uso real: Borrar la basura temporal creada durante el test, limpiar variables.
   */
  afterEach(() => {
    // Aquí no estamos haciendo nada específico con el contador por ahora,
    // pero dejamos el bloque listo comentando que sirve para resetear estados.
  });

  /*
   * AFTER ALL (Después de todo)
   * --> Equivalente en JUnit5: @AfterAll
   * ¿Cuándo corre?: Se ejecuta UNA SOLA VEZ al final, cuando el 100% de los test ya terminaron.
   * Uso real: Cerrar forzosamente la conexión a la base de datos o el servidor local.
   */
  afterAll(() => {
    // Volvemos el estado al inicio por pura limpieza 
    contador = 0;
  });

  // ==========================================
  // PRUEBAS (TESTS) Y ASERCIONES (ASSERTS)
  // ==========================================
  // Ahora sí vienen las afirmaciones matemáticas (los test funcionales).

  /* 
   * PRUEBA NORMAL (ASSERT EQUALS)
   * Función global: 'test(descripcion, funcion)'
   * --> Equivalente en JUnit5: @Test y assertEquals()
   */
  test('un test normal (assertEquals)', () => {
    // 'valorEsperado' es literalmente lo que nuestro cerebro sabe que es la respuesta correcta.
    const valorEsperado = 1; 
    
    // 'expect(A).toBe(B)' es la joya de la corona del testing en JavaScript.
    // Esto se lee en inglés literal: "Espera que el contador sea (toBe) igual al valorEsperado".
    // ⚠️ ¿Por qué el contador es 1? Porque antes de ingresar aquí, se ejecutó el "beforeEach"
    // y sumó el 0 + 1. ¡Y la magia es real!
    expect(contador).toBe(valorEsperado); // En Java sería: assertEquals(valorEsperado, contador)
  });

  /* 
   * PRUEBA DE NULOS (ASSERT NULL)
   * --> Equivalente en JUnit5: @Test y assertNull()
   */
  test('un test para verificar nulos (assertNull)', () => {
    // Declaramos nuestra variable explícitamente como nula (vacía/no inicializada).
    const valorNulo = null;
    
    // Usamos el validador estricto '.toBeNull()' el cual sólo brillará en verde
    // única y exclusivamente si la variable que el inspecciona es de tipo 'null'.
    expect(valorNulo).toBeNull(); // En Java sería: assertNull(valorNulo)
  });

  /* 
   * PRUEBA DE EXPLOSIONES Y ERRORES (ASSERT THROWS)
   * --> Equivalente en JUnit5: @Test y assertThrows()
   */
  test('un test que lanza error (assertThrows)', () => {
    // Nos inventamos una función letal. Su único trabajo en la vida
    // es estallar la aplicación y mandar un mensaje de Error forzado al ejecutarse.
    const funcionQueLanzaError = () => {
      throw new Error('Este es un error forzado');
    };
    
    // A veces queremos probar que el sistema se protege bien contra los errores.
    // Por eso le decimos a Jest: "Ey, inspecciona la función (funcionQueLanzaError).
    // Yo ESPERO (expect) que LANZARÁ ERROR (toThrow)". Como sí lanza error, el test PASA.
    expect(funcionQueLanzaError).toThrow(); 
    // En Java sería largo y feo: assertThrows(Error.class, () -> funcionQueLanzaError())
  });

  /* 
   * TEST IGNORADO/APAGADO (DISABLED)
   * --> Equivalente en JUnit5: @Disabled debajo de un @Test
   */
  // Fíjate en el '.skip' encadenado al test. ".skip" le dice al motor de Jest: 
  // "Por favor, sáltate o apaga este test, no lo vayas a leer".
  test.skip('un test deshabilitado (@Disabled)', () => {
    // Si no tuviera '.skip', este código de abajo haría estallar el test completo en un error Rojo
    // Porque ¡Obviamente un 'true' (Verdadero) jamás puede ser igual 'toBe' a un 'false' (Falso)!
    // Afortunadamente, Jest está ignorándolo y te avisa en consola marcándolo con un "○ skipped"
    expect(true).toBe(false);
  });























});