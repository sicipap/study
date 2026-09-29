# Cyber security: malware, phishing, firewall, encryption

> **Why it matters:** Bank exams especially ask about types of malware (virus vs worm vs Trojan), phishing, ransomware, firewall, symmetric vs asymmetric encryption, and the 2016 Bangladesh Bank reserve heist.

## CIA triad (basics) 🔥
Information security protects three things:
- **Confidentiality (গোপনীয়তা):** only authorised people can see data (encryption, passwords).
- **Integrity (অখণ্ডতা):** data is not changed without permission (hashing, checksums).
- **Availability (প্রাপ্যতা):** data and systems are available when needed (backups; DDoS attacks target this).

## Malware (ম্যালওয়্যার = malicious software) 🔥🔥
| Type | Key feature |
|---|---|
| 🔥 **Virus** | Attaches to a file/program; **needs a host and human action** (opening the file) to spread |
| 🔥 **Worm** | **Self-replicating; spreads over the network by itself**, no host file needed; eats bandwidth |
| 🔥 **Trojan horse** | **Looks like useful software** but does harm; **does not replicate** |
| 🔥 **Ransomware** | **Encrypts the victim's files and demands ransom** (often in Bitcoin). Example: **WannaCry (2017)** |
| **Spyware** | Secretly **collects user information** |
| **Keylogger** | Records **keystrokes** to steal passwords |
| **Adware** | Shows unwanted advertisements |
| **Rootkit** | Hides deep in the system to give an attacker hidden control |
| **Backdoor** | Secret way into a system that skips normal login |
| **Botnet** | Network of infected computers (**bots/zombies**) controlled by an attacker; used for DDoS and spam |
| **Logic bomb** | Malicious code that runs when a **condition or date** is met |

- **First computer virus facts:** **Creeper** (1971) is called the first self-replicating program; **Brain** (1986) is called the **first PC (MS-DOS) virus**, written by two brothers in **Lahore, Pakistan**. **Elk Cloner** (1982) was the first virus found "in the wild" on Apple II. The term "computer virus" was popularised by **Fred Cohen** (1983).
- **Antivirus** examples: Norton, Kaspersky, McAfee, Avast, Bitdefender, Windows Defender (Microsoft Defender).

## Other cyber attacks 🔥
| Attack | Meaning |
|---|---|
| 🔥 **Phishing** | **Fake emails/websites** that look real, to steal passwords, card numbers or OTPs |
| **Spear phishing** | Phishing aimed at a **specific person/organisation** |
| **Vishing / Smishing** | Phishing by **voice call** / by **SMS** |
| **Pharming** | Redirecting users to a fake website (e.g. by poisoning DNS) |
| 🔥 **DoS / DDoS** | Flooding a server with traffic so it **cannot serve users**; DDoS uses many computers (botnet) |
| **Man-in-the-middle (MITM)** | Attacker secretly intercepts communication between two parties |
| **SQL injection** | Inserting malicious SQL code into a website's input form to attack its database |
| **Spoofing** | Faking an identity (IP, email, caller ID) |
| **Social engineering** | Tricking people into giving secrets |
| **Zero-day attack** | Attack on a flaw unknown to the vendor, before a patch exists |
| **Spam** | Unwanted bulk email |
| **Hacker types** | **White hat** (ethical), **black hat** (criminal), **grey hat** (in between) |

## Firewall (ফায়ারওয়াল) 🔥
- A **hardware or software security system** that **monitors and filters incoming and outgoing network traffic** according to rules.
- Stands between a **trusted internal network** and an **untrusted external network** (the internet).
- Types: **packet-filtering**, stateful inspection, **proxy (application-level) firewall**, next-generation firewall.
- **IDS** (Intrusion Detection System) detects attacks; **IPS** (Intrusion Prevention System) also blocks them.

