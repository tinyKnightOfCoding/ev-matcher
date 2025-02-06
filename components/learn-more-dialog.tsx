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

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" tabIndex={1}>
        <DialogHeader>
          <DialogTitle>Lern mehr zum {vehicleModel}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
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
