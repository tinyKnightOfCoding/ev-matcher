"use client";

import { useState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";

import { ChatHistory } from "@/components/chat-history";
import { CurrentQuestion } from "@/components/current-question";
import { ProgressBar } from "@/components/progress-bar";
import { matchVehicles } from "../actions/matchVehicles";
import { Header } from "@/components/header";

const DailyUsage = z.enum([
  "shortCityTrips",
  "commuting",
  "mixedUse",
  "longTrips",
]);
const Passengers = z.enum([
  "alone",
  "withOnePerson",
  "smallFamily",
  "largeFamily",
]);
const LongDistanceFrequency = z.enum(["never", "fewTimesPerYear", "regularly"]);
const LuggageSpace = z.enum(["small", "medium", "large"]);
const Residence = z.enum(["city", "suburb", "rural"]);
const EcoPreference = z.enum([
  "veryImportant",
  "somewhatImportant",
  "notImportant",
]);
const UsageFrequency = z.enum(["rarely", "regularly", "daily"]);
const ChargingOption = z.enum(["privateGarage", "streetAccess", "noAccess"]);

const formSchema = z.object({
  dailyUsage: DailyUsage,
  passengers: Passengers,
  longDistanceFrequency: LongDistanceFrequency,
  luggageSpace: LuggageSpace,
  residence: Residence,
  ecoPreference: EcoPreference,
  usageFrequency: UsageFrequency,
  chargingOption: ChargingOption,
});

type FormData = z.infer<typeof formSchema>;
const questions: {
  [K in keyof FormData]: {
    question: string;
    options: { value: FormData[K]; label: string }[];
  };
} = {
  dailyUsage: {
    question: "Was ist dein typischer Gebrauch?",
    options: [
      { value: "shortCityTrips", label: "Kurze Städtetrips" },
      { value: "commuting", label: "Pendeln" },
      { value: "mixedUse", label: "Gemischte Nutzung" },
      { value: "longTrips", label: "Lange Fahrten" },
    ],
  },
  passengers: {
    question: "Wie viele Passagiere beförderst du normalerweise?",
    options: [
      { value: "alone", label: "Nur mich" },
      { value: "withOnePerson", label: "Mich mit einer zusätzlichen Person" },
      { value: "smallFamily", label: "Kleine Familie" },
      { value: "largeFamily", label: "Grosse Familie" },
    ],
  },
  longDistanceFrequency: {
    question: "Wie oft machst du Fernreisen?",
    options: [
      { value: "never", label: "Nie" },
      { value: "fewTimesPerYear", label: "Ein paar Mal pro Jahr" },
      { value: "regularly", label: "Regelmässig" },
    ],
  },
  luggageSpace: {
    question: "Wie viel Gepäckraum benötigst du normalerweise?",
    options: [
      { value: "small", label: "Klein" },
      { value: "medium", label: "Mittel" },
      { value: "large", label: "Gross" },
    ],
  },
  residence: {
    question: "Wo wohnst du?",
    options: [
      { value: "city", label: "Stadt" },
      { value: "suburb", label: "Vorort" },
      { value: "rural", label: "Ländlich" },
    ],
  },
  ecoPreference: {
    question: "Wie wichtig ist dir Umweltfreundlichkeit?",
    options: [
      { value: "veryImportant", label: "Sehr wichtig" },
      { value: "somewhatImportant", label: "Ziemlich wichtig" },
      { value: "notImportant", label: "Nicht wichtig" },
    ],
  },
  usageFrequency: {
    question: "Wie oft benutzt du das Fahrzeug?",
    options: [
      { value: "rarely", label: "Selten" },
      { value: "regularly", label: "Regelmässig" },
      { value: "daily", label: "Täglich" },
    ],
  },
  chargingOption: {
    question: "Welche Lademöglichkeit steht dir zur Verfügung?",
    options: [
      { value: "privateGarage", label: "In der privaten Garage" },
      { value: "streetAccess", label: "An der Strasse" },
      { value: "noAccess", label: "Kein privater Zugang" },
    ],
  },
};

export default function QuestionnairePage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string }[]
  >([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const questionKeys = Object.keys(questions) as (keyof FormData)[];
  const currentQuestion = questions[questionKeys[currentQuestionIndex]];
  const progress = (currentQuestionIndex / questionKeys.length) * 100;

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, isTyping]);

  const handleAnswer = async (value: string, label: string) => {
    form.setValue(questionKeys[currentQuestionIndex], value as any);
    setChatHistory([
      ...chatHistory,
      { question: currentQuestion.question, answer: label },
    ]);

    if (currentQuestionIndex < questionKeys.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const formData = new FormData();
      Object.entries(form.getValues()).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const matchingResults = await matchVehicles(formData);
      const userResponses = form.getValues();
      router.push(
        "/results?matches=" +
          encodeURIComponent(JSON.stringify(matchingResults)) +
          "&userResponses=" +
          encodeURIComponent(JSON.stringify(userResponses)),
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto p-4 max-w-2xl">
        <Header
          title="Finde dein perfektes Elektroauto"
          subtitle="Beantworte einige Fragen und wir finden für dich dein perfektes Elektroauto."
        />
        <ProgressBar progress={progress} />

        <div
          ref={chatContainerRef}
          className="space-y-4 max-h-[60vh] overflow-y-auto"
        >
          <ChatHistory chatHistory={chatHistory} />

          {currentQuestionIndex < questionKeys.length && (
            <CurrentQuestion
              question={currentQuestion.question}
              options={currentQuestion.options}
              isTyping={isTyping}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </div>
    </div>
  );
}
