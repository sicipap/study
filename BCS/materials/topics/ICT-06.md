# Number systems & conversion

> **Why it matters:** Every bank IT and BCS paper has one or two conversion sums (decimal ↔ binary ↔ octal ↔ hexadecimal), plus questions on base, 2's complement, BCD and ASCII. Learn the methods and practise.

## The four number systems 🔥
| System | Base (radix / ভিত্তি) | Digits used |
|---|---|---|
| **Binary (বাইনারি)** | **2** | 0, 1 |
| **Octal (অক্টাল)** | **8** | 0–7 |
| **Decimal (দশমিক)** | **10** | 0–9 |
| **Hexadecimal (হেক্সাডেসিমাল)** | **16** | 0–9, **A=10, B=11, C=12, D=13, E=14, F=15** |

- Computers work in **binary** because electronic circuits have two states: on (1) and off (0).
- **Bit** = binary digit. **MSB** = most significant (left-most) bit; **LSB** = least significant (right-most) bit.
- Digit "8" is invalid in octal; "G" is invalid in hexadecimal; "2" is invalid in binary.

## Handy table (0–15)
| Decimal | Binary | Octal | Hex |
|---|---|---|---|
| 0 | 0000 | 0 | 0 |
| 5 | 0101 | 5 | 5 |
| 7 | 0111 | 7 | 7 |
| 8 | 1000 | 10 | 8 |
| 9 | 1001 | 11 | 9 |
| 10 | 1010 | 12 | A |
| 12 | 1100 | 14 | C |
| 15 | 1111 | 17 | F |

## Worked conversions 🔥
**1. Decimal → Binary (divide by 2, read remainders bottom to top)**
(25)₁₀: 25÷2=12 r1, 12÷2=6 r0, 6÷2=3 r0, 3÷2=1 r1, 1÷2=0 r1 → **(11001)₂**

**2. Binary → Decimal (place values 2⁰, 2¹, 2² …)**
(11010110)₂ = 128 + 64 + 16 + 4 + 2 = **(214)₁₀**

**3. Decimal fraction → Binary (multiply the fraction by 2, take the integer parts top to bottom)**
(13.625)₁₀: 13 = 1101; 0.625×2 = 1.25 → 1; 0.25×2 = 0.5 → 0; 0.5×2 = 1.0 → 1 → **(1101.101)₂**
Also: (0.375)₁₀ = **(0.011)₂**

**4. Binary → Hexadecimal (groups of 4 bits from the right)**
(11010110)₂ = 1101 | 0110 = D | 6 → **(D6)₁₆**

**5. Binary → Octal (groups of 3 bits from the right)**
(11010110)₂ = 011 | 010 | 110 = 3 | 2 | 6 → **(326)₈**

**6. Hexadecimal → Decimal**
(7B)₁₆ = 7×16 + 11×1 = 112 + 11 = **(123)₁₀**

**7. Octal → Decimal**
(157)₈ = 1×64 + 5×8 + 7×1 = 64 + 40 + 7 = **(111)₁₀**

**8. Decimal 100 in all bases:** (100)₁₀ = **(1100100)₂ = (144)₈ = (64)₁₆**

**Other useful values:** (FF)₁₆ = **255**; (777)₈ = **511**; (1111)₂ = **15**; (10)₁₆ = 16; (10)₈ = 8.

## Binary arithmetic
| Rule | Result |
|---|---|
| 0+0 | 0 |
| 0+1 | 1 |
| 1+1 | **10** (0, carry 1) |
| 1+1+1 | **11** (1, carry 1) |

- 1011 + 1101 = **11000** (11 + 13 = 24).
- 1101 − 0110 = **111** (13 − 6 = 7).
- 101 × 11 = **1111** (5 × 3 = 15).

## Complements and signed numbers 🔥
- **1's complement:** flip every bit. 1's complement of 1010 = **0101**.
- **2's complement = 1's complement + 1.** Computers use 2's complement to **represent negative numbers** and to do **subtraction by addition**.
- Example: −5 in 8 bits: 5 = 00000101 → flip = 11111010 → +1 = **11111011**.
- In signed numbers, the **MSB is the sign bit**: 0 = positive, 1 = negative.

## Codes 🔥
| Code | Key fact |
|---|---|
| **BCD** (Binary Coded Decimal) | Each decimal digit written in **4 bits**. 59 → **0101 1001** |
| 🔥 **ASCII** (American Standard Code for Information Interchange) | **7-bit** code, **128** characters (extended ASCII: 8-bit, 256). 'A' = **65**, 'a' = **97**, '0' = 48 |
| **EBCDIC** | **8-bit** code by **IBM** (Extended Binary Coded Decimal Interchange Code) |
| 🔥 **Unicode** | Covers the characters of **all languages**, including **Bangla**; UTF-8, UTF-16, UTF-32. Bangla is in the Unicode block U+0980–U+09FF |

- With **n bits**, you can make **2ⁿ** different codes (e.g. 8 bits → 256).

## Quick revision
- Base of binary 2, octal 8, decimal 10, hex 16.
- Hex digits A–F = **10–15**.
- Binary → octal: groups of **3**; binary → hex: groups of **4**.
- (25)₁₀ = (11001)₂; (FF)₁₆ = 255.
- 2's complement = **1's complement + 1**; used for negative numbers.
- ASCII is **7-bit (128 characters)**; Unicode supports Bangla.
- 1 + 1 in binary = **10**.

## Practice MCQ
**1.** What is the binary equivalent of decimal 25?
(a) 10011 (b) 11001 (c) 11010 (d) 10101

**2.** What is (7B)₁₆ in decimal?
(a) 123 (b) 117 (c) 113 (d) 173

**3.** The base of the hexadecimal number system is:
(a) 8 (b) 2 (c) 10 (d) 16

**4.** (11010110)₂ in octal is:
(a) 632 (b) 326 (c) 316 (d) 426

**5.** Which character encoding can represent Bangla script?
(a) ASCII (b) BCD (c) Unicode (d) EBCDIC

**6.** What is the 8-bit 2's complement representation of −5?
(a) 11111010 (b) 10000101 (c) 00000101 (d) 11111011

**7.** The sum of binary numbers 1011 and 1101 is:
(a) 11000 (b) 10110 (c) 11100 (d) 10100

**8.** Which digit can never appear in an octal number?
(a) 0 (b) 7 (c) 8 (d) 5

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | 16 + 8 + 1 = 25 → 11001 |
| 2 | a | 7×16 + 11 = 123 |
| 3 | d | Hex uses 16 symbols, 0–9 and A–F |
| 4 | b | 011 010 110 → 3 2 6 |
| 5 | c | Unicode covers all scripts including Bangla |
| 6 | d | 00000101 → flip 11111010 → +1 = 11111011 |
| 7 | a | 11 + 13 = 24 = 11000 |
| 8 | c | Octal digits are only 0–7 |
