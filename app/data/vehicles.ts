import { Vehicle } from "../types/vehicle";

const vehicle1: Vehicle = {
  description: {
    model: "A6 Avant e-tron performance",
    make: "Audi",
    description:
      "Audi A6 Avant e-tron performance with a range of 565 km and a charging time of 1130 minutes.",
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
    bodyType: "stationWagon",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 5.4,
    dimensions: { length: 4928.0, width: 2137.0, height: 1455.0 },
  },
};

const vehicle2: Vehicle = {
  description: {
    model: "Q4 e-tron 45",
    make: "Audi",
    description:
      "Audi Q4 e-tron 45 with a range of 420 km and a charging time of 630 minutes.",
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
    bodyType: "suv",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 6.7,
    dimensions: { length: 4588.0, width: 2108.0, height: 1632.0 },
  },
};

const vehicle3: Vehicle = {
  description: {
    model: "iX xDrive 40",
    make: "BMW",
    description:
      "BMW iX xDrive 40 with a range of 360 km and a charging time of 480 minutes.",
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
    bodyType: "suv",
    equipment: "standard",
    driveType: "allWheel",
    acceleration: 6.1,
    dimensions: { length: 4953.0, width: 2230.0, height: 1695.0 },
  },
};

const vehicle4: Vehicle = {
  description: {
    model: "i5 eDrive40 Touring",
    make: "BMW",
    description:
      "BMW i5 eDrive40 Touring with a range of 455 km and a charging time of 730 minutes.",
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
    bodyType: "stationWagon",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 6.1,
    dimensions: { length: 5060.0, width: 2156.0, height: 1515.0 },
  },
};

const vehicle5: Vehicle = {
  description: {
    model: "e-C3",
    make: "Citroen",
    description:
      "Citroen e-C3 with a range of 260 km and a charging time of 340 minutes.",
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
    bodyType: "hatchback",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 11.5,
    dimensions: { length: 4015.0, width: 1813.0, height: 1577.0 },
  },
};

const vehicle6: Vehicle = {
  description: {
    model: "Born VZ",
    make: "CUPRA",
    description:
      "CUPRA Born VZ with a range of 465 km and a charging time of 750 minutes.",
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
    bodyType: "hatchback",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 5.6,
    dimensions: { length: 4322.0, width: 2070.0, height: 1538.0 },
  },
};

const vehicle7: Vehicle = {
  description: {
    model: "Spring Electric 45",
    make: "Dacia",
    description:
      "Dacia Spring Electric 45 with a range of 165 km and a charging time of 180 minutes.",
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
    bodyType: "hatchback",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 19.1,
    dimensions: { length: 3700.0, width: 1770.0, height: 1516.0 },
  },
};

const vehicle8: Vehicle = {
  description: {
    model: "Grande Panda",
    make: "Fiat",
    description:
      "Fiat Grande Panda with a range of 260 km and a charging time of 340 minutes.",
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
    bodyType: "hatchback",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 11.0,
    dimensions: { length: 3999.0, width: 2017.0, height: 1570.0 },
  },
};

const vehicle9: Vehicle = {
  description: {
    model: "500 Limousine 42kWh",
    make: "Fiat",
    description:
      "Fiat 500 Limousine 42kWh with a range of 235 km and a charging time of 390 minutes.",
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
    bodyType: "hatchback",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 9.0,
    dimensions: { length: 3631.0, width: 1900.0, height: 1529.0 },
  },
};

const vehicle10: Vehicle = {
  description: {
    model: "Capri Extended Range AWD",
    make: "Ford",
    description:
      "Ford Capri Extended Range AWD with a range of 445 km and a charging time of 710 minutes.",
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
    bodyType: "sedan",
    equipment: "standard",
    driveType: "allWheel",
    acceleration: 5.3,
    dimensions: { length: 4643.0, width: 2063.0, height: 1626.0 },
  },
};

const vehicle11: Vehicle = {
  description: {
    model: "Explorer Extended Range AWD",
    make: "Ford",
    description:
      "Ford Explorer Extended Range AWD with a range of 430 km and a charging time of 690 minutes.",
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
    bodyType: "suv",
    equipment: "standard",
    driveType: "allWheel",
    acceleration: 5.3,
    dimensions: { length: 4468.0, width: 2063.0, height: 1639.0 },
  },
};

