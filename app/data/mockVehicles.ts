import type { Vehicle } from "../types/vehicle"

export const mockVehicles: Vehicle[] = [
  {
    description: {
      model: "Model S",
      make: "Tesla",
      description: "Luxury electric sedan with long range and high performance.",
      imageLinks: ["https://example.com/tesla-model-s.jpg"],
      reviewLinks: ["https://example.com/tesla-model-s-review"],
    },
    attributes: {
      range: 650,
      chargingTime: 30,
      price: 80000,
      motorPower: 500,
      weight: 2100,
      efficiency: 16,
      seats: 5,
      trunkVolume: 745,
      bodyType: "sedan",
      equipment: "luxury",
      driveType: "allWheel",
      acceleration: 3.2,
      dimensions: {
        length: 4970,
        width: 1964,
        height: 1445,
      },
    },
  },
  {
    description: {
      model: "ID.3",
      make: "Volkswagen",
      description: "Compact electric hatchback for urban driving.",
      imageLinks: ["https://example.com/vw-id3.jpg"],
      reviewLinks: ["https://example.com/vw-id3-review"],
    },
    attributes: {
      range: 420,
      chargingTime: 35,
      price: 35000,
      motorPower: 150,
      weight: 1800,
      efficiency: 15,
      seats: 5,
      trunkVolume: 385,
      bodyType: "hatchback",
      equipment: "standard",
      driveType: "rearWheel",
      acceleration: 7.3,
      dimensions: {
        length: 4261,
        width: 1809,
        height: 1552,
      },
    },
  },
  {
    description: {
      model: "e-tron",
      make: "Audi",
      description: "Luxury electric SUV with spacious interior and advanced technology.",
      imageLinks: ["https://example.com/audi-etron.jpg"],
      reviewLinks: ["https://example.com/audi-etron-review"],
    },
    attributes: {
      range: 400,
      chargingTime: 30,
      price: 65000,
      motorPower: 300,
      weight: 2500,
      efficiency: 23,
      seats: 5,
      trunkVolume: 660,
      bodyType: "suv",
      equipment: "premium",
      driveType: "allWheel",
      acceleration: 5.7,
      dimensions: {
        length: 4901,
        width: 1935,
        height: 1616,
      },
    },
  },
]

