/**
 * parseador.js
 * Ejercicio 1 — Softtek: Parseador de ecuación de primer grado
 * Ciclo TDD: 🔵 REFACTOR — código limpio, misma funcionalidad, mismos tests
 *
 * Formato soportado: "ax + b = c"  |  "ax - b = c"
 */

const REGEX = {
  coeficiente:  /^(-?\d*)x/,
  termino:      /x\s*[+\-]\s*(\d+)\s*=/,
  ladoDerecho:  /=\s*(-?\d+)/,
  operador:     /x\s*([+\-])\s*\d/,
};

const ERROR = {
  ecuacionVacia:   'La ecuación no puede estar vacía',
  formatoInvalido: 'Formato de ecuación inválido',
  divisionPorCero: 'División por cero',
};

function validarEcuacion(ecuacion) {
  if (!ecuacion || ecuacion.trim() === '') {
    throw new Error(ERROR.ecuacionVacia);
  }
}

function extraer(ecuacion, regex, grupo = 1) {
  const match = ecuacion.match(regex);
  if (!match) throw new Error(ERROR.formatoInvalido);
  return match[grupo];
}

function obtenerParte1(ecuacion) {
  validarEcuacion(ecuacion);
  const coef = extraer(ecuacion, REGEX.coeficiente);
  if (coef === '') return 1;
  if (coef === '-') return -1;
  return parseInt(coef, 10);
}

function obtenerParte2(ecuacion) {
  validarEcuacion(ecuacion);
  return parseInt(extraer(ecuacion, REGEX.termino), 10);
}

function obtenerParte3(ecuacion) {
  validarEcuacion(ecuacion);
  return parseInt(extraer(ecuacion, REGEX.ladoDerecho), 10);
}

function obtenerOperador(ecuacion) {
  validarEcuacion(ecuacion);
  return extraer(ecuacion, REGEX.operador);
}

function obtenerResultado(ecuacion) {
  validarEcuacion(ecuacion);
  const a = obtenerParte1(ecuacion);
  if (a === 0) throw new Error(ERROR.divisionPorCero);
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