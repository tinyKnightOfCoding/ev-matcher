"use server"

import { type UserResponse, type Vehicle, type MatchingResult, UserResponseSchema } from "../types/vehicle"
import { mockVehicles } from "../data/mockVehicles"

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

export async function matchVehicles(formData: FormData) {
  const userResponse = UserResponseSchema.parse(Object.fromEntries(formData))

  const matchingResults: MatchingResult[] = mockVehicles.map((vehicle) => {
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

