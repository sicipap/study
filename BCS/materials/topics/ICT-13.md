# Internet: IP, DNS, HTTP, FTP, SMTP

> **Why it matters:** Bank IT papers love IPv4 vs IPv6 bit lengths, IP address classes, port numbers (HTTP 80, HTTPS 443, FTP 21, SMTP 25) and "what does DNS do?". The port table below is worth memorising.

## The internet (ইন্টারনেট)
- A **global network of networks** that uses the **TCP/IP** protocol suite.
- Grew out of **ARPANET (1969)**. **Vint Cerf and Bob Kahn** designed TCP/IP and are called the **fathers of the Internet**.
- **Protocol (প্রোটোকল):** a set of rules for communication between devices.
- **ISP (Internet Service Provider):** a company that gives internet access.
- **ICANN** manages domain names and IP address allocation globally.

## IP address 🔥
An **IP (Internet Protocol) address** is a **logical address** that identifies a device on a network.

| Feature | **IPv4** | **IPv6** |
|---|---|---|
| Length | 🔥 **32 bits** (4 bytes) | 🔥 **128 bits** (16 bytes) |
| Written as | 4 decimal numbers, 0–255, with dots: **192.168.1.1** | 8 groups of 4 hex digits with colons: 2001:0db8:…:7334 |
| Total addresses | 2³² (about 4.3 billion) | 2¹²⁸ (practically unlimited) |

### IPv4 classes 🔥
| Class | First octet range | Default subnet mask | Use |
|---|---|---|---|
| **A** | **1–126** | 255.0.0.0 | Very large networks |
| **B** | **128–191** | 255.255.0.0 | Medium networks |
| **C** | **192–223** | 255.255.255.0 | Small networks |
| **D** | **224–239** | – | **Multicasting** |
| **E** | **240–255** | – | **Experimental / research** |

- **127.0.0.1** is the **loopback (localhost)** address; the 127 block is reserved for loopback.
- **Private IP ranges:** 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, **192.168.0.0–192.168.255.255**.
- **Subnet mask:** separates the network part from the host part of an IP address.
- **DHCP** automatically gives IP addresses to devices. **NAT** lets many private addresses share one public address.
- **Static IP** = fixed; **dynamic IP** = changes (given by DHCP).
- **ARP** finds the **MAC address from an IP address**.

## DNS (Domain Name System) 🔥
- DNS **converts domain names into IP addresses** (e.g. www.example.com → an IP address). It is like the "phone book" of the internet.
- **Domain name parts:** in **www.bb.org.bd**, **.bd** is the **country-code top-level domain (ccTLD)** and "org" is the second-level domain.
- **Generic TLDs (gTLD):** **.com** (commercial), **.org** (organisation), **.net** (network), **.edu** (education), **.gov** (government), **.mil** (US military), **.int** (international organisations).
- **Country-code TLDs:** **.bd** Bangladesh, **.in** India, **.pk** Pakistan, **.uk** United Kingdom, **.jp** Japan, **.cn** China. Bangla-script ccTLD: **.বাংলা**.
- **URL (Uniform Resource Locator):** full address of a web resource, e.g. `https://www.example.com/index.html` → protocol + domain + path.

## Main protocols 🔥
| Protocol | Full form | Job |
|---|---|---|
| 🔥 **HTTP** | HyperText Transfer Protocol | Transfers **web pages** |
| 🔥 **HTTPS** | HTTP Secure | Secure web, encrypted with **SSL/TLS**; shows a **padlock** |
| 🔥 **FTP** | File Transfer Protocol | **Uploads/downloads files** |
| 🔥 **SMTP** | Simple Mail Transfer Protocol | **Sends** email |
| **POP3** | Post Office Protocol v3 | **Receives** email (downloads to device, usually deletes from server) |
| **IMAP** | Internet Message Access Protocol | **Receives** email; keeps it on the server and syncs devices |
| **Telnet** | – | Remote login (**not encrypted**) |
| **SSH** | Secure Shell | **Secure** remote login |
| **DHCP** | Dynamic Host Configuration Protocol | Assigns IP addresses automatically |
| **SNMP** | Simple Network Management Protocol | Monitors network devices |
| **NTP** | Network Time Protocol | Synchronises clocks |
| **VoIP** | Voice over Internet Protocol | Voice calls over the internet |

## Port numbers 🔥🔥
| Port | Service |
|---|---|
| 20, **21** | **FTP** (20 data, 21 control) |
| **22** | **SSH** |
| **23** | **Telnet** |
| **25** | **SMTP** |
| **53** | **DNS** |
| 67, 68 | DHCP (server, client) |
| **80** | 🔥 **HTTP** |
| **110** | **POP3** |
| 123 | NTP |
| **143** | **IMAP** |
| 161 | SNMP |
| **443** | 🔥 **HTTPS** |
| 3389 | RDP (Remote Desktop) |

- Port numbers range from **0 to 65535**; **0–1023** are "well-known ports".

## Quick revision
- IPv4 = **32 bits**; IPv6 = **128 bits**.
- Class C first octet: **192–223**; loopback: **127.0.0.1**.
- DNS: **domain name → IP address**.
- SMTP **sends** mail; POP3/IMAP **receive** mail.
- HTTP port **80**; HTTPS **443**; FTP **21**; SMTP **25**; DNS **53**; SSH **22**; Telnet **23**.
- DHCP assigns IPs automatically; ARP maps IP → MAC.
- ccTLD of Bangladesh: **.bd** (and .বাংলা).

## Practice MCQ
**1.** How many bits are there in an IPv6 address?
(a) 32 (b) 128 (c) 64 (d) 256

**2.** Which service translates a domain name into an IP address?
(a) DHCP (b) FTP (c) ARP (d) DNS

**3.** The default port number of HTTPS is:
(a) 80 (b) 21 (c) 443 (d) 25

**4.** Which protocol is used to send email?
(a) SMTP (b) POP3 (c) IMAP (d) HTTP

**5.** An IPv4 address whose first octet is 200 belongs to which class?
(a) Class A (b) Class B (c) Class D (d) Class C

**6.** Which protocol automatically assigns IP addresses to devices on a network?
(a) DNS (b) DHCP (c) SNMP (d) Telnet

**7.** 127.0.0.1 is known as the:
(a) Broadcast address (b) Gateway address (c) Loopback address (d) Multicast address

**8.** FTP is mainly used for:
(a) Sending email (b) Browsing web pages (c) Remote login (d) Transferring files

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | IPv6 = 128 bits; IPv4 = 32 bits |
| 2 | d | DNS is the internet's phone book |
| 3 | c | HTTPS uses port 443; HTTP uses 80 |
| 4 | a | SMTP sends; POP3/IMAP receive |
| 5 | d | Class C covers 192–223 |
| 6 | b | Dynamic Host Configuration Protocol |
| 7 | c | 127.0.0.1 = localhost |
| 8 | d | File Transfer Protocol, ports 20/21 |
