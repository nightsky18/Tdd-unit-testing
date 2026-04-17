// ecuacion.integration.test.js
const EcuacionPrimerGrado = require('./ecuacion');

const ecuacion = new EcuacionPrimerGrado();

test('solucionaEcuacionConMenos', () => {
  const result = ecuacion.obtenerResultado('2x - 1 = 0');
  const valueExpected = 0.5;
  expect(result).toBe(valueExpected);
});

test('solucionaEcuacionConMas', () => {
  const result = ecuacion.obtenerResultado('2x + 1 = 0');
  const valueExpected = -0.5;
  expect(result).toBe(valueExpected);
});

test('solucionaEcuacionConParte3Mayor0', () => {
  const result = ecuacion.obtenerResultado('2x + 1 = 10');
  const valueExpected = 4.5;
  expect(result).toBe(valueExpected);
});