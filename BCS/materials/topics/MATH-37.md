# Combination

> **Why it matters:** Combination (সমাবেশ) questions — forming committees, handshakes, lines and triangles from points, choosing questions — are asked often in BCS and bank exams. The key is to decide that **order does not matter**.

## Key concepts
- **Combination** = a **selection** in which **order does not matter** (choosing A and B is the same as choosing B and A).
- Permutation = arrangement (order matters); combination = selection (order does not matter).
- ⁿCᵣ is read "n choose r". Relation: **ⁿPᵣ = ⁿCᵣ × r!**
- When a selection has two independent parts (men **and** women), **multiply** the ways; when there are alternative cases (**or**), **add** them.

## Formula and shortcut table 🔥
| Item | Formula |
|---|---|
| 🔥 Selection of r from n | **ⁿCᵣ = n!/[r!(n − r)!]** |
| Complement rule | ⁿCᵣ = ⁿCₙ₋ᵣ (so ¹⁰C₈ = ¹⁰C₂ = 45) |
| 🔥 If ⁿCₓ = ⁿCᵧ (x ≠ y) | **n = x + y** |
| Special values | ⁿC₀ = ⁿCₙ = 1; ⁿC₁ = n |
| Pascal's rule | ⁿCᵣ + ⁿCᵣ₋₁ = ⁽ⁿ⁺¹⁾Cᵣ |
| 🔥 Handshakes among n people / matches in a round-robin | **ⁿC₂ = n(n − 1)/2** |
| Straight lines from n points (no 3 collinear) | ⁿC₂ |
| Triangles from n points (no 3 collinear) | ⁿC₃ |
| Diagonals of an n-sided polygon | ⁿC₂ − n = n(n − 3)/2 |
| Select at least one from n different things | 2ⁿ − 1 |
| A particular item always included | ⁽ⁿ⁻¹⁾Cᵣ₋₁ |
| A particular item always excluded | ⁽ⁿ⁻¹⁾Cᵣ |

## Worked examples
**Example 1.** Find ⁸C₃.
Steps: (8 × 7 × 6)/(3 × 2 × 1) = 56.
**Answer: 56**

**Example 2.** A committee of 3 men and 2 women is to be formed from 6 men and 5 women. In how many ways?
Steps: ⁶C₃ × ⁵C₂ = 20 × 10 = 200.
**Answer: 200**

**Example 3.** Each of 10 people shakes hands with every other once. How many handshakes?
Steps: ¹⁰C₂ = 45.
**Answer: 45**

**Example 4.** If ⁿC₈ = ⁿC₆, find ⁿC₂.
Steps: n = 8 + 6 = 14. ¹⁴C₂ = 14 × 13/2 = 91.
**Answer: 91**

**Example 5.** How many triangles can be formed from 10 points, no three of which are collinear?
Steps: ¹⁰C₃ = 120.
**Answer: 120**

## Common traps
- Using permutation when the question says "select", "choose", "committee" or "team" — those are combinations.
- In committee problems with "and", **multiply**; with "at least", add the separate cases (or use total − unwanted).
- ⁿCₓ = ⁿCᵧ gives n = x + y, not x = y.
- Diagonals: subtract the n sides from ⁿC₂.

## Quick revision
- ⁿCᵣ = n!/[r!(n − r)!].
- ⁿCᵣ = ⁿCₙ₋ᵣ; ⁿCₓ = ⁿCᵧ ⇒ n = x + y.
- Handshakes/lines ⁿC₂; triangles ⁿC₃.
- Diagonals n(n − 3)/2.
- At least one: 2ⁿ − 1.
- Always include one particular item: ⁽ⁿ⁻¹⁾Cᵣ₋₁.

## Practice MCQ
**1.** ¹⁰C₃ = ?
(a) 720 (b) 30 (c) 120 (d) 210

**2.** At a meeting of 12 people, each shakes hands with every other once. The number of handshakes is:
(a) 132 (b) 66 (c) 144 (d) 24

**3.** If ⁿC₅ = ⁿC₇, then n = ?
(a) 12 (b) 2 (c) 35 (d) 10

**4.** A committee of 5 is chosen from 7 men and 4 women so that it has exactly 2 women. The number of ways is:
(a) 462 (b) 350 (c) 126 (d) 210

**5.** How many straight lines can be drawn through 8 points, no three of which are collinear?
(a) 28 (b) 56 (c) 16 (d) 64

**6.** How many triangles can be formed from 12 points, no three of which are collinear?
(a) 1320 (b) 66 (c) 220 (d) 36

**7.** The number of diagonals of a decagon is:
(a) 45 (b) 35 (c) 40 (d) 70

**8.** A team of 11 is chosen from 14 players, and one particular player must always be included. The number of ways is:
(a) 364 (b) 3432 (c) 78 (d) 286

**9.** In how many ways can a person choose at least one fruit from 5 different fruits?
(a) 31 (b) 32 (c) 25 (d) 120

**10.** In how many ways can a student choose 4 questions out of 6?
(a) 360 (b) 24 (c) 15 (d) 30

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | c | (10 × 9 × 8)/6 = 120 |
| 2 | b | ¹²C₂ = 66 |
| 3 | a | n = 5 + 7 = 12 |
| 4 | d | ⁴C₂ × ⁷C₃ = 6 × 35 = 210 |
| 5 | a | ⁸C₂ = 28 |
| 6 | c | ¹²C₃ = 220 |
| 7 | b | ¹⁰C₂ − 10 = 45 − 10 = 35 |
| 8 | d | ¹³C₁₀ = ¹³C₃ = 286 |
| 9 | a | 2⁵ − 1 = 31 |
| 10 | c | ⁶C₄ = ⁶C₂ = 15 |
