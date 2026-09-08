---
title: "Why Floating-Point Math Is Dangerous for Money (and Bitcoin)"
description: "The rounding bug that convinced me to build Monetils, a small Python library for exact decimal handling of BTC and fiat amounts."
pubDate: 2026-09-08
tags: ["python", "fintech", "bitcoin"]
---

A few years into working on payment systems, you eventually run into the
same bug in a different costume: a balance that's off by a fraction of a
cent, a total that doesn't quite reconcile, a test that fails only on CI.
Nine times out of ten, the root cause is the same — someone used a native
float where they needed exact decimal arithmetic.

## The bug

Open a Python shell and try this:

```python
>>> 0.1 + 0.2
0.30000000000000004
```

That's not a Python bug — it's how IEEE 754 floating-point numbers work in
every mainstream language. Floats represent most decimal fractions as an
*approximation*, because binary can't exactly represent a value like `0.1`
any more than decimal can exactly represent `1/3`. For most computing, that
tiny error is irrelevant. For money, it isn't — errors compound across
thousands of transactions, and "close enough" isn't a acceptable answer
when someone's balance is on the line.

Bitcoin makes this worse, not better: amounts are commonly expressed in
satoshis (1 BTC = 100,000,000 sats), and a naive float-based conversion
between BTC, sats, and a fiat currency can silently drop precision at every
step of a multi-currency calculation.

## Decimal to the rescue

Python's standard library already has the right tool: `decimal.Decimal`.
Used consistently, it gives you exact base-10 arithmetic instead of a
binary approximation:

```python
from decimal import Decimal

Decimal("0.1") + Decimal("0.2")
# Decimal('0.3')
```

The catch is "used consistently" — it only takes one accidental `float()`
cast, one ORM field defined as `Float` instead of `Numeric`, or one
third-party library that quietly hands you a float back, to reintroduce the
exact bug you thought you'd eliminated.

## Why I built a small library instead of just "being careful"

"Be careful" doesn't scale across a team, and it definitely doesn't scale
across a codebase that touches both fiat and crypto amounts with different
precision requirements (2 decimal places for USD, up to 8 for BTC). That's
the itch that led to [Monetils](https://github.com/seba3c/monetils) — a
small Python library that:

- Enforces `Decimal` end-to-end, with Pydantic v2 integration so invalid
  amounts fail at the model boundary instead of three services downstream.
- Bakes in currency-aware precision (BTC vs. USD) instead of leaving it to
  convention and code review.
- Avoids the ceremony of pulling in a much larger money-handling library
  when what you actually need is a focused decimal guardrail.

## Where this actually matters

- Any ledger or balance calculation, fiat or crypto.
- Currency conversion chains (BTC → sats → USD), where each step is a new
  opportunity to lose precision.
- Anywhere a test suite is "green" but a manual reconciliation isn't — that
  gap is usually a float hiding in a Decimal-shaped system.

If you're building anything that touches money, the fix is rarely clever —
it's making the exact-arithmetic path the *only* path, and letting the type
system enforce it instead of a code review comment.
