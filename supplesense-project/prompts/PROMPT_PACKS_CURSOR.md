# Prompt Packs rápidos (pegar en Cursor Composer)

## Onboarding + Zod
Refactor /app/onboarding/page.tsx para usar Zod y mostrar errores inline.
- Crear esquema zod con: age (18-80), weight (30-150), height (140-210), goals (1-3 seleccionados), fishPerWeek (0-7), proteinPerKg (0.6-2.5).
- Mostrar mensajes de error debajo de cada input.
- Botón "Ver mis resultados" deshabilitado si hay errores.

## Resultados: tooltips de "¿Por qué?"
Agregar a cada card de suplemento un tooltip con 1-2 frases de racional (propiedad `rationale`), y un badge de "Nivel" (1-4).

## Plan: selección por semana
Agregar botones "Marcar semana" y "Desmarcar semana" encima de la grilla para acelerar el checkeo.

## Check-in: gráfico simple
Agregar un gráfico de líneas con `<canvas>` que muestre energía/sueño/rendimiento/digestión por semana.
