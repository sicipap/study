# Counting figures (triangles, squares)

> **Why it matters:** "How many triangles / squares / rectangles are there in the figure?" appears in almost every mental ability paper. Counting without a system leads to mistakes; formulas and a labelled, step-by-step count do not.

## Formulas 🔥
| Figure | Formula | Examples |
|---|---|---|
| Squares in an n × n grid | **1² + 2² + … + n² = n(n + 1)(2n + 1) ÷ 6** | 2 × 2 → 5; 3 × 3 → 14; 4 × 4 → 30; **8 × 8 chessboard → 204** |
| Rectangles (squares included) in an m × n grid | **(m + 1)C2 × (n + 1)C2** = [m(m + 1)/2] × [n(n + 1)/2] | 2 × 3 → 3 × 6 = 18; **chessboard → 36 × 36 = 1296** |
| Triangles when k straight lines (sides included) go from the top vertex to the base | **k(k − 1) ÷ 2** | 1 line inside (k = 3) → 3; 3 lines inside (k = 5) → 10 |
| Same, with the triangle also cut by h lines parallel to the base | **(h + 1) × k(k − 1) ÷ 2** | |
| Straight lines through n points (no three in a line) | **n(n − 1) ÷ 2** | 6 points → 15 |
| Triangles from n points (no three in a line) | **n(n − 1)(n − 2) ÷ 6** | 5 points → 10 |
| Diagonals of an n-sided polygon | **n(n − 3) ÷ 2** | hexagon → 9 |

## Figures worth memorising 🔥
```
Square with both diagonals          Square with both diagonals
                                    AND the two centre lines (+)
+-------+                           +---+---+
|\     /|                           |\  |  /|
|  \ /  |                           | \ | / |
|  / \  |                           +---+---+
|/     \|                           | / | \ |
+-------+                           |/  |  \|
                                    +---+---+
      8 triangles                        16 triangles
```
- A rectangle or square with **one diagonal** → 2 triangles.
- With **both diagonals** → **8** triangles (4 small + 4 made of two small ones).
- Both diagonals + the two lines joining midpoints of opposite sides → **16** triangles.

## Systematic counting method
1. **Label every point** with a letter.
2. Count the **smallest pieces** first (single regions).
3. Count shapes made of **2 pieces**, then **3**, **4**, and so on.
4. For triangles, you can instead list every group of three points joined by lines, making sure the three points are not on one straight line.
5. Add the totals and check against a formula if one applies.

## Worked examples
**Example 1.** How many squares are in a 3 × 3 grid?
1 × 1: 9; 2 × 2: 4; 3 × 3: 1 → **14**.

**Example 2.** How many squares on a chessboard?
1² + 2² + … + 8² = 8 × 9 × 17 ÷ 6 = **204**.

**Example 3.** How many rectangles in a grid of 2 rows and 3 columns?
Horizontal lines = 3, choose 2 → 3. Vertical lines = 4, choose 2 → 6. 3 × 6 = **18**.

**Example 4.** A triangle has 3 straight lines drawn from its top vertex to its base. How many triangles?
Lines from the top vertex = 2 sides + 3 = 5. 5 × 4 ÷ 2 = **10**.

**Example 5.** How many straight lines can be drawn through 6 points, no three in a line?
6 × 5 ÷ 2 = **15**.

## Quick revision
- Squares in n × n: sum of squares 1² to n² (3 × 3 = 14, 4 × 4 = 30, 8 × 8 = 204).
- Rectangles in a chessboard: 1296.
- Triangle with lines from the apex: k(k − 1)/2, k = all lines from the apex including sides.
- Square with both diagonals: 8 triangles; add the centre lines: 16.
- Lines through n points: n(n − 1)/2.
- Count small pieces first, then combinations of 2, 3, 4.

## Practice MCQ
**1.** How many squares are there in a 3 × 3 grid of equal squares?
(a) 9 (b) 13 (c) 14 (d) 10

**2.** How many squares are there on a chessboard (8 × 8)?
(a) 64 (b) 204 (c) 196 (d) 256

**3.** How many rectangles (including squares) are there on a chessboard?
(a) 1296 (b) 1024 (c) 204 (d) 784

**4.** A triangle has 3 straight lines drawn from its top vertex to its base. How many triangles are there in the figure?
(a) 8 (b) 9 (c) 12 (d) 10

**5.** How many triangles are there in a square with both its diagonals drawn?
(a) 4 (b) 6 (c) 8 (d) 10

**6.** How many straight lines can be drawn through 6 points, no three of which are in a straight line?
(a) 12 (b) 15 (c) 30 (d) 18

**7.** How many rectangles (including squares) are there in a grid of 2 rows and 3 columns of equal squares?
(a) 18 (b) 6 (c) 12 (d) 20

**8.** A square has both diagonals and the two lines joining the midpoints of its opposite sides drawn. How many triangles are there?
(a) 8 (b) 12 (c) 20 (d) 16

**9.** How many squares are there in a 4 × 4 grid of equal squares?
(a) 16 (b) 20 (c) 30 (d) 25

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | c | 9 + 4 + 1 = 14. |
| 2 | b | 1² + 2² + … + 8² = 204. |
| 3 | a | 9C2 × 9C2 = 36 × 36 = 1296. |
| 4 | d | 5 lines from the apex: 5 × 4 ÷ 2 = 10. |
| 5 | c | 4 small + 4 made of two small triangles = 8. |
| 6 | b | 6 × 5 ÷ 2 = 15. |
| 7 | a | 3C2 × 4C2 = 3 × 6 = 18. |
| 8 | d | 8 small + 4 side triangles (2 small each) + 4 half-squares = 16. |
| 9 | c | 16 + 9 + 4 + 1 = 30. |