const vehicle12: Vehicle = {
  description: {
    model: "INSTER Long Range",
    make: "Hyundai",
    description:
      "Hyundai INSTER Long Range with a range of 295 km and a charging time of 420 minutes.",
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
    bodyType: "suv",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 10.6,
    dimensions: { length: 3825.0, width: 1610.0, height: 1575.0 },
  },
};

const vehicle13: Vehicle = {
  description: {
    model: "IONIQ 5 84 kWh",
    make: "Hyundai",
    description:
      "Hyundai IONIQ 5 84 kWh with a range of 450 km and a charging time of 1110 minutes.",
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
    bodyType: "suv",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 7.5,
    dimensions: { length: 4655.0, width: 2152.0, height: 1605.0 },
  },
};

const vehicle14: Vehicle = {
  description: {
    model: "IONIQ 6 77.4 kWh",
    make: "Hyundai",
    description:
      "Hyundai IONIQ 6 77.4 kWh with a range of 495 km and a charging time of 1290 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1718/Hyundai-IONIQ-6-774-kWh#google_vignette",
    ],
  },
  attributes: {
    range: 495.0,
    chargingTime: 1290.0,
    price: 67900.0,
    motorPower: 168.0,
    weight: 1985.0,
    efficiency: 149.0,
    seats: 5,
    trunkVolume: 401.0,
    bodyType: "sedan",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 7.4,
    dimensions: { length: 4855.0, width: 2073.0, height: 1495.0 },
  },
};

const vehicle15: Vehicle = {
  description: {
    model: "EV3 81.4 kWh",
    make: "Kia",
    description:
      "Kia EV3 81.4 kWh with a range of 455 km and a charging time of 570 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2212/Kia-EV3-814-kWh"],
  },
  attributes: {
    range: 455.0,
    chargingTime: 570.0,
    price: 36950.0,
    motorPower: 150.0,
    weight: 1885.0,
    efficiency: 171.0,
    seats: 5,
    trunkVolume: 460.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 7.7,
    dimensions: { length: 4300.0, width: 1850.0, height: 1850.0 },
  },
};

const vehicle16: Vehicle = {
  description: {
    model: "EV9 99.8 kWh RWD",
    make: "Kia",
    description:
      "Kia EV9 99.8 kWh RWD with a range of 450 km and a charging time of 850 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1834/Kia-EV9-998-kWh-RWD"],
  },
  attributes: {
    range: 450.0,
    chargingTime: 850.0,
    price: 64950.0,
    motorPower: 150.0,
    weight: 2501.0,
    efficiency: 213.0,
    seats: 7,
    trunkVolume: 333.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 9.4,
    dimensions: { length: 5010.0, width: 2263.0, height: 1755.0 },
  },
};

const vehicle17: Vehicle = {
  description: {
    model: "T03",
    make: "Leapmotor",
    description:
      "Leapmotor T03 with a range of 230 km and a charging time of 180 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/3039/Leapmotor-T03"],
  },
  attributes: {
    range: 230.0,
    chargingTime: 180.0,
    price: 16990.0,
    motorPower: 70.0,
    weight: 1175.0,
    efficiency: 157.0,
    seats: 4,
    trunkVolume: 210.0,
    bodyType: "hatchback",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 12.7,
    dimensions: { length: 3620.0, width: 1652.0, height: 1577.0 },
  },
};

const vehicle18: Vehicle = {
  description: {
    model: "C10",
    make: "Leapmotor",
    description:
      "Leapmotor C10 with a range of 355 km and a charging time of 330 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/3040/Leapmotor-C10"],
  },
  attributes: {
    range: 355.0,
    chargingTime: 330.0,
    price: 35900.0,
    motorPower: 160.0,
    weight: 1980.0,
    efficiency: 197.0,
    seats: 5,
    trunkVolume: 435.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 7.5,
    dimensions: { length: 4739.0, width: 1900.0, height: 1680.0 },
  },
};

const vehicle19: Vehicle = {
  description: {
    model: "Air Grand Touring",
    make: "Lucid",
    description:
      "Lucid Air Grand Touring with a range of 665 km and a charging time of 1030 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1316/Lucid-Air-Grand-Touring",
    ],
  },
  attributes: {
    range: 665.0,
    chargingTime: 1030.0,
    price: 91000.0,
    motorPower: 597.0,
    weight: 2435.0,
    efficiency: 168.0,
    seats: 5,
    trunkVolume: 456.0,
    bodyType: "sedan",
    equipment: "standard",
    driveType: "allWheel",
    acceleration: 3.0,
    dimensions: { length: 4975.0, width: 2198.0, height: 1410.0 },
  },
};

