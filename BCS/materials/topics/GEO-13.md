# Maps, GIS & remote sensing

> **Why it matters:** Exams ask map scale (RF) sums, large- vs small-scale maps, contour and other "iso" lines, map projections, what GIS and remote sensing are, active vs passive sensors, how many GPS satellites are needed, and the roles of Survey of Bangladesh and SPARRSO.

## Maps (মানচিত্র) 🔥
- A **map** is a reduced, flat representation of all or part of Earth's surface. The art and science of map-making is **cartography (মানচিত্রবিদ্যা)**.
- **Essential elements of a map:** **title**, **scale**, **direction (north arrow)**, **legend/key**, **grid (latitude–longitude or coordinates)**, date and source.
- **Ptolemy** (2nd century CE) wrote *Geographia* with world maps using latitude and longitude. **Gerardus Mercator** (1569) made the famous Mercator projection; the word **"atlas"** for a book of maps comes from his work.

### Map scale 🔥🔥
Scale = **map distance : ground distance**. Three ways to show it:
1. **Statement scale:** "1 cm to 1 km".
2. 🔥 **Representative Fraction (RF):** e.g. **1:50,000** — 1 unit on the map = 50,000 of the same unit on the ground. It has **no unit**, so it works in any unit.
3. **Linear (graphic/bar) scale:** a marked line; still correct if the map is enlarged or reduced.

| Large-scale map | Small-scale map |
|---|---|
| Shows a **small area** in **great detail** | Shows a **large area** with **less detail** |
| RF like **1:5,000 or 1:10,000** (small denominator) | RF like **1:1,000,000** or smaller (large denominator) |
| **Cadastral maps** (land ownership, **mouza maps** in Bangladesh), town plans | **Atlas maps, wall maps, world maps** |

**Worked examples**
1. RF 1:1,00,000. How many km does 1 cm show? → 1,00,000 cm = **1 km**.
2. RF 1:50,000. Two towns are 4 cm apart on the map. Ground distance? → 4 × 50,000 = 2,00,000 cm = **2 km**.
3. RF 1:25,000. Map distance 7 cm → 7 × 25,000 = 1,75,000 cm = **1.75 km**.
4. "1 inch to 1 mile" as RF → 1 mile = 63,360 inches → **1:63,360**.

### Types of maps
| Type | Shows |
|---|---|
| **Physical / relief map** | Landforms, rivers, mountains |
| **Political map** | Countries, boundaries, capitals |
| 🔥 **Topographic map** | Detailed natural and man-made features with **contour lines** (e.g. Survey of Bangladesh sheets) |
| 🔥 **Cadastral map** | **Land plots and ownership** (mouza maps) — the **largest scale** |
| **Thematic map** | One theme: population, rainfall, soil. Sub-types: **choropleth** (areas shaded by value), **dot map**, **isopleth** (lines of equal value) |

### Isolines 🔥
| Line joining places of equal… | Name |
|---|---|
| 🔥 **Height (elevation)** | **Contour line** (close together = steep slope; far apart = gentle slope) |
| **Air pressure** | **Isobar** |
| **Temperature** | **Isotherm** |
| 🔥 **Rainfall** | **Isohyet** |
| **Sea depth** | **Isobath** |
| **Salinity** | **Isohaline** |
| **Earthquake intensity** | **Isoseismal line** |
| **Sunshine** | Isohel |

### Map projections
- A **projection** is a method of showing the curved Earth on a flat surface; **every projection distorts** something (area, shape, distance or direction).
- 🔥 **Mercator (cylindrical) projection:** directions are correct, so it is used for **sea navigation**; **areas near the poles look far too large** (Greenland looks as big as Africa).
- **Conical projection:** good for **mid-latitude** countries. **Zenithal/azimuthal projection:** good for **polar** areas.

- 🔥 **Survey of Bangladesh (SOB):** the **national mapping agency**, under the **Ministry of Defence**; headquarters **Tejgaon, Dhaka**; prepares topographic maps.

## GIS (Geographic Information System) 🔥
- A computer system to **capture, store, analyse, manage and display spatial (location-based) data**.
- 🔥 **Roger Tomlinson** is called the **father of GIS** (Canada Geographic Information System, 1960s).
- **Five components:** **hardware, software, data, people, methods**.
- 🔥 **Data models:** **Vector** — **points** (wells, schools), **lines** (roads, rivers), **polygons** (districts, lakes). **Raster** — a **grid of cells (pixels)**, e.g. satellite images, elevation.
- **Layers and overlay:** different themes (roads, rivers, soil) stacked and combined for analysis.
- **Software:** **ArcGIS** (Esri), **QGIS** (free, open source), Google Earth (viewer).
- **Uses:** urban planning, disaster risk mapping, flood modelling, agriculture, utility networks, census mapping, election constituency maps, crime mapping.

