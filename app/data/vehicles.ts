import { Vehicle } from "../types/vehicle";

const vehicle1: Vehicle = {
  description: {
    model: "A6 Avant e-tron performance",
    make: "Audi",
    description:
      "Audi A6 Avant e-tron performance mit einer Reichweite von 565 km und einer Ladegeschwindigkeit von 1130 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2272/Audi-A6-Avant-e-tron-performance",
    ],
  },
  attributes: {
    range: 565.0,
    chargingTime: 1130.0,
    price: 84350.0,
    motorPower: 280.0,
    weight: 2260.0,
    efficiency: 168.0,
    seats: 5,
    trunkVolume: 502.0,
    bodyType: "Kombi",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 5.4,
    dimensions: { length: 4928.0, width: 2137.0, height: 1455.0 },
  },
};

const vehicle2: Vehicle = {
  description: {
    model: "Q4 e-tron 45",
    make: "Audi",
    description:
      "Audi Q4 e-tron 45 mit einer Reichweite von 420 km und einer Ladegeschwindigkeit von 630 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2013/Audi-Q4-e-tron-45"],
  },
  attributes: {
    range: 420.0,
    chargingTime: 630.0,
    price: 58600.0,
    motorPower: 210.0,
    weight: 2145.0,
    efficiency: 183.0,
    seats: 5,
    trunkVolume: 520.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 6.7,
    dimensions: { length: 4588.0, width: 2108.0, height: 1632.0 },
  },
};

const vehicle3: Vehicle = {
  description: {
    model: "iX xDrive 40",
    make: "BMW",
    description:
      "BMW iX xDrive 40 mit einer Reichweite von 360 km und einer Ladegeschwindigkeit von 480 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1472/BMW-iX-xDrive-40"],
  },
  attributes: {
    range: 360.0,
    chargingTime: 480.0,
    price: 96300.0,
    motorPower: 240.0,
    weight: 2440.0,
    efficiency: 197.0,
    seats: 5,
    trunkVolume: 500.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Allradantrieb",
    acceleration: 6.1,
    dimensions: { length: 4953.0, width: 2230.0, height: 1695.0 },
  },
};

const vehicle4: Vehicle = {
  description: {
    model: "i5 eDrive40 Touring",
    make: "BMW",
    description:
      "BMW i5 eDrive40 Touring mit einer Reichweite von 455 km und einer Ladegeschwindigkeit von 730 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2114/BMW-i5-eDrive40-Touring",
    ],
  },
  attributes: {
    range: 455.0,
    chargingTime: 730.0,
    price: 82300.0,
    motorPower: 250.0,
    weight: 2255.0,
    efficiency: 178.0,
    seats: 5,
    trunkVolume: 570.0,
    bodyType: "Kombi",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 6.1,
    dimensions: { length: 5060.0, width: 2156.0, height: 1515.0 },
  },
};

const vehicle5: Vehicle = {
  description: {
    model: "e-C3",
    make: "Citroen",
    description:
      "Citroen e-C3 mit einer Reichweite von 260 km und einer Ladegeschwindigkeit von 340 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2039/Citroen-e-C3"],
  },
  attributes: {
    range: 260.0,
    chargingTime: 340.0,
    price: 24990.0,
    motorPower: 83.0,
    weight: 1491.0,
    efficiency: 169.0,
    seats: 5,
    trunkVolume: 310.0,
    bodyType: "Kombi",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 11.5,
    dimensions: { length: 4015.0, width: 1813.0, height: 1577.0 },
  },
};

const vehicle6: Vehicle = {
  description: {
    model: "Born VZ",
    make: "CUPRA",
    description:
      "CUPRA Born VZ mit einer Reichweite von 465 km und einer Ladegeschwindigkeit von 750 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2128/CUPRA-Born-VZ#google_vignette",
    ],
  },
  attributes: {
    range: 465.0,
    chargingTime: 750.0,
    price: 41700.0,
    motorPower: 240.0,
    weight: 1999.0,
    efficiency: 170.0,
    seats: 5,
    trunkVolume: 385.0,
    bodyType: "Kombi",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 5.6,
    dimensions: { length: 4322.0, width: 2070.0, height: 1538.0 },
  },
};

