// calculadora.js
class Calculadora {

  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error('No es posible dividir por cero');
    }
    return a / b;
  }

  esPar(n) {
    return n % 2 === 0;
  }

  encontrarMaximo(lista) {
    if (!lista || lista.length === 0) {
      return null;
    }
    return Math.max(...lista);
  }
}

module.exports = Calculadora;