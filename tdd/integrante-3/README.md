# Integrante 3 - Pruebas TDD realizadas

Este repositorio contiene el trabajo del integrante 3, donde se aplicó la metodología de Desarrollo Guiado por Pruebas (TDD) en JavaScript.

## ¿Qué se realizó?

1. Se construyó una pequeña librería para resolver ecuaciones de primer grado en la carpeta `softtek`.
   - `ecuacion.js` contiene funciones que parsean una cadena de texto con una ecuación del tipo `ax + b = c` o `ax - b = c`.
   - `obtenerParte1` extrae el coeficiente `a` de la variable `x`.
   - `obtenerParte2` extrae el valor numérico `b` que está sumando o restando.
   - `obtenerParte3` extrae el resultado `c` del lado derecho de la ecuación.
   - `obtenerOperador` identifica si la ecuación usa `+` o `-`.
   - `obtenerResultado` calcula la solución de `x` a partir de los valores extraídos.

2. Se escribieron pruebas unitarias con Jest en `ecuacion.test.js`.
   - Se creó una suite principal que describe la ecuación de primer grado.
   - Se añadieron dos casos principales: uno con suma (`3x + 6 = 15`) y otro con resta (`2x - 4 = 10`).
   - Cada caso valida que las funciones de parseo devuelvan los valores correctos y que el resultado final de la ecuación sea el esperado.

## Enfoque TDD

- Se pensó primero en el comportamiento esperado del código, definiendo qué resultados debían producirse para cada función.
- Luego se escribieron las pruebas unitarias que verifican ese comportamiento.
- Finalmente se implementó la lógica en `ecuacion.js` para que todas las pruebas pasaran.

## ¿Qué se prueba?

- Que el coeficiente de `x` se extraiga correctamente.
- Que el término independiente se obtenga con su valor absoluto correcto.
- Que el resultado de la ecuación se capture adecuadamente.
- Que el operador de la ecuación sea detectado como `+` o `-`.
- Que la solución final de `x` sea correcta para cada ecuación de ejemplo.

## Resultado

Con este trabajo se demuestra la aplicación práctica de TDD:
- escribir pruebas claras,
- implementar el código mínimo necesario,
- comprobar que el funcionamiento sea correcto mediante test automáticos.

## JUnit5 adaptado a JavaScript

Además de la parte de `softtek`, se incluyó una carpeta `junit5-adaptado` con un ejemplo didáctico de cómo se pueden adaptar conceptos de JUnit 5 a Jest en JavaScript.
- `junit5.test.js` muestra el uso de ganchos de ciclo de vida como `beforeAll`, `beforeEach`, `afterEach` y `afterAll`.
- Se demuestra cómo escribir tests normales (`assertEquals`), pruebas de nulos (`assertNull`), pruebas que esperan errores (`assertThrows`) y tests deshabilitados (`@Disabled` / `test.skip`).
- Esta parte sirve para mostrar la relación entre la sintaxis de pruebas en Java y la forma equivalente en Jest, manteniendo la intención pedagógica de los ejemplos.

> El README está enfocado sólo en el trabajo del integrante 3, explicando qué se hizo y cómo se aplicó TDD en este módulo.
