"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { matchVehicles } from "./actions/matchVehicles"

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
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Find Your Perfect EV
          </h1>
          <p className="text-muted-foreground">
            Answer a few questions and let us match you with your ideal electric vehicle
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-secondary mb-8 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {chatHistory.map((chat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg inline-block">{chat.question}</div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-lg inline-block">
                    {chat.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {currentQuestionIndex < questionKeys.length && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <div className="bg-primary text-primary-foreground p-3 rounded-lg inline-block">
                  {isTyping ? (
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-current rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  ) : (
                    currentQuestion.question
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <AnimatePresence mode="wait">
                  {!isTyping &&
                    currentQuestion.options.map((option, index) => (
                      <motion.div
                        key={option.value}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Button
                          onClick={() => handleAnswer(option.value, option.label)}
                          className="w-full justify-start text-left transition-all hover:translate-x-1"
                          variant="outline"
                        >
                          {option.label}
                        </Button>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

