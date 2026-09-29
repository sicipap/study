# Hardware: CPU, ALU, registers

> **Why it matters:** "Brain of the computer", the parts of the CPU, the job of the ALU/CU, and register names (PC, IR, MAR, MDR, accumulator) are asked every year in bank IT and BCS papers.

## Basic structure of a computer
Every computer does four jobs: **Input → Processing → Output**, with **Storage**. The von Neumann model has: **input unit, memory unit, CPU (ALU + CU), output unit**.

- **Hardware (হার্ডওয়্যার):** the physical parts you can touch.
- **Software:** programs; **firmware** is software stored permanently in ROM (e.g. BIOS).

## CPU (Central Processing Unit) 🔥
- The CPU is called the **brain of the computer (কম্পিউটারের মস্তিষ্ক)**.
- A CPU on a single chip is a **microprocessor**. First microprocessor: **Intel 4004 (1971)**.
- 🔥 The CPU has **three main parts**:

| Part | Job |
|---|---|
| 🔥 **ALU (Arithmetic Logic Unit / গাণিতিক যুক্তি অংশ)** | Does **arithmetic** (+, −, ×, ÷) and **logical** operations (AND, OR, NOT, comparisons like >, <, =) |
| 🔥 **CU (Control Unit / নিয়ন্ত্রণ অংশ)** | **Controls and coordinates** all parts; fetches and decodes instructions; sends control signals. It does **not** process data itself |
| **Registers (রেজিস্টার)** | **Very small, fastest** temporary storage **inside the CPU** |

- The CU is sometimes called the **"manager" or "nerve centre"** of the computer.

## Registers 🔥
Registers are the **fastest memory** in a computer (faster than cache and RAM).

| Register | Job |
|---|---|
| 🔥 **Accumulator (AC)** | Holds the **intermediate results** of ALU operations |
| 🔥 **Program Counter (PC)** | Holds the **address of the next instruction** to be executed |
| **Instruction Register (IR)** | Holds the **current instruction** being decoded/executed |
| **Memory Address Register (MAR)** | Holds the **address** of the memory location to read/write |
| **Memory Data/Buffer Register (MDR/MBR)** | Holds the **data** being read from or written to memory |
| **Stack Pointer (SP)** | Points to the **top of the stack** |
| **Status / Flag register** | Shows conditions: zero, carry, sign, overflow |
| **General-purpose registers** | Temporary data (e.g. AX, BX, CX, DX in Intel x86) |

## Machine (instruction) cycle
**Fetch → Decode → Execute (→ Store)**. The time needed for one cycle is linked to the **clock speed**.
- **Fetch:** instruction brought from memory (address in PC) into IR.
- **Decode:** CU works out what the instruction means.
- **Execute:** ALU or other units carry it out.

## CPU speed and design terms
| Term | Meaning |
|---|---|
| **Clock speed** | Measured in **hertz**: MHz, **GHz** (1 GHz = 10⁹ cycles per second) |
| **MIPS** | Million Instructions Per Second |
| **Word length** | Bits the CPU processes at once: 8, 16, 32, **64-bit** |
| **Multi-core** | Two or more processors (cores) on one chip: dual-core, quad-core |
| **CISC** | Complex Instruction Set Computer (e.g. Intel x86) |
| **RISC** | Reduced Instruction Set Computer; simple, fast instructions (e.g. **ARM**, used in most smartphones) |
| **GPU** | Graphics Processing Unit: handles graphics and parallel work (also used for AI) |

## Motherboard and buses
- **Motherboard (মাদারবোর্ড):** the **main circuit board** that connects CPU, memory and all devices. Also called the system board.
- **Bus:** a set of wires that carries signals. Three types of **system bus**:
  - **Data bus** – carries data (**two-way / bidirectional**)
  - **Address bus** – carries memory addresses (**one-way**, CPU to memory)
  - **Control bus** – carries control signals
- **Chipset**, **BIOS chip**, **CMOS battery** (keeps the date/time and BIOS settings), expansion slots (PCI, PCIe) and ports (USB, HDMI) sit on the motherboard.
- **SMPS** (Switch Mode Power Supply) supplies power to the computer.
- **Heat sink / fan** cools the CPU.

## Major processor makers
- **Intel** (Core i3/i5/i7/i9), **AMD** (Ryzen), **Apple** (M-series, ARM-based), **Qualcomm** (Snapdragon, for phones).

## Quick revision
- Brain of the computer: **CPU**.
- CPU = **ALU + CU + registers**.
- Arithmetic and logic: **ALU**; controls everything: **CU**.
- Fastest memory: **registers**.
- Address of the next instruction: **Program Counter**.
- Intermediate ALU results: **Accumulator**.
- Instruction cycle: **Fetch → Decode → Execute**.
- Clock speed unit: **hertz (GHz)**.
- Address bus is one-way; data bus is two-way.

## Practice MCQ
**1.** Which part of the CPU performs arithmetic and logical operations?
(a) Control unit (b) ALU (c) Register (d) Cache

**2.** Which register holds the address of the next instruction to be executed?
(a) Program Counter (b) Accumulator (c) Instruction Register (d) MDR

**3.** Which is the fastest memory in a computer?
(a) Cache (b) RAM (c) Hard disk (d) Register

**4.** The unit that controls and coordinates all parts of the computer is the:
(a) ALU (b) Motherboard (c) Control Unit (d) SMPS

**5.** The clock speed of a CPU is measured in:
(a) Bytes (b) bps (c) GHz (d) dpi

**6.** The correct order of the machine cycle is:
(a) Decode, Fetch, Execute (b) Fetch, Decode, Execute (c) Execute, Fetch, Decode (d) Fetch, Execute, Decode

**7.** The intermediate results of ALU operations are stored in the:
(a) Stack pointer (b) MAR (c) Program Counter (d) Accumulator

**8.** Which bus is one-way, carrying locations from the CPU to memory?
(a) Address bus (b) Data bus (c) USB (d) Control bus

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | ALU = Arithmetic Logic Unit |
| 2 | a | PC always points to the next instruction |
| 3 | d | Registers are inside the CPU, fastest of all |
| 4 | c | CU fetches, decodes and sends control signals |
| 5 | c | 1 GHz = 10⁹ cycles per second |
| 6 | b | Fetch → Decode → Execute |
| 7 | d | Accumulator holds intermediate results |
| 8 | a | Address bus is unidirectional |
