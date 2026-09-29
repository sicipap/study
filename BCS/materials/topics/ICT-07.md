# Boolean algebra & logic gates

> **Why it matters:** Exams ask who invented Boolean algebra, which gates are universal, the output of a gate for given inputs, and De Morgan's laws. A good truth-table memory gives you sure marks.

## Boolean algebra (বুলিয়ান অ্যালজেবরা) 🔥
- Invented by **George Boole** (English mathematician), in ***An Investigation of the Laws of Thought*** (**1854**).
- **Claude Shannon** (1938) showed how Boolean algebra can design **switching (electronic) circuits**.
- Works with only two values: **1 (true/ON/high)** and **0 (false/OFF/low)**.
- Three basic operations: **AND (·, logical multiplication)**, **OR (+, logical addition)**, **NOT (¯ or ′, complement/inversion)**.

## Basic laws
| Law | Form |
|---|---|
| Identity | A + 0 = A; A · 1 = A |
| Null (dominance) | A + 1 = **1**; A · 0 = **0** |
| Idempotent | A + A = A; A · A = A |
| Complement | A + A′ = **1**; A · A′ = **0** |
| Double complement (involution) | (A′)′ = A |
| Commutative | A + B = B + A; AB = BA |
| Associative | A + (B + C) = (A + B) + C |
| Distributive | A(B + C) = AB + AC; A + BC = (A + B)(A + C) |
| Absorption | A + AB = **A**; A(A + B) = **A** |
| Other useful | A + A′B = A + B |

### De Morgan's theorems 🔥
- **(A + B)′ = A′ · B′** (NOR = AND of inverted inputs)
- **(A · B)′ = A′ + B′** (NAND = OR of inverted inputs)
- Rule: "break the bar, change the sign".

## Logic gates (লজিক গেট) 🔥🔥
A logic gate is an electronic circuit that takes one or more binary inputs and gives one output.

| Gate | Expression | Output is 1 when… |
|---|---|---|
| **AND** | Y = A · B | **all** inputs are 1 |
| **OR** | Y = A + B | **at least one** input is 1 |
| **NOT** (inverter) | Y = A′ | input is 0 (only **one input**) |
| **NAND** (NOT-AND) | Y = (A · B)′ | **at least one** input is 0 |
| **NOR** (NOT-OR) | Y = (A + B)′ | **all** inputs are 0 |
| **XOR** (Exclusive-OR) | Y = A ⊕ B = A′B + AB′ | inputs are **different** |
| **XNOR** (Exclusive-NOR) | Y = (A ⊕ B)′ = AB + A′B′ | inputs are **the same** (equality detector) |

### Truth table for two inputs (checked)
| A | B | AND | OR | NAND | NOR | XOR | XNOR |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |

NOT: A = 0 → 1; A = 1 → 0.

### Key facts
- 🔥 **Universal gates: NAND and NOR.** Any other gate (AND, OR, NOT…) can be built using only NAND gates or only NOR gates.
- **Basic gates:** AND, OR, NOT. **Derived gates:** NAND, NOR, XOR, XNOR.
- A truth table for **n inputs** has **2ⁿ rows** (3 inputs → 8 rows).
- NOT gate from NAND: join both inputs together → Y = (A·A)′ = A′.
- **Half adder:** adds two bits; **Sum = A XOR B**, **Carry = A AND B**.
- **Full adder:** adds three bits (A, B and carry-in); made from two half adders and an OR gate.
- **Flip-flop:** stores **one bit**; the basic memory element (used in registers and SRAM).
- **Encoder/decoder, multiplexer (MUX)** are combinational circuits; **flip-flops, counters, registers** are sequential circuits (they have memory).

## Quick revision
- Father of Boolean algebra: **George Boole (1854)**.
- Universal gates: **NAND, NOR**.
- AND = 1 only if all inputs are 1; OR = 0 only if all inputs are 0.
- XOR = 1 when inputs **differ**; XNOR = 1 when inputs are **equal**.
- NOT gate has **one** input.
- De Morgan: **(A+B)′ = A′B′**, **(AB)′ = A′ + B′**.
- A + 1 = 1; A · A′ = 0; A + AB = A.
- Half adder: Sum = XOR, Carry = AND.

## Practice MCQ
**1.** Who introduced Boolean algebra?
(a) Claude Shannon (b) Charles Babbage (c) George Boole (d) Alan Turing

**2.** Which of the following are universal gates?
(a) NAND and NOR (b) AND and OR (c) XOR and XNOR (d) NOT and AND

**3.** For inputs A = 1 and B = 1, which gate gives output 1?
(a) NAND (b) XOR (c) NOR (d) AND

**4.** An XOR gate gives output 1 when:
(a) both inputs are 1 (b) both inputs are 0 (c) the inputs are different (d) any input is 0

**5.** According to De Morgan's theorem, (A + B)′ equals:
(a) A′ + B′ (b) A′ · B′ (c) A · B (d) A + B

**6.** In Boolean algebra, A + 1 equals:
(a) 1 (b) A (c) 0 (d) A′

**7.** How many rows are needed in the truth table of a 3-input gate?
(a) 3 (b) 6 (c) 9 (d) 8

**8.** In a half adder, the carry output is produced by which gate?
(a) OR (b) XOR (c) AND (d) NOR

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | c | George Boole, 1854 |
| 2 | a | Any gate can be built from only NAND or only NOR |
| 3 | d | AND = 1 when all inputs are 1 |
| 4 | c | XOR = 1 for 01 and 10 |
| 5 | b | Break the bar, change + to · |
| 6 | a | Null law: A + 1 = 1 |
| 7 | d | 2³ = 8 rows |
| 8 | c | Carry = A AND B; Sum = A XOR B |
