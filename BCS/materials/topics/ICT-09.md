# Programming languages, compiler, algorithm, flowchart

> **Why it matters:** Exams ask the generations of languages, who created C, Java or Python, compiler vs interpreter, and the flowchart symbol for decision or input/output.

## Levels / generations of programming languages 🔥
| Generation | Type | Features |
|---|---|---|
| **1GL** | 🔥 **Machine language (যান্ত্রিক ভাষা)** | Written in **0 and 1**; the **only language a computer understands directly**; no translator needed; machine-dependent |
| **2GL** | **Assembly language** | Uses **mnemonics** (ADD, MOV, SUB); needs an **assembler** |
| **3GL** | **High-level language** | English-like: FORTRAN, COBOL, C, C++, Java, Python; needs a compiler or interpreter |
| **4GL** | **Very high-level** | Says *what* to do, not *how*: **SQL**, report generators |
| **5GL** | **Natural / AI languages** | Based on logic and constraints: **PROLOG**, used in AI |

- **Low-level languages:** machine and assembly. **High-level languages:** 3GL and above.

## Famous languages and creators 🔥
| Language | Creator / year | Known for |
|---|---|---|
| 🔥 **FORTRAN** (FORmula TRANslation) | **John Backus**, IBM, 1957 | **First widely used high-level language**; science and engineering |
| **LISP** | John McCarthy, 1958 | **AI** |
| **COBOL** (COmmon Business Oriented Language) | 1959 (committee; **Grace Hopper** was a key influence) | **Business and banking** |
| **BASIC** | John Kemeny & Thomas Kurtz, 1964 | Easy language for beginners |
| **Pascal** | Niklaus Wirth, 1970 | Teaching structured programming |
| 🔥 **C** | **Dennis Ritchie**, **Bell Labs, 1972** | System programming; UNIX was rewritten in C. Called the "mother of languages" in guides |
| **PROLOG** | Alain Colmerauer, 1972 | **AI**, logic programming |
| **C++** | **Bjarne Stroustrup** (Bell Labs), early 1980s | C with **object-oriented** features |
| **Python** | **Guido van Rossum**, 1991 | Simple syntax; AI, data science |
| 🔥 **Java** | **James Gosling**, **Sun Microsystems**, 1995 | **"Write once, run anywhere"**; Java Virtual Machine (JVM); now owned by Oracle |
| **JavaScript** | **Brendan Eich**, Netscape, 1995 | Web page interactivity |
| **PHP** | Rasmus Lerdorf, 1995 | Server-side web programming |
| **C#** | Microsoft (Anders Hejlsberg), 2000 | .NET platform |
| **Kotlin / Swift** | JetBrains / Apple | Android / iOS apps |

- **HTML is a markup language**, not a programming language. SQL is a **query language**.

## Language translators (অনুবাদক প্রোগ্রাম) 🔥
| Translator | Converts | How |
|---|---|---|
| **Assembler** | Assembly → machine code | |
| 🔥 **Compiler** | High-level → machine code | Translates the **whole program at once**; lists all errors together; runs faster afterwards (C, C++) |
| 🔥 **Interpreter** | High-level → machine code | Translates and runs **line by line**; stops at the first error; slower (Python, BASIC) |

- **Source code:** program written by the programmer. **Object code:** output of the compiler.
- **Linker** joins object files into one executable; **loader** puts the program into memory to run.

## Errors and testing
- **Syntax error:** breaking the grammar rules of the language (found by the compiler).
- **Logical error:** program runs but gives a wrong result (hardest to find).
- **Runtime error:** error while running, e.g. division by zero.
- **Bug** = error; **debugging** = finding and removing bugs. The term was made popular by **Grace Hopper** (a moth found in the Harvard Mark II, 1947).

## Programming concepts
- **OOP (Object-Oriented Programming):** class and object; four pillars: **encapsulation, inheritance, polymorphism, abstraction**. OOP languages: C++, Java, Python, C#.
- **Structured / procedural programming:** C, Pascal.
- **Variable, constant, loop (for, while), condition (if-else), function.**

## Algorithm (অ্যালগরিদম) 🔥
- A **step-by-step, finite procedure** to solve a problem.
- The word comes from the name of the Persian mathematician **Muhammad ibn Musa al-Khwarizmi** (9th century).
- Features: clear input and output, finite steps, each step unambiguous, effective.
- **Pseudocode:** an algorithm written in plain English-like steps (not a real language).

## Flowchart (ফ্লোচার্ট) 🔥
A **diagram** of an algorithm using standard symbols.

| Symbol | Shape | Meaning |
|---|---|---|
| 🔥 **Terminal** | **Oval / ellipse** | **Start / End** |
| 🔥 **Input/Output** | **Parallelogram** | Read / print data |
| **Process** | **Rectangle** | Calculation, assignment |
| 🔥 **Decision** | **Diamond (rhombus)** | Yes/No question, condition |
| **Flow line** | **Arrow** | Direction of flow |
| **Connector** | **Small circle** | Joins parts of a flowchart |

## Quick revision
- Only language the computer understands directly: **machine language**.
- Assembly → **assembler**; high-level → **compiler/interpreter**.
- Compiler: **whole program**; interpreter: **line by line**.
- First high-level language: **FORTRAN** (John Backus).
- C: **Dennis Ritchie**; Java: **James Gosling**; Python: **Guido van Rossum**; C++: **Bjarne Stroustrup**.
- COBOL: **business**; LISP/PROLOG: **AI**.
- Flowchart: diamond = **decision**; parallelogram = **I/O**; oval = **start/end**.
- "Algorithm" comes from **al-Khwarizmi**.

## Practice MCQ
**1.** Which language does a computer understand directly without translation?
(a) Assembly language (b) Machine language (c) C (d) Python

**2.** Which translator converts a whole high-level program into machine code at once?
(a) Compiler (b) Interpreter (c) Assembler (d) Loader

**3.** Who developed the C programming language?
(a) James Gosling (b) Bjarne Stroustrup (c) Guido van Rossum (d) Dennis Ritchie

**4.** In a flowchart, which symbol is used for a decision?
(a) Rectangle (b) Parallelogram (c) Diamond (d) Oval

**5.** Which language was designed mainly for business data processing?
(a) FORTRAN (b) LISP (c) PROLOG (d) COBOL

**6.** Java was developed at:
(a) Sun Microsystems (b) Microsoft (c) Bell Labs (d) IBM

**7.** SQL belongs to which generation of languages?
(a) Second (b) Third (c) Fourth (d) First

**8.** An error in which a program runs but gives a wrong result is a:
(a) Syntax error (b) Logical error (c) Compile error (d) Linker error

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | Machine language is in 0s and 1s |
| 2 | a | Compiler translates the entire program; interpreter goes line by line |
| 3 | d | Dennis Ritchie, Bell Labs, 1972 |
| 4 | c | Diamond = yes/no decision |
| 5 | d | COBOL = Common Business Oriented Language |
| 6 | a | James Gosling at Sun Microsystems, 1995 |
| 7 | c | SQL is a 4GL |
| 8 | b | Logical errors give wrong output without crashing |
