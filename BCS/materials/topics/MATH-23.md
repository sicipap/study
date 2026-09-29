# Logarithm

> **Why it matters:** Logarithm (লগারিদম) is a favourite BCS topic: 1–2 direct questions such as log₂ 32, log_√3 81, "if logₓ 64 = 3, find x", and using log 2 = 0.3010. All are solved with a few laws.

## Key concepts
- 🔥 **Definition:** if aˣ = N (a > 0, a ≠ 1, N > 0), then **logₐ N = x**. "The log is the power."
  - 2⁵ = 32 ⇔ log₂ 32 = 5.
- **a** is the **base (ভিত্তি)**. The base must be positive and not 1.
- The logarithm of **0 or a negative number is not defined** (in real numbers).
- **Common logarithm (সাধারণ লগ / ব্রিগস লগ):** base **10**, written log x or log₁₀ x. Introduced by Henry Briggs.
- **Natural logarithm (স্বাভাবিক লগ / নেপিয়ার লগ):** base **e ≈ 2.718**, written ln x. Logarithms were invented by **John Napier**.
- **Characteristic (পূর্ণক)** is the integer part of a common log; **mantissa (অংশক)** is the decimal part (always positive). For a number with n digits before the decimal point, characteristic = n − 1.

## Laws of logarithms 🔥
| Law | Example |
|---|---|
| logₐ 1 = 0 | log₇ 1 = 0 |
| logₐ a = 1 | log₁₀ 10 = 1 |
| logₐ (mn) = logₐ m + logₐ n | log 6 = log 2 + log 3 |
| logₐ (m/n) = logₐ m − logₐ n | log 5 = log 10 − log 2 |
| logₐ (mⁿ) = n logₐ m | log 8 = 3 log 2 |
| Change of base: logₐ b = log b / log a | log₂ 10 = 1/log 2 |
| logₐ b × log_b a = 1 | log₂ 3 × log₃ 2 = 1 |
| logₐ b × log_b c = logₐ c | log₂ 3 × log₃ 4 = log₂ 4 = 2 |
| a^(logₐ x) = x | 2^(log₂ 7) = 7 |
| log_(aᵏ) N = (1/k) logₐ N | log₄ 8 = 3/2 |

Useful values: **log 2 = 0.3010**, log 3 = 0.4771, log 5 = 1 − log 2 = 0.6990.

## Worked examples
**Example 1.** Find log₃ (1/81).
Steps: 1/81 = 3⁻⁴.
**Answer: −4**

**Example 2.** Find log₁₀ 0.001.
Steps: 0.001 = 10⁻³.
**Answer: −3**

**Example 3.** If logₓ 64 = 3, find x.
Steps: x³ = 64 → x = 4.
**Answer: 4**

**Example 4.** Given log 2 = 0.3010, find log 8 and log 5.
Steps: log 8 = 3 × 0.3010 = 0.9030. log 5 = log 10 − log 2 = 1 − 0.3010 = 0.6990.
**Answer: 0.9030 and 0.6990**

**Example 5.** Find log₂ √8.
Steps: √8 = 2^(3/2).
**Answer: 3/2**

## Common traps
- log(m + n) is **not** log m + log n. Only log(mn) splits into a sum.
- log(m/n) ≠ log m / log n.
- log_√3 81: think (√3)ˣ = 81 = (√3)⁸, so the answer is **8**, not 4.
- log 1 = 0 in every base; log of 0 is undefined (not 0).

## Quick revision
- logₐ N = x ⇔ aˣ = N.
- logₐ 1 = 0; logₐ a = 1.
- log mn = log m + log n; log m/n = log m − log n; log mⁿ = n log m.
- logₐ b × log_b a = 1.
- log 2 = 0.3010; log 5 = 0.6990.
- Napier invented logs; Briggs gave base-10 logs.

## Practice MCQ
**1.** log₅ 125 = ?
(a) 25 (b) 3 (c) 5 (d) 1/3

**2.** log₂ (1/16) = ?
(a) 4 (b) 1/4 (c) −1/4 (d) −4

**3.** log_√3 81 = ?
(a) 4 (b) 2 (c) 8 (d) 16

**4.** If logₓ (1/8) = −3/2, then x = ?
(a) 2 (b) 4 (c) 8 (d) 1/4

**5.** The value of log 1 in any valid base is:
(a) 0 (b) 1 (c) undefined (d) 10

**6.** log₁₀ 0.01 = ?
(a) 2 (b) −1 (c) −2 (d) 0.01

**7.** If log 2 = 0.3010, then log 50 = ?
(a) 1.3010 (b) 1.6990 (c) 0.6990 (d) 2.6990

**8.** log₂ 3 × log₃ 8 = ?
(a) 3 (b) 2 (c) 8/3 (d) 24

**9.** Which statement is correct?
(a) log(a + b) = log a + log b (b) log(ab) = log a × log b (c) log(a/b) = log a − log b (d) log aⁿ = (log a)ⁿ

**10.** If log₁₀ x + log₁₀ 5 = 2, then x = ?
(a) 95 (b) 10 (c) 40 (d) 20

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | 5³ = 125 |
| 2 | d | 1/16 = 2⁻⁴ |
| 3 | c | 81 = 3⁴ = (√3)⁸ |
| 4 | b | x^(−3/2) = 1/8 → x^(3/2) = 8 → x = 4 |
| 5 | a | a⁰ = 1 → logₐ 1 = 0 |
| 6 | c | 0.01 = 10⁻² |
| 7 | b | log 100 − log 2 = 2 − 0.3010 = 1.6990 |
| 8 | a | log₂ 3 × log₃ 8 = log₂ 8 = 3 |
| 9 | c | Quotient law: log(a/b) = log a − log b |
| 10 | d | log(5x) = 2 → 5x = 100 → x = 20 |
