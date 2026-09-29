# Wi-Fi, Bluetooth, NFC, RFID

> **Why it matters:** Exams ask the IEEE standard numbers (802.11, 802.15, 802.16), where the name "Bluetooth" comes from, the range of NFC and Bluetooth, and real-life uses of RFID. Tables below cover almost every question.

## IEEE standards 🔥
**IEEE** = Institute of Electrical and Electronics Engineers. Its **802** committee sets network standards.

| Standard | Technology |
|---|---|
| **802.3** | **Ethernet** (wired LAN) |
| 🔥 **802.11** | **Wi-Fi** (Wireless LAN / WLAN) |
| 🔥 **802.15.1** | **Bluetooth** (WPAN) |
| **802.15.4** | **Zigbee** (low-power IoT) |
| 🔥 **802.16** | **WiMAX** (Wireless MAN) |

## Wi-Fi 🔥
- **Wireless LAN** technology using **radio waves**, standard **IEEE 802.11**.
- Frequency bands: **2.4 GHz** and **5 GHz** (newer: **6 GHz**).
- Typical indoor range: about **30–50 m** (more outdoors).
- The name "Wi-Fi" is a trademark of the **Wi-Fi Alliance**. It is often expanded as "Wireless Fidelity", but the Alliance says it is not an abbreviation; exam answers accept **Wireless Fidelity**.
- **Hotspot:** a place or device giving Wi-Fi internet access. A phone can act as a **mobile hotspot** (tethering).
- **Access point / Wi-Fi router** connects wireless devices to the network. **SSID** = the network name.

| Wi-Fi generation | IEEE name |
|---|---|
| Wi-Fi 4 | 802.11n |
| Wi-Fi 5 | 802.11ac |
| **Wi-Fi 6 / 6E** | **802.11ax** |
| Wi-Fi 7 | 802.11be |

- **Wi-Fi security:** WEP (old, weak) → WPA → **WPA2** → **WPA3** (newest, strongest).
- **Li-Fi (Light Fidelity):** data through **visible light (LED)**; idea presented by **Harald Haas** (2011).

## WiMAX
- **Worldwide Interoperability for Microwave Access**, **IEEE 802.16**; a **wireless MAN**, range up to tens of km. It was used for broadband in Bangladesh (e.g. Banglalion, Qubee) before 4G LTE took over.

## Bluetooth 🔥
- **Short-range wireless** technology for a **PAN** (Personal Area Network), **IEEE 802.15.1**.
- 🔥 Named after **King Harald "Bluetooth" Gormsson**, a 10th-century **Danish king** who united Denmark and Norway. The logo joins his initials in runes.
- Developed by **Ericsson** (Sweden) in **1994** (engineer **Jaap Haartsen**). Standards now managed by the **Bluetooth SIG**.
- Frequency: **2.4 GHz** (ISM band). Common range: about **10 m** (class 2 devices); can reach about 100 m (class 1).
- A Bluetooth network of up to **8 active devices** (1 master + 7 slaves) is called a **piconet**; several piconets joined form a **scatternet**.
- Uses: wireless earbuds, speakers, keyboards, file sharing, smartwatches. **BLE** (Bluetooth Low Energy) is for fitness bands and IoT.

## NFC (Near Field Communication) 🔥
- **Very short range**: about **4 cm** (up to **10 cm**).
- Works at **13.56 MHz**; based on **RFID** technology.
- Uses: **contactless payment** (Google Pay, Apple Pay, tap-to-pay cards), metro/transport cards (e.g. Dhaka Metro Rail's **MRT Pass/Rapid Pass**), phone-to-phone pairing, smart ID cards.
- Because the range is so short, it is fairly secure for payments.

## RFID (Radio Frequency Identification) 🔥
- Identifies and tracks objects using **radio waves** and **tags**.
- Parts: **RFID tag** (chip + antenna) and **RFID reader**.
- **Passive tag:** no battery, powered by the reader's signal, short range. **Active tag:** has a battery, longer range.
- **No line of sight needed** (unlike a barcode).
- Uses: **e-passport**, **electronic toll collection**, library books, **inventory and supply chain**, animal tracking, **vehicle tracking**, access cards, anti-theft tags in shops.

## Other wireless technologies
| Technology | Fact |
|---|---|
| **Infrared (IR)** | Needs **line of sight**; **TV remote** |
| **Zigbee** | Low-power, low-data IoT/smart-home |
| **Satellite** | Very long distance |
| **Microwave** | Line of sight, tower-to-tower links |

**Range order (short → long):** NFC (cm) < Bluetooth (≈10 m) < Wi-Fi (≈50 m) < WiMAX (km).

## Quick revision
- Wi-Fi = **IEEE 802.11**; Bluetooth = **802.15.1**; WiMAX = **802.16**; Ethernet = **802.3**.
- Bluetooth is named after a **Danish king** (Harald Bluetooth); developed by **Ericsson**.
- Bluetooth range ≈ **10 m**, 2.4 GHz; network = **piconet** (8 devices).
- NFC range ≈ **4 cm**, **13.56 MHz**; contactless payment.
- RFID uses **radio waves**; no line of sight; e-passport, toll, inventory.
- Li-Fi uses **light**.
- Strongest Wi-Fi security: **WPA3**.

## Practice MCQ
**1.** Which IEEE standard is used for Wi-Fi?
(a) 802.3 (b) 802.11 (c) 802.15 (d) 802.16

**2.** Bluetooth technology is named after:
(a) A Danish king (b) A Swedish scientist (c) A blue tooth-shaped chip (d) A Finnish city

**3.** Which technology is used for contactless card payment by tapping a phone?
(a) Wi-Fi (b) Infrared (c) WiMAX (d) NFC

**4.** The typical range of NFC is about:
(a) 10 m (b) 100 m (c) 4 cm (d) 1 km

**5.** A small Bluetooth network of up to eight active devices is called a:
(a) Piconet (b) Hotspot (c) Scatternet (d) Intranet

**6.** Which technology identifies objects using radio waves and tags, without needing line of sight?
(a) Barcode (b) RFID (c) OMR (d) MICR

**7.** WiMAX is based on which IEEE standard?
(a) 802.11 (b) 802.15 (c) 802.16 (d) 802.3

**8.** A TV remote control mostly uses:
(a) Bluetooth (b) NFC (c) Wi-Fi (d) Infrared

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | IEEE 802.11 = WLAN (Wi-Fi) |
| 2 | a | King Harald "Bluetooth" of Denmark |
| 3 | d | NFC powers tap-to-pay |
| 4 | c | NFC works within about 4 cm |
| 5 | a | 1 master + 7 slaves = piconet |
| 6 | b | RFID uses radio waves, unlike line-of-sight barcodes |
| 7 | c | WiMAX = IEEE 802.16, wireless MAN |
| 8 | d | IR needs line of sight, used in remotes |
