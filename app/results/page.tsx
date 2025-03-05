"use client";

import Image from "next/image";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Battery,
  Gauge,
  Timer,
  Weight,
  Users,
  Car,
  Banknote,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { Header } from "@/components/header";
import { LearnMoreDialog } from "@/components/learn-more-dialog";
import { Vehicle } from "../types/vehicle";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function StatCard({
  icon: Icon,
  label,
  value,
  className = "",
}: {
  icon?: React.ElementType;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 p-2 rounded-lg bg-secondary/50 ${className}`}
    >
      {Icon && <Icon className="w-4 h-4 text-primary" />}
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function AttributeChart({
  attributeScores,
}: {
  attributeScores: { [key: string]: number };
}) {
  const data = Object.entries(attributeScores).map(([key, value]) => ({
    attribute: key,
    score: value * 100, // Convert to percentage
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="attribute" />
        <Radar
          name="Attribute Scores"
          dataKey="score"
          stroke="#2563eb"
          fill="#3b82f6"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

function VehicleCard({
  match,
  index,
  isHighestMatch,
  userResponses,
}: {
  match: any;
  index: number;
  isHighestMatch: boolean;
  userResponses: Record<string, string>;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  console.log(match.vehicle);

  return (
    <motion.div variants={item}>
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
        <CardHeader className="relative aspect-video justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={`/vehicle${match.vehicle.index}.jpg`}
              alt={`${match.vehicle.description.make} ${match.vehicle.description.model}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="relative text-white flex flex-col gap-2">
            <h3 className="text-2xl font-bold">
              {match.vehicle.description.model}
            </h3>
            <p className="text-lg line-clamp-2">
              {match.vehicle.description.make}
            </p>
            <p className="text-sm line-clamp-2">
              {match.vehicle.description.description}
            </p>
          </div>
        </CardHeader>
        <CardContent className="bg-white/80 backdrop-blur-sm mt-4 grid grid-cols-2 gap-2">
          <StatCard
            icon={Battery}
            label="Range"
            value={`${match.vehicle.attributes.range} km`}
          />
          <StatCard
            icon={Gauge}
            label="Efficiency"
            value={`${match.vehicle.attributes.efficiency} kWh/100km`}
          />
          <StatCard
            icon={Timer}
            label="Charging (10%-80%)"
            value={`${chargingSpeed10To80(match.vehicle)}min`}
          />
          <StatCard
            icon={Banknote}
            label="Price"
            value={`${match.vehicle.attributes.price.toLocaleString()} Fr.`}
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <LearnMoreDialog
            vehicleModel={`${match.vehicle.description.make} ${match.vehicle.description.model}`}
            userResponses={userResponses}
          >
            <Button className="w-full group-hover:bg-primary transition-colors text-xl">
              Probefahrt buchen
            </Button>
          </LearnMoreDialog>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function chargingSpeed10To80(vehicle: Vehicle): number {
  const chargingTimeInKmPerHours = vehicle.attributes.chargingTime;
  const rangeInKm = vehicle.attributes.range;
  const chargingSpeed = (rangeInKm / chargingTimeInKmPerHours) * 0.7 * 60;
  return Math.round(chargingSpeed);
}

function Results() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const matchesParam = searchParams.get("matches");
  const userResponsesParam = searchParams.get("userResponses");
  const matches = matchesParam
    ? JSON.parse(decodeURIComponent(matchesParam))
    : [];
  const userResponses = userResponsesParam
    ? JSON.parse(decodeURIComponent(userResponsesParam))
    : [];

  // Sort matches by total score in descending order
  const sortedMatches = [...matches].sort(
    (a, b) => b.totalScore - a.totalScore,
  );

  // Function to reorder matches for desktop layout
  const reorderMatchesForDesktop = (matches: any[]) => {
    if (matches.length === 3) {
      return [matches[1], matches[0], matches[2]];
    }
    return matches;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto p-4">
        <Header
          title="Deine perfekte Wahl"
          subtitle="Wir haben die besten Elektrofahrzeuge für dich gefunden"
          showBackButton
          onBackClick={() => router.push("/questions")}
        />

        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="space-y-8"
        >
          <motion.div
            variants={container}
            className="grid gap-6 md:grid-cols-3"
          >
            {/* Mobile layout */}
            {sortedMatches.map((match: any, index: number) => (
              <div key={index} className="md:hidden">
                <VehicleCard
                  match={match}
                  index={index}
                  userResponses={userResponses}
                  isHighestMatch={index === 0}
                />
              </div>
            ))}

            {/* Desktop layout */}
            {reorderMatchesForDesktop(sortedMatches).map(
              (match: any, index: number) => (
                <div key={index} className="hidden md:block">
                  <VehicleCard
                    match={match}
                    index={index}
                    userResponses={userResponses}
                    isHighestMatch={index === 1}
                  />
                </div>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
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
  );
}
