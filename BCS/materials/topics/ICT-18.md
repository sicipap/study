# Cloud computing, IoT, Big data

> **Why it matters:** Exams ask the three cloud service models (IaaS, PaaS, SaaS) with examples, the deployment models, who coined "Internet of Things", and the Vs of big data. These topics appear in bank IT papers and recent BCS questions.

## Cloud computing (ক্লাউড কম্পিউটিং) 🔥
- **Delivering computing services — servers, storage, databases, software — over the internet, on demand, and paying only for what you use.**
- The idea of computing as a public utility is credited to **John McCarthy** (1961), who is often called the **father of cloud computing** in exam guides.
- Big providers: **Amazon Web Services (AWS, 2006)**, **Microsoft Azure**, **Google Cloud**, IBM Cloud, Alibaba Cloud.

### Key characteristics (NIST)
**On-demand self-service**, **broad network access**, **resource pooling**, **rapid elasticity (scaling up/down)**, **measured service (pay-as-you-go)**.

### Service models 🔥🔥
| Model | Full form | What you get | Examples |
|---|---|---|---|
| 🔥 **IaaS** | Infrastructure as a Service | Virtual **hardware**: servers, storage, networks | **AWS EC2**, Google Compute Engine, Azure VMs |
| 🔥 **PaaS** | Platform as a Service | A **platform** to build and run apps (OS, runtime, database) | **Google App Engine**, Heroku, Azure App Service |
| 🔥 **SaaS** | Software as a Service | **Ready-to-use software** in a browser | **Gmail, Google Docs, Microsoft 365, Dropbox, Salesforce, Zoom** |

- User control is highest in **IaaS** and lowest in **SaaS**. Memory hook: **I**nfrastructure → **P**latform → **S**oftware (bottom to top).

### Deployment models
| Model | Meaning |
|---|---|
| **Public cloud** | Shared by the general public; run by a provider (AWS, Azure) |
| **Private cloud** | Used by **one organisation** only; more control and security |
| **Hybrid cloud** | **Mix of public and private** |
| **Community cloud** | Shared by organisations with common needs (e.g. banks, government bodies) |

- **Advantages:** lower cost, no hardware to maintain, access from anywhere, easy scaling, automatic backup. **Disadvantages:** needs internet, data privacy/security concerns, dependence on the provider.
- **Virtualization** (running many virtual machines on one physical machine) is the **core technology behind cloud**.
- **Edge / fog computing:** processing data **near the source** (device) instead of a far cloud, for low delay.
- Bangladesh: the **National Data Centre** (Tier IV) at the **Hi-Tech Park, Kaliakair, Gazipur**, run by BDCCL, hosts government cloud services.

## Internet of Things (IoT) 🔥
- A network of **physical objects ("things") with sensors, software and connectivity** that collect and exchange data over the internet **without human help**.
- 🔥 The term **"Internet of Things"** was coined by **Kevin Ashton** in **1999**.
- **Components:** **sensors/devices**, **connectivity** (Wi-Fi, Bluetooth, Zigbee, 4G/5G), **data processing (cloud)**, **user interface (app)**.
- **Examples:** **smart home** (smart bulbs, smart locks, Alexa), **smartwatches/fitness bands**, **smart city** (smart traffic lights, smart meters), **smart agriculture** (soil-moisture sensors), connected cars, health monitoring.
- **IIoT** = Industrial IoT (factories, "Industry 4.0").
- IoT is one of the key technologies of the **Fourth Industrial Revolution (4IR)**, a term popularised by **Klaus Schwab** (World Economic Forum, 2016).
- Challenges: security, privacy, power, standards.

## Big data 🔥
- **Extremely large and complex data sets** that normal database software cannot store or process easily.
- Sources: social media, sensors/IoT, online transactions, mobile phones, satellites.
- 🔥 **The 3 Vs** (Doug Laney, 2001): **Volume** (size), **Velocity** (speed of creation), **Variety** (types: structured, semi-structured, unstructured).
- Later added: **Veracity** (accuracy/trust) and **Value** → the **5 Vs**. Some books add Variability and Visualization.

| Data type | Example |
|---|---|
| **Structured** | Tables in a relational database, spreadsheets |
| **Semi-structured** | **XML, JSON**, email |
| **Unstructured** | Images, videos, audio, social media posts (**most big data is unstructured**) |

- **Tools:** 🔥 **Hadoop** (Apache, open source; created by **Doug Cutting** and Mike Cafarella; uses **HDFS** and **MapReduce**), **Apache Spark**, NoSQL databases (**MongoDB**, Cassandra).
- **Data analytics:** examining data to find patterns. **Data mining:** discovering hidden patterns. **Data science** combines statistics, programming and domain knowledge.
- Uses: fraud detection in banks, targeted advertising, weather forecasting, healthcare, traffic, e-commerce recommendations.

## Quick revision
- Cloud = computing services **over the internet, pay-as-you-go**.
- **IaaS** = infrastructure (AWS EC2); **PaaS** = platform (Google App Engine); **SaaS** = software (Gmail, Google Docs).
- Deployment: **public, private, hybrid, community**.
- Core technology of cloud: **virtualization**.
- "Internet of Things" coined by **Kevin Ashton (1999)**.
- Big data 3 Vs: **Volume, Velocity, Variety** (+ Veracity, Value).
- Big data framework: **Hadoop** (HDFS + MapReduce).
- Bangladesh National Data Centre: **Kaliakair, Gazipur** (Tier IV).

## Practice MCQ
**1.** Gmail and Google Docs are examples of:
(a) IaaS (b) PaaS (c) SaaS (d) DaaS only

**2.** Who coined the term "Internet of Things"?
(a) Kevin Ashton (b) John McCarthy (c) Tim Berners-Lee (d) Doug Cutting

**3.** Which of the following is NOT one of the original 3 Vs of big data?
(a) Volume (b) Velocity (c) Variety (d) Visibility

**4.** A cloud used by only one organisation is a:
(a) Public cloud (b) Private cloud (c) Community cloud (d) Hybrid cloud

**5.** Amazon EC2, which provides virtual servers, is an example of:
(a) IaaS (b) SaaS (c) PaaS (d) Edge computing

**6.** Hadoop is mainly used for:
(a) Word processing (b) Graphic design (c) Storing and processing big data (d) Email delivery

**7.** Which technology is the core foundation of cloud computing?
(a) Blockchain (b) Bluetooth (c) OCR (d) Virtualization

**8.** Where is Bangladesh's National Data Centre located?
(a) Jashore (b) Kaliakair, Gazipur (c) Agargaon, Dhaka (d) Mohakhali, Dhaka

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | c | Ready-to-use software in a browser = SaaS |
| 2 | a | Kevin Ashton, 1999 |
| 3 | d | Original 3 Vs: Volume, Velocity, Variety |
| 4 | b | Private cloud serves one organisation |
| 5 | a | Virtual hardware = Infrastructure as a Service |
| 6 | c | Hadoop uses HDFS and MapReduce for big data |
| 7 | d | Virtual machines let providers share hardware |
| 8 | b | Hi-Tech Park at Kaliakair, Gazipur |
