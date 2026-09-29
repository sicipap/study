# Functions & relations (domain, range)

> **Why it matters:** Relations (অন্বয়) and functions (ফাংশন) appear in BCS and bank papers as: find f(a), find the domain (ডোমেন) or range (রেঞ্জ) of a relation, identify which relation is a function, and find an inverse function.

## Key concepts
- **Ordered pair (ক্রমজোড়):** (x, y), where order matters: (1, 2) ≠ (2, 1).
- **Cartesian product A × B:** all ordered pairs (x, y) with x in A and y in B. n(A × B) = n(A) × n(B).
- **Relation (অন্বয়):** any subset of A × B.
  - **Domain (ডোমেন):** the set of all **first** elements.
  - **Range (রেঞ্জ):** the set of all **second** elements.
- 🔥 **Function (ফাংশন):** a relation in which **every element of the domain has exactly one image**. No first element may repeat with different second elements.
  - {(1, 2), (2, 3), (3, 4)} is a function. {(1, 2), (1, 3)} is **not** (1 has two images).
- **Vertical line test:** a graph is a function if no vertical line cuts it more than once.
- **One-one (এক-এক) function:** different inputs give different outputs.
- **Onto (সার্বিক) function:** every element of the codomain is an image.
- **Inverse function f⁻¹:** exists only for a one-one onto function. To find it, write y = f(x) and solve for x.
- **Composite function:** f(g(x)) — apply g first, then f.

## Formula and shortcut table 🔥
| Item | Result |
|---|---|
| Number of relations from A (m elements) to B (n elements) | 2^(mn) |
| Number of functions from A to B | nᵐ |
| Domain of √(x − a) | x ≥ a |
| Domain of 1/(x − a) | all real x except a |
| Domain of 1/√(x − a) | x > a |
| Range of x² (x real) | y ≥ 0 |
| Inverse of f(x) = ax + b | f⁻¹(x) = (x − b)/a |
| f(x) = 1/x | f(f(x)) = x |

## Worked examples
**Example 1.** If f(x) = x² − 3x + 2, find f(2) and f(−1).
Steps: f(2) = 4 − 6 + 2 = 0. f(−1) = 1 + 3 + 2 = 6.
**Answer: 0 and 6**

**Example 2.** Find the domain and range of R = {(1, 2), (2, 3), (3, 4)}.
Steps: First elements {1, 2, 3}; second elements {2, 3, 4}.
**Answer: Domain {1, 2, 3}, range {2, 3, 4}**

**Example 3.** Find the domain of f(x) = √(x − 3).
Steps: x − 3 ≥ 0 → x ≥ 3.
**Answer: x ≥ 3**

**Example 4.** Find the inverse of f(x) = 2x + 3.
Steps: y = 2x + 3 → x = (y − 3)/2. So f⁻¹(x) = (x − 3)/2.
**Answer: (x − 3)/2**

**Example 5.** A has 2 elements and B has 3. How many relations are there from A to B?
Steps: n(A × B) = 6 → 2⁶ = 64.
**Answer: 64**

## Common traps
- Mixing up domain (first elements) and range (second elements).
- A function **may** have two inputs with the same output (e.g. (1, 5), (2, 5)); it may **not** have one input with two outputs.
- The domain of 1/(x − a) excludes a because division by zero is undefined.
- f(g(x)) and g(f(x)) are usually different.

## Quick revision
- Relation ⊆ A × B.
- Domain = first elements; range = second elements.
- Function: each input has exactly one output.
- √(x − a) ⇒ x ≥ a; 1/(x − a) ⇒ x ≠ a.
- Inverse of ax + b is (x − b)/a.
- Relations from m to n elements: 2^(mn).

## Practice MCQ
**1.** If f(x) = x² + 1, then f(3) = ?
(a) 7 (b) 9 (c) 10 (d) 4

**2.** The domain of the relation R = {(1, 4), (2, 5), (3, 6)} is:
(a) {4, 5, 6} (b) {1, 2, 3} (c) {1, 2, 3, 4, 5, 6} (d) {1, 4}

**3.** The range of the relation R = {(1, 4), (2, 5), (3, 6)} is:
(a) {1, 2, 3} (b) {1, 4} (c) {4, 5, 6} (d) {5}

**4.** Which of the following relations is NOT a function?
(a) {(1, 2), (2, 3), (3, 4)} (b) {(1, 5), (2, 5), (3, 5)} (c) {(0, 0), (1, 1)} (d) {(1, 2), (1, 3), (2, 4)}

**5.** The domain of f(x) = √(x − 5) is:
(a) x ≥ 5 (b) x > 5 (c) x ≤ 5 (d) all real numbers

**6.** If f(x) = 3x − 2, then f⁻¹(x) = ?
(a) (x − 2)/3 (b) 3x + 2 (c) 1/(3x − 2) (d) (x + 2)/3

**7.** If A and B each have 2 elements, the number of relations from A to B is:
(a) 4 (b) 16 (c) 8 (d) 2

**8.** The domain of f(x) = 1/(x − 4) is:
(a) all real numbers (b) x > 4 (c) all real numbers except 4 (d) x ≥ 4

**9.** If f(x) = x² and g(x) = x + 1, then f(g(2)) = ?
(a) 5 (b) 9 (c) 6 (d) 4

**10.** The range of f(x) = x², where x is any real number, is:
(a) all real numbers (b) y > 0 (c) y ≤ 0 (d) y ≥ 0

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | c | 9 + 1 = 10 |
| 2 | b | First elements {1, 2, 3} |
| 3 | c | Second elements {4, 5, 6} |
| 4 | d | 1 has two images (2 and 3) |
| 5 | a | x − 5 ≥ 0 |
| 6 | d | y = 3x − 2 → x = (y + 2)/3 |
| 7 | b | 2^(2 × 2) = 16 |
| 8 | c | Denominator cannot be 0 → x ≠ 4 |
| 9 | b | g(2) = 3, f(3) = 9 |
| 10 | d | A square is never negative; 0 is included (x = 0) |
