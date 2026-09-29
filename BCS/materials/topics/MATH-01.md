# Number system, divisibility rules

> **Why it matters:** Almost every BCS and bank paper has 1–2 questions on prime numbers, types of numbers, divisibility tests, unit digits or number of factors. They are quick marks if you know the rules.

## Types of numbers (সংখ্যার প্রকারভেদ)
| Type | Meaning | Examples |
|---|---|---|
| **Natural (স্বাভাবিক)** | Counting numbers | 1, 2, 3, … |
| **Whole (পূর্ণ, অঋণাত্মক)** | Natural numbers + 0 | 0, 1, 2, … |
| **Integer (পূর্ণসংখ্যা)** | Whole numbers and their negatives | …, −2, −1, 0, 1, 2, … |
| **Rational (মূলদ)** | Can be written as p/q (q ≠ 0) | 3/4, −5, 0.25, 0.333… |
| **Irrational (অমূলদ)** | Cannot be written as p/q; non-terminating, non-recurring decimal | √2, √3, π |
| **Real (বাস্তব)** | Rational + irrational | all of the above |

- 🔥 **1 is neither prime nor composite.** **2 is the only even prime** and the smallest prime.
- 🔥 There are **25 primes from 1 to 100** and **15 primes from 1 to 50**.
- **Composite (যৌগিক)** number: has more than two factors (4, 6, 8, 9 …). Smallest composite = **4**.
- **Co-prime (সহমৌলিক):** two numbers whose HCF is 1, e.g. 8 and 15 (they need not be prime).
- **0 is an even number**, and it is neither positive nor negative.
- π is irrational, but **22/7 is rational** (it is only an approximate value of π).
- Every recurring decimal is rational: 0.333… = 1/3, 0.444… = 4/9, 0.2727… = 27/99 = 3/11.

## Divisibility rules (বিভাজ্যতার নিয়ম) 🔥
| Divisor | Rule | Example |
|---|---|---|
| **2** | Last digit even (0, 2, 4, 6, 8) | 348 |
| **3** | Sum of digits divisible by 3 | 471 → 12 |
| **4** | Last **two** digits divisible by 4 (or 00) | 7316 → 16 |
| **5** | Last digit 0 or 5 | 985 |
| **6** | Divisible by both 2 and 3 | 324 |
| **8** | Last **three** digits divisible by 8 (or 000) | 5136 → 136 |
| **9** | Sum of digits divisible by 9 | 7263 → 18 |
| **10** | Last digit 0 | 450 |
| **11** | (Sum of odd-place digits) − (sum of even-place digits) = 0 or a multiple of 11 | 13574 → (1+5+4) − (3+7) = 0 |
| **12** | Divisible by both 3 and 4 | 924 |
| **15** | Divisible by both 3 and 5 | 735 |

Rule for composite divisors: split into **co-prime** factors (12 = 3 × 4, not 2 × 6).

## Formula and shortcut table
| Item | Formula |
|---|---|
| Sum of first n natural numbers | n(n + 1)/2 |
| Sum of first n odd numbers | n² |
| Sum of first n even numbers | n(n + 1) |
| Sum of squares 1² + … + n² | n(n + 1)(2n + 1)/6 |
| Sum of cubes 1³ + … + n³ | [n(n + 1)/2]² |
| Number of factors of N = pᵃ × qᵇ × rᶜ | (a + 1)(b + 1)(c + 1) |
| Dividend | Divisor × Quotient + Remainder |
| Unit-digit cycles | 2: 2,4,8,6 · 3: 3,9,7,1 · 7: 7,9,3,1 · 8: 8,4,2,6 (cycle of 4); 4 and 9 cycle of 2; 0, 1, 5, 6 never change |

## Worked examples
**Example 1.** What least digit must replace ∗ in 34∗6 so that it is divisible by 9?
Steps: 3 + 4 + 6 = 13. Next multiple of 9 is 18, so ∗ = 18 − 13 = 5.
**Answer: 5**

**Example 2.** How many factors (divisors) does 72 have?
Steps: 72 = 2³ × 3². Number of factors = (3 + 1)(2 + 1) = 12.
**Answer: 12**

**Example 3.** What is the unit digit of 7⁹⁵?
Steps: Unit digits of powers of 7 repeat 7, 9, 3, 1. 95 ÷ 4 leaves remainder 3 → third in cycle = 3.
**Answer: 3**

**Example 4.** Find the largest 4-digit number divisible by 88.
Steps: 9999 ÷ 88 = 113, remainder 55. 9999 − 55 = 9944.
**Answer: 9944**

**Example 5.** Find 1 + 2 + 3 + … + 50.
Steps: n(n + 1)/2 = 50 × 51/2 = 1275.
**Answer: 1275**

## Common traps
- Treating 1 as prime. It is **not**.
- Using 2 × 6 for divisibility by 12 — the factors must be co-prime (3 × 4).
- For remainder-0 cycle position: if power ÷ 4 leaves remainder 0, take the **4th** digit of the cycle (e.g. 3⁴⁰ ends in 1).
- Thinking 22/7 or 3.14 is irrational — only π itself is.

## Quick revision
- 1 is neither prime nor composite; 2 is the only even prime.
- 25 primes up to 100; 15 primes up to 50.
- Divisible by 4 → last two digits; by 8 → last three digits.
- Divisible by 11 → alternate-digit sum difference is 0 or a multiple of 11.
- Number of factors of pᵃqᵇ = (a + 1)(b + 1).
- Sum of first n odd numbers = n².
- Every recurring decimal is rational; √2 and π are irrational.

## Practice MCQ
**1.** Which number is neither prime nor composite?
(a) 2 (b) 1 (c) 9 (d) 11

**2.** How many prime numbers are there from 1 to 100?
(a) 24 (b) 26 (c) 25 (d) 21

**3.** Which of the following is divisible by 11?
(a) 13564 (b) 12574 (c) 13584 (d) 13574

**4.** How many divisors does 360 have?
(a) 24 (b) 18 (c) 12 (d) 20

**5.** What is the unit digit of 3⁶⁵?
(a) 9 (b) 3 (c) 7 (d) 1

**6.** The sum of the first 20 odd natural numbers is:
(a) 200 (b) 210 (c) 400 (d) 420

**7.** 0.444… (4 recurring) as a fraction is:
(a) 4/9 (b) 4/10 (c) 2/5 (d) 44/100

**8.** What least number must be added to 2008 to make it divisible by 9?
(a) 1 (b) 2 (c) 7 (d) 8

**9.** Which of the following is irrational?
(a) √16 (b) 22/7 (c) √2 (d) 0.5

**10.** What is the smallest digit x for which 48x6 is divisible by 8?
(a) 1 (b) 2 (c) 3 (d) 5

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | 1 has only one factor, so it is neither prime nor composite |
| 2 | c | There are 25 primes from 1 to 100 |
| 3 | d | (1+5+4) − (3+7) = 0, so 13574 = 11 × 1234 |
| 4 | a | 360 = 2³ × 3² × 5 → 4 × 3 × 2 = 24 |
| 5 | b | Cycle 3,9,7,1; 65 ÷ 4 leaves 1 → 3 |
| 6 | c | Sum of first n odd numbers = n² = 20² = 400 |
| 7 | a | 0.444… = 4/9 |
| 8 | d | Digit sum 10; next multiple of 9 is 18 → add 8 (2016 = 9 × 224) |
| 9 | c | √2 cannot be written as p/q; √16 = 4 |
| 10 | a | Last three digits 816 = 8 × 102; 806 is not divisible by 8 |
