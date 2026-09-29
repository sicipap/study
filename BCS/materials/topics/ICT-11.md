# Networks: LAN/MAN/WAN, topologies

> **Why it matters:** Exams ask the types of networks by area, the features of each topology (which one uses a hub, which fails if one cable breaks), mesh link formula, and simplex/half/full duplex examples.

## Computer network basics
- A **computer network (কম্পিউটার নেটওয়ার্ক)** is two or more computers connected to **share data and resources** (printers, internet, files).
- The first network was **ARPANET (1969)**, a US Department of Defense project; it became the base of the internet.
- **Node:** any device on the network. **Host:** a computer on the network. **Server:** gives services; **client:** uses them.
- **Client–server network:** a central server serves many clients. **Peer-to-peer (P2P):** every computer is equal.

## Types of networks by area 🔥
| Type | Full form | Area | Example |
|---|---|---|---|
| **PAN** | Personal Area Network | About **10 m**, one person | Bluetooth between phone and earbuds |
| 🔥 **LAN** | Local Area Network | Room, **building, campus** (up to about 1 km) | Office, school lab; uses **Ethernet**, **Wi-Fi (WLAN)** |
| **CAN** | Campus Area Network | A university or company campus | |
| 🔥 **MAN** | Metropolitan Area Network | A **city** (up to about 50–100 km) | City cable TV network, a bank's branches in one city |
| 🔥 **WAN** | Wide Area Network | **Country or world** | **The Internet** (largest WAN), bank networks across countries |

- **Order of size:** PAN < LAN < MAN < WAN.
- LAN has the **highest speed and lowest error rate**; WAN is slowest and costliest to build.
- **Intranet:** a private network inside an organisation. **Extranet:** an intranet opened to selected outsiders (partners). **Internet:** public network of networks.
- **VPN (Virtual Private Network):** a secure, encrypted "tunnel" over the public internet.

## Network topology (নেটওয়ার্ক টপোলজি) 🔥🔥
Topology is the **physical or logical layout** of how devices are connected.

| Topology | Layout | Advantages | Disadvantages |
|---|---|---|---|
| 🔥 **Bus** | All devices on **one main cable (backbone)** with **terminators** at both ends | Cheap, easy, least cable | If the **backbone breaks, the whole network fails**; collisions |
| 🔥 **Star** | Every device connected to a **central hub or switch** | Easy to add devices and find faults; one cable failure affects one device | If the **hub/switch fails, the whole network stops**; more cable. **Most common in LANs** |
| 🔥 **Ring** | Each device connected to two neighbours in a **closed loop**; data goes in one direction; uses a **token** (Token Ring) | No collisions | **One node or link failure can break the ring** |
| 🔥 **Mesh** | **Every device connected to every other device** | Most reliable, fault tolerant, secure | Most cable, costliest. Links needed = **n(n−1)/2** |
| **Tree** (hierarchical) | Star networks joined to a bus-like backbone | Expandable | Depends on the root/backbone |
| **Hybrid** | Mix of two or more topologies | Flexible | Complex |

**Worked example (mesh):** 6 computers in a full mesh need 6 × 5 ÷ 2 = **15 links**. Each device needs **n − 1 = 5 ports**.

## Data transmission modes 🔥
| Mode | Direction | Example |
|---|---|---|
| **Simplex** | **One way only** | **Radio/TV broadcast**, keyboard to computer |
| **Half-duplex** | Both ways, but **one at a time** | **Walkie-talkie** |
| **Full-duplex** | **Both ways at the same time** | **Telephone / mobile call** |

- **Serial transmission:** one bit at a time over one line (USB). **Parallel:** many bits at once over many lines.
- **Synchronous** (with a clock signal, blocks of data) vs **asynchronous** (start and stop bits, one character at a time).

## Transmission media
| Guided (wired) | Unguided (wireless) |
|---|---|
| **Twisted-pair cable** (telephone, Ethernet LAN: Cat5e/Cat6) | **Radio waves** (Wi-Fi, radio) |
| **Coaxial cable** (cable TV) | **Microwave** (line of sight) |
| 🔥 **Optical fibre** (fastest, uses **light**, no electromagnetic interference) | **Infrared** (TV remote), **satellite** |

- **Bandwidth:** the amount of data carried per second, measured in **bps** (bits per second): Kbps, Mbps, Gbps.
- **Baud rate:** number of signal changes per second.

## Quick revision
- Largest WAN: **the Internet**; first network: **ARPANET (1969)**.
- LAN = building/campus; MAN = city; WAN = country/world; PAN = about 10 m.
- Star uses a **central hub/switch**; most common in LANs.
- Bus fails if the **backbone** breaks; needs **terminators**.
- Ring uses a **token**; mesh is most reliable.
- Mesh links = **n(n−1)/2**.
- Simplex = radio/TV; half-duplex = **walkie-talkie**; full-duplex = **telephone**.
- Data speed unit: **bps**.

## Practice MCQ
**1.** A network that covers a city is called a:
(a) LAN (b) PAN (c) MAN (d) CAN

**2.** In which topology are all computers connected to a central hub or switch?
(a) Star (b) Bus (c) Ring (d) Mesh

**3.** How many links are needed to connect 6 computers in a full mesh topology?
(a) 30 (b) 12 (c) 36 (d) 15

**4.** A walkie-talkie is an example of which transmission mode?
(a) Simplex (b) Half-duplex (c) Full-duplex (d) Parallel

**5.** Which topology uses a single backbone cable with terminators at both ends?
(a) Star (b) Mesh (c) Bus (d) Tree

**6.** The largest WAN in the world is:
(a) Intranet (b) The Internet (c) ARPANET (d) Ethernet

**7.** Which topology is the most reliable but needs the most cable?
(a) Bus (b) Star (c) Ring (d) Mesh

**8.** Data transfer speed in a network is measured in:
(a) bps (b) dpi (c) rpm (d) ppm

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | c | MAN = Metropolitan Area Network |
| 2 | a | Star has a central hub/switch |
| 3 | d | 6 × 5 ÷ 2 = 15 |
| 4 | b | Both ways but one at a time |
| 5 | c | Bus uses one backbone cable |
| 6 | b | The Internet is a global network of networks |
| 7 | d | Every device links to every other device |
| 8 | a | bps = bits per second |