const vehicle20: Vehicle = {
  description: {
    model: "MX-30",
    make: "Mazda",
    description:
      "Mazda MX-30 with a range of 170 km and a charging time of 170 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1680/Mazda-MX-30"],
  },
  attributes: {
    range: 170.0,
    chargingTime: 170.0,
    price: 42400.0,
    motorPower: 107.0,
    weight: 1720.0,
    efficiency: 176.0,
    seats: 5,
    trunkVolume: 366.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 9.7,
    dimensions: { length: 4395.0, width: 2035.0, height: 1555.0 },
  },
};

const vehicle21: Vehicle = {
  description: {
    model: "EQB 250+",
    make: "Mercedes-Benz",
    description:
      "Mercedes-Benz EQB 250+ with a range of 415 km and a charging time of 490 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1988/Mercedes-Benz-EQB-250plus",
    ],
  },
  attributes: {
    range: 415.0,
    chargingTime: 490.0,
    price: 55900.0,
    motorPower: 140.0,
    weight: 2105.0,
    efficiency: 170.0,
    seats: 7,
    trunkVolume: 495.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 8.9,
    dimensions: { length: 4684.0, width: 2020.0, height: 1667.0 },
  },
};

const vehicle22: Vehicle = {
  description: {
    model: "EQA 250+",
    make: "Mercedes-Benz",
    description:
      "Mercedes-Benz EQA 250+ with a range of 420 km and a charging time of 500 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1985/Mercedes-Benz-EQA-250plus",
    ],
  },
  attributes: {
    range: 420.0,
    chargingTime: 500.0,
    price: 49900.0,
    motorPower: 140.0,
    weight: 2055.0,
    efficiency: 168.0,
    seats: 5,
    trunkVolume: 340.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 8.6,
    dimensions: { length: 4463.0, width: 2020.0, height: 1620.0 },
  },
};

const vehicle23: Vehicle = {
  description: {
    model: "EQS 450+",
    make: "Mercedes-Benz",
    description:
      "Mercedes-Benz EQS 450+ with a range of 690 km and a charging time of 870 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2193/Mercedes-Benz-EQS-450plus",
    ],
  },
  attributes: {
    range: 690.0,
    chargingTime: 870.0,
    price: 141900.0,
    motorPower: 265.0,
    weight: 2515.0,
    efficiency: 171.0,
    seats: 5,
    trunkVolume: 620.0,
    bodyType: "sedan",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 6.2,
    dimensions: { length: 5223.0, width: 2125.0, height: 1518.0 },
  },
};

const vehicle24: Vehicle = {
  description: {
    model: "MG4 Electric 64 kWh",
    make: "MG",
    description:
      "MG MG4 Electric 64 kWh with a range of 360 km and a charging time of 630 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1708/MG-MG4-Electric-64-kWh"],
  },
  attributes: {
    range: 360.0,
    chargingTime: 630.0,
    price: 29990.0,
    motorPower: 150.0,
    weight: 1726.0,
    efficiency: 171.0,
    seats: 5,
    trunkVolume: 363.0,
    bodyType: "hatchback",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 7.9,
    dimensions: { length: 4287.0, width: 2060.0, height: 1504.0 },
  },
};

const vehicle25: Vehicle = {
  description: {
    model: "Electric Cooper SE",
    make: "Mini",
    description:
      "Mini Electric Cooper SE with a range of 180 km and a charging time of 260 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1409/Mini-Electric-Cooper-SE",
    ],
  },
  attributes: {
    range: 180.0,
    chargingTime: 260.0,
    price: 40600.0,
    motorPower: 135.0,
    weight: 1440.0,
    efficiency: 161.0,
    seats: 4,
    trunkVolume: 211.0,
    bodyType: "hatchback",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 7.3,
    dimensions: { length: 3850.0, width: 1727.0, height: 1432.0 },
  },
};

