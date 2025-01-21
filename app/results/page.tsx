"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Battery, Gauge, Timer, Weight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function StatCard({
  icon: Icon,
  label,
  value,
  className = "",
}: { icon: any; label: string; value: string; className?: string }) {
  return (
    <div className={`flex items-center gap-2 p-2 rounded-lg bg-secondary/50 ${className}`}>
      <Icon className="w-4 h-4 text-primary" />
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  )
}

function Results() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const matchesParam = searchParams.get("matches")
  const matches = matchesParam ? JSON.parse(decodeURIComponent(matchesParam)) : []

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto p-4">
        <Button variant="ghost" className="mb-4" onClick={() => router.push("/")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Start Over
        </Button>

        <motion.div initial="hidden" animate="show" variants={container} className="space-y-8">
          <motion.div variants={item}>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              Your Perfect Match
            </h1>
            <p className="text-muted-foreground">We've found the best electric vehicles based on your preferences</p>
          </motion.div>

          <motion.div variants={container} className="grid gap-6 md:grid-cols-3">
            {matches.map((match: any, index: number) => (
              <motion.div key={index} variants={item}>
                <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>
                        {match.vehicle.description.make} {match.vehicle.description.model}
                      </span>
                      <span className="text-sm font-normal text-primary">
                        {(match.totalScore * 100).toFixed(0)}% Match
                      </span>
                    </CardTitle>
                    <CardDescription>{match.vehicle.description.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <StatCard icon={Battery} label="Range" value={`${match.vehicle.attributes.range} km`} />
                      <StatCard
                        icon={Timer}
                        label="Charging (0-80%)"
                        value={`${match.vehicle.attributes.chargingTime}min`}
                      />
                      <StatCard
                        icon={Gauge}
                        label="Efficiency"
                        value={`${match.vehicle.attributes.efficiency} kWh/100km`}
                      />
                      <StatCard icon={Weight} label="Weight" value={`${match.vehicle.attributes.weight}kg`} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price</span>
                        <span className="font-medium">€{match.vehicle.attributes.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Acceleration</span>
                        <span className="font-medium">{match.vehicle.attributes.acceleration}s (0-100 km/h)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Body Type</span>
                        <span className="font-medium capitalize">{match.vehicle.attributes.bodyType}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full group-hover:bg-primary transition-colors">Learn More</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto p-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-48 bg-muted rounded" />
            <div className="h-4 w-96 bg-muted rounded" />
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="h-48 bg-muted rounded" />
                  <div className="h-4 w-3/4 bg-muted rounded" />
                  <div className="h-4 w-1/2 bg-muted rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <Results />
    </Suspense>
  )
}