const vehicle7: Vehicle = {
  description: {
    model: "Spring Electric 45",
    make: "Dacia",
    description:
      "Dacia Spring Electric 45 mit einer Reichweite von 165 km und einer Ladegeschwindigkeit von 180 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2126/Dacia-Spring-Electric-45",
    ],
  },
  attributes: {
    range: 165.0,
    chargingTime: 180.0,
    price: 15000.0,
    motorPower: 33.0,
    weight: 1020.0,
    efficiency: 152.0,
    seats: 4,
    trunkVolume: 308.0,
    bodyType: "Kombi",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 19.1,
    dimensions: { length: 3700.0, width: 1770.0, height: 1516.0 },
  },
};

const vehicle8: Vehicle = {
  description: {
    model: "Grande Panda",
    make: "Fiat",
    description:
      "Fiat Grande Panda mit einer Reichweite von 260 km und einer Ladegeschwindigkeit von 340 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2251/Fiat-Grande-Panda"],
  },
  attributes: {
    range: 260.0,
    chargingTime: 340.0,
    price: 35000.0,
    motorPower: 83.0,
    weight: 1511.0,
    efficiency: 168.0,
    seats: 5,
    trunkVolume: 361.0,
    bodyType: "Kombi",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 11.0,
    dimensions: { length: 3999.0, width: 2017.0, height: 1570.0 },
  },
};

const vehicle9: Vehicle = {
  description: {
    model: "500 Limousine 42kWh",
    make: "Fiat",
    description:
      "Fiat 500 Limousine 42kWh mit einer Reichweite von 235 km und einer Ladegeschwindigkeit von 390 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1285/Fiat-500-Limousine-42kWh",
    ],
  },
  attributes: {
    range: 235.0,
    chargingTime: 390.0,
    price: 29490.0,
    motorPower: 87.0,
    weight: 1365.0,
    efficiency: 159.0,
    seats: 4,
    trunkVolume: 185.0,
    bodyType: "Kombi",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 9.0,
    dimensions: { length: 3631.0, width: 1900.0, height: 1529.0 },
  },
};

const vehicle10: Vehicle = {
  description: {
    model: "Capri Extended Range AWD",
    make: "Ford",
    description:
      "Ford Capri Extended Range AWD mit einer Reichweite von 445 km und einer Ladegeschwindigkeit von 710 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2242/Ford-Capri-Extended-Range-AWD",
    ],
  },
  attributes: {
    range: 445.0,
    chargingTime: 710.0,
    price: 54007.0,
    motorPower: 250.0,
    weight: 2174.0,
    efficiency: 178.0,
    seats: 5,
    trunkVolume: 572.0,
    bodyType: "Limousine",
    equipment: "Standard",
    driveType: "Allradantrieb",
    acceleration: 5.3,
    dimensions: { length: 4643.0, width: 2063.0, height: 1626.0 },
  },
};

const vehicle11: Vehicle = {
  description: {
    model: "Explorer Extended Range AWD",
    make: "Ford",
    description:
      "Ford Explorer Extended Range AWD mit einer Reichweite von 430 km und einer Ladegeschwindigkeit von 690 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2169/Ford-Explorer-Extended-Range-AWD",
    ],
  },
  attributes: {
    range: 430.0,
    chargingTime: 690.0,
    price: 48371.0,
    motorPower: 250.0,
    weight: 2267.0,
    efficiency: 184.0,
    seats: 5,
    trunkVolume: 536.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Allradantrieb",
    acceleration: 5.3,
    dimensions: { length: 4468.0, width: 2063.0, height: 1639.0 },
  },
};

const vehicle12: Vehicle = {
  description: {
    model: "INSTER Long Range",
    make: "Hyundai",
    description:
      "Hyundai INSTER Long Range mit einer Reichweite von 295 km und einer Ladegeschwindigkeit von 420 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2231/Hyundai-INSTER-Long-Range",
    ],
  },
  attributes: {
    range: 295.0,
    chargingTime: 420.0,
    price: 23990.0,
    motorPower: 85.0,
    weight: 1418.0,
    efficiency: 156.0,
    seats: 4,
    trunkVolume: 280.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 10.6,
    dimensions: { length: 3825.0, width: 1610.0, height: 1575.0 },
  },
};

