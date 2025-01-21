"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function ResultsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const matchesParam = searchParams.get("matches")
  const matches = matchesParam ? JSON.parse(decodeURIComponent(matchesParam)) : []

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Top 3 Electric Vehicle Matches</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {matches.map((match: any, index: number) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                {match.vehicle.description.make} {match.vehicle.description.model}
              </CardTitle>
              <CardDescription>{match.vehicle.description.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Price:</strong> €{match.vehicle.attributes.price.toLocaleString()}
              </p>
              <p>
                <strong>Range:</strong> {match.vehicle.attributes.range} km
              </p>
              <p>
                <strong>Charging Time (0-80%):</strong> {match.vehicle.attributes.chargingTime} minutes
              </p>
              <p>
                <strong>Efficiency:</strong> {match.vehicle.attributes.efficiency} kWh/100km
              </p>
              <p>
                <strong>Seats:</strong> {match.vehicle.attributes.seats}
              </p>
              <p>
                <strong>Trunk Volume:</strong> {match.vehicle.attributes.trunkVolume} liters
              </p>
              <p>
                <strong>Body Type:</strong> {match.vehicle.attributes.bodyType}
              </p>
              <p>
                <strong>Acceleration (0-100 km/h):</strong> {match.vehicle.attributes.acceleration} seconds
              </p>
              <p>
                <strong>Match Score:</strong> {(match.totalScore * 100).toFixed(2)}%
              </p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <Button onClick={() => router.push("/")}>Start Over</Button>
      </div>
    </div>
  )
}

