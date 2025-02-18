"use client";

import React, { PropsWithChildren, useCallback, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { formatDate, addDays } from "date-fns";

type LearnMoreDialogProps = PropsWithChildren<{
  vehicleModel: string;
  userResponses: Record<string, string>;
}>;

export function LearnMoreDialog({
  vehicleModel,
  userResponses,
  children,
}: LearnMoreDialogProps) {
  const [formData, setFormData] = useState({
    appointment: "",
    name: "",
    email: "",
    telephone: "",
    zipcode: "",
    feedback: "",
  });

  const handleInputChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [setFormData],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await fetch("/api/submit-lead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            vehicleModel,
            userResponses,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        alert("Thank you for your interest! We'll be in touch soon.");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting your request. Please try again.");
      } finally {
      }
    },
    [formData, vehicleModel, userResponses],
  );
  const appointments = [
    `${formatDate(addDays(new Date(), 1), "dd.MM.yyyy")} 17:30`,
    `${formatDate(addDays(new Date(), 2), "dd.MM.yyyy")} 18:00`,
    `${formatDate(addDays(new Date(), 3), "dd.MM.yyyy")} 16:00`,
    `${formatDate(addDays(new Date(), 4), "dd.MM.yyyy")} 16:15`,
    `${formatDate(addDays(new Date(), 5), "dd.MM.yyyy")} 17:00`,
    `${formatDate(addDays(new Date(), 6), "dd.MM.yyyy")} 19:00`,
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" tabIndex={1}>
        <DialogHeader>
          <DialogTitle>Probefahrt anfragen</DialogTitle>
          <DialogDescription>{vehicleModel}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Termin</Label>
            <Select
              name="name"
              value={formData.appointment}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, appointment: value }))
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Termin auswählen" />
              </SelectTrigger>
              <SelectContent>
                {appointments.map((appointment) => (
                  <SelectItem key={appointment} value={appointment}>
                    {appointment}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telephone">Telefon</Label>
            <Input
              id="telephone"
              name="telephone"
              type="tel"
              value={formData.telephone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zipcode">Postleitzahl</Label>
            <Input
              id="zipcode"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">Kommentar</Label>
            <Textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">Absenden</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
