# Tdd-unit-testing

> **Politécnico Colombiano Jaime Isaza Cadavid**
> Ingeniería de Sistemas — ING01201 Pruebas y Gestión de la Configuración
> Docente: David Fernando Mejia Tabares

Proyecto grupal de implementación de **pruebas unitarias con la metodología TDD** (Test Driven Development).
Valor: **12.5% de la nota final** — entrega grupal.

---

## Integrantes

| # | Nombre |
|---|---|
| 1 | Mateo Berrío Cardona |
| 2 | Esteban Cano Ramírez |
| 3 | Yeimy Daniela Herrera Bedoya |
| 4 | Mariana Montoya Sepúlveda |

---

## Estructura del proyecto

```
Tdd-unit-testing/
├── tdd/
│   ├── integrante-1/               → Mateo Berrío Cardona
│   │   ├── softtek/                → Ejercicio blog Softtek (ecuación 1er grado)
│   │   └── junit5-adaptado/        → Equivalentes de JUnit5 en Jest
│   ├── integrante-2/               → Esteban Cano Ramírez
│   │   ├── softtek/
│   │   └── junit5-adaptado/
│   ├── integrante-3/               → Yeimy Daniela Herrera Bedoya
│   │   ├── softtek/
│   │   └── junit5-adaptado/
│   └── integrante-4/               → Mariana Montoya Sepúlveda
│       ├── softtek/
│       └── junit5/
└── crud/
    ├── javascript/                 → CRUD Películas con TDD en JavaScript (Jest)
    └── python/                     → CRUD Películas con TDD en Python (pytest)
```

---

## Fuentes de los ejercicios

1. **JUnit5 User Guide** — https://junit.org/junit5/docs/current/user-guide/#running-tests
   Adaptación de los conceptos y anotaciones de JUnit5 al ecosistema JavaScript con Jest.

2. **Blog Softtek — Testing Unitario** — https://blog.softtek.com/es/testing-unitario
   Implementación del parseador y resolución de ecuaciones de primer grado `ax + b = c`.

---

## Descripción de los ejercicios

### Ejercicio 1 — Softtek: Ecuación de primer grado (`softtek/`)

Cada integrante implementa con TDD un **parseador de ecuaciones de primer grado** de la forma `ax + b = c`.

Funciones desarrolladas:
- `obtenerParte1(ecuacion)` → extrae el coeficiente `a`
- `obtenerParte2(ecuacion)` → extrae el término independiente `b`
- `obtenerParte3(ecuacion)` → extrae el lado derecho `c`
- `obtenerOperador(ecuacion)` → detecta si la operación es `+` o `-`
- `obtenerResultado(ecuacion)` → resuelve la ecuación: `x = (c - b) / a`

### Ejercicio 2 — JUnit5 adaptado a Jest (`junit5/`)

Cada integrante implementa en JavaScript los equivalentes de las anotaciones y aserciones de JUnit5:

| JUnit5 | Jest |
|---|---|
| `@Test` | `test()` |
| `@BeforeEach` | `beforeEach()` |
| `@AfterEach` | `afterEach()` |
| `@BeforeAll` | `beforeAll()` |
| `@AfterAll` | `afterAll()` |
| `@Disabled` | `test.skip()` |
| `@Nested` | `describe()` |
| `assertEquals` | `expect().toBe()` |
| `assertTrue` | `expect().toBe(true)` |
| `assertFalse` | `expect().toBe(false)` |
| `assertNull` | `expect().toBeNull()` |
| `assertNotNull` | `expect().not.toBeNull()` |
| `assertThrows` | `expect(() => {}).toThrow()` |

### Ejercicio 3 — CRUD Películas con TDD (`crud/`)

CRUD grupal de gestión de **películas** en dos lenguajes diferentes.

**Entidad: Película**

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | number / int | Identificador único autogenerado |
| `titulo` | string / str | Título de la película |
| `genero` | string / str | Género (Acción, Drama, Comedia, Terror, etc.) |
| `anio` | number / int | Año de estreno |
| `calificacion` | number / float | Calificación del 1.0 al 10.0 |

**Operaciones CRUD:**

| Operación | Método JavaScript | Método Python |
|---|---|---|
| Crear | `crear(titulo, genero, anio, calificacion)` | `crear(titulo, genero, anio, calificacion)` |
| Leer todas | `obtenerTodas()` | `obtener_todas()` |
| Leer por id | `obtenerPorId(id)` | `obtener_por_id(id)` |
| Filtrar género | `obtenerPorGenero(genero)` | `obtener_por_genero(genero)` |
| Actualizar | `actualizar(id, datos)` | `actualizar(id, datos)` |
| Eliminar | `eliminar(id)` | `eliminar(id)` |

---

## Metodología TDD

Todos los ejercicios siguen el ciclo obligatorio:

