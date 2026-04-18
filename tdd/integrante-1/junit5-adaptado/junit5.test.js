const Calculadora = require('./calculadora');

let calc;
let contadorOperaciones;

// @BeforeAll → beforeAll()
beforeAll(() => {
  contadorOperaciones = 0;
  console.log('\n[beforeAll] Suite iniciada — contador: 0');
});

// @AfterAll → afterAll()
afterAll(() => {
  console.log(`[afterAll] Suite finalizada — total operaciones: ${contadorOperaciones}`);
});

// @BeforeEach → beforeEach()
beforeEach(() => {
  calc = new Calculadora();
  contadorOperaciones++;
  console.log(`[beforeEach] Nueva instancia creada (operación #${contadorOperaciones})`);
});

// @AfterEach → afterEach()
afterEach(() => {
  calc.limpiarHistorial();
  console.log('[afterEach] Historial limpiado');
});

describe('Equivalentes de JUnit5 en Jest — Calculadora', () => {

  // assertEquals → toBe()
  test('[J-01] @Test + assertEquals → sumar(2, 3) toBe(5)', () => {
    expect(calc.sumar(2, 3)).toBe(5);
  });

  test('[J-02] @Test + assertEquals → restar(10, 4) toBe(6)', () => {
    expect(calc.restar(10, 4)).toBe(6);
  });

  test('[J-08] @Test + assertEquals → multiplicar(3, 4) toBe(12)', () => {
    expect(calc.multiplicar(3, 4)).toBe(12);
  });

  // assertNull → toBeNull()
  test('[J-09] @Test + assertNull → obtenerUltimaOperacion() toBeNull() con historial vacío', () => {
    expect(calc.obtenerUltimaOperacion()).toBeNull();
  });

  // assertThrows → toThrow()
  test('[J-10] @Test + assertThrows → dividir(5, 0) toThrow("División por cero")', () => {
    expect(() => calc.dividir(5, 0)).toThrow('División por cero');
  });

  // Casos borde
  test('[J-11] sumar negativos: sumar(-3, -2) toBe(-5)', () => {
    expect(calc.sumar(-3, -2)).toBe(-5);
  });

  test('[J-12] multiplicar por cero: multiplicar(7, 0) toBe(0)', () => {
    expect(calc.multiplicar(7, 0)).toBe(0);
  });

  test('[J-13] restar negativo: restar(2, 9) toBe(-7)', () => {
    expect(calc.restar(2, 9)).toBe(-7);
  });

  // @Disabled → test.skip()
  test.skip('[J-07] @Disabled → potencia(2, 8) toBe(256) — no implementada aún', () => {
    expect(calc.potencia(2, 8)).toBe(256);
  });
});