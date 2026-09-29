# LCM & HCF

> **Why it matters:** LCM (ল.সা.গু) and HCF (গ.সা.গু) questions appear in almost every BCS, bank and primary-teacher paper: product rule, "least number leaving remainder", "greatest number dividing", bells ringing together.

## Key concepts
- **HCF / GCD (গরিষ্ঠ সাধারণ গুণনীয়ক, গ.সা.গু):** the greatest number that divides all the given numbers exactly.
- **LCM (লঘিষ্ঠ সাধারণ গুণিতক, ল.সা.গু):** the smallest number that is exactly divisible by all the given numbers.
- **Prime-factor method:** HCF = product of common primes with the **lowest** powers; LCM = product of all primes with the **highest** powers.
  - 72 = 2³ × 3², 108 = 2² × 3³ → HCF = 2² × 3² = 36, LCM = 2³ × 3³ = 216.
- **Division method (ভাগ প্রক্রিয়া) for HCF:** divide the larger by the smaller, then the divisor by the remainder, until remainder is 0. The last divisor is the HCF.
- HCF always divides the LCM. HCF ≤ each number ≤ LCM.
- HCF of co-prime numbers = 1; their LCM = their product.

## Formula and shortcut table 🔥
| Situation | Formula |
|---|---|
| 🔥 Two numbers | **First × Second = LCM × HCF** |
| Numbers in ratio a : b with HCF h | Numbers = ah, bh; LCM = a × b × h |
| HCF of fractions | HCF of numerators ÷ LCM of denominators |
| LCM of fractions | LCM of numerators ÷ HCF of denominators |
| Greatest number that divides x, y, z leaving the **same remainder r** | HCF(x − r, y − r, z − r) |
| Greatest number that divides x, y, z leaving the **same (unknown) remainder** | HCF of the differences (y − x, z − y, z − x) |
| Least number which divided by a, b, c leaves the **same remainder r** | LCM(a, b, c) + r |
| Least number which divided by a, b, c leaves remainders a − k, b − k, c − k | LCM(a, b, c) − k |
| Bells / lights / runners together again | LCM of the intervals |
| Largest tile / container / measure | HCF of the lengths or quantities |

## Worked examples
**Example 1.** The HCF of two numbers is 12 and their LCM is 180. If one number is 36, find the other.
Steps: Other = (LCM × HCF) ÷ 36 = (180 × 12) ÷ 36 = 60.
**Answer: 60**

**Example 2.** Find the least number which, when divided by 12, 15 and 20, leaves remainder 5 in each case.
Steps: LCM(12, 15, 20) = 60. Required = 60 + 5 = 65.
**Answer: 65**

**Example 3.** Find the greatest number that divides 70 and 125 leaving remainders 5 and 8 respectively.
Steps: 70 − 5 = 65, 125 − 8 = 117. HCF(65, 117) = 13.
**Answer: 13**

**Example 4.** Find the greatest number that divides 43, 91 and 183 leaving the same remainder.
Steps: Differences: 91 − 43 = 48, 183 − 91 = 92, 183 − 43 = 140. HCF(48, 92, 140) = 4.
**Answer: 4**

**Example 5.** Three bells ring at intervals of 6, 8 and 12 minutes. They ring together at 10:00. When will they next ring together?
Steps: LCM(6, 8, 12) = 24 minutes → 10:24.
**Answer: 10:24**

**Example 6.** Find the HCF and LCM of 2/3, 8/9, 16/81.
Steps: HCF = HCF(2, 8, 16) ÷ LCM(3, 9, 81) = 2/81. LCM = LCM(2, 8, 16) ÷ HCF(3, 9, 81) = 16/3.
**Answer: HCF 2/81, LCM 16/3**

## Common traps
- The product rule **LCM × HCF = product** works only for **two** numbers, not three.
- For "least number leaving remainders 3, 4, 5 when divided by 5, 6, 7", notice each remainder is 2 less than the divisor → LCM − 2, not LCM + 3.
- For fractions, do not mix up: HCF uses **LCM of denominators**; LCM uses **HCF of denominators**.
- Convert to the same units (minutes vs seconds, metres vs cm) before finding LCM/HCF.

## Quick revision
- Product of two numbers = LCM × HCF.
- Ratio a : b with HCF h → LCM = abh.
- Least number with same remainder r → LCM + r.
- Greatest divisor leaving same remainder → HCF of differences.
- HCF of fractions = HCF(num)/LCM(den); LCM of fractions = LCM(num)/HCF(den).
- Co-prime numbers: HCF = 1, LCM = product.

## Practice MCQ
**1.** What is the LCM of 12, 18 and 24?
(a) 36 (b) 72 (c) 144 (d) 216

**2.** What is the HCF of 144, 180 and 192?
(a) 12 (b) 36 (c) 6 (d) 24

**3.** The product of two numbers is 2160 and their HCF is 12. Their LCM is:
(a) 120 (b) 360 (c) 180 (d) 240

**4.** Two numbers are in the ratio 3 : 4 and their HCF is 5. Their LCM is:
(a) 12 (b) 20 (c) 120 (d) 60

**5.** The least number which, when divided by 6, 9 and 15, leaves remainder 4 in each case is:
(a) 94 (b) 86 (c) 184 (d) 49

**6.** The least number which, when divided by 5, 6 and 7, leaves remainders 3, 4 and 5 respectively is:
(a) 213 (b) 215 (c) 208 (d) 212

**7.** The greatest number that divides 245 and 1029 leaving remainder 5 in each case is:
(a) 8 (b) 16 (c) 32 (d) 4

**8.** What is the LCM of 1/3, 5/6 and 2/9?
(a) 1/18 (b) 10/9 (c) 5/3 (d) 10/3

**9.** The least perfect square that is divisible by 3, 4, 5, 6 and 8 is:
(a) 900 (b) 1600 (c) 3600 (d) 14400

**10.** Three traffic lights change every 48, 72 and 108 seconds. If they change together at 8:20:00, when will they next change together?
(a) 8:27:12 (b) 8:26:12 (c) 8:27:36 (d) 8:24:00

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | 12 = 2²·3, 18 = 2·3², 24 = 2³·3 → 2³·3² = 72 |
| 2 | a | HCF(144, 180) = 36; HCF(36, 192) = 12 |
| 3 | c | LCM = 2160 ÷ 12 = 180 |
| 4 | d | Numbers 15 and 20; LCM = 3 × 4 × 5 = 60 |
| 5 | a | LCM(6, 9, 15) = 90; 90 + 4 = 94 |
| 6 | c | Each remainder is 2 less than divisor → LCM 210 − 2 = 208 |
| 7 | b | HCF(240, 1024) = 16 |
| 8 | d | LCM(1, 5, 2) ÷ HCF(3, 6, 9) = 10/3 |
| 9 | c | LCM = 120 = 2³·3·5; make powers even → 2⁴·3²·5² = 3600 |
| 10 | a | LCM(48, 72, 108) = 432 s = 7 min 12 s → 8:27:12 |
