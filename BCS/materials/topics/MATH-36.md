# Permutation

> **Why it matters:** Permutation (বিন্যাস) questions — arranging letters of a word, forming numbers from digits, seating people round a table — appear regularly in BCS and bank exams. Words with repeated letters (e.g. BANGLA, DHAKA, COMMITTEE) are especially common.

## Key concepts
- **Permutation** = an **arrangement** in which **order matters** (AB ≠ BA).
- **Factorial:** n! = n × (n − 1) × … × 2 × 1. 🔥 **0! = 1**, 1! = 1, 3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5040.
- **Fundamental counting principle (গণনার মৌলিক নীতি):** if one job can be done in m ways and a second in n ways, both together can be done in m × n ways.
- For letters that must stay **together**, tie them into one block, arrange the blocks, then arrange inside the block.

## Formula and shortcut table 🔥
| Situation | Formula |
|---|---|
| n different things, all at a time | **n!** |
| 🔥 n different things, r at a time | **ⁿPᵣ = n!/(n − r)!** |
| 🔥 n things with p alike, q alike, r alike | **n!/(p! q! r!)** |
| r places, each can use any of n things (repetition allowed) | nʳ |
| 🔥 n people around a round table | **(n − 1)!** |
| Necklace / garland of n different beads (can be flipped) | (n − 1)!/2 |
| k particular items always together | (n − k + 1)! × k! |
| ⁿPₙ and ⁿP₀ | n! and 1 |

## Worked examples
**Example 1.** Find ⁵P₂.
Steps: 5!/3! = 5 × 4 = 20.
**Answer: 20**

**Example 2.** In how many ways can the letters of "BANGLA" be arranged?
Steps: 6 letters, A appears twice. 6!/2! = 720/2 = 360.
**Answer: 360**

**Example 3.** In how many ways can the letters of "DHAKA" be arranged?
Steps: 5 letters, A twice. 5!/2! = 60.
**Answer: 60**

**Example 4.** In how many ways can 6 people sit around a round table?
Steps: (6 − 1)! = 120.
**Answer: 120**

**Example 5.** In how many ways can "LEADER" be arranged so that the vowels are always together?
Steps: Vowels E, A, E form one block. Units: [EAE], L, D, R = 4 units → 4! = 24. Inside the block: 3!/2! = 3. Total 24 × 3 = 72.
**Answer: 72**

**Example 6.** How many 3-digit numbers can be formed from 1, 2, 3, 4, 5 without repetition?
Steps: ⁵P₃ = 5 × 4 × 3 = 60.
**Answer: 60**

## Common traps
- Forgetting to divide by the factorials of **repeated** letters.
- Using n! for a round table instead of (n − 1)!.
- In "together" problems, also arrange the items **inside** the block.
- For "even numbers", fill the **units place first** with the even digits.

## Quick revision
- 0! = 1.
- ⁿPᵣ = n!/(n − r)!.
- Repeated letters: n!/(p! q! …).
- Round table (n − 1)!; necklace (n − 1)!/2.
- Together: treat as one block × internal arrangements.

## Practice MCQ
**1.** ⁶P₂ = ?
(a) 15 (b) 30 (c) 12 (d) 36

**2.** The value of 0! is:
(a) 0 (b) undefined (c) 1 (d) infinity

**3.** In how many ways can the letters of "BOOK" be arranged?
(a) 24 (b) 6 (c) 16 (d) 12

**4.** In how many ways can the letters of "COMMITTEE" be arranged?
(a) 45360 (b) 362880 (c) 90720 (d) 30240

**5.** In how many ways can 7 people sit around a round table?
(a) 5040 (b) 360 (c) 720 (d) 120

**6.** How many 3-digit even numbers can be formed from 1, 2, 3, 4, 5 without repetition?
(a) 24 (b) 30 (c) 60 (d) 36

**7.** In how many ways can the letters of "MOTHER" be arranged so that the vowels are always together?
(a) 120 (b) 720 (c) 240 (d) 480

**8.** If ⁿP₂ = 56, then n = ?
(a) 7 (b) 8 (c) 9 (d) 14

**9.** In how many ways can a necklace be made from 5 different beads?
(a) 24 (b) 120 (c) 60 (d) 12

**10.** In how many ways can the letters of "BANANA" be arranged?
(a) 720 (b) 120 (c) 60 (d) 360

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | 6 × 5 = 30 |
| 2 | c | By definition 0! = 1 |
| 3 | d | 4!/2! = 12 (O twice) |
| 4 | a | 9!/(2! 2! 2!) = 362880/8 = 45360 (M, T, E twice) |
| 5 | c | (7 − 1)! = 720 |
| 6 | a | Units: 2 or 4 (2 ways) × 4 × 3 = 24 |
| 7 | c | [OE] + M, T, H, R = 5 units → 5! × 2! = 240 |
| 8 | b | n(n − 1) = 56 → n = 8 |
| 9 | d | (5 − 1)!/2 = 12 |
| 10 | c | 6!/(3! 2!) = 60 (A thrice, N twice) |
