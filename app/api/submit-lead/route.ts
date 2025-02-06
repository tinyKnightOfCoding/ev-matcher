import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const leadFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  telephone: z.string().min(1),
  zipcode: z.string().min(1),
  feedback: z.string().min(1),
  vehicleModel: z.string(),
  userResponses: z.record(z.string(), z.string()),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = leadFormSchema.parse(body);
    console.log(JSON.stringify(validatedData));

    const webhookUrl = process.env.WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Webhook URL is not configured" },
        { status: 500 },
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to submit lead form" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing lead form submission:", error);
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }
}
