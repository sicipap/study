# Database: DBMS, SQL, keys

> **Why it matters:** A favourite of Bangladesh Bank AD/ICT and bank officer papers: primary vs foreign key, DDL vs DML commands, normalization, and the father of the relational model.

## Basic terms 🔥
| Term | Meaning |
|---|---|
| **Data** | Raw facts |
| **Information** | Processed, meaningful data |
| **Database (ডেটাবেজ)** | An **organised collection of related data** |
| 🔥 **DBMS** (Database Management System) | Software to create, store, manage and retrieve data. Examples: **MySQL, Oracle, MS SQL Server, PostgreSQL, MS Access**, SQLite |
| **Field / attribute / column** | One item of data, e.g. "Name" |
| **Record / tuple / row** | One complete set of fields, e.g. one student |
| **Table / relation / file** | A set of records |

- Hierarchy: **Bit → Byte (character) → Field → Record → File/Table → Database**.
- **Schema:** the design/structure of a database. **Instance:** data at a given moment.
- **Metadata:** data about data; kept in the **data dictionary**.
- **DBA (Database Administrator):** person who manages the database.

## Database models
| Model | Structure |
|---|---|
| **Hierarchical** | Tree (parent–child, one-to-many) |
| **Network** | Graph (many-to-many) |
| 🔥 **Relational (RDBMS)** | **Tables** (rows and columns). Proposed by **E. F. (Edgar) Codd**, IBM, **1970**. Most used today |
| **Object-oriented** | Objects with data and methods |
| **NoSQL** | Non-table data (documents, key-value): **MongoDB**, Cassandra |

- 🔥 **E. F. Codd** is the **father of the relational database**. He also gave **Codd's 12 rules**.

## Keys 🔥🔥
| Key | Meaning |
|---|---|
| 🔥 **Primary key** | Uniquely identifies **each record**; **cannot be NULL** and **cannot repeat**; only **one** per table (e.g. Student ID, NID number) |
| 🔥 **Foreign key** | A field in one table that **refers to the primary key of another table**; creates a **relationship** between tables |
| **Candidate key** | Any field (or set) that could be the primary key |
| **Alternate key** | A candidate key not chosen as the primary key |
| **Super key** | Any set of fields that uniquely identifies a record |
| **Composite key** | A key made of **two or more fields** together |
| **Unique key** | Values must be unique, but (in most systems) allows NULL |

## Relationships
**One-to-one (1:1)**, **one-to-many (1:M)** and **many-to-many (M:N)**.
- **ER diagram** (Entity–Relationship), proposed by **Peter Chen** (1976): **rectangle = entity**, **ellipse = attribute**, **diamond = relationship**.

## SQL (Structured Query Language) 🔥
SQL is the standard language for relational databases. It was developed at **IBM** in the 1970s (first called SEQUEL).

| Group | Commands |
|---|---|
| 🔥 **DDL** (Data Definition Language) – structure | **CREATE, ALTER, DROP, TRUNCATE**, RENAME |
| 🔥 **DML** (Data Manipulation Language) – data | **INSERT, UPDATE, DELETE** (and SELECT) |
| **DQL** (Data Query Language) | **SELECT** |
| **DCL** (Data Control Language) – permissions | **GRANT, REVOKE** |
| **TCL** (Transaction Control Language) | **COMMIT, ROLLBACK, SAVEPOINT** |

- Note: some books put **SELECT under DML**; others make it a separate DQL. Both are accepted.
- **DELETE** removes chosen rows (can be rolled back); **TRUNCATE** removes all rows (keeps the table); **DROP** removes the whole table.
- Useful clauses: **WHERE** (filter rows), **ORDER BY** (sort), **GROUP BY** (group), **HAVING** (filter groups), **JOIN** (combine tables), **DISTINCT** (no duplicates).
- Aggregate functions: **COUNT, SUM, AVG, MAX, MIN**.
- Example: `SELECT Name FROM Student WHERE CGPA > 3.5 ORDER BY Name;`

## Normalization and transactions
- 🔥 **Normalization:** organising tables to **reduce data redundancy (duplication)** and avoid anomalies. Forms: **1NF, 2NF, 3NF, BCNF** (Boyce–Codd).
  - 1NF: atomic (single) values; 2NF: no partial dependency; 3NF: no transitive dependency.
- 🔥 **ACID properties** of a transaction: **Atomicity, Consistency, Isolation, Durability**.
- **Data integrity:** accuracy and consistency of data. **Data redundancy:** unnecessary duplication.
- **Data warehouse:** large store of historical data for analysis; **data mining:** finding patterns in large data.

## Quick revision
- Father of relational database: **E. F. Codd (1970)**.
- Primary key: **unique, not NULL**, one per table.
- Foreign key links to **another table's primary key**.
- DDL: **CREATE, ALTER, DROP**; DML: **INSERT, UPDATE, DELETE**; DCL: **GRANT, REVOKE**; TCL: **COMMIT, ROLLBACK**.
- Normalization reduces **redundancy**.
- ACID = **Atomicity, Consistency, Isolation, Durability**.
- Row = record = tuple; column = field = attribute.

## Practice MCQ
**1.** Who proposed the relational database model?
(a) Peter Chen (b) E. F. Codd (c) Charles Bachman (d) Larry Ellison

**2.** A field that uniquely identifies each record in a table and cannot be NULL is the:
(a) Foreign key (b) Alternate key (c) Primary key (d) Composite key

**3.** Which of the following is a DDL command?
(a) CREATE (b) INSERT (c) UPDATE (d) GRANT

**4.** A key in one table that refers to the primary key of another table is a:
(a) Super key (b) Candidate key (c) Unique key (d) Foreign key

**5.** Which command gives a user permission in a database?
(a) COMMIT (b) GRANT (c) ALTER (d) SELECT

**6.** The main purpose of normalization is to:
(a) Increase redundancy (b) Encrypt data (c) Reduce data redundancy (d) Back up data

**7.** In a relational table, a row is also called a:
(a) Tuple (b) Attribute (c) Domain (d) Schema

**8.** In ACID properties, "I" stands for:
(a) Integrity (b) Indexing (c) Identity (d) Isolation

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | b | E. F. Codd, IBM, 1970 |
| 2 | c | Primary key is unique and not NULL |
| 3 | a | CREATE defines structure (DDL) |
| 4 | d | Foreign key builds relationships between tables |
| 5 | b | GRANT/REVOKE are DCL |
| 6 | c | Normalization removes duplication and anomalies |
| 7 | a | Row = record = tuple |
| 8 | d | Atomicity, Consistency, Isolation, Durability |
