// parseador.test.js
const Parseador = require('./parseador');

const parseador = new Parseador();

test('obtenerParte1Unidades', () => {
  const ecuacion1 = '2x - 1 = 0';
  const resultado = parseador.obtenerParte1(ecuacion1);
  expect(resultado).toBe(2);
});

test('obtenerParte2Suma', () => {
  const ecuacion1 = '2x + 1 = 0';
  const resultado = parseador.obtenerParte2(ecuacion1);
  expect(resultado).toBe(1);
});

test('obtenerParte3Positivo', () => {
  const ecuacion1 = '2x + 1 = 3';
  const resultado = parseador.obtenerParte3(ecuacion1);
  expect(resultado).toBe(3);
});

test('obtenerOperadorSuma', () => {
  const ecuacion2 = '2x + 1 = 0';
  const operador = parseador.obtenerOperador(ecuacion2);
  expect(operador).toBe('+');
});