```
🔴 Red      → Escribir el test que falla (la función aún no existe)
🟢 Green    → Implementar el mínimo código para que el test pase
🔵 Refactor → Limpiar y mejorar el código sin romper los tests
```

**Regla fundamental:** ningún archivo de implementación puede existir antes que su archivo de tests.

---

## Tecnologías

| Lenguaje | Framework de pruebas | Uso |
|---|---|---|
| JavaScript | [Jest](https://jestjs.io/) | Ejercicios individuales + CRUD |
| Python | [pytest](https://pytest.org/) | CRUD segundo lenguaje |

---

## Configuración del entorno

### JavaScript (Jest)

```bash
# Instalar dependencias
npm install
```

### Python (pytest)

```bash
pip install pytest

# Si pytest no está en el PATH (Windows):
python -m pip install pytest
```

---

## Comandos de ejecución

### Todos los tests del proyecto (JavaScript)

```bash
npx jest --verbose
```

---

### Integrante 1 — Mateo Berrío Cardona

```bash
# Todos sus tests
npx jest tdd/integrante-1/ --verbose

# Solo ejercicio Softtek
npx jest tdd/integrante-1/softtek/ --verbose

# Solo ejercicio JUnit5
npx jest tdd/integrante-1/junit5-adaptado/ --verbose
```

---

### Integrante 2 — Esteban Cano Ramírez

```bash
# Todos sus tests
npx jest tdd/integrante-2/ --verbose

# Solo ejercicio Softtek
npx jest tdd/integrante-2/softtek/ --verbose

# Solo ejercicio JUnit5
npx jest tdd/integrante-2/junit5-adaptado/ --verbose
```

---

### Integrante 3 — Yeimy Daniela Herrera Bedoya

```bash
# Todos sus tests
npx jest tdd/integrante-3/ --verbose

# Solo ejercicio Softtek
npx jest tdd/integrante-3/softtek/ --verbose

# Solo ejercicio JUnit5
npx jest tdd/integrante-3/junit5-adaptado/ --verbose
```

---

### Integrante 4 — Mariana Montoya Sepúlveda

```bash
# Todos sus tests
npx jest tdd/integrante-4/ --verbose

# Solo ejercicio Softtek
npx jest tdd/integrante-4/softtek/ --verbose

# Solo ejercicio JUnit5
npx jest tdd/integrante-4/junit5/ --verbose
```

---

### CRUD — JavaScript (Jest)

```bash
# Todos los tests del CRUD JavaScript
npx jest crud/javascript/ --verbose

# Un archivo específico
npx jest crud/javascript/peliculas.test.js --verbose
```

---

### CRUD — Python (pytest)

```bash
# Desde la carpeta crud/python/
cd crud/python
python -m pytest test_peliculas.py -v

# Desde la raíz del proyecto
python -m pytest crud/python/test_peliculas.py -v

# Con reporte de cobertura (requiere pytest-cov)
pip install pytest-cov
python -m pytest crud/python/test_peliculas.py -v --cov=peliculas
```

---

### Resumen de todos los comandos

| Módulo | Comando |
|---|---|
| Todos los tests JS | `npx jest --verbose` |
| Integrante 1 | `npx jest tdd/integrante-1/ --verbose` |
| Integrante 2 | `npx jest tdd/integrante-2/ --verbose` |
| Integrante 3 | `npx jest tdd/integrante-3/ --verbose` |
| Integrante 4 | `npx jest tdd/integrante-4/ --verbose` |
| CRUD JavaScript | `npx jest crud/javascript/ --verbose` |
| CRUD Python | `python -m pytest crud/python/test_peliculas.py -v` |

---

## Flujo de trabajo en Git

```bash
# Clonar el repositorio
git clone https://github.com/nightsky18/Tdd-unit-testing.git
cd Tdd-unit-testing

# Crear rama personal
git checkout -b tdd/integrante-X

# Hacer commit de los avances
git add .
git commit -m "feat(integrante-X): agrega tests y solución del ejercicio Softtek"
git push origin tdd/integrante-X
```

**Ramas del proyecto:**
- `main` — rama principal, solo recibe merges revisados
- `tdd/integrante-1` — Mateo Berrío Cardona
- `tdd/integrante-2` — Esteban Cano Ramírez
- `tdd/integrante-3` — Yeimy Daniela Herrera Bedoya
- `tdd/integrante-4` — Mariana Montoya Sepúlveda
- `CRUD` — desarrollo grupal del CRUD

---

## Referencias

- JUnit5 User Guide: https://junit.org/junit5/docs/current/user-guide/
- Blog Softtek — Testing Unitario: https://blog.softtek.com/es/testing-unitario
- Documentación Jest: https://jestjs.io/docs/getting-started
- Documentación pytest: https://docs.pytest.org/