const vehicle13: Vehicle = {
  description: {
    model: "IONIQ 5 84 kWh",
    make: "Hyundai",
    description:
      "Hyundai IONIQ 5 84 kWh mit einer Reichweite von 450 km und einer Ladegeschwindigkeit von 1110 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2236/Hyundai-IONIQ-5-84-kWh"],
  },
  attributes: {
    range: 450.0,
    chargingTime: 1110.0,
    price: 49900.0,
    motorPower: 168.0,
    weight: 2060.0,
    efficiency: 178.0,
    seats: 5,
    trunkVolume: 520.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 7.5,
    dimensions: { length: 4655.0, width: 2152.0, height: 1605.0 },
  },
};

const vehicle14: Vehicle = {
  description: {
    model: "e-208",
    make: "Peugeot",
    description:
      "Peugeot e-208 mit einer Reichweite von 340 km und einer Ladegeschwindigkeit von 470 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1965/Peugeot-e-208"],
  },
  attributes: {
    range: 340.0,
    chargingTime: 470.0,
    price: 33500.0,
    motorPower: 136.0,
    weight: 1620.0,
    efficiency: 156.0,
    seats: 5,
    trunkVolume: 311.0,
    bodyType: "Kombi",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 8.1,
    dimensions: { length: 4055.0, width: 1745.0, height: 1450.0 },
  },
};

const vehicle15: Vehicle = {
  description: {
    model: "EV3 81.4 kWh",
    make: "Kia",
    description:
      "Kia EV3 81,4 kWh mit einer Reichweite von 455 km und einer Ladegeschwindigkeit von 570 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2212/Kia-EV3-814-kWh"],
  },
  attributes: {
    range: 455.0,
    chargingSpeed: 570.0,
    price: 36950.0,
    motorPower: 150.0,
    weight: 1885.0,
    efficiency: 171.0,
    seats: 5,
    trunkVolume: 460.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 7.7,
    dimensions: { length: 4300.0, width: 1850.0, height: 1850.0 },
  },
};

const vehicle16: Vehicle = {
  description: {
    model: "EV9 99.8 kWh RWD",
    make: "Kia",
    description:
      "Kia EV9 99,8 kWh RWD mit einer Reichweite von 450 km und einer Ladegeschwindigkeit von 850 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1834/Kia-EV9-998-kWh-RWD"],
  },
  attributes: {
    range: 450.0,
    chargingSpeed: 850.0,
    price: 64950.0,
    motorPower: 150.0,
    weight: 2501.0,
    efficiency: 213.0,
    seats: 7,
    trunkVolume: 333.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 9.4,
    dimensions: { length: 5010.0, width: 2263.0, height: 1755.0 },
  },
};

const vehicle17: Vehicle = {
  description: {
    model: "T03",
    make: "Leapmotor",
    description:
      "Leapmotor T03 mit einer Reichweite von 230 km und einer Ladegeschwindigkeit von 180 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/3039/Leapmotor-T03"],
  },
  attributes: {
    range: 230.0,
    chargingSpeed: 180.0,
    price: 16990.0,
    motorPower: 70.0,
    weight: 1175.0,
    efficiency: 157.0,
    seats: 4,
    trunkVolume: 210.0,
    bodyType: "Kompaktwagen",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 12.7,
    dimensions: { length: 3620.0, width: 1652.0, height: 1577.0 },
  },
};

const vehicle18: Vehicle = {
  description: {
    model: "C10",
    make: "Leapmotor",
    description:
      "Leapmotor C10 mit einer Reichweite von 355 km und einer Ladegeschwindigkeit von 330 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/3040/Leapmotor-C10"],
  },
  attributes: {
    range: 355.0,
    chargingSpeed: 330.0,
    price: 35900.0,
    motorPower: 160.0,
    weight: 1980.0,
    efficiency: 197.0,
    seats: 5,
    trunkVolume: 435.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 7.5,
    dimensions: { length: 4739.0, width: 1900.0, height: 1680.0 },
  },
};