## Cryptography and encryption 🔥
- **Encryption:** converting readable **plaintext** into unreadable **ciphertext** using a key. **Decryption** reverses it.
- **Cryptography:** the science of secret writing.

| Type | Keys | Examples |
|---|---|---|
| 🔥 **Symmetric (private/secret key)** | **One same key** to encrypt and decrypt; fast | **AES**, **DES**, 3DES |
| 🔥 **Asymmetric (public key)** | **Two keys**: **public key** (encrypts) and **private key** (decrypts) | **RSA** (Rivest, Shamir, Adleman, 1977), ECC, Diffie–Hellman (key exchange) |

- **Hashing:** one-way function giving a fixed-length value (**MD5, SHA-256**); checks integrity; stores passwords.
- **Digital signature:** made with the sender's **private key**, checked with the sender's **public key**; proves **authenticity and integrity** (non-repudiation).
- **Digital certificate:** issued by a **Certificate Authority (CA)**; binds a public key to an owner. In Bangladesh, the **CCA (Controller of Certifying Authorities)** regulates CAs under the ICT Act 2006.
- **SSL/TLS:** encrypts web traffic (HTTPS).
- **Authentication:** passwords, **OTP**, biometrics. **2FA/MFA** uses two or more factors (something you know, have, are).
- **CAPTCHA** tells humans from bots.

## Bangladesh Bank reserve heist 🔥
- In **February 2016**, hackers used the **SWIFT** network to send fake payment orders from Bangladesh Bank's account at the **Federal Reserve Bank of New York**.
- About **US$ 81 million** was stolen, most of it moved to the **Philippines** (RCBC bank) and casinos. It is widely called one of the largest cyber heists.
- Bangladesh's national computer emergency team: **BGD e-GOV CIRT** (under the ICT Division).

## Quick revision
- Virus needs a host; **worm spreads by itself**; Trojan **pretends** to be useful.
- Ransomware **encrypts files and demands money** (WannaCry, 2017).
- Phishing = **fake emails/websites** to steal data.
- DDoS attacks **availability**.
- Firewall **filters network traffic**.
- Symmetric = one key (**AES, DES**); asymmetric = public + private keys (**RSA**).
- Digital signature: signed with **private key**, verified with **public key**.
- Bangladesh Bank heist: **February 2016, about US$ 81 million, via SWIFT**.

## Practice MCQ
**1.** Which malware spreads through a network by itself without needing a host file?
(a) Virus (b) Trojan horse (c) Worm (d) Adware

**2.** A fake email that looks like it came from a bank and asks for your PIN is an example of:
(a) Phishing (b) Spamming (c) Hacking a firewall (d) Encryption

**3.** Malware that encrypts a user's files and demands payment is called:
(a) Spyware (b) Keylogger (c) Rootkit (d) Ransomware

**4.** Which is an asymmetric (public-key) encryption algorithm?
(a) AES (b) RSA (c) DES (d) 3DES

**5.** A system that monitors and filters incoming and outgoing network traffic is a:
(a) Router (b) Firewall (c) Proxy only (d) Modem

**6.** A digital signature is created with the sender's:
(a) Public key (b) Password (c) Private key (d) IP address

**7.** Which attack makes a server unavailable by flooding it with traffic from many computers?
(a) DDoS (b) Phishing (c) SQL injection (d) Spoofing

**8.** In the 2016 Bangladesh Bank reserve heist, the hackers misused which system?
(a) BEFTN (b) RTGS (c) SWIFT (d) NPSB

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | c | Worms self-replicate over networks |
| 2 | a | Phishing uses fake messages to steal secrets |
| 3 | d | Ransomware locks files for ransom |
| 4 | b | RSA uses a public and private key pair |
| 5 | b | Firewall filters traffic by rules |
| 6 | c | Signed with private key, verified with public key |
| 7 | a | Distributed Denial of Service |
| 8 | c | Fake SWIFT orders to the Federal Reserve Bank of New York |
