# Calendar problems

> **Why it matters:** Calendar (দিনপঞ্জি/ক্যালেন্ডার) questions ask what day of the week a date falls on, what day it will be after n days, which years are leap years, and when a calendar repeats. They all rest on the idea of **odd days**.

## Odd days 🔥
**Odd days (বিজোড় দিন)** are the days left over after removing complete weeks. For example, 10 days = 1 week + **3 odd days**.

| Period | Odd days |
|---|---|
| Ordinary year (365 days) | **1** |
| Leap year (366 days) | **2** |
| 100 years | **5** |
| 200 years | **3** |
| 300 years | **1** |
| 400 years | **0** |
| Month of 31 days | 3 |
| Month of 30 days | 2 |
| February (28 / 29 days) | 0 / 1 |

Why 100 years = 5: 100 years have 24 leap years and 76 ordinary years → 24 × 2 + 76 = 124 → 124 ÷ 7 leaves **5**.

## Day codes
| Odd days | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Day | Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday |

## Leap year rule 🔥
- An ordinary year is a leap year if it is **divisible by 4**: 2024, 2028.
- A **century year** is a leap year only if it is **divisible by 400**: **2000 and 1600 are leap years; 1900, 1800 and 2100 are not**.

## Finding the day of a date (method)
1. Split the years before the given year into centuries (use 400-year blocks = 0) and remaining years.
2. Remaining years: odd days = number of years + number of leap years among them.
3. Add the odd days of the completed months of the given year, plus the date.
4. Total ÷ 7 → the remainder gives the day from the table.

## Calendar repetition 🔥
| The year is … | Same calendar again after |
|---|---|
| A leap year | **28 years** (2024 → 2052) |
| 1 year after a leap year | **6 years** (2021 → 2027; 2025 → 2031) |
| 2 years after a leap year | **11 years** (2022 → 2033) |
| 3 years after a leap year | **11 years** (2023 → 2034) |

(This works inside a century without a skipped leap year such as 2100.)

## Shortcuts
- Same date next year: **+1 day** (+2 if a 29 February falls between the two dates).
- After n days: add **n ÷ 7 remainder** days to today.

## Worked examples
**Example 1.** What day was 16 December 1971?
- 1600 years → 0; 300 years (1601–1900) → 1.
- 1901–1970 = 70 years with 17 leap years → 70 + 17 = 87 → 87 ÷ 7 leaves 3.
- 1971: Jan 3 + Feb 0 + Mar 3 + Apr 2 + May 3 + Jun 2 + Jul 3 + Aug 3 + Sep 2 + Oct 3 + Nov 2 = 26, plus 16 days = 42 → 0.
- Total 0 + 1 + 3 + 0 = 4 → **Thursday**.

**Example 2.** If today is Wednesday, what day will it be after 100 days?
100 ÷ 7 leaves 2 → Wednesday + 2 = **Friday**.

**Example 3.** 1 January 2023 was a Sunday. What day was 1 January 2024?
2023 is an ordinary year → +1 → **Monday**.

**Example 4.** 5 March 2025 was a Wednesday. What day was 5 March 2026?
The year between contains 28 February 2026 only (no 29 February) → +1 → **Thursday**.

**Example 5.** Useful dates to remember: **26 March 1971 = Friday; 16 December 1971 = Thursday; 21 February 1952 = Thursday; 1 January 2001 = Monday.**

## Quick revision
- Ordinary year 1 odd day; leap year 2.
- 100 years 5, 200 years 3, 300 years 1, 400 years 0 odd days.
- Century year is a leap year only if divisible by 400 (1900 not leap; 2000 leap).
- 0 = Sunday, 1 = Monday … 6 = Saturday.
- A leap-year calendar repeats after 28 years; a year after a leap year repeats after 6 years.
- After n days: add the remainder of n ÷ 7.

## Practice MCQ
**1.** How many odd days are there in a leap year?
(a) 1 (b) 2 (c) 0 (d) 3

**2.** Which of these is not a leap year?
(a) 2000 (b) 2024 (c) 1900 (d) 1996

**3.** 1 January 2023 was a Sunday. What day of the week was 1 January 2024?
(a) Monday (b) Tuesday (c) Sunday (d) Saturday

**4.** The calendar of 2021 will be repeated in which year?
(a) 2026 (b) 2028 (c) 2032 (d) 2027

**5.** What day of the week was 16 December 1971?
(a) Friday (b) Wednesday (c) Thursday (d) Monday

**6.** How many odd days are there in 400 years?
(a) 0 (b) 1 (c) 5 (d) 3

**7.** If today is Wednesday, what day will it be after 100 days?
(a) Thursday (b) Friday (c) Saturday (d) Sunday

**8.** What day of the week was 26 March 1971?
(a) Thursday (b) Saturday (c) Sunday (d) Friday

**9.** 5 March 2025 was a Wednesday. What day of the week was 5 March 2026?
(a) Wednesday (b) Friday (c) Thursday (d) Tuesday

**10.** The calendar of 2024 will be repeated in which year?
(a) 2028 (b) 2052 (c) 2030 (d) 2035

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | 366 days = 52 weeks + 2 days. |
| 2 | c | 1900 is a century year not divisible by 400. |
| 3 | a | 2023 has 1 odd day: Sunday + 1 = Monday. |
| 4 | d | 2021 is one year after a leap year: repeats after 6 years. |
| 5 | c | Total odd days = 4, which is Thursday. |
| 6 | a | Every 400-year block has 0 odd days. |
| 7 | b | 100 ÷ 7 leaves 2: Wednesday + 2 = Friday. |
| 8 | d | 26 March 1971 was a Friday. |
| 9 | c | No 29 February in between: +1 day, so Thursday. |
| 10 | b | A leap-year calendar repeats after 28 years. |