const vehicle19: Vehicle = {
  description: {
    model: "Air Grand Touring",
    make: "Lucid",
    description:
      "Lucid Air Grand Touring mit einer Reichweite von 665 km und einer Ladegeschwindigkeit von 1030 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1316/Lucid-Air-Grand-Touring",
    ],
  },
  attributes: {
    range: 665.0,
    chargingSpeed: 1030.0,
    price: 91000.0,
    motorPower: 597.0,
    weight: 2435.0,
    efficiency: 168.0,
    seats: 5,
    trunkVolume: 456.0,
    bodyType: "Limousine",
    equipment: "Standard",
    driveType: "Allradantrieb",
    acceleration: 3.0,
    dimensions: { length: 4975.0, width: 2198.0, height: 1410.0 },
  },
};

const vehicle20: Vehicle = {
  description: {
    model: "Model Y Long Range",
    make: "Tesla",
    description:
      "Tesla Model Y Long Range mit einer Reichweite von 533 km und einer Ladegeschwindigkeit von 850 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1445/Tesla-Model-Y-Long-Range",
    ],
  },
  attributes: {
    range: 533.0,
    chargingSpeed: 850.0,
    price: 52990.0,
    motorPower: 378.0,
    weight: 2003.0,
    efficiency: 199.0,
    seats: 5,
    trunkVolume: 854.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Allradantrieb",
    acceleration: 5.0,
    dimensions: { length: 4750.0, width: 1921.0, height: 1624.0 },
  },
};

const vehicle21: Vehicle = {
  description: {
    model: "EQB 250+",
    make: "Mercedes-Benz",
    description:
      "Mercedes-Benz EQB 250+ mit einer Reichweite von 415 km und einer Ladegeschwindigkeit von 490 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1988/Mercedes-Benz-EQB-250plus",
    ],
  },
  attributes: {
    range: 415.0,
    chargingSpeed: 490.0,
    price: 55900.0,
    motorPower: 140.0,
    weight: 2105.0,
    efficiency: 170.0,
    seats: 7,
    trunkVolume: 495.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 8.9,
    dimensions: { length: 4684.0, width: 2020.0, height: 1667.0 },
  },
};

const vehicle22: Vehicle = {
  description: {
    model: "EQA 250+",
    make: "Mercedes-Benz",
    description:
      "Mercedes-Benz EQA 250+ mit einer Reichweite von 420 km und einer Ladegeschwindigkeit von 500 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1985/Mercedes-Benz-EQA-250plus",
    ],
  },
  attributes: {
    range: 420.0,
    chargingSpeed: 500.0,
    price: 49900.0,
    motorPower: 140.0,
    weight: 2055.0,
    efficiency: 168.0,
    seats: 5,
    trunkVolume: 340.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 8.6,
    dimensions: { length: 4463.0, width: 2020.0, height: 1620.0 },
  },
};

const vehicle23: Vehicle = {
  description: {
    model: "EQS 450+",
    make: "Mercedes-Benz",
    description:
      "Mercedes-Benz EQS 450+ mit einer Reichweite von 690 km und einer Ladegeschwindigkeit von 870 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2193/Mercedes-Benz-EQS-450plus",
    ],
  },
  attributes: {
    range: 690.0,
    chargingSpeed: 870.0,
    price: 141900.0,
    motorPower: 265.0,
    weight: 2515.0,
    efficiency: 171.0,
    seats: 5,
    trunkVolume: 620.0,
    bodyType: "Limousine",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 6.2,
    dimensions: { length: 5223.0, width: 2125.0, height: 1518.0 },
  },
};

const vehicle24: Vehicle = {
  description: {
    model: "MG4 Electric 64 kWh",
    make: "MG",
    description:
      "MG MG4 Electric 64 kWh mit einer Reichweite von 360 km und einer Ladegeschwindigkeit von 630 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1708/MG-MG4-Electric-64-kWh"],
  },
  attributes: {
    range: 360.0,
    chargingSpeed: 630.0,
    price: 29990.0,
    motorPower: 150.0,
    weight: 1726.0,
    efficiency: 171.0,
    seats: 5,
    trunkVolume: 363.0,
    bodyType: "Kompaktwagen",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 7.9,
    dimensions: { length: 4287.0, width: 2060.0, height: 1504.0 },
  },
};

