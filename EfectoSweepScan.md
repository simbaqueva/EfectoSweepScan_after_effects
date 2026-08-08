## Qué hace este script

- Es un script de After Effects para crear un efecto de barrido tipo `sweep/scan`.
- Crea una nueva composición llamada `Efecto Sweep / Scan` de 1920x1080, 10 segundos y 30 fps.
- Genera dos sólidos blancos verticales: `Haz Izquierda` y `Haz Derecha`.

## Cómo funciona

- Coloca el sólido izquierdo a 30% del ancho y el derecho a 70%.
- Añade una expresión de opacidad a cada sólido.
- La expresión usa `Math.sin(time * speed)` para simular un escáner que se mueve de izquierda a derecha.
- Según qué tan cerca está ese "haz invisible" de cada barra, la opacidad sube o baja.

## Resultado

- Al ejecutarlo, se crea la composición y verás cómo las dos barras se iluminan de forma intermitente, como si un haz de luz barrido las estuviera atravesando.
