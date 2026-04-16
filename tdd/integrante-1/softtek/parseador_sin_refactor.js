/**
 * parseador.js
 * Ejercicio 1 — Softtek: Parseador de ecuación de primer grado
 * Ciclo TDD: 🟢 GREEN — mínima implementación para pasar todos los tests
 *
 * Formato soportado: "ax + b = c"  |  "ax - b = c"
 * Ejemplos:  "2x + 1 = 3"  |  "10x - 5 = 15"  |  "x + 3 = 7"
 *
 * Autor: Mateo Berrío Cardona — Integrante 1
 * Rama:  tdd/integrante-1
 */

/**
 * Valida que la ecuación no sea vacía o nula.
 * @param {string} ecuacion
 */
function validarEcuacion(ecuacion) {
  if (!ecuacion || ecuacion.trim() === '') {
    throw new Error('La ecuación no puede estar vacía');
  }
}

/**
 * Extrae el coeficiente `a` (número antes de la x).
 * Si no hay número delante de x, asume coeficiente implícito 1.
 * @param {string} ecuacion  Ej: "2x + 1 = 3"
 * @returns {number}         Ej: 2
 */
function obtenerParte1(ecuacion) {
  validarEcuacion(ecuacion);
  const match = ecuacion.match(/^(-?\d*)x/);
  if (!match) throw new Error('Formato de ecuación inválido');
  const coef = match[1];
  if (coef === '' || coef === undefined) return 1;
  if (coef === '-') return -1;
  return parseInt(coef, 10);
}

/**
 * Extrae el valor absoluto del término independiente `b`.
 * @param {string} ecuacion  Ej: "2x + 1 = 3"
 * @returns {number}         Ej: 1
 */
function obtenerParte2(ecuacion) {
  validarEcuacion(ecuacion);
  const match = ecuacion.match(/x\s*[+\-]\s*(\d+)\s*=/);
  if (!match) throw new Error('Formato de ecuación inválido');
  return parseInt(match[1], 10);
}

/**
 * Extrae el lado derecho `c` de la ecuación.
 * @param {string} ecuacion  Ej: "2x + 1 = 3"
 * @returns {number}         Ej: 3
 */
function obtenerParte3(ecuacion) {
  validarEcuacion(ecuacion);
  const match = ecuacion.match(/=\s*(-?\d+)/);
  if (!match) throw new Error('Formato de ecuación inválido');
  return parseInt(match[1], 10);
}

/**
 * Detecta si el operador entre el término con x y b es "+" o "-".
 * @param {string} ecuacion  Ej: "2x - 1 = 3"
 * @returns {string}         "+" o "-"
 */
function obtenerOperador(ecuacion) {
  validarEcuacion(ecuacion);
  const match = ecuacion.match(/x\s*([+\-])\s*\d/);
  if (!match) throw new Error('Formato de ecuación inválido');
  return match[1];
}

/**
 * Resuelve la ecuación y retorna el valor de x.
 *   Si operador es "+": x = (c - b) / a
 *   Si operador es "-": x = (c + b) / a
 * @param {string} ecuacion  Ej: "2x + 1 = 3"
 * @returns {number}         Ej: 1
 */
function obtenerResultado(ecuacion) {
  validarEcuacion(ecuacion);
  const a = obtenerParte1(ecuacion);
  if (a === 0) throw new Error('División por cero');
  const b = obtenerParte2(ecuacion);
  const c = obtenerParte3(ecuacion);
  const op = obtenerOperador(ecuacion);
  return op === '+' ? (c - b) / a : (c + b) / a;
}

module.exports = {
  obtenerParte1,
  obtenerParte2,
  obtenerParte3,
  obtenerOperador,
  obtenerResultado,
};