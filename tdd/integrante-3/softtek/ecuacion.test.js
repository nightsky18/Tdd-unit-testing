const {
  obtenerParte1,
  obtenerParte2,
  obtenerParte3,
  obtenerOperador,
  obtenerResultado
} = require('./ecuacion');

describe('Ecuación de primer grado (Softtek)', () => {
  describe('Ecuación con suma: 3x + 6 = 15', () => {
    const ecuacion = '3x + 6 = 15';

    test('obtenerParte1 debe retornar 3', () => {
      expect(obtenerParte1(ecuacion)).toBe(3);
    });

    test('obtenerParte2 debe retornar 6', () => {
      expect(obtenerParte2(ecuacion)).toBe(6);
    });

    test('obtenerParte3 debe retornar 15', () => {
      expect(obtenerParte3(ecuacion)).toBe(15);
    });

    test('obtenerOperador debe retornar "+"', () => {
      expect(obtenerOperador(ecuacion)).toBe('+');
    });

    test('obtenerResultado debe resolver a 3', () => {
      expect(obtenerResultado(ecuacion)).toBe(3);
    });
  });

  describe('Ecuación con resta: 2x - 4 = 10', () => {
    const ecuacion = '2x - 4 = 10';

    test('obtenerParte1 debe retornar 2', () => {
      expect(obtenerParte1(ecuacion)).toBe(2);
    });

    test('obtenerParte2 debe retornar 4', () => {
      expect(obtenerParte2(ecuacion)).toBe(4);
    });

    test('obtenerParte3 debe retornar 10', () => {
      expect(obtenerParte3(ecuacion)).toBe(10);
    });

    test('obtenerOperador debe retornar "-"', () => {
      expect(obtenerOperador(ecuacion)).toBe('-');
    });

    test('obtenerResultado debe resolver a 7', () => {
      expect(obtenerResultado(ecuacion)).toBe(7);
    });
  });
});