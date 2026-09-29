"use client";

import { useState } from "react";
import { z } from "zod";
import { statesList } from "@/lib/site";

const formSchema = z.object({
  vehicleNumber: z.string().trim().min(1, "Vehicle number is required.").transform((value) => value.toUpperCase()),
  mobileNumber: z.string().trim().regex(/^[6-9]\d{9}$/, "Use a valid mobile number."),
  challanNumber: z.string().trim().optional().or(z.literal("")),
  state: z.string().trim().min(1, "Please select a state."),
});

type FormValues = {
  vehicleNumber: string;
  mobileNumber: string;
  challanNumber: string;
  state: string;
};

const initialValues: FormValues = {
  vehicleNumber: "",
  mobileNumber: "",
  challanNumber: "",
  state: "Delhi",
};

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState<FormValues>(initialValues);
  const [error, setError] = useState("");

  const handleChange = (field: keyof FormValues, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please complete the form.");
      return;
    }

    setError("");

    const { vehicleNumber, mobileNumber, challanNumber, state } = result.data;
    const message = [
      "Hello ChallanEasy, I need assistance with my vehicle challan.",
      "",
      `Vehicle Number: ${vehicleNumber}`,
      `Mobile Number: ${mobileNumber}`,
      challanNumber ? `Challan Number: ${challanNumber}` : null,
      `State: ${state}`,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    const whatsappUrl = `https://wa.me/917678359217?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={`rounded-2xl border border-slate-200 bg-white ${compact ? "p-4" : "p-4 shadow-sm sm:p-5"}`}>
      <div className="mb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-600">Quick Assistance</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">Request a challan review</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="vehicleNumber" className="mb-1.5 block text-sm font-medium text-slate-700">
              Vehicle Number
            </label>
            <input
              id="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={(event) => handleChange("vehicleNumber", event.target.value)}
              placeholder="DL01AB1234"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="mobileNumber" className="mb-1.5 block text-sm font-medium text-slate-700">
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              inputMode="numeric"
              value={formData.mobileNumber}
              onChange={(event) => handleChange("mobileNumber", event.target.value)}
              placeholder="98765 43210"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="challanNumber" className="mb-1.5 block text-sm font-medium text-slate-700">
              Challan Number (optional)
            </label>
            <input
              id="challanNumber"
              value={formData.challanNumber}
              onChange={(event) => handleChange("challanNumber", event.target.value)}
              placeholder="Optional"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="state" className="mb-1.5 block text-sm font-medium text-slate-700">
              State
            </label>
            <select
              id="state"
              value={formData.state}
              onChange={(event) => handleChange("state", event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
            >
              {statesList.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="pt-1">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Get Challan Assistance
            </button>
          </div>

          <p className="text-xs leading-5 text-slate-500">
            Your vehicle and contact details are kept private and are used only to assist with your request.
          </p>
      </form>
    </div>
  );
}
