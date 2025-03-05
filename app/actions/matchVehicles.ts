"use server";

import {
  type UserResponse,
  type Vehicle,
  type MatchingResult,
  UserResponseSchema,
  Sportiness,
} from "../types/vehicle";
import { vehicles } from "../data/vehicles";
import { z } from "zod";

type DailyUsage = "shortCityTrips" | "commuting" | "mixedUse" | "longTrips";
type Passengers = "alone" | "withOnePerson" | "smallFamily" | "largeFamily";
type LuggageSpace = "small" | "medium" | "large";
type BodyType =
  | "sedan"
  | "suv"
  | "hatchback"
  | "stationWagon"
  | "coupe"
  | "convertible";
type Tuple = [number, number, number, number, number];

function sweetSpotScore(
  value: number,
  points: [number, number, number, number, number],
): number {
  const [min, lowerMid, peak, upperMid, max] = points;

  if (value <= min || value >= max) return 0; // Value is outside the valid range
  if (value === peak) return 1; // Perfect match at the peak

  // Determine segment and apply linear interpolation
  if (value > min && value < lowerMid) {
    return (0.5 * (value - min)) / (lowerMid - min);
  } else if (value >= lowerMid && value < peak) {
    return 0.5 + (0.5 * (value - lowerMid)) / (peak - lowerMid);
  } else if (value > peak && value <= upperMid) {
    return 1 - (0.5 * (value - peak)) / (upperMid - peak);
  } else if (value > upperMid && value < max) {
    return 0.5 - (0.5 * (value - upperMid)) / (max - upperMid);
  }

  return 0; // Fallback, should not be reached
}

function calculateMatchingScore(
  user: UserResponse,
  vehicle: Vehicle,
): MatchingResult {
  const attributeScores: { [key: string]: number } = {};

  // 1. Range (Reichweite)
  const rangeSweetSpots: {
    [key in DailyUsage]: Tuple;
  } = {
    shortCityTrips: [100, 200, 250, 300, 400],
    commuting: [200, 300, 350, 400, 500],
    mixedUse: [300, 400, 450, 500, 600],
    longTrips: [400, 500, 600, 700, 900],
  };
  attributeScores.range = sweetSpotScore(
    vehicle.attributes.range,
    rangeSweetSpots[user.dailyUsage],
  );

  // 2. Seats (Sitzanzahl)
  const seatSweetSpots: {
    [key in Passengers]: Tuple;
  } = {
    alone: [1, 2, 2, 3, 4],
    withOnePerson: [2, 3, 4, 5, 6],
    smallFamily: [3, 4, 5, 6, 7],
    largeFamily: [4, 5, 7, 8, 9],
  };
  attributeScores.seats = sweetSpotScore(
    vehicle.attributes.seats,
    seatSweetSpots[user.passengers],
  );

  // 3. Luggage Space (Kofferraumvolumen)
  const trunkSweetSpots: {
    [key in LuggageSpace]: Tuple;
  } = {
    small: [100, 200, 300, 400, 500],
    medium: [300, 400, 500, 600, 700],
    large: [500, 600, 700, 800, 1000],
  };
  attributeScores.trunkVolume = sweetSpotScore(
    vehicle.attributes.trunkVolume,
    trunkSweetSpots[user.luggageSpace],
  );

  // 4. Price (Preis)
  attributeScores.price = sweetSpotScore(
    vehicle.attributes.price,
    [15000, 25000, 40000, 60000, 80000],
  );

  // 5. Efficiency (Effizienz)
  attributeScores.efficiency = sweetSpotScore(
    vehicle.attributes.efficiency,
    [5, 10, 15, 20, 30],
  );

  // 6. Body Type (Karosserieform)
  const bodyTypeMatches: { [key in Passengers]: BodyType[] } = {
    alone: ["hatchback", "coupe"],
    withOnePerson: ["hatchback", "sedan", "stationWagon"],
    smallFamily: ["sedan", "suv", "stationWagon"],
    largeFamily: ["suv", "stationWagon"],
  };
  attributeScores.bodyType = bodyTypeMatches[user.passengers].includes(
    vehicle.attributes.bodyType,
  )
    ? 1
    : 0.5;

  // 7. Acceleration (Beschleunigung)
  const accelerationSweetSpots: {
    [key in z.infer<typeof Sportiness>]: Tuple;
  } = {
    very_important: [1, 2, 3, 4, 5],
    important: [2, 4, 6, 8, 10],
    not_important: [8, 10, 12, 14, 16],
  };

  attributeScores.acceleration = sweetSpotScore(
    vehicle.attributes.acceleration,
    accelerationSweetSpots[user.sportiness],
  );

  const chargingTimeSweetSpots: {
    [key in DailyUsage]: Tuple;
  } = {
    shortCityTrips: [200, 250, 300, 400, 600],
    commuting: [200, 250, 300, 400, 600],
    mixedUse: [200, 400, 600, 600, 800],
    longTrips: [800, 1000, 1200, 1400, 1600],
  };

  attributeScores.chargingTime = sweetSpotScore(
    vehicle.attributes.chargingTime,
    chargingTimeSweetSpots[user.dailyUsage],
  );

  switch (user.budget) {
    case "low":
      attributeScores.price = sweetSpotScore(
        vehicle.attributes.price,
        [0, 10_000, 14_000, 22_500, 30_000],
      );
      break;
    case "medium":
      attributeScores.price = sweetSpotScore(
        vehicle.attributes.price,
        [25_000, 35_000, 50_000, 65_000, 75_000],
      );
      break;
    case "high":
      attributeScores.price = sweetSpotScore(
        vehicle.attributes.price,
        [75, 90_000, 140_000, 175_000, 200_000],
      );
      break;
  }

  // Compute total score as the average of attribute scores
  const totalScore =
    Object.values(attributeScores).reduce((sum, score) => sum + score, 0) /
    Object.keys(attributeScores).length;

  return { attributeScores, totalScore, vehicle } as MatchingResult;
}

export async function matchVehicles(formData: FormData) {
  const userResponse = UserResponseSchema.parse(Object.fromEntries(formData));

  const matchingResults: MatchingResult[] = vehicles.map((vehicle) => {
    const { attributeScores, totalScore } = calculateMatchingScore(
      userResponse,
      vehicle,
    );
    return {
      attributeScores,
      totalScore,
      vehicle,
    };
  });

  // Sort results by total score in descending order
  matchingResults.sort((a, b) => b.totalScore - a.totalScore);

  // Return top 3 matches
  return matchingResults.slice(0, 3);
}
