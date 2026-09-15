import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sanitizeLead } from "@/lib/lead";
import { addLead, seedDemoLeads } from "@/lib/lead-store";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const rateLimitWindowMs = 60_000;
const maxRequestsPerMinute = 5;

function checkRateLimit(ip: string) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return true;
  }

  if (record.count >= maxRequestsPerMinute) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const formData = await request.formData();
    const payload = Object.fromEntries(formData.entries());

    const parsed = sanitizeLead({
      vehicleNumber: payload.vehicleNumber,
      mobileNumber: payload.mobileNumber,
      challanNumber: payload.challanNumber,
      state: payload.state,
      source: (payload.source as string) || "INSTAGRAM",
      utm_source: payload.utm_source,
      utm_medium: payload.utm_medium,
      utm_campaign: payload.utm_campaign,
      utm_content: payload.utm_content,
      utm_term: payload.utm_term,
      landingPage: payload.landingPage,
      referrer: payload.referrer,
      honeypot: payload.honeypot,
      status: "NEW",
    });

    if (parsed.honeypot) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    seedDemoLeads();
    addLead(parsed);

    return NextResponse.json({
      success: true,
      message: "Request received successfully. Our team will contact you shortly.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid form data" }, { status: 400 });
    }

    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
