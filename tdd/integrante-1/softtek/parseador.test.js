/**
 * parseador.test.js
 * Ejercicio 1 — Softtek: Parseador de ecuación de primer grado
 *
 * Formato de ecuación soportado: "ax + b = c" | "ax - b = c"
 * Ejemplos: "2x + 1 = 3" | "10x - 5 = 15" | "x + 3 = 7"
 *
 * Autor: Mateo Berrío Cardona — Integrante 1
 * Rama: tdd/integrante-1
 */

const {
  obtenerParte1,
  obtenerParte2,
  obtenerParte3,
  obtenerOperador,
  obtenerResultado,
} = require('./parseador');

// =============================================================================
// obtenerParte1 — extrae el coeficiente a (número antes de la x)
// =============================================================================
describe('obtenerParte1 — coeficiente a', () => {
  test('[P-01] coeficiente entero simple', () => {
    expect(obtenerParte1('2x + 1 = 3')).toBe(2);
  });

  test('[P-02] coeficiente de dos dígitos', () => {
    expect(obtenerParte1('10x - 5 = 15')).toBe(10);
  });

  test('[P-03] coeficiente implícito — solo "x" sin número retorna 1', () => {
    expect(obtenerParte1('x + 3 = 7')).toBe(1);
  });

  test('[P-04] coeficiente negativo', () => {
    expect(obtenerParte1('-3x + 2 = 8')).toBe(-3);
  });

  test('[P-17] entrada vacía debe lanzar un error', () => {
    expect(() => obtenerParte1('')).toThrow();
  });
});

// =============================================================================
// obtenerParte2 — extrae el valor absoluto del término independiente b
// =============================================================================
describe('obtenerParte2 — término independiente b', () => {
  test('[P-05] término positivo', () => {
    expect(obtenerParte2('2x + 1 = 3')).toBe(1);
  });

  test('[P-06] término con operador resta — retorna valor absoluto', () => {
    expect(obtenerParte2('2x - 4 = 6')).toBe(4);
  });

  test('[P-07] término independiente cero', () => {
    expect(obtenerParte2('2x + 0 = 3')).toBe(0);
  });
});

// =============================================================================
// obtenerParte3 — extrae el lado derecho c
// =============================================================================
describe('obtenerParte3 — lado derecho c', () => {
  test('[P-08] lado derecho positivo', () => {
    expect(obtenerParte3('2x + 1 = 3')).toBe(3);
  });

  test('[P-09] lado derecho igual a cero', () => {
    expect(obtenerParte3('5x - 2 = 0')).toBe(0);
  });

  test('[P-10] lado derecho negativo', () => {
    expect(obtenerParte3('3x + 1 = -9')).toBe(-9);
  });
});

// =============================================================================
// obtenerOperador — detecta si el operador entre a y b es "+" o "-"
// =============================================================================
describe('obtenerOperador — operador + o -', () => {
  test('[P-11] detecta operador suma (+)', () => {
    expect(obtenerOperador('2x + 1 = 3')).toBe('+');
  });

  test('[P-12] detecta operador resta (-)', () => {
    expect(obtenerOperador('2x - 1 = 3')).toBe('-');
  });
});

// =============================================================================
// obtenerResultado — resuelve x = (c - b) / a  |  x = (c + b) / a  (con resta)
// =============================================================================
describe('obtenerResultado — resolución de x', () => {
  test('[P-13] resultado entero positivo: "2x + 1 = 3" → x = 1', () => {
    expect(obtenerResultado('2x + 1 = 3')).toBe(1);
  });

  test('[P-14] resultado con operador resta: "3x - 6 = 0" → x = 2', () => {
    expect(obtenerResultado('3x - 6 = 0')).toBe(2);
  });

  test('[P-15] coeficiente 1 y b cero: "1x + 0 = 5" → x = 5', () => {
    expect(obtenerResultado('1x + 0 = 5')).toBe(5);
  });

  test('[P-16] resultado x = 0: "2x + 3 = 3" → x = 0', () => {
    expect(obtenerResultado('2x + 3 = 3')).toBe(0);
  });

  test('[P-18] coeficiente a = 0 debe lanzar error de división por cero', () => {
    expect(() => obtenerResultado('0x + 1 = 3')).toThrow('División por cero');
  });
});