const vehicle26: Vehicle = {
  description: {
    model: "Astra Electric",
    make: "Opel",
    description:
      "Opel Astra Electric with a range of 320 km and a charging time of 510 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1792/Opel-Astra-Electric"],
  },
  attributes: {
    range: 320.0,
    chargingTime: 510.0,
    price: 39300.0,
    motorPower: 115.0,
    weight: 1736.0,
    efficiency: 159.0,
    seats: 5,
    trunkVolume: 352.0,
    bodyType: "hatchback",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 9.2,
    dimensions: { length: 4374.0, width: 2062.0, height: 1470.0 },
  },
};

const vehicle27: Vehicle = {
  description: {
    model: "e-3008 97 kWh Long Range",
    make: "Peugeot",
    description:
      "Peugeot e-3008 97 kWh Long Range with a range of 500 km and a charging time of 650 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2005/Peugeot-e-3008-97-kWh-Long-Range",
    ],
  },
  attributes: {
    range: 500.0,
    chargingTime: 650.0,
    price: 45300.0,
    motorPower: 170.0,
    weight: 2241.0,
    efficiency: 194.0,
    seats: 5,
    trunkVolume: 588.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "frontWheel",
    acceleration: 8.7,
    dimensions: { length: 4542.0, width: 1895.0, height: 1641.0 },
  },
};

const vehicle28: Vehicle = {
  description: {
    model: "4 Long Range Dual Motor",
    make: "Polestar",
    description:
      "Polestar 4 Long Range Dual Motor with a range of 485 km and a charging time of 650 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1842/Polestar-4-Long-Range-Dual-Motor",
    ],
  },
  attributes: {
    range: 485.0,
    chargingTime: 650.0,
    price: 70900.0,
    motorPower: 400.0,
    weight: 2430.0,
    efficiency: 194.0,
    seats: 5,
    trunkVolume: 526.0,
    bodyType: "sedan",
    equipment: "standard",
    driveType: "allWheel",
    acceleration: 3.8,
    dimensions: { length: 4839.0, width: 2139.0, height: 1544.0 },
  },
};

const vehicle29: Vehicle = {
  description: {
    model: "2 Long Range Single Motor",
    make: "Polestar",
    description:
      "Polestar 2 Long Range Single Motor with a range of 475 km and a charging time of 710 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2226/Polestar-2-Long-Range-Single-Motor",
    ],
  },
  attributes: {
    range: 475.0,
    chargingTime: 710.0,
    price: 57900.0,
    motorPower: 220.0,
    weight: 2075.0,
    efficiency: 166.0,
    seats: 5,
    trunkVolume: 407.0,
    bodyType: "sedan",
    equipment: "standard",
    driveType: "rearWheel",
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

const vehicle31: Vehicle = {
  description: {
    model: "Elroq 85",
    make: "Skoda",
    description:
      "Skoda Elroq 85 with a range of 450 km and a charging time of 670 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/3033/Skoda-Elroq-85"],
  },
  attributes: {
    range: 450.0,
    chargingTime: 670.0,
    price: 36300.0,
    motorPower: 210.0,
    weight: 2119.0,
    efficiency: 171.0,
    seats: 5,
    trunkVolume: 470.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 6.6,
    dimensions: { length: 4488.0, width: 2148.0, height: 1625.0 },
  },
};

const vehicle32: Vehicle = {
  description: {
    model: "Enyaq 85",
    make: "Skoda",
    description:
      "Skoda Enyaq 85 with a range of 450 km and a charging time of 670 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2020/Skoda-Enyaq-85"],
  },
  attributes: {
    range: 450.0,
    chargingTime: 670.0,
    price: 60800.0,
    motorPower: 210.0,
    weight: 2137.0,
    efficiency: 171.0,
    seats: 5,
    trunkVolume: 585.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 6.7,
    dimensions: { length: 4649.0, width: 2148.0, height: 1616.0 },
  },
};

const vehicle33: Vehicle = {
  description: {
    model: "Model Y",
    make: "Tesla",
    description:
      "Tesla Model Y with a range of 350 km and a charging time of 610 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1743/Tesla-Model-Y"],
  },
  attributes: {
    range: 350.0,
    chargingTime: 610.0,
    price: 43980.0,
    motorPower: 220.0,
    weight: 1984.0,
    efficiency: 164.0,
    seats: 5,
    trunkVolume: 854.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 6.9,
    dimensions: { length: 4751.0, width: 2129.0, height: 1624.0 },
  },
};

