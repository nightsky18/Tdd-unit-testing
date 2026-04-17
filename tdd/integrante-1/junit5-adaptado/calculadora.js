/**
 * calculadora.js
 * Ejercicio 2 — JUnit5 adaptado a Jest: implementación de soporte
 *
 */

class Calculadora {
  constructor() {
    this.historial = [];
  }

  sumar(a, b) {
    const resultado = a + b;
    this.historial.push(`${a} + ${b} = ${resultado}`);
    return resultado;
  }

  restar(a, b) {
    const resultado = a - b;
    this.historial.push(`${a} - ${b} = ${resultado}`);
    return resultado;
  }

  multiplicar(a, b) {
    const resultado = a * b;
    this.historial.push(`${a} * ${b} = ${resultado}`);
    return resultado;
  }

  // Lanza Error si b === 0 → demuestra toThrow
  dividir(a, b) {
    if (b === 0) throw new Error('División por cero');
    const resultado = a / b;
    this.historial.push(`${a} / ${b} = ${resultado}`);
    return resultado;
  }

  // Retorna null si historial vacío → demuestra toBeNull
  obtenerUltimaOperacion() {
    return this.historial.length > 0
      ? this.historial[this.historial.length - 1]
      : null;
  }

  limpiarHistorial() {
    this.historial = [];
  }
}

module.exports = Calculadora;