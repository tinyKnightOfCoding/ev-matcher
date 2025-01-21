"use client"

import { useState, useEffect, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"

import { ChatHistory } from "@/components/chat-history"
import { CurrentQuestion } from "@/components/current-question"
import { ProgressBar } from "@/components/progress-bar"
import { matchVehicles } from "./actions/matchVehicles"
import { Header } from "@/components/header"

const DailyUsage = z.enum(["shortCityTrips", "commuting", "mixedUse", "longTrips"])
const Passengers = z.enum(["alone", "withOnePerson", "smallFamily", "largeFamily"])
const LongDistanceFrequency = z.enum(["never", "fewTimesPerYear", "regularly"])
const LuggageSpace = z.enum(["small", "medium", "large"])
const Residence = z.enum(["city", "suburb", "rural"])
const EcoPreference = z.enum(["veryImportant", "somewhatImportant", "notImportant"])
const UsageFrequency = z.enum(["rarely", "regularly", "daily"])
const ChargingOption = z.enum(["privateGarage", "streetAccess", "noAccess"])

const formSchema = z.object({
  dailyUsage: DailyUsage,
  passengers: Passengers,
  longDistanceFrequency: LongDistanceFrequency,
  luggageSpace: LuggageSpace,
  residence: Residence,
  ecoPreference: EcoPreference,
  usageFrequency: UsageFrequency,
  chargingOption: ChargingOption,
})

type FormData = z.infer<typeof formSchema>

const questions: { [K in keyof FormData]: { question: string; options: { value: FormData[K]; label: string }[] } } = {
  dailyUsage: {
    question: "What's your typical daily usage?",
    options: [
      { value: "shortCityTrips", label: "Short City Trips" },
      { value: "commuting", label: "Commuting" },
      { value: "mixedUse", label: "Mixed Use" },
      { value: "longTrips", label: "Long Trips" },
    ],
  },
  passengers: {
    question: "How many passengers do you usually carry?",
    options: [
      { value: "alone", label: "Alone" },
      { value: "withOnePerson", label: "With One Person" },
      { value: "smallFamily", label: "Small Family" },
      { value: "largeFamily", label: "Large Family" },
    ],
  },
  longDistanceFrequency: {
    question: "How often do you make long-distance trips?",
    options: [
      { value: "never", label: "Never" },
      { value: "fewTimesPerYear", label: "A Few Times Per Year" },
      { value: "regularly", label: "Regularly" },
    ],
  },
  luggageSpace: {
    question: "How much luggage space do you typically need?",
    options: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ],
  },
  residence: {
    question: "Where do you live?",
    options: [
      { value: "city", label: "City" },
      { value: "suburb", label: "Suburb" },
      { value: "rural", label: "Rural" },
    ],
  },
  ecoPreference: {
    question: "How important is eco-friendliness to you?",
    options: [
      { value: "veryImportant", label: "Very Important" },
      { value: "somewhatImportant", label: "Somewhat Important" },
      { value: "notImportant", label: "Not Important" },
    ],
  },
  usageFrequency: {
    question: "How often do you plan to use the vehicle?",
    options: [
      { value: "rarely", label: "Rarely" },
      { value: "regularly", label: "Regularly" },
      { value: "daily", label: "Daily" },
    ],
  },
  chargingOption: {
    question: "What charging options do you have access to?",
    options: [
      { value: "privateGarage", label: "Private Garage" },
      { value: "streetAccess", label: "Street Access" },
      { value: "noAccess", label: "No Access" },
    ],
  },
}

export default function QuestionnairePage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [chatHistory, setChatHistory] = useState<{ question: string; answer: string }[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const questionKeys = Object.keys(questions) as (keyof FormData)[]
  const currentQuestion = questions[questionKeys[currentQuestionIndex]]
  const progress = (currentQuestionIndex / questionKeys.length) * 100

  useEffect(() => {
    setIsTyping(true)
    const timer = setTimeout(() => {
      setIsTyping(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [currentQuestionIndex])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory, isTyping])

  const handleAnswer = async (value: string, label: string) => {
    form.setValue(questionKeys[currentQuestionIndex], value as any)
    setChatHistory([...chatHistory, { question: currentQuestion.question, answer: label }])

    if (currentQuestionIndex < questionKeys.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      const formData = new FormData()
      Object.entries(form.getValues()).forEach(([key, value]) => {
        formData.append(key, value)
      })

      const matchingResults = await matchVehicles(formData)
      router.push("/results?matches=" + encodeURIComponent(JSON.stringify(matchingResults)))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto p-4 max-w-2xl">
        <Header
          title="Find Your Perfect EV"
          subtitle="Answer a few questions and let us match you with your ideal electric vehicle"
        />
        <ProgressBar progress={progress} />

        <div ref={chatContainerRef} className="space-y-4 max-h-[60vh] overflow-y-auto">
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
  )
}