const vehicle25: Vehicle = {
  description: {
    model: "Electric Cooper SE",
    make: "Mini",
    description:
      "Mini Electric Cooper SE mit einer Reichweite von 180 km und einer Ladegeschwindigkeit von 260 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1409/Mini-Electric-Cooper-SE",
    ],
  },
  attributes: {
    range: 180.0,
    chargingSpeed: 260.0,
    price: 40600.0,
    motorPower: 135.0,
    weight: 1440.0,
    efficiency: 161.0,
    seats: 4,
    trunkVolume: 211.0,
    bodyType: "Kompaktwagen",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 7.3,
    dimensions: { length: 3850.0, width: 1727.0, height: 1432.0 },
  },
};

const vehicle26: Vehicle = {
  description: {
    model: "Astra Electric",
    make: "Opel",
    description:
      "Opel Astra Electric mit einer Reichweite von 320 km und einer Ladegeschwindigkeit von 510 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1792/Opel-Astra-Electric"],
  },
  attributes: {
    range: 320.0,
    chargingSpeed: 510.0,
    price: 39300.0,
    motorPower: 115.0,
    weight: 1736.0,
    efficiency: 159.0,
    seats: 5,
    trunkVolume: 352.0,
    bodyType: "Kompaktwagen",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 9.2,
    dimensions: { length: 4374.0, width: 2062.0, height: 1470.0 },
  },
};

const vehicle27: Vehicle = {
  description: {
    model: "e-3008 97 kWh Long Range",
    make: "Peugeot",
    description:
      "Peugeot e-3008 97 kWh Long Range mit einer Reichweite von 500 km und einer Ladegeschwindigkeit von 650 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2005/Peugeot-e-3008-97-kWh-Long-Range",
    ],
  },
  attributes: {
    range: 500.0,
    chargingSpeed: 650.0,
    price: 45300.0,
    motorPower: 170.0,
    weight: 2241.0,
    efficiency: 194.0,
    seats: 5,
    trunkVolume: 588.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 8.7,
    dimensions: { length: 4542.0, width: 1895.0, height: 1641.0 },
  },
};

const vehicle28: Vehicle = {
  description: {
    model: "4 Long Range Dual Motor",
    make: "Polestar",
    description:
      "Polestar 4 Long Range Dual Motor mit einer Reichweite von 485 km und einer Ladegeschwindigkeit von 650 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1842/Polestar-4-Long-Range-Dual-Motor",
    ],
  },
  attributes: {
    range: 485.0,
    chargingSpeed: 650.0,
    price: 70900.0,
    motorPower: 400.0,
    weight: 2430.0,
    efficiency: 194.0,
    seats: 5,
    trunkVolume: 526.0,
    bodyType: "Limousine",
    equipment: "Standard",
    driveType: "Allradantrieb",
    acceleration: 3.8,
    dimensions: { length: 4839.0, width: 2139.0, height: 1544.0 },
  },
};

const vehicle29: Vehicle = {
  description: {
    model: "2 Long Range Single Motor",
    make: "Polestar",
    description:
      "Polestar 2 Long Range Single Motor mit einer Reichweite von 475 km und einer Ladegeschwindigkeit von 710 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2226/Polestar-2-Long-Range-Single-Motor",
    ],
  },
  attributes: {
    range: 475.0,
    chargingSpeed: 710.0,
    price: 57900.0,
    motorPower: 220.0,
    weight: 2075.0,
    efficiency: 166.0,
    seats: 5,
    trunkVolume: 407.0,
    bodyType: "Limousine",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 6.2,
    dimensions: { length: 4606.0, width: 1985.0, height: 1479.0 },
  },
};

const vehicle30: Vehicle = {
  description: {
    model: "5 E-Tech 52kWh 150ps",
    make: "Renault",
    description:
      "Renault 5 E-Tech 52kWh 150ps with a range of 320 km and a charging time of 400 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2135/Renault-5-E-Tech-52kWh-150ps",
    ],
  },
  attributes: {
    range: 320.0,
    chargingTime: 400.0,
    price: 32500.0,
    motorPower: 110.0,
    weight: 1524.0,
    efficiency: 163.0,
    seats: 5,
    trunkVolume: 326.0,
    bodyType: "hatchback",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 8.0,
    dimensions: { length: 3922.0, width: 2020.0, height: 1489.0 },
  },
};

