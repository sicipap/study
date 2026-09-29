# Dice & cube

> **Why it matters:** Dice (ছক্কা/পাশা) questions ask which face is opposite a given face, from a net or from several positions. Cube questions ask how many small cubes have 0, 1, 2 or 3 painted faces after a painted cube is cut. Both are pure rule-based marks.

## Standard die 🔥
- A cube has **6 faces, 12 edges, 8 corners (vertices)**.
- On a **standard die, opposite faces add up to 7**: **1–6, 2–5, 3–4**.
- In an exam, the die may not be standard; then use the rules below.

## Finding opposite faces from positions 🔥
| Rule | How to use it |
|---|---|
| **Adjacent faces are never opposite** | Faces seen together in one position share an edge |
| **Four faces adjacent to one face** | If faces 2, 3, 5, 6 are all seen next to 4, the only remaining face (1) is **opposite 4** |
| **One common face in the same place** | If two positions share exactly one face and it is in the same place (e.g. top), the faces in matching places are **opposite** each other (front ↔ front, right ↔ right) |

## Finding opposite faces from a net 🔥
**Rule: in a straight line of three squares, the first and third are opposite. Two faces that touch in the net are never opposite.**

Net 1 (cross):
```
      [1]
  [2] [3] [4] [5]
      [6]
```
Opposite pairs: **1–6** (above and below 3), **2–4**, **3–5** (in the row of four, faces with one square between them).

Net 2 (T-shape):
```
  [A] [B] [C]
      [D]
      [E]
      [F]
```
Opposite pairs: **A–C**, **B–E**, **D–F**.

## Painted cube cut into small cubes 🔥
A cube painted on all faces is cut into n × n × n equal small cubes (n ≥ 2):
| Small cubes with … | Formula | n = 3 | n = 4 | n = 5 |
|---|---|---|---|---|
| **3 faces painted** (corners) | **8** | 8 | 8 | 8 |
| **2 faces painted** (edges) | **12(n − 2)** | 12 | 24 | 36 |
| **1 face painted** (face centres) | **6(n − 2)²** | 6 | 24 | 54 |
| **No face painted** (inside) | **(n − 2)³** | 1 | 8 | 27 |
| **Total** | n³ | 27 | 64 | 125 |

**Cuts:** to divide a cube into n³ equal pieces you need at least **3(n − 1)** straight cuts (27 pieces → 6 cuts; 64 pieces → 9 cuts).

## Worked examples
**Example 1.** On a standard die, which number is opposite 2?
2 + 5 = 7 → **5**.

**Example 2.** In Net 1, which face is opposite 2?
2 and 4 are in the row with 3 between them → **4**.

**Example 3.** A 4 × 4 × 4 painted cube is cut into 64 small cubes. How many have exactly two faces painted?
12 × (4 − 2) = **24**.

**Example 4.** A painted cube is cut into 27 equal cubes. How many have no paint?
(3 − 2)³ = **1** (the centre cube).

**Example 5.** In different positions of a die, faces 2, 3, 5 and 6 are all seen next to face 4. Which face is opposite 4?
The only face never seen with 4 is **1**.

## Quick revision
- Standard die: 1–6, 2–5, 3–4 (sum 7).
- Net: squares with one square between them in a line are opposite.
- Faces that touch in a net or appear together are never opposite.
- Painted cube: 3 faces → 8; 2 faces → 12(n − 2); 1 face → 6(n − 2)²; none → (n − 2)³.
- Minimum cuts for n³ pieces: 3(n − 1).
- Cube: 6 faces, 12 edges, 8 corners.

## Practice MCQ
**1.** On a standard die, which number is opposite 3?
(a) 5 (b) 6 (c) 4 (d) 2

**2.** In a cube net with 1 on top of 3, the row 2, 3, 4, 5, and 6 below 3, which face is opposite 2?
(a) 4 (b) 5 (c) 1 (d) 6

**3.** A 4 × 4 × 4 cube painted on all faces is cut into 64 equal small cubes. How many small cubes have exactly two faces painted?
(a) 8 (b) 24 (c) 16 (d) 12

**4.** A painted cube is cut into 27 equal small cubes. How many small cubes have no face painted?
(a) 0 (b) 6 (c) 8 (d) 1

**5.** In different positions of a die, the faces 2, 3, 5 and 6 are all seen next to face 4. Which face is opposite 4?
(a) 1 (b) 2 (c) 3 (d) 6

**6.** What is the minimum number of straight cuts needed to divide a cube into 27 identical small cubes?
(a) 9 (b) 6 (c) 27 (d) 8

**7.** A 5 × 5 × 5 cube painted on all faces is cut into 125 equal small cubes. How many have exactly one face painted?
(a) 36 (b) 27 (c) 54 (d) 48

**8.** A painted cube is cut into 216 equal small cubes. How many small cubes have three faces painted?
(a) 6 (b) 12 (c) 24 (d) 8

**9.** In a T-shaped net, A, B, C form the top row and D, E, F hang below B in a column. Which face is opposite D?
(a) A (b) B (c) F (d) E

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | c | Opposite faces add up to 7: 3 + 4. |
| 2 | a | In the row 2, 3, 4, 5, the faces 2 and 4 have one square between them. |
| 3 | b | 12 × (4 − 2) = 24. |
| 4 | d | (3 − 2)³ = 1. |
| 5 | a | 1 is the only face never adjacent to 4. |
| 6 | b | 3 × (3 − 1) = 6 cuts. |
| 7 | c | 6 × (5 − 2)² = 54. |
| 8 | d | Corner cubes always number 8. |
| 9 | c | In the column B, D, E, F: D and F have E between them. |
