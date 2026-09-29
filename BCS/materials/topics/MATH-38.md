# Probability

> **Why it matters:** Probability (সম্ভাবনা) questions with coins, dice, cards and coloured balls appear regularly in BCS and bank exams. Nearly all are solved by counting favourable and total outcomes correctly.

## Key concepts
- **Experiment (পরীক্ষা):** an action with uncertain result (tossing a coin). **Sample space (নমুনা ক্ষেত্র):** set of all possible outcomes. **Event (ঘটনা):** a subset of the sample space.
- 🔥 **P(E) = number of favourable outcomes ÷ total number of outcomes** (all outcomes equally likely).
- **0 ≤ P(E) ≤ 1.** Sure (নিশ্চিত) event: P = 1. Impossible (অসম্ভব) event: P = 0.
- **Complement:** P(not E) = 1 − P(E).
- **Mutually exclusive (পরস্পর বিচ্ছিন্ন):** cannot happen together → P(A or B) = P(A) + P(B).
- **Independent (স্বাধীন):** one does not affect the other → P(A and B) = P(A) × P(B).

## Standard sample spaces 🔥
| Experiment | Total outcomes |
|---|---|
| 1 coin / 2 coins / 3 coins | 2 / 4 / 8 (n coins → 2ⁿ) |
| 1 die / 2 dice | 6 / 36 (n dice → 6ⁿ) |
| Pack of cards | **52**: 4 suits × 13; **26 red** (hearts, diamonds), 26 black (spades, clubs); **4 aces, 4 kings**; **12 face cards** (J, Q, K) |
| Leap year | 366 days = 52 weeks + **2 days** |
| Ordinary year | 365 days = 52 weeks + 1 day |

## Formula and shortcut table
| Item | Formula |
|---|---|
| Probability | favourable/total |
| Not happening | 1 − P |
| A or B (general) | P(A) + P(B) − P(A and B) |
| A and B (independent) | P(A) × P(B) |
| At least one head in n coins | 1 − (1/2)ⁿ |
| Exactly r heads in n coins | ⁿCᵣ/2ⁿ |
| Odds in favour a : b | P = a/(a + b) |
| 53 Sundays in a leap year | 2/7 |
| 53 Sundays in an ordinary year | 1/7 |

## Worked examples
**Example 1.** Two coins are tossed. Find the probability of at least one head.
Steps: Outcomes HH, HT, TH, TT. Favourable 3 → 3/4. (Or 1 − 1/4.)
**Answer: 3/4**

**Example 2.** Two dice are thrown. Find the probability that the sum is 7.
Steps: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 of 36.
**Answer: 1/6**

**Example 3.** A card is drawn from a pack of 52. Find the probability that it is a king.
Steps: 4/52 = 1/13.
**Answer: 1/13**

**Example 4.** A bag has 5 red and 3 blue balls. One ball is drawn. Find P(blue).
Steps: 3/(5 + 3) = 3/8.
**Answer: 3/8**

**Example 5.** Find the probability that a leap year has 53 Sundays.
Steps: The 2 extra days can be (Sun-Mon), (Mon-Tue), …, (Sat-Sun): 7 pairs; 2 contain Sunday.
**Answer: 2/7**

## Common traps
- Two coins give **4** outcomes, not 3 (HT and TH are different).
- Two dice give **36** outcomes, not 12 or 11.
- Face cards are 12 (J, Q, K); aces are not face cards.
- A probability can never be negative or greater than 1 — reject such options at once.

## Quick revision
- P = favourable/total; 0 ≤ P ≤ 1.
- P(not E) = 1 − P(E).
- n coins: 2ⁿ; n dice: 6ⁿ.
- Cards: 52, 26 red, 12 face, 4 of each rank.
- Leap year 53 Sundays: 2/7.
- Independent: multiply.

## Practice MCQ
**1.** A die is thrown. The probability of getting a number greater than 4 is:
(a) 1/2 (b) 1/3 (c) 2/3 (d) 1/6

**2.** Three coins are tossed. The probability of exactly 2 heads is:
(a) 1/8 (b) 3/8 (c) 1/2 (d) 2/3

**3.** Two dice are thrown. The probability that the sum is 10 is:
(a) 1/6 (b) 1/9 (c) 1/18 (d) 1/12

**4.** A card is drawn from a pack of 52. The probability that it is a face card is:
(a) 3/13 (b) 1/13 (c) 4/13 (d) 3/52

**5.** A bag has 4 red and 6 white balls. The probability of drawing a white ball is:
(a) 2/5 (b) 1/6 (c) 3/5 (d) 2/3

**6.** The probability of an impossible event is:
(a) 1 (b) 1/2 (c) 0 (d) −1

**7.** If P(A) = 2/7, then P(not A) = ?
(a) 2/7 (b) 7/2 (c) 1/7 (d) 5/7

**8.** The probability that a leap year has 53 Sundays is:
(a) 1/7 (b) 2/7 (c) 53/366 (d) 1/2

**9.** A number is chosen at random from 1 to 20. The probability that it is prime is:
(a) 2/5 (b) 1/2 (c) 9/20 (d) 7/20

**10.** Two coins are tossed. The probability of getting no head is:
(a) 1/2 (b) 3/4 (c) 1/4 (d) 0

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | 5 and 6 → 2/6 = 1/3 |
| 2 | b | HHT, HTH, THH → 3/8 |
| 3 | d | (4,6), (5,5), (6,4) → 3/36 = 1/12 |
| 4 | a | 12/52 = 3/13 |
| 5 | c | 6/10 = 3/5 |
| 6 | c | Impossible event → 0 |
| 7 | d | 1 − 2/7 = 5/7 |
| 8 | b | 2 extra days; 2 of 7 pairs include Sunday |
| 9 | a | Primes 2, 3, 5, 7, 11, 13, 17, 19 → 8/20 = 2/5 |
| 10 | c | Only TT → 1/4 |
