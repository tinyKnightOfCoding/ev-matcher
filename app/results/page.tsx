"use client";

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
  userResponses,
  isHighestMatch,
}: {
  match: any;
  userResponses: any;
  index: number;
  isHighestMatch: boolean;
}) {
  const [showMore, setShowMore] = useState(false);

  const getTopAttributes = (attributeScores: { [key: string]: number }) => {
    const sortedAttributes = Object.entries(attributeScores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);
    return sortedAttributes.map(([key, value]) => ({
      key,
      value: Math.round(value * 100),
    }));
  };

  return (
    <motion.div variants={item}>
      <Card
        className={`relative overflow-hidden group hover:shadow-lg transition-shadow ${isHighestMatch ? "ring-2 ring-primary" : ""}`}
      >
        {isHighestMatch && (
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-2 py-1 text-sm font-semibold">
            Best Match
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>
              {match.vehicle.description.make} {match.vehicle.description.model}
            </span>
            <span className="text-sm font-normal text-primary">
              {(match.totalScore * 100).toFixed(0)}% Match
            </span>
          </CardTitle>
          <CardDescription>
            {match.vehicle.description.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <StatCard
              icon={Battery}
              label="Reichweite"
              value={`${match.vehicle.attributes.range} km`}
            />
            <StatCard
              icon={Timer}
              label="Ladegeschwindigkeit"
              value={`${match.vehicle.attributes.chargingTime} km/h`}
            />
            <StatCard
              icon={Gauge}
              label="Verbrauch"
              value={`${match.vehicle.attributes.efficiency} kWh/100km`}
            />
            <StatCard
              icon={Weight}
              label="Gewicht"
              value={`${match.vehicle.attributes.weight}kg`}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Preis</span>
              <span className="font-medium">
                CHF {match.vehicle.attributes.price.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Beschleunigung</span>
              <span className="font-medium">
                {match.vehicle.attributes.acceleration}s (0-100 km/h)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Karosserietyp</span>
              <span className="font-medium capitalize">
                {match.vehicle.attributes.bodyType}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Wichtigste Übereinstimmungen
            </h3>
            <ul className="space-y-1">
              {getTopAttributes(match.attributeScores).map((attr, i) => (
                <li key={i} className="flex items-center justify-between">
                  <span className="capitalize">{attr.key}</span>
                  <span className="font-medium text-primary">
                    {attr.value}%
                  </span>
                </li>
              ))}
            </ul>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 text-muted-foreground"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Show More
                </>
              )}
            </Button>
          </div>

          <AttributeChart attributeScores={match.attributeScores} />

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <h3 className="text-lg font-semibold">
                  Zusätzliche Eigenschaften
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <StatCard
                    icon={Users}
                    label="Sitzplätze"
                    value={match.vehicle.attributes.seats.toString()}
                  />
                  <StatCard
                    icon={Zap}
                    label="Leistung"
                    value={`${match.vehicle.attributes.motorPower} kW`}
                  />
                  <StatCard
                    icon={Car}
                    label="Antrieb"
                    value={match.vehicle.attributes.driveType}
                  />
                  <StatCard
                    icon={Car}
                    label="Ausrüstung"
                    value={match.vehicle.attributes.equipment}
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Abmessungen</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <StatCard
                      label="Länge"
                      value={`${match.vehicle.attributes.dimensions.length} mm`}
                    />
                    <StatCard
                      label="Breite"
                      value={`${match.vehicle.attributes.dimensions.width} mm`}
                    />
                    <StatCard
                      label="Höhe"
                      value={`${match.vehicle.attributes.dimensions.height} mm`}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
        <CardFooter>
          <LearnMoreDialog
            vehicleModel={`${match.vehicle.description.make} ${match.vehicle.description.model}`}
            userResponses={userResponses}
          >
            <Button className="w-full group-hover:bg-primary transition-colors">
              Mehr erfahren
            </Button>
          </LearnMoreDialog>
        </CardFooter>
      </Card>
    </motion.div>
  );
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
          onBackClick={() => router.push("/")}
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
