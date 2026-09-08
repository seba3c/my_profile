---
title: "Por qué la aritmética de punto flotante es peligrosa para el dinero (y para Bitcoin)"
description: "El bug de redondeo que me convenció de crear Monetils, una pequeña librería de Python para el manejo exacto de montos en BTC y moneda fiat."
pubDate: 2026-09-08
tags: ["python", "fintech", "bitcoin"]
---

Después de unos cuantos años trabajando en sistemas de pagos, tarde o
temprano te encontrás con el mismo bug disfrazado de otra cosa: un balance
que queda desviado por una fracción de centavo, un total que no cuadra del
todo, un test que falla solo en CI. Nueve de cada diez veces, la causa raíz
es la misma — alguien usó un float nativo donde necesitaba aritmética
decimal exacta.

## El bug

Abrí una consola de Python y probá esto:

```python
>>> 0.1 + 0.2
0.30000000000000004
```

Eso no es un bug de Python — es cómo funcionan los números de punto
flotante IEEE 754 en prácticamente cualquier lenguaje. Los floats
representan la mayoría de las fracciones decimales como una
*aproximación*, porque el binario no puede representar exactamente un valor
como `0.1`, de la misma forma que el decimal no puede representar
exactamente `1/3`. Para la mayoría de los cálculos, ese error mínimo no
importa. Para el dinero, sí importa — los errores se acumulan a través de
miles de transacciones, y "más o menos" no es una respuesta aceptable
cuando el balance de alguien está en juego.

Bitcoin empeora las cosas, no las mejora: los montos suelen expresarse en
satoshis (1 BTC = 100.000.000 sats), y una conversión ingenua basada en
floats entre BTC, sats y una moneda fiat puede perder precisión
silenciosamente en cada paso de un cálculo multi-moneda.

## El decimal al rescate

La biblioteca estándar de Python ya tiene la herramienta correcta:
`decimal.Decimal`. Usado de forma consistente, te da aritmética exacta en
base 10 en lugar de una aproximación binaria:

```python
from decimal import Decimal

Decimal("0.1") + Decimal("0.2")
# Decimal('0.3')
```

El problema está en "usado de forma consistente" — alcanza con un `float()`
accidental, un campo de ORM definido como `Float` en lugar de `Numeric`, o
una librería de terceros que silenciosamente te devuelve un float, para
reintroducir exactamente el bug que creías haber eliminado.

## Por qué construí una librería en lugar de "tener cuidado"

"Tener cuidado" no escala en un equipo, y mucho menos en un código base que
maneja montos en fiat y en cripto con distintos requisitos de precisión (2
decimales para USD, hasta 8 para BTC). Esa fue la motivación detrás de
[Monetils](https://github.com/seba3c/monetils) — una pequeña librería de
Python que:

- Impone `Decimal` de punta a punta, con integración con Pydantic v2 para
  que un monto inválido falle en el borde del modelo, no tres servicios más
  adelante.
- Incorpora precisión según la moneda (BTC vs. USD) en lugar de dejarlo
  librado a la convención o al code review.
- Evita la sobrecarga de sumar una librería de manejo de dinero mucho más
  grande cuando lo que realmente necesitás es una barrera de decimales
  bien enfocada.

## Dónde importa esto en la práctica

- Cualquier cálculo de ledger o de balance, en fiat o en cripto.
- Cadenas de conversión de moneda (BTC → sats → USD), donde cada paso es
  una nueva oportunidad de perder precisión.
- Cualquier lugar donde el test suite esté "verde" pero una conciliación
  manual no cierre — esa diferencia suele ser un float escondido en un
  sistema que debería ser todo Decimal.

Si estás construyendo algo que toca dinero, la solución rara vez es
ingeniosa — es hacer que el camino de aritmética exacta sea el *único*
camino, y dejar que el sistema de tipos lo garantice en lugar de un
comentario en un code review.