const vehicle30: Vehicle = {
  description: {
    model: "5 E-Tech 52kWh 150ps",
    make: "Renault",
    description:
      "Renault 5 E-Tech 52kWh 150ps mit einer Reichweite von 320 km und einer Ladegeschwindigkeit von 400 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2135/Renault-5-E-Tech-52kWh-150ps",
    ],
  },
  attributes: {
    range: 320.0,
    chargingSpeed: 400.0,
    price: 32500.0,
    motorPower: 110.0,
    weight: 1524.0,
    efficiency: 163.0,
    seats: 5,
    trunkVolume: 326.0,
    bodyType: "Kompaktwagen",
    equipment: "Standard",
    driveType: "Frontantrieb",
    acceleration: 8.0,
    dimensions: { length: 3922.0, width: 2020.0, height: 1489.0 },
  },
};

const vehicle31: Vehicle = {
  description: {
    model: "Elroq 85",
    make: "Skoda",
    description:
      "Skoda Elroq 85 mit einer Reichweite von 450 km und einer Ladegeschwindigkeit von 670 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/3033/Skoda-Elroq-85"],
  },
  attributes: {
    range: 450.0,
    chargingSpeed: 670.0,
    price: 36300.0,
    motorPower: 210.0,
    weight: 2119.0,
    efficiency: 171.0,
    seats: 5,
    trunkVolume: 470.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 6.6,
    dimensions: { length: 4488.0, width: 2148.0, height: 1625.0 },
  },
};

const vehicle32: Vehicle = {
  description: {
    model: "Enyaq 85",
    make: "Skoda",
    description:
      "Skoda Enyaq 85 mit einer Reichweite von 450 km und einer Ladegeschwindigkeit von 670 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2020/Skoda-Enyaq-85"],
  },
  attributes: {
    range: 450.0,
    chargingSpeed: 670.0,
    price: 60800.0,
    motorPower: 210.0,
    weight: 2137.0,
    efficiency: 171.0,
    seats: 5,
    trunkVolume: 585.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 6.7,
    dimensions: { length: 4649.0, width: 2148.0, height: 1616.0 },
  },
};

const vehicle33: Vehicle = {
  description: {
    model: "Model Y",
    make: "Tesla",
    description:
      "Tesla Model Y mit einer Reichweite von 350 km und einer Ladegeschwindigkeit von 610 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1743/Tesla-Model-Y"],
  },
  attributes: {
    range: 350.0,
    chargingSpeed: 610.0,
    price: 43980.0,
    motorPower: 220.0,
    weight: 1984.0,
    efficiency: 164.0,
    seats: 5,
    trunkVolume: 854.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 6.9,
    dimensions: { length: 4751.0, width: 2129.0, height: 1624.0 },
  },
};

const vehicle34: Vehicle = {
  description: {
    model: "Model 3 Maximale Reichweite",
    make: "Tesla",
    description:
      "Tesla Model 3 Maximale Reichweite mit einer Reichweite von 525 km und einer Ladegeschwindigkeit von 810 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1992/Tesla-Model-3-Maximale-Reichweite",
    ],
  },
  attributes: {
    range: 525.0,
    chargingSpeed: 810.0,
    price: 49980.0,
    motorPower: 366.0,
    weight: 1899.0,
    efficiency: 143.0,
    seats: 5,
    trunkVolume: 594.0,
    bodyType: "Limousine",
    equipment: "Standard",
    driveType: "Allradantrieb",
    acceleration: 4.4,
    dimensions: { length: 4720.0, width: 2089.0, height: 1441.0 },
  },
};

