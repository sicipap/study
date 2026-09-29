# Network devices; OSI & TCP/IP

> **Why it matters:** Bank IT papers regularly ask which OSI layer a device works at (hub, switch, router), the number of OSI layers, which layer does routing or encryption, and the layers of TCP/IP.

## Network devices 🔥
| Device | What it does | OSI layer |
|---|---|---|
| **NIC** (Network Interface Card / LAN card) | Connects a computer to a network; has a unique **MAC address** | Data link (and Physical) |
| **Repeater** | **Regenerates/amplifies** a weak signal to extend distance | **Physical (1)** |
| 🔥 **Hub** | Connects many devices; **sends data to all ports (broadcast)**; "dumb" device | **Physical (1)** |
| **Bridge** | Connects **two LAN segments**; filters by MAC address | **Data link (2)** |
| 🔥 **Switch** | Connects devices in a LAN; sends data **only to the target port** using **MAC addresses**; smarter than a hub | **Data link (2)** (layer-3 switches also exist) |
| 🔥 **Router** | Connects **different networks**; chooses the **best path**; uses **IP addresses** | **Network (3)** |
| 🔥 **Gateway** | Connects networks that use **different protocols**; protocol converter | Can work at **all layers**, often **up to the application layer (7)** |
| **Modem** (Modulator–Demodulator) | Converts **digital ↔ analog** signals (modulation/demodulation) for telephone/cable lines | Physical (1) |
| **Access point (AP)** | Connects wireless devices to a wired LAN | Data link (2) |
| **Firewall** | Filters traffic for security | Network and above |

- **MAC address:** **48-bit** physical (hardware) address, written in hexadecimal (e.g. 00:1A:2B:3C:4D:5E). **IP address:** logical address.
- **Brouter** = bridge + router.

## OSI model 🔥🔥
- **OSI = Open Systems Interconnection**, developed by **ISO** (International Organization for Standardization), **1984**.
- It has **7 layers**. Memory hook (top → bottom): **"All People Seem To Need Data Processing"**; bottom → top: **"Please Do Not Throw Sausage Pizza Away"**.

| No. | Layer | Main job | Data unit | Protocols / devices |
|---|---|---|---|---|
| 7 | 🔥 **Application** | Services to the user | Data | **HTTP, FTP, SMTP, DNS, Telnet**; gateway |
| 6 | 🔥 **Presentation** | **Translation, encryption/decryption, compression** (data format) | Data | JPEG, MPEG, SSL/TLS (often placed here), ASCII |
| 5 | **Session** | Opens, manages and closes **sessions** (dialogue control, synchronisation) | Data | NetBIOS, RPC |
| 4 | 🔥 **Transport** | **End-to-end delivery**, error control, flow control, segmentation, port numbers | **Segment** | **TCP, UDP** |
| 3 | 🔥 **Network** | **Logical (IP) addressing and routing** | **Packet** | **IP, ICMP**; **router** |
| 2 | **Data link** | **Physical (MAC) addressing**, framing, error detection | **Frame** | Ethernet, PPP; **switch, bridge**, NIC |
| 1 | **Physical** | Sends raw **bits** over the medium (cables, signals) | **Bit** | **Hub, repeater**, cables, modem |

- The data link layer has two sub-layers: **LLC** (Logical Link Control) and **MAC** (Media Access Control).
- **Encapsulation:** data → segment → packet → frame → bits as it goes down the layers.

## TCP/IP model 🔥
- The practical model **used on the internet**. Developed by **Vinton Cerf and Robert Kahn** (1970s); called the **"fathers of the Internet"**. ARPANET switched to TCP/IP on **1 January 1983**.
- It has **4 layers** (some books show **5**, splitting the lowest layer into data link + physical).

| TCP/IP layer | Matching OSI layers | Protocols |
|---|---|---|
| **Application** | Application, Presentation, Session (7, 6, 5) | HTTP, FTP, SMTP, DNS |
| **Transport** (host-to-host) | Transport (4) | TCP, UDP |
| **Internet** | Network (3) | IP, ICMP, ARP |
| **Network access / Link** | Data link + Physical (2, 1) | Ethernet, Wi-Fi |

## TCP vs UDP 🔥
| TCP (Transmission Control Protocol) | UDP (User Datagram Protocol) |
|---|---|
| **Connection-oriented** (3-way handshake: SYN, SYN-ACK, ACK) | **Connectionless** |
| **Reliable**: checks delivery and order; resends lost data | Unreliable, no guarantee |
| Slower | **Faster** |
| Web, email, file transfer | **Live video, VoIP, online games, DNS queries** |

## Quick revision
- OSI: **7 layers**, by **ISO**; TCP/IP: **4 layers**.
- Hub, repeater: **physical layer**; switch, bridge: **data link layer**; router: **network layer**.
- Router uses **IP address**; switch uses **MAC address**.
- Routing is done at the **network layer**; encryption/compression at the **presentation layer**.
- End-to-end delivery and ports: **transport layer**.
- Modem: **digital ↔ analog** conversion.
- MAC address: **48 bits**.
- TCP = reliable, connection-oriented; UDP = fast, connectionless.

## Practice MCQ
**1.** How many layers are there in the OSI model?
(a) 4 (b) 5 (c) 7 (d) 6

**2.** At which OSI layer does a router work?
(a) Data link (b) Network (c) Transport (d) Physical

**3.** Which device sends incoming data to all of its ports?
(a) Hub (b) Switch (c) Router (d) Bridge

**4.** Encryption and data compression are functions of which OSI layer?
(a) Session (b) Application (c) Transport (d) Presentation

**5.** A switch forwards frames using:
(a) IP addresses (b) Port numbers (c) MAC addresses (d) Domain names

**6.** Which device converts digital signals to analog and back?
(a) Router (b) Modem (c) Repeater (d) Hub

**7.** Which protocol is connectionless and faster, used for live video streaming?
(a) TCP (b) FTP (c) SMTP (d) UDP

**8.** Which device connects two networks that use different protocols?
(a) Gateway (b) Repeater (c) Hub (d) NIC

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | c | Physical to Application: 7 layers |
| 2 | b | Routers route packets by IP address at layer 3 |
| 3 | a | Hub broadcasts to every port |
| 4 | d | Presentation layer handles format, encryption, compression |
| 5 | c | Switch is a layer-2 device using MAC addresses |
| 6 | b | Modem = modulator + demodulator |
| 7 | d | UDP has no handshake, so it is faster |
| 8 | a | Gateway is a protocol converter |
