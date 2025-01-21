"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

export default function QuestionnairePage() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dailyUsage: undefined,
      passengers: undefined,
      longDistanceFrequency: undefined,
      luggageSpace: undefined,
      residence: undefined,
      ecoPreference: undefined,
      usageFrequency: undefined,
      chargingOption: undefined,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const matchingResults = await matchVehicles(formData)
    router.push("/results?matches=" + encodeURIComponent(JSON.stringify(matchingResults)))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find Your Perfect Electric Vehicle</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="dailyUsage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What's your typical daily usage?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select daily usage" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="shortCityTrips">Short City Trips</SelectItem>
                    <SelectItem value="commuting">Commuting</SelectItem>
                    <SelectItem value="mixedUse">Mixed Use</SelectItem>
                    <SelectItem value="longTrips">Long Trips</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Choose the option that best describes your daily driving habits.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passengers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How many passengers do you usually carry?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select passenger count" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="alone">Alone</SelectItem>
                    <SelectItem value="withOnePerson">With One Person</SelectItem>
                    <SelectItem value="smallFamily">Small Family</SelectItem>
                    <SelectItem value="largeFamily">Large Family</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>This helps us recommend vehicles with appropriate seating capacity.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="longDistanceFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often do you make long-distance trips?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select long-distance frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="fewTimesPerYear">A Few Times Per Year</SelectItem>
                    <SelectItem value="regularly">Regularly</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>This helps us determine the range requirements for your vehicle.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="luggageSpace"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How much luggage space do you typically need?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select luggage space" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>This helps us recommend vehicles with appropriate cargo capacity.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="residence"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Where do you live?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select residence type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="city">City</SelectItem>
                    <SelectItem value="suburb">Suburb</SelectItem>
                    <SelectItem value="rural">Rural</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Your location can affect the type of EV that's most suitable for you.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ecoPreference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How important is eco-friendliness to you?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select eco preference" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="veryImportant">Very Important</SelectItem>
                    <SelectItem value="somewhatImportant">Somewhat Important</SelectItem>
                    <SelectItem value="notImportant">Not Important</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  This helps us prioritize vehicles based on their environmental impact.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usageFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often do you plan to use the vehicle?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select usage frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="rarely">Rarely</SelectItem>
                    <SelectItem value="regularly">Regularly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>This helps us recommend vehicles based on your usage patterns.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="chargingOption"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What charging options do you have access to?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select charging option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="privateGarage">Private Garage</SelectItem>
                    <SelectItem value="streetAccess">Street Access</SelectItem>
                    <SelectItem value="noAccess">No Access</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Your charging options can influence the type of EV that's most convenient for you.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Find My Match</Button>
        </form>
      </Form>
    </div>
  )
}