const vehicle34: Vehicle = {
  description: {
    model: "Model 3 Maximale Reichweite",
    make: "Tesla",
    description:
      "Tesla Model 3 Maximale Reichweite with a range of 525 km and a charging time of 810 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1992/Tesla-Model-3-Maximale-Reichweite",
    ],
  },
  attributes: {
    range: 525.0,
    chargingTime: 810.0,
    price: 49980.0,
    motorPower: 366.0,
    weight: 1899.0,
    efficiency: 143.0,
    seats: 5,
    trunkVolume: 594.0,
    bodyType: "sedan",
    equipment: "standard",
    driveType: "allWheel",
    acceleration: 4.4,
    dimensions: { length: 4720.0, width: 2089.0, height: 1441.0 },
  },
};

const vehicle35: Vehicle = {
  description: {
    model: "ID.7 Pro S",
    make: "Volkswagen",
    description:
      "Volkswagen ID.7 Pro S with a range of 525 km and a charging time of 840 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/1840/Volkswagen-ID7-Pro-S"],
  },
  attributes: {
    range: 525.0,
    chargingTime: 840.0,
    price: 65000.0,
    motorPower: 210.0,
    weight: 2230.0,
    efficiency: 164.0,
    seats: 5,
    trunkVolume: 532.0,
    bodyType: "sedan",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 6.6,
    dimensions: { length: 4961.0, width: 1862.0, height: 1536.0 },
  },
};

const vehicle36: Vehicle = {
  description: {
    model: "ID.4 Pro",
    make: "Volkswagen",
    description:
      "Volkswagen ID.4 Pro with a range of 445 km and a charging time of 660 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2028/Volkswagen-ID4-Pro"],
  },
  attributes: {
    range: 445.0,
    chargingTime: 660.0,
    price: 50400.0,
    motorPower: 210.0,
    weight: 2156.0,
    efficiency: 173.0,
    seats: 5,
    trunkVolume: 543.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 6.7,
    dimensions: { length: 4584.0, width: 1852.0, height: 1631.0 },
  },
};

const vehicle37: Vehicle = {
  description: {
    model: "ID.7 Tourer Pro S",
    make: "Volkswagen",
    description:
      "Volkswagen ID.7 Tourer Pro S with a range of 520 km and a charging time of 840 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/2119/Volkswagen-ID7-Tourer-Pro-S",
    ],
  },
  attributes: {
    range: 520.0,
    chargingTime: 840.0,
    price: 65800.0,
    motorPower: 210.0,
    weight: 2239.0,
    efficiency: 165.0,
    seats: 5,
    trunkVolume: 605.0,
    bodyType: "stationWagon",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 6.7,
    dimensions: { length: 4961.0, width: 2141.0, height: 1536.0 },
  },
};

const vehicle38: Vehicle = {
  description: {
    model: "ID.3 GTX",
    make: "Volkswagen",
    description:
      "Volkswagen ID.3 GTX with a range of 460 km and a charging time of 740 minutes.",
    imageLinks: [],
    reviewLinks: ["https://ev-database.org/de/pkw/2152/Volkswagen-ID3--GTX"],
  },
  attributes: {
    range: 460.0,
    chargingTime: 740.0,
    price: 48200.0,
    motorPower: 210.0,
    weight: 1985.0,
    efficiency: 172.0,
    seats: 5,
    trunkVolume: 385.0,
    bodyType: "hatchback",
    equipment: "standard",
    driveType: "rearWheel",
    acceleration: 5.9,
    dimensions: { length: 4322.0, width: 2070.0, height: 1538.0 },
  },
};

const vehicle39: Vehicle = {
  description: {
    model: "EX30 Single Motor ER",
    make: "Volvo",
    description:
      "Volvo EX30 Single Motor ER with a range of 360 km and a charging time of 600 minutes.",
    imageLinks: [],
    reviewLinks: [
      "https://ev-database.org/de/pkw/1910/Volvo-EX30-Single-Motor-ER",
    ],
  },
  attributes: {
    range: 360.0,
    chargingTime: 600.0,
    price: 42900.0,
    motorPower: 200.0,
    weight: 1850.0,
    efficiency: 178.0,
    seats: 5,
    trunkVolume: 318.0,
    bodyType: "suv",
    equipment: "standard",
    driveType: "rearWheel",
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
