// Adaptación de JUnit5 User Guide a JavaScript con Jest
// Fuente: https://junit.org/junit5/docs/current/user-guide/#running-tests

const Calculadora = require('./calculadora');

// ─── @BeforeAll — se ejecuta una sola vez antes de todos los tests ─────────
beforeAll(() => {
  console.log('[@BeforeAll] Inicio de la suite de tests — equivale a @BeforeAll en JUnit5');
});

// ─── @AfterAll — se ejecuta una sola vez después de todos los tests ────────
afterAll(() => {
  console.log('[@AfterAll] Fin de la suite de tests — equivale a @AfterAll en JUnit5');
});

// ─── @BeforeEach — se ejecuta antes de cada test ──────────────────────────
let calculadora;

beforeEach(() => {
  calculadora = new Calculadora();
  console.log('[@BeforeEach] Nueva instancia de Calculadora creada');
});

// ─── @AfterEach — se ejecuta después de cada test ─────────────────────────
afterEach(() => {
  console.log('[@AfterEach] Test finalizado');
});


// ─── @Test — tests básicos con assertEquals ────────────────────────────────
// Equivale a: assertEquals(esperado, resultado)

test('@Test — sumar dos números positivos', () => {
  const resultado = calculadora.sumar(2, 3);
  expect(resultado).toBe(5);                    // assertEquals(5, resultado)
});

test('@Test — sumar número positivo y negativo', () => {
  const resultado = calculadora.sumar(-1, 5);
  expect(resultado).toBe(4);
});

test('@Test — restar dos números', () => {
  const resultado = calculadora.restar(10, 4);
  expect(resultado).toBe(6);
});

test('@Test — multiplicar dos números', () => {
  const resultado = calculadora.multiplicar(3, 4);
  expect(resultado).toBe(12);
});


// ─── assertThrows — verifica que se lanza una excepción ───────────────────
// Equivale a: assertThrows(ArithmeticException.class, () -> calculadora.dividir(5, 0))

test('@Test — dividir por cero lanza excepción', () => {
  expect(() => {
    calculadora.dividir(5, 0);
  }).toThrow('No es posible dividir por cero');
});

test('@Test — división normal retorna resultado correcto', () => {
  const resultado = calculadora.dividir(10, 2);
  expect(resultado).toBe(5);
});


// ─── assertTrue / assertFalse ──────────────────────────────────────────────
// Equivale a: assertTrue(calculadora.esPar(4))

test('@Test — assertTrue: 4 es par', () => {
  expect(calculadora.esPar(4)).toBe(true);      // assertTrue
});

test('@Test — assertFalse: 3 no es par', () => {
  expect(calculadora.esPar(3)).toBe(false);     // assertFalse
});


// ─── assertNull / assertNotNull ────────────────────────────────────────────
// Equivale a: assertNull(resultado) y assertNotNull(resultado)

test('@Test — assertNull: lista vacía retorna null', () => {
  const resultado = calculadora.encontrarMaximo([]);
  expect(resultado).toBeNull();                 // assertNull
});

test('@Test — assertNotNull: lista con valores no retorna null', () => {
  const resultado = calculadora.encontrarMaximo([1, 5, 3]);
  expect(resultado).not.toBeNull();             // assertNotNull
  expect(resultado).toBe(5);
});


// ─── @Disabled — test deshabilitado ───────────────────────────────────────
// Equivale a: @Disabled("pendiente de implementación")

test.skip('@Disabled — test pendiente de implementación', () => {
  // Este test no se ejecuta, igual que @Disabled en JUnit5
  const resultado = calculadora.sumar(1, 1);
  expect(resultado).toBe(99);
});


// ─── @Nested — tests agrupados por contexto ───────────────────────────────
// Equivale a clases internas con @Nested en JUnit5

describe('@Nested — pruebas de división', () => {

  test('división entre números positivos', () => {
    expect(calculadora.dividir(9, 3)).toBe(3);
  });

  test('división con resultado decimal', () => {
    expect(calculadora.dividir(1, 4)).toBe(0.25);
  });

  test('dividir por cero lanza error', () => {
    expect(() => calculadora.dividir(10, 0)).toThrow();
  });
});

describe('@Nested — pruebas de paridad', () => {

  test('cero es par', () => {
    expect(calculadora.esPar(0)).toBe(true);
  });

  test('número negativo par', () => {
    expect(calculadora.esPar(-4)).toBe(true);
  });

  test('número negativo impar', () => {
    expect(calculadora.esPar(-3)).toBe(false);
  });
});