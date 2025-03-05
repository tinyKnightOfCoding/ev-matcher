import { z } from "zod";

// UserResponse Schema
export const DailyUsage = z.enum([
  "shortCityTrips",
  "commuting",
  "mixedUse",
  "longTrips",
]);
export const Passengers = z.enum([
  "alone",
  "withOnePerson",
  "smallFamily",
  "largeFamily",
]);
export const LongDistanceFrequency = z.enum([
  "never",
  "fewTimesPerYear",
  "regularly",
]);
export const LuggageSpace = z.enum(["small", "medium", "large"]);
export const Residence = z.enum(["city", "suburb", "rural"]);
export const EcoPreference = z.enum([
  "veryImportant",
  "somewhatImportant",
  "notImportant",
]);
export const UsageFrequency = z.enum(["rarely", "regularly", "daily"]);
export const ChargingOption = z.enum([
  "privateGarage",
  "streetAccess",
  "noAccess",
]);

export const Sportiness = z.enum([
  "very_important",
  "important",
  "not_important",
]);

export const Budget = z.enum(["low", "medium", "high"]);

export const UserResponseSchema = z.object({
  dailyUsage: DailyUsage,
  passengers: Passengers,
  longDistanceFrequency: LongDistanceFrequency,
  luggageSpace: LuggageSpace,
  ecoPreference: EcoPreference,
  sportiness: Sportiness,
  budget: Budget,
});

// VehicleDescription Schema
export const VehicleDescriptionSchema = z.object({
  model: z.string(),
  make: z.string(),
  description: z.string(),
  imageLinks: z.array(z.string().url()),
  reviewLinks: z.array(z.string().url()),
});

// VehicleAttributes Schema
export const BodyType = z.enum([
  "sedan",
  "suv",
  "hatchback",
  "stationWagon",
  "coupe",
  "convertible",
]);
export const Equipment = z.enum(["basic", "standard", "premium", "luxury"]);
export const DriveType = z.enum(["frontWheel", "rearWheel", "allWheel"]);

export const VehicleAttributesSchema = z.object({
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
});

// Complete Vehicle Schema
export const VehicleSchema = z.object({
  index: z.number(),
  description: VehicleDescriptionSchema,
  attributes: VehicleAttributesSchema,
});

// MatchingResult Schema
export const MatchingResultSchema = z.object({
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
});

export type UserResponse = z.infer<typeof UserResponseSchema>;
export type Vehicle = z.infer<typeof VehicleSchema>;
export type MatchingResult = z.infer<typeof MatchingResultSchema>;
