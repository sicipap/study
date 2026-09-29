# Memory: RAM, ROM, cache, storage units

> **Why it matters:** Volatile vs non-volatile, types of ROM, the memory hierarchy and storage-unit conversions (1 KB = 1024 bytes, nibble, byte) are among the most repeated ICT questions.

## Main types of memory
| Type | Also called | Features |
|---|---|---|
| **Primary memory (প্রধান মেমোরি)** | Main memory | Directly used by the CPU; RAM, ROM, cache |
| **Secondary memory (সহায়ক মেমোরি)** | Auxiliary storage | Permanent, large, slower: HDD, SSD, CD/DVD, pen drive |

## RAM (Random Access Memory) 🔥
- **Volatile (অস্থায়ী):** data is **lost when power is off**.
- Read **and** write memory. Holds programs and data **currently in use**.
- Called **main memory** or working memory.

| RAM type | Features |
|---|---|
| 🔥 **SRAM (Static RAM)** | Uses **flip-flops**; **faster**, costly; **no refresh** needed; used for **cache** |
| 🔥 **DRAM (Dynamic RAM)** | Uses **capacitors**; must be **refreshed** constantly; cheaper; used as **main memory** |
| **SDRAM / DDR SDRAM** | Synchronised with the clock; DDR, DDR2, DDR3, DDR4, **DDR5** |

## ROM (Read Only Memory) 🔥
- **Non-volatile (স্থায়ী):** data stays when power is off.
- Normally **read only**. Stores **firmware** such as the **BIOS** (Basic Input Output System) that starts the computer (**booting**).

| ROM type | Full form | Features |
|---|---|---|
| **MROM** | Mask ROM | Written at the factory; cannot be changed |
| **PROM** | Programmable ROM | Can be written **once** by the user |
| 🔥 **EPROM** | Erasable PROM | Erased with **ultraviolet (UV) light** |
| 🔥 **EEPROM** | Electrically Erasable PROM | Erased **electrically**; **flash memory** is a type of EEPROM |

## Cache memory 🔥
- A small, **very fast** memory (made of **SRAM**) **between the CPU and RAM**.
- Keeps frequently used data so the CPU does not wait for slower RAM.
- Levels: **L1** (smallest, fastest, inside the core), **L2**, **L3** (larger, shared).

## Memory hierarchy (fastest → slowest) 🔥
**Registers → Cache → RAM (main memory) → SSD/Hard disk → Optical disk/Tape**
- Going down: **speed falls, capacity rises, cost per bit falls**.
- **Virtual memory:** part of the hard disk used as if it were RAM when RAM is full.

## Secondary storage devices
| Device | Type / notes |
|---|---|
| **Hard disk (HDD)** | **Magnetic**; platters, tracks and sectors; speed in RPM |
| **SSD** (Solid State Drive) | **Flash memory**, no moving parts; faster than HDD |
| **CD** (Compact Disc) | **Optical**; about **700 MB** |
| **DVD** (Digital Versatile Disc) | Optical; **4.7 GB** single layer |
| **Blu-ray** | Optical, **blue-violet laser**; **25 GB** per layer |
| **Pen drive / memory card** | Flash memory |
| **Magnetic tape** | **Sequential access**; used for backup |
| **Floppy disk** | Magnetic; old 3.5-inch disk held **1.44 MB** |

- HDD, RAM = **random/direct access**; tape = **sequential access**.

## Storage units 🔥🔥
| Unit | Equals |
|---|---|
| **Bit** (binary digit) | Smallest unit: **0 or 1** |
| **Nibble** | **4 bits** |
| 🔥 **Byte** | **8 bits** (one character in ASCII) |
| **Kilobyte (KB)** | **1024 bytes** (2¹⁰) |
| **Megabyte (MB)** | 1024 KB (2²⁰ bytes) |
| **Gigabyte (GB)** | 1024 MB (2³⁰ bytes) |
| **Terabyte (TB)** | 1024 GB (2⁴⁰ bytes) |
| **Petabyte (PB)** | 1024 TB (2⁵⁰ bytes) |
| **Exabyte (EB)** | 1024 PB (2⁶⁰ bytes) |
| **Zettabyte (ZB)** | 1024 EB (2⁷⁰ bytes) |
| **Yottabyte (YB)** | 1024 ZB (2⁸⁰ bytes) |

- **Order:** Bit < Nibble < Byte < KB < MB < GB < TB < PB < EB < ZB < YB. (*Memory hook: "Kind Men Give Their Poor Employees Zero Yield"*)
- **Word:** the number of bits a CPU handles at once (16, 32, 64 bits).
- Note: hard-disk makers use decimal units (1 KB = 1000 bytes); in exams, **1 KB = 1024 bytes** unless the question says otherwise. The strict binary names are KiB, MiB, GiB.

**Worked examples**
- 1 KB = 1024 × 8 = **8192 bits**.
- 2 MB = 2 × 1024 = **2048 KB**.
- 1 GB = 1024 × 1024 = **1,048,576 KB**.

## Quick revision
- RAM is **volatile**; ROM is **non-volatile**.
- BIOS is stored in **ROM**.
- EPROM is erased by **UV light**; EEPROM **electrically**.
- Cache is made of **SRAM**; main memory of **DRAM**.
- DRAM needs **refreshing**.
- Hierarchy: **Register > Cache > RAM > Secondary**.
- 1 nibble = **4 bits**; 1 byte = **8 bits**; 1 KB = **1024 bytes**.
- Magnetic tape = **sequential access**.

## Practice MCQ
**1.** Which memory loses its data when the power is switched off?
(a) ROM (b) Hard disk (c) RAM (d) EPROM

**2.** How many bits make one nibble?
(a) 4 (b) 8 (c) 2 (d) 16

**3.** EPROM is erased by using:
(a) Electric pulse (b) Magnetic field (c) Heat (d) Ultraviolet light

**4.** Cache memory is placed between:
(a) RAM and hard disk (b) CPU and RAM (c) Hard disk and monitor (d) Keyboard and CPU

**5.** 1 kilobyte equals:
(a) 1000 bits (b) 1024 bits (c) 1024 bytes (d) 1000 bytes only

**6.** Which RAM must be refreshed repeatedly?
(a) SRAM (b) Cache (c) Register (d) DRAM

**7.** Which of the following is the largest unit?
(a) Terabyte (b) Petabyte (c) Gigabyte (d) Megabyte

**8.** Which storage device uses sequential access?
(a) Magnetic tape (b) Hard disk (c) RAM (d) SSD

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | c | RAM is volatile |
| 2 | a | Nibble = 4 bits, half a byte |
| 3 | d | EPROM: UV light; EEPROM: electricity |
| 4 | b | Cache sits between CPU and main memory |
| 5 | c | 1 KB = 2¹⁰ = 1024 bytes |
| 6 | d | DRAM stores bits in capacitors that leak |
| 7 | b | PB = 1024 TB |
| 8 | a | Tape is read in order |
