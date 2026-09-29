# Ranking & ordering

> **Why it matters:** Ranking (ক্রম/অবস্থান) questions ask for the total number of people in a row, a position from the other end, or how many people stand between two people. Ordering questions compare heights, weights or marks. A handful of formulas answer almost all of them.

## Core formulas 🔥
| Find | Formula |
|---|---|
| Total persons | **Position from left + position from right − 1** |
| Position from the other end | **Total − known position + 1** |
| Persons between A and B (same end counted) | **Larger position − smaller position − 1** |
| Rank from bottom in a class | **Total − rank from top + 1** |
| After two people swap places | The one who moves takes the other's **old position from the same end**; then use the total formula |

Why "− 1"? When you count from both ends, the person himself is counted twice.

## Positions from opposite ends
If A is p-th from the left and B is q-th from the right in a row of N:
- Convert B to a left position: **N − q + 1**.
- Then persons between = difference − 1.
- If B's left position is smaller than A's, just reverse it: between = A's position − B's position − 1.

## Ordering (comparison) questions
- Turn every statement into a chain using ">" (taller, heavier, more marks).
- Join the chains: A > B and B > C give A > B > C.
- If one statement does not link to the others, the order may be **not fully determined**. Answer only what is certain.

## Worked examples
**Example 1.** Rahim is 15th from the top and 25th from the bottom in a class. How many students are there?
15 + 25 − 1 = **39**.

**Example 2.** In a row of 40 people, Karim is 12th from the left. What is his position from the right?
40 − 12 + 1 = **29th**.

**Example 3.** In a row of 30, A is 10th from the left and B is 15th from the right. How many people are between them?
B from the left = 30 − 15 + 1 = 16. Between = 16 − 10 − 1 = **5**.

**Example 4.** In a row, A is 7th from the left and B is 9th from the right. When they swap places, A becomes 12th from the left. How many people are in the row?
A's new place is B's old place, so B was 12th from the left and 9th from the right. Total = 12 + 9 − 1 = **20**.

**Example 5.** P is heavier than Q but lighter than R. S is heavier than R. Who is second heaviest?
S > R > P > Q → **R**.

## More question patterns
| Pattern | How to solve |
|---|---|
| "A is 5th from the front and B is 7th from the back; 3 people are between them. Minimum number in the queue?" | Check both cases. If A is ahead of B: 5 + 3 + 7 = **15**. If the counts overlap (B is ahead of A): B is at position 5 − 3 − 1 = 1st from the front, so total = 1 + 7 − 1 = **7**. The minimum is the smaller total that fits all facts. |
| "Ranked 12th from top and 28th from bottom among those who passed; 5 failed and 3 were absent. Total in class?" | Passed = 12 + 28 − 1 = 39; total = 39 + 5 + 3 = **47**. |
| Ordering with "not the tallest, not the shortest" | Put the person in a middle position and test each remaining place. |

## Quick revision
- Total = left + right − 1.
- Other-end position = total − position + 1.
- Between two positions from the same end = difference − 1.
- After a swap, a person takes the other's old position.
- For ordering, write one chain with ">" signs.
- Answer only what the statements make certain.

## Practice MCQ
**1.** Rahim is 15th from the top and 25th from the bottom in his class. How many students are in the class?
(a) 40 (b) 39 (c) 41 (d) 38

**2.** In a row of 40 people, Karim is 12th from the left. What is his position from the right?
(a) 28th (b) 30th (c) 29th (d) 27th

**3.** In a row of 30 people, A is 10th from the left and B is 15th from the right. How many people are between A and B?
(a) 5 (b) 4 (c) 6 (d) 7

**4.** A is taller than B, B is taller than C, and D is taller than A. Who is the shortest?
(a) A (b) B (c) D (d) C

**5.** In a row, A is 7th from the left and B is 9th from the right. When they swap places, A becomes 12th from the left. How many people are in the row?
(a) 19 (b) 21 (c) 20 (d) 22

**6.** In a class of 35 students, Sumon ranks 10th from the top. What is his rank from the bottom?
(a) 26th (b) 25th (c) 27th (d) 24th

**7.** P is heavier than Q but lighter than R. S is heavier than R. Who is the second heaviest?
(a) P (b) R (c) S (d) Q

**8.** In a row of boys, Tanvir is 6th from the left. There are 4 boys between Tanvir and Nayeem, and Nayeem is at the right end of the row. How many boys are in the row?
(a) 10 (b) 12 (c) 9 (d) 11

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | 15 + 25 − 1 = 39. |
| 2 | c | 40 − 12 + 1 = 29. |
| 3 | a | B is 16th from the left; 16 − 10 − 1 = 5. |
| 4 | d | D > A > B > C, so C is shortest. |
| 5 | c | B was 12th from left and 9th from right: 12 + 9 − 1 = 20. |
| 6 | a | 35 − 10 + 1 = 26. |
| 7 | b | S > R > P > Q. |
| 8 | d | Tanvir 6th, 4 boys between, so Nayeem is 11th and last. |
