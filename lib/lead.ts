import { z } from "zod";

export const leadStatusEnum = [
  "NEW",
  "CONTACTED",
  "IN_PROGRESS",
  "RESOLVED",
  "CLOSED",
] as const;

export const leadSourceEnum = [
  "INSTAGRAM",
  "FACEBOOK",
  "GOOGLE",
  "ORGANIC",
  "DIRECT",
  "WHATSAPP",
] as const;

export const leadSchema = z.object({
  vehicleNumber: z
    .string()
    .trim()
    .min(3, "Vehicle number is required.")
    .max(20, "Vehicle number is too long.")
    .regex(/^[A-Z0-9\-\s]+$/i, "Use a valid vehicle number."),
  mobileNumber: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/, "Use a valid mobile number."),
  challanNumber: z
    .string()
    .trim()
    .max(40, "Challan number is too long.")
    .optional()
    .or(z.literal(""))
    .transform((value) => value ?? ""),
  state: z.string().trim().min(2, "Please select a state.").max(60),
  source: z.enum(leadSourceEnum).default("INSTAGRAM"),
  utm_source: z.string().trim().max(80).optional().or(z.literal("")).transform((value) => value ?? ""),
  utm_medium: z.string().trim().max(80).optional().or(z.literal("")).transform((value) => value ?? ""),
  utm_campaign: z.string().trim().max(120).optional().or(z.literal("")).transform((value) => value ?? ""),
  utm_content: z.string().trim().max(120).optional().or(z.literal("")).transform((value) => value ?? ""),
  utm_term: z.string().trim().max(120).optional().or(z.literal("")).transform((value) => value ?? ""),
  landingPage: z.string().trim().max(200).optional().or(z.literal("")).transform((value) => value ?? ""),
  referrer: z.string().trim().max(200).optional().or(z.literal("")).transform((value) => value ?? ""),
  notes: z.string().trim().max(1200).optional().or(z.literal("")).transform((value) => value ?? ""),
  status: z.enum(leadStatusEnum).default("NEW"),
  honeypot: z.string().trim().max(10).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type LeadStatus = (typeof leadStatusEnum)[number];
export type LeadSource = (typeof leadSourceEnum)[number];

export const sanitizeLead = (payload: unknown): LeadInput => {
  const parsed = leadSchema.parse(payload);

  return {
    ...parsed,
    vehicleNumber: parsed.vehicleNumber.toUpperCase(),
    mobileNumber: parsed.mobileNumber.replace(/\s+/g, ""),
    challanNumber: parsed.challanNumber.trim(),
    state: parsed.state.trim(),
  };
};
