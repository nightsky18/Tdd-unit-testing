describe('Ejemplos de equivalencia entre JUnit5 y Jest', () => {
  let contador = 0;

  beforeAll(() => {
    contador = 0;
  });

  beforeEach(() => {
    contador++;
  });

  afterEach(() => {
  });

  afterAll(() => {
    contador = 0;
  });

  test('un test normal (assertEquals)', () => {
    const valorEsperado = 1;
    expect(contador).toBe(valorEsperado);
  });

  test('un test para verificar nulos (assertNull)', () => {
    const valorNulo = null;
    expect(valorNulo).toBeNull();
  });

  test('un test que lanza error (assertThrows)', () => {
    const funcionQueLanzaError = () => {
      throw new Error('Este es un error forzado');
    };
    expect(funcionQueLanzaError).toThrow();
  });

  test.skip('un test deshabilitado (@Disabled)', () => {
    expect(true).toBe(false);
  });
});
