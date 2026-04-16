const {
  obtenerParte1,
  obtenerParte2,
  obtenerParte3,
  obtenerOperador,
  obtenerResultado
} = require('./ecuacion');

describe('Ecuación de primer grado (Softtek)', () => {
  describe('Ecuación con suma: 7x + 14 = 42', () => {
    const ecuacion = '7x + 14 = 42';

    test('obtenerParte1 debe retornar 7', () => {
      expect(obtenerParte1(ecuacion)).toBe(7);
    });

    test('obtenerParte2 debe retornar 14', () => {
      expect(obtenerParte2(ecuacion)).toBe(14);
    });

    test('obtenerParte3 debe retornar 42', () => {
      expect(obtenerParte3(ecuacion)).toBe(42);
    });

    test('obtenerOperador debe retornar "+"', () => {
      expect(obtenerOperador(ecuacion)).toBe('+');
    });

    test('obtenerResultado debe resolver a 4', () => {
      expect(obtenerResultado(ecuacion)).toBe(4);
    });
  });

  describe('Ecuación con resta: 3x - 9 = 15', () => {
    const ecuacion = '3x - 9 = 15';

    test('obtenerParte1 debe retornar 3', () => {
      expect(obtenerParte1(ecuacion)).toBe(3);
    });

    test('obtenerParte2 debe retornar 9', () => {
      expect(obtenerParte2(ecuacion)).toBe(9);
    });

    test('obtenerParte3 debe retornar 15', () => {
      expect(obtenerParte3(ecuacion)).toBe(15);
    });

    test('obtenerOperador debe retornar "-"', () => {
      expect(obtenerOperador(ecuacion)).toBe('-');
    });

    test('obtenerResultado debe resolver a 8', () => {
      expect(obtenerResultado(ecuacion)).toBe(8);
    });
  });
});