## GPS and GNSS 🔥
- **GPS (Global Positioning System):** satellite navigation system of the **USA** (Department of Defense).
- About **24 or more satellites** (about 31 operational) in **medium Earth orbit** about **20,200 km** high.
- 🔥 A receiver needs signals from at least **4 satellites** for an accurate **3-D position** (latitude, longitude, height) and time; **3** give a 2-D position. The method is **trilateration**.
- **GNSS** (Global Navigation Satellite System) is the general term: **GPS** (USA), **GLONASS** (Russia), **Galileo** (EU), **BeiDou** (China); regional: **NavIC** (India), **QZSS** (Japan).

## Remote sensing (দূর অনুধাবন) 🔥
- 🔥 Getting information about objects or areas **from a distance, without physical contact** — usually by sensors on **satellites or aircraft (and drones)** that record **electromagnetic radiation**.
- **Passive remote sensing:** records **natural energy** (mostly **reflected sunlight**) — optical and thermal cameras; needs daylight and clear skies.
- 🔥 **Active remote sensing:** the sensor **sends its own energy** and records what returns — **RADAR, SAR, LiDAR**; works **day and night and through clouds**.
- **Resolution types:** **spatial** (size of a pixel on the ground), **spectral** (number of wavebands), **temporal** (how often the same place is imaged), **radiometric** (sensitivity to brightness levels).
- **False colour composite:** healthy **vegetation looks red** because plants strongly reflect **near-infrared** light. **NDVI** is a common vegetation index.
- **Aerial photographs** viewed in pairs with a **stereoscope** give a **3-D** view.

| Satellite / programme | Country / fact |
|---|---|
| 🔥 **Landsat** | **USA**; first launched **1972** (ERTS-1); longest-running Earth-observation series |
| **Sentinel** (Copernicus programme) | **European Union / ESA** |
| **SPOT** | France |
| **IRS / Resourcesat** | India |
| **Himawari** | Japan — geostationary **weather** satellite (images used by BMD) |
| **MODIS** (on Terra and Aqua) | NASA — daily images, fires, floods |

- 🔥 **SPARRSO** (**Space Research and Remote Sensing Organization**), Bangladesh: uses satellite data for **cyclone and flood monitoring, crop estimation**, forestry and coastal studies.
- **Uses of remote sensing:** weather forecasting, **cyclone tracking**, flood and river-erosion mapping, land-use change, crop monitoring, deforestation, sea-surface temperature, mapping the Sundarbans.

## Quick revision
- Map elements: **title, scale, direction, legend, grid**.
- RF **1:1,00,000** → 1 cm = **1 km**; "1 inch to 1 mile" = **1:63,360**.
- **Large scale = small area, more detail** (cadastral/mouza maps).
- Contour = equal **height**; isohyet = **rainfall**; isobar = **pressure**; isobath = **depth**.
- Mercator = **navigation**, distorts area near poles.
- Father of GIS: **Roger Tomlinson**; vector = point, line, polygon; raster = pixels.
- GPS: USA, needs **4 satellites** for 3-D position.
- Active sensors (**RADAR, LiDAR**) work through clouds and at night.
- Mapping agency: **Survey of Bangladesh**; remote sensing agency: **SPARRSO**.

## Practice MCQ
**1.** On a map with RF 1:50,000, two places are 4 cm apart. What is the actual distance?
(a) 20 km (b) 0.2 km (c) 2 km (d) 200 km

**2.** A line joining places of equal rainfall is called an:
(a) Isohyet (b) Isobar (c) Isotherm (d) Isobath

**3.** Which map shows a small area in great detail?
(a) World map (b) Large-scale map (c) Atlas map (d) Small-scale map

**4.** Who is known as the father of GIS?
(a) Gerardus Mercator (b) Ptolemy (c) Alfred Wegener (d) Roger Tomlinson

**5.** In GIS, a road is usually stored in vector form as a:
(a) Point (b) Polygon (c) Line (d) Pixel

**6.** Which remote sensing system sends its own energy and can see through clouds?
(a) RADAR (b) Ordinary optical camera (c) Human eye (d) Thermal camera using sunlight

**7.** At least how many GPS satellites are needed for an accurate 3-D position?
(a) 2 (b) 3 (c) 6 (d) 4

**8.** The national mapping agency of Bangladesh is the:
(a) SPARRSO (b) Survey of Bangladesh (c) BMD (d) BBS

## Answer key
| Q | Ans | Explanation |
|---|---|---|
| 1 | c | 4 × 50,000 = 2,00,000 cm = 2 km |
| 2 | a | Isohyet = equal rainfall |
| 3 | b | Large scale = small area, more detail |
| 4 | d | Roger Tomlinson, Canada GIS, 1960s |
| 5 | c | Roads and rivers are lines; districts are polygons |
| 6 | a | RADAR is an active sensor |
| 7 | d | Four satellites fix latitude, longitude, height and time |
| 8 | b | SOB, under the Ministry of Defence |
