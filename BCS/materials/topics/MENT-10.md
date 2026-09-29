# Seating arrangement (linear & circular)

> **Why it matters:** Seating arrangement (বসার বিন্যাস) puzzles give 4–6 clues about people in a row or around a table, then ask 2–4 questions. Bank exams love them. The secret is a correct sense of left and right and filling in the fixed clues first.

## Left and right: the rules 🔥
| Situation | Your left | Your right |
|---|---|---|
| Row facing **north** (away from you, the reader) | Left side of the paper | Right side of the paper |
| Row facing **south** (towards you, the reader) | Right side of the paper | Left side of the paper |
| Circle, everyone **facing the centre** | **Clockwise** neighbour | **Anticlockwise** neighbour |
| Circle, everyone **facing outward** | Anticlockwise neighbour | Clockwise neighbour |

🔥 Memory aid: **facing the centre, "left = clockwise"**. Picture yourself at the bottom of the table looking up: your left hand points to the 7–8 o'clock side, which is the clockwise direction from 6 o'clock.

## Useful terms
- **Immediate left / right:** the very next seat.
- **Second to the left:** skip one seat.
- **Opposite** (circle with an even number of seats): n/2 seats away.
- **Extreme ends:** the first and last seats of a row.
- **Neighbour:** sits next to.

## Method (for any puzzle)
1. Draw the seats: a line of boxes, or a circle with numbered seats (seat 1 at the bottom, numbers going clockwise).
2. Place **fixed clues first**: extreme ends, "sits in the middle", "opposite".
3. Then place **relative clues** (immediate left or right).
4. Use **negative clues** ("X is not next to Y") last to choose between cases.
5. Check every clue against your final answer.

## Counting arrangements
- n people in a **row**: **n!** ways (5 people: 120).
- n people around a **circle**: **(n − 1)!** ways (5 people: 24), because rotating everyone does not give a new arrangement.

## Worked example 1 (linear)
Six people P, Q, R, S, T, U sit in a row facing north.
- S sits at the extreme left.
- Q sits second to the right of S.
- T sits immediately to the right of Q.
- P sits at the extreme right.
- U is not next to T.

Seats 1 to 6 from the left: S = 1, Q = 3, T = 4, P = 6. Seats 2 and 5 are left for R and U. U cannot be next to T (seat 4), so U = 2 and R = 5.
```
Seat:  1  2  3  4  5  6
       S  U  Q  T  R  P      (all facing north)
```

## Worked example 2 (circular)
Six friends A, B, C, D, E, F sit around a round table facing the centre.
- A sits opposite D.
- B is to the immediate right of A.
- E is to the immediate left of D.
- C is not next to A.

Number the seats 0–5 clockwise with A at seat 0, so D = 3. Immediate right of A = anticlockwise neighbour = seat 5 → B. Immediate left of D = clockwise neighbour = seat 4 → E. Seats 1 and 2 remain; seat 1 is next to A, so C = 2 and F = 1.
```
Clockwise from A:  A(0) F(1) C(2) D(3) E(4) B(5)
Opposite pairs:    A-D, F-E, C-B
```

## Quick revision
- Facing the centre: left = clockwise, right = anticlockwise.
- Facing north in a row: left and right are the same as yours on paper.
- Place fixed clues first, negative clues last.
- Opposite seat in a circle of n = n/2 seats away.
- Circle arrangements = (n − 1)!; row arrangements = n!.

## Practice MCQ
Questions 1–3 are based on Worked example 1 (the row S U Q T R P).

**1.** Who sits immediately to the left of P?
(a) T (b) R (c) Q (d) U

**2.** How many people sit between U and R?
(a) 1 (b) 3 (c) 2 (d) 0

**3.** Who sits second to the left of T?
(a) U (b) S (c) Q (d) R

Questions 4–6 are based on Worked example 2 (the round table).

**4.** Who sits opposite B?
(a) F (b) E (c) A (d) C

**5.** Who sits to the immediate left of A?
(a) B (b) F (c) E (d) C

**6.** Who sits between D and B?
(a) E (b) A (c) C (d) F

**7.** In how many ways can 5 people sit around a round table?
(a) 120 (b) 60 (c) 24 (d) 12

**8.** People sit around a round table facing the centre. Moving to a person's right means moving in which direction?
(a) Clockwise (b) Anticlockwise (c) Across the table (d) Towards the centre

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | Row S U Q T R P: R is at seat 5, just left of P. |
| 2 | c | U is at seat 2 and R at seat 5: Q and T are between. |
| 3 | a | T is at seat 4; two seats left is seat 2 = U. |
| 4 | d | B is at seat 5; opposite is seat 2 = C. |
| 5 | b | Left = clockwise; A's clockwise neighbour is F. |
| 6 | a | D(3), E(4), B(5). |
| 7 | c | (5 − 1)! = 24. |
| 8 | b | Facing the centre, right = anticlockwise. |
