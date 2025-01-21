"use server"

import { z } from "zod"

// UserResponse Schema
const DailyUsage = z.enum(["shortCityTrips", "commuting", "mixedUse", "longTrips"])
const Passengers = z.enum(["alone", "withOnePerson", "smallFamily", "largeFamily"])
const LongDistanceFrequency = z.enum(["never", "fewTimesPerYear", "regularly"])
const LuggageSpace = z.enum(["small", "medium", "large"])
const Residence = z.enum(["city", "suburb", "rural"])
const EcoPreference = z.enum(["veryImportant", "somewhatImportant", "notImportant"])
const UsageFrequency = z.enum(["rarely", "regularly", "daily"])
const ChargingOption = z.enum(["privateGarage", "streetAccess", "noAccess"])

const UserResponseSchema = z.object({
  dailyUsage: DailyUsage,
  passengers: Passengers,
  longDistanceFrequency: LongDistanceFrequency,
  luggageSpace: LuggageSpace,
  residence: Residence,
  ecoPreference: EcoPreference,
  usageFrequency: UsageFrequency,
  chargingOption: ChargingOption,
})

// VehicleDescription Schema
const VehicleDescriptionSchema = z.object({
  model: z.string(),
  make: z.string(),
  description: z.string(),
  imageLinks: z.array(z.string().url()),
  reviewLinks: z.array(z.string().url()),
})

// VehicleAttributes Schema
const BodyType = z.enum(["sedan", "suv", "hatchback", "stationWagon", "coupe", "convertible"])
const Equipment = z.enum(["basic", "standard", "premium", "luxury"])
const DriveType = z.enum(["frontWheel", "rearWheel", "allWheel"])

const VehicleAttributesSchema = z.object({
  range: z.number(),
  chargingTime: z.number(),
  price: z.number(),
  motorPower: z.number(),
  weight: z.number(),
  efficiency: z.number(),
  seats: z.number(),
  trunkVolume: z.number(),
  bodyType: BodyType,
  equipment: Equipment,
  driveType: DriveType,
  acceleration: z.number(),
  dimensions: z.object({
    length: z.number(),
    width: z.number(),
    height: z.number(),
  }),
})

// Complete Vehicle Schema
const VehicleSchema = z.object({
  description: VehicleDescriptionSchema,
  attributes: VehicleAttributesSchema,
})

// MatchingResult Schema
const MatchingResultSchema = z.object({
  attributeScores: z.object({
    range: z.number(),
    seats: z.number(),
    trunkVolume: z.number(),
    price: z.number(),
    efficiency: z.number(),
    bodyType: z.number(),
    acceleration: z.number(),
    chargingTime: z.number(),
  }),
  totalScore: z.number(),
  vehicle: VehicleSchema,
})

type UserResponse = z.infer<typeof UserResponseSchema>
type Vehicle = z.infer<typeof VehicleSchema>
type MatchingResult = z.infer<typeof MatchingResultSchema>

function calculateMatchingScore(
  user: UserResponse,
  vehicle: Vehicle,
): { attributeScores: { [key: string]: number }; totalScore: number } {
  const attributeScores: { [key: string]: number } = {}

  const normalize = (value: number, min: number, max: number): number => {
    return Math.max(0, Math.min(1, (value - min) / (max - min)))
  }

  if (user.dailyUsage === "shortCityTrips") attributeScores.range = normalize(vehicle.attributes.range, 100, 250)
  else if (user.dailyUsage === "commuting") attributeScores.range = normalize(vehicle.attributes.range, 250, 400)
  else if (user.dailyUsage === "mixedUse") attributeScores.range = normalize(vehicle.attributes.range, 300, 500)
  else attributeScores.range = normalize(vehicle.attributes.range, 400, 800)

  if (user.passengers === "alone") attributeScores.seats = vehicle.attributes.seats >= 2 ? 1 : 0
  else if (user.passengers === "withOnePerson") attributeScores.seats = vehicle.attributes.seats >= 2 ? 1 : 0
  else if (user.passengers === "smallFamily") attributeScores.seats = normalize(vehicle.attributes.seats, 4, 5)
  else attributeScores.seats = normalize(vehicle.attributes.seats, 5, 7)

  if (user.luggageSpace === "small") attributeScores.trunkVolume = normalize(vehicle.attributes.trunkVolume, 200, 400)
  else if (user.luggageSpace === "medium")
    attributeScores.trunkVolume = normalize(vehicle.attributes.trunkVolume, 400, 600)
  else attributeScores.trunkVolume = normalize(vehicle.attributes.trunkVolume, 600, 1000)

  attributeScores.price = normalize(vehicle.attributes.price, 15000, 80000)

  attributeScores.efficiency = normalize(vehicle.attributes.efficiency, 10, 20)

  const bodyTypePreferenceMatch =
    (user.passengers === "smallFamily" && vehicle.attributes.bodyType === "suv") ||
    (user.passengers === "largeFamily" && ["suv", "stationWagon"].includes(vehicle.attributes.bodyType)) ||
    (user.passengers === "alone" && vehicle.attributes.bodyType === "hatchback")
  attributeScores.bodyType = bodyTypePreferenceMatch ? 1 : 0.5

  if (user.dailyUsage === "longTrips" || user.longDistanceFrequency === "regularly")
    attributeScores.acceleration = normalize(vehicle.attributes.acceleration, 6, 12)
  else attributeScores.acceleration = normalize(vehicle.attributes.acceleration, 8, 15)

  if (user.chargingOption === "privateGarage")
    attributeScores.chargingTime = normalize(vehicle.attributes.chargingTime, 30, 60)
  else if (user.chargingOption === "streetAccess")
    attributeScores.chargingTime = normalize(vehicle.attributes.chargingTime, 15, 45)
  else attributeScores.chargingTime = normalize(vehicle.attributes.chargingTime, 15, 30)

  const totalScore =
    Object.values(attributeScores).reduce((sum, score) => sum + score, 0) / Object.keys(attributeScores).length

  return { attributeScores, totalScore }
}

// Mock vehicle database
const vehicles: Vehicle[] = [
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

export async function matchVehicles(formData: FormData) {
  const userResponse = UserResponseSchema.parse(Object.fromEntries(formData))

  const matchingResults: MatchingResult[] = vehicles.map((vehicle) => {
    const { attributeScores, totalScore } = calculateMatchingScore(userResponse, vehicle)
    return {
      attributeScores,
      totalScore,
      vehicle,
    }
  })

  // Sort results by total score in descending order
  matchingResults.sort((a, b) => b.totalScore - a.totalScore)

  // Return top 3 matches
  return matchingResults.slice(0, 3)
}

