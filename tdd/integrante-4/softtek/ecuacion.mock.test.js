// ecuacion.mock.test.js
const EcuacionPrimerGrado = require('./ecuacion');
const Parseador = require('./parseador');

// Equivalente a @Mock de Mockito
jest.mock('./parseador');

let ecuacionPrimerGrado;

// Equivalente a @Before con MockitoAnnotations.initMocks(this)
beforeEach(() => {
  Parseador.mockClear();
  ecuacionPrimerGrado = new EcuacionPrimerGrado();
});

test('solucionaEcuacionConMenos', () => {
  const ecuacion = '2x - 1 = 0';

  // Equivalente a when(...).thenReturn(...)
  Parseador.prototype.obtenerParte1 = jest.fn().mockReturnValue(2);
  Parseador.prototype.obtenerParte2 = jest.fn().mockReturnValue(-1);
  Parseador.prototype.obtenerParte3 = jest.fn().mockReturnValue(0);

  ecuacionPrimerGrado = new EcuacionPrimerGrado();
  const result = ecuacionPrimerGrado.obtenerResultado(ecuacion);

  expect(result).toBe(0.5);
});

test('solucionaEcuacionConMas', () => {
  const ecuacion = '2x + 1 = 0';

  Parseador.prototype.obtenerParte1 = jest.fn().mockReturnValue(2);
  Parseador.prototype.obtenerParte2 = jest.fn().mockReturnValue(1);
  Parseador.prototype.obtenerParte3 = jest.fn().mockReturnValue(0);

  ecuacionPrimerGrado = new EcuacionPrimerGrado();
  const result = ecuacionPrimerGrado.obtenerResultado(ecuacion);

  expect(result).toBe(-0.5);
});