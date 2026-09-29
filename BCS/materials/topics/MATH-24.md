# Sets & Venn diagram

> **Why it matters:** Sets (সেট) are asked in almost every BCS preliminary: number of subsets/power set, union–intersection counting with a Venn diagram (ভেনচিত্র), set operations and De Morgan's law. Survey-type counting problems are the most common.

## Key concepts
- A **set** is a well-defined collection of distinct objects. Written with braces: A = {1, 2, 3}. Methods: **roster (তালিকা)** and **set-builder (সেট গঠন)**, e.g. {x : x is even, x < 10}.
- **Empty / null set (ফাঁকা সেট):** has no element; written **∅** or { }. Note {0} and {∅} are **not** empty — each has one element.
- **Singleton:** one element. **Finite / infinite** sets. **Universal set (সার্বিক সেট) U**: contains all elements under discussion.
- **Subset (উপসেট):** A ⊆ B if every element of A is in B. Every set is a subset of itself, and ∅ is a subset of every set.
- **Proper subset (প্রকৃত উপসেট):** A ⊂ B and A ≠ B.
- **Power set (শক্তি সেট) P(A):** the set of all subsets of A.
- **Operations:**
  - Union A ∪ B (সংযোগ): elements in A or B or both.
  - Intersection A ∩ B (ছেদ): elements in both.
  - Difference A − B (অন্তর): in A but not in B.
  - Complement A′ or Aᶜ (পূরক): in U but not in A.
- **Disjoint sets (নিশ্ছেদ সেট):** A ∩ B = ∅.
- **Cartesian product (কার্তেসীয় গুণজ) A × B:** all ordered pairs (a, b).

## Formula and shortcut table 🔥
| Item | Formula |
|---|---|
| 🔥 Number of subsets of a set with n elements | **2ⁿ** |
| Number of proper subsets | 2ⁿ − 1 |
| Number of elements of power set | 2ⁿ |
| 🔥 Two sets | **n(A ∪ B) = n(A) + n(B) − n(A ∩ B)** |
| Only A | n(A) − n(A ∩ B) |
| Neither A nor B | Total − n(A ∪ B) |
| Three sets | n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A∩B) − n(B∩C) − n(A∩C) + n(A∩B∩C) |
| n(A × B) | n(A) × n(B) |
| De Morgan's laws | (A ∪ B)′ = A′ ∩ B′ ; (A ∩ B)′ = A′ ∪ B′ |

## Worked examples
**Example 1.** How many subsets and proper subsets does {1, 2, 3} have?
Steps: n = 3 → 2³ = 8 subsets; proper = 8 − 1 = 7.
**Answer: 8 and 7**

**Example 2.** Of 100 students, 60 like tea, 50 like coffee and 20 like both. How many like neither?
Steps: n(T ∪ C) = 60 + 50 − 20 = 90. Neither = 100 − 90 = 10.
**Answer: 10**

**Example 3.** In Example 2, how many like only tea?
Steps: 60 − 20 = 40.
**Answer: 40**

**Example 4.** n(A) = 20, n(B) = 30, n(A ∪ B) = 40. Find n(A ∩ B).
Steps: 20 + 30 − 40 = 10.
**Answer: 10**

**Example 5.** A = {1, 2, 3, 4}, B = {3, 4, 5}. Find A ∪ B, A ∩ B and A − B.
Steps: Union = {1, 2, 3, 4, 5}; intersection = {3, 4}; A − B = {1, 2}.
**Answer: as above**

## Common traps
- {0} and {∅} are not empty sets.
- "Proper subsets" = 2ⁿ − 1 (exclude the set itself); ∅ **is** counted as a proper subset.
- In surveys, "like cricket" includes those who like both; "only cricket" excludes them.
- A − B ≠ B − A.

## Quick revision
- Subsets = 2ⁿ; proper subsets = 2ⁿ − 1.
- n(A ∪ B) = n(A) + n(B) − n(A ∩ B).
- Neither = total − union.
- ∅ is a subset of every set.
- (A ∪ B)′ = A′ ∩ B′.
- n(A × B) = n(A) · n(B).

## Practice MCQ
**1.** How many subsets does a set with 4 elements have?
(a) 8 (b) 16 (c) 15 (d) 4

**2.** How many proper subsets does {x, y, z} have?
(a) 8 (b) 6 (c) 7 (d) 3

**3.** If n(A) = 25, n(B) = 20 and n(A ∩ B) = 10, then n(A ∪ B) = ?
(a) 45 (b) 55 (c) 30 (d) 35

**4.** In a class of 60, 35 like cricket, 30 like football and 10 like both. How many like neither?
(a) 5 (b) 10 (c) 15 (d) 0

**5.** In a class, 35 students like cricket, 30 like football and 10 like both. How many like only cricket?
(a) 35 (b) 20 (c) 25 (d) 45

**6.** Which of the following is an empty set?
(a) {0} (b) {∅} (c) {1} (d) {x : x is a natural number and x < 1}

**7.** If A = {1, 2, 3, 4, 5} and B = {4, 5, 6}, then A − B = ?
(a) {1, 2, 3} (b) {6} (c) {4, 5} (d) {1, 2, 3, 6}

**8.** If n(A) = 3 and n(B) = 4, then n(A × B) = ?
(a) 7 (b) 12 (c) 64 (d) 81

**9.** By De Morgan's law, (A ∪ B)′ = ?
(a) A′ ∪ B′ (b) A ∩ B (c) A′ ∩ B′ (d) A ∪ B′

**10.** In a survey of 100 people, 50 read paper X, 40 read Y and 30 read Z; 15 read X and Y, 10 read Y and Z, 12 read X and Z, and 5 read all three. How many read none?
(a) 12 (b) 17 (c) 7 (d) 22

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | 2⁴ = 16 |
| 2 | c | 2³ − 1 = 7 |
| 3 | d | 25 + 20 − 10 = 35 |
| 4 | a | Union = 35 + 30 − 10 = 55; 60 − 55 = 5 |
| 5 | c | 35 − 10 = 25 |
| 6 | d | No natural number is less than 1 |
| 7 | a | Remove 4 and 5 from A |
| 8 | b | 3 × 4 = 12 |
| 9 | c | Complement of union = intersection of complements |
| 10 | a | 50 + 40 + 30 − 15 − 10 − 12 + 5 = 88; 100 − 88 = 12 |