const vehicle35: Vehicle = {
  description: {
    model: "ID.7 Pro S",
    make: "Volkswagen",
    description:
      "Volkswagen ID.7 Pro S mit einer Reichweite von 525 km und einer Ladegeschwindigkeit von 840 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1840/Volkswagen-ID7-Pro-S"],
  },
  attributes: {
    range: 525.0,
    chargingSpeed: 840.0,
    price: 65000.0,
    motorPower: 210.0,
    weight: 2230.0,
    efficiency: 164.0,
    seats: 5,
    trunkVolume: 532.0,
    bodyType: "Limousine",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 6.6,
    dimensions: { length: 4961.0, width: 1862.0, height: 1536.0 },
  },
};

const vehicle36: Vehicle = {
  description: {
    model: "ID.4 Pro",
    make: "Volkswagen",
    description:
      "Volkswagen ID.4 Pro mit einer Reichweite von 445 km und einer Ladegeschwindigkeit von 660 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2028/Volkswagen-ID4-Pro"],
  },
  attributes: {
    range: 445.0,
    chargingSpeed: 660.0,
    price: 50400.0,
    motorPower: 210.0,
    weight: 2156.0,
    efficiency: 173.0,
    seats: 5,
    trunkVolume: 543.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 6.7,
    dimensions: { length: 4584.0, width: 1852.0, height: 1631.0 },
  },
};

const vehicle37: Vehicle = {
  description: {
    model: "ID.7 Tourer Pro S",
    make: "Volkswagen",
    description:
      "Volkswagen ID.7 Tourer Pro S mit einer Reichweite von 520 km und einer Ladegeschwindigkeit von 840 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2119/Volkswagen-ID7-Tourer-Pro-S",
    ],
  },
  attributes: {
    range: 520.0,
    chargingSpeed: 840.0,
    price: 65800.0,
    motorPower: 210.0,
    weight: 2239.0,
    efficiency: 165.0,
    seats: 5,
    trunkVolume: 605.0,
    bodyType: "Kombi",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 6.7,
    dimensions: { length: 4961.0, width: 2141.0, height: 1536.0 },
  },
};

const vehicle38: Vehicle = {
  description: {
    model: "ID.3 GTX",
    make: "Volkswagen",
    description:
      "Volkswagen ID.3 GTX mit einer Reichweite von 460 km und einer Ladegeschwindigkeit von 740 km/h.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2152/Volkswagen-ID3--GTX"],
  },
  attributes: {
    range: 460.0,
    chargingSpeed: 740.0,
    price: 48200.0,
    motorPower: 210.0,
    weight: 1985.0,
    efficiency: 172.0,
    seats: 5,
    trunkVolume: 385.0,
    bodyType: "Kompaktwagen",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 5.9,
    dimensions: { length: 4322.0, width: 2070.0, height: 1538.0 },
  },
};

const vehicle39: Vehicle = {
  description: {
    model: "EX30 Single Motor ER",
    make: "Volvo",
    description:
      "Volvo EX30 Single Motor ER mit einer Reichweite von 360 km und einer Ladegeschwindigkeit von 600 km/h.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1910/Volvo-EX30-Single-Motor-ER",
    ],
  },
  attributes: {
    range: 360.0,
    chargingSpeed: 600.0,
    price: 42900.0,
    motorPower: 200.0,
    weight: 1850.0,
    efficiency: 178.0,
    seats: 5,
    trunkVolume: 318.0,
    bodyType: "SUV",
    equipment: "Standard",
    driveType: "Heckantrieb",
    acceleration: 5.3,
    dimensions: { length: 4233.0, width: 2032.0, height: 1549.0 },
  },
};

export const vehicles: Vehicle[] = [
  vehicle1,
  vehicle2,
  vehicle3,
  vehicle4,
  vehicle5,
  vehicle6,
  vehicle7,
  vehicle8,
  vehicle9,
  vehicle10,
  vehicle11,
  vehicle12,
  vehicle13,
  vehicle14,
  vehicle15,
  vehicle16,
  vehicle17,
  vehicle18,
  vehicle19,
  vehicle20,
  vehicle21,
  vehicle22,
  vehicle23,
  vehicle24,
  vehicle25,
  vehicle26,
  vehicle27,
  vehicle28,
  vehicle29,
  vehicle30,
  vehicle31,
  vehicle32,
  vehicle33,
  vehicle34,
  vehicle35,
  vehicle36,
  vehicle37,
  vehicle38,
  vehicle39,
];
