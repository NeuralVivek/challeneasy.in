import { leadStatusEnum, type LeadInput, type LeadStatus } from "@/lib/lead";

export type StoredLead = LeadInput & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

const leadStore: StoredLead[] = [];

export function addLead(lead: LeadInput): StoredLead {
  const now = new Date().toISOString();
  const stored: StoredLead = {
    ...lead,
    _id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
  };

  leadStore.unshift(stored);
  return stored;
}

export function listLeads(): StoredLead[] {
  return [...leadStore];
}

export function getLeadById(id: string): StoredLead | undefined {
  return leadStore.find((lead) => lead._id === id);
}

export function updateLeadStatus(id: string, status: LeadStatus): StoredLead | undefined {
  const index = leadStore.findIndex((lead) => lead._id === id);
  if (index === -1) return undefined;

  const updated = {
    ...leadStore[index],
    status,
    updatedAt: new Date().toISOString(),
  };

  leadStore[index] = updated;
  return updated;
}

export function getLeadStats() {
  const total = leadStore.length;
  const todays = leadStore.filter((lead) => {
    const created = new Date(lead.createdAt);
    const today = new Date();
    return created.toDateString() === today.toDateString();
  }).length;

  const pending = leadStore.filter((lead) => !["RESOLVED", "CLOSED"].includes(lead.status)).length;
  const resolved = leadStore.filter((lead) => ["RESOLVED", "CLOSED"].includes(lead.status)).length;

  return { total, todays, pending, resolved };
}

export function seedDemoLeads() {
  if (leadStore.length > 0) return leadStore;

  const demoLeads: LeadInput[] = [
    {
      vehicleNumber: "DL01AB1234",
      mobileNumber: "9876543210",
      challanNumber: "DL-10234",
      state: "Delhi",
      source: "INSTAGRAM",
      status: "NEW",
      utm_source: "instagram",
      utm_medium: "social",
      utm_campaign: "challan_q4",
      utm_content: "hero",
      utm_term: "",
      landingPage: "/",
      referrer: "https://instagram.com",
      notes: "",
      honeypot: "",
    },
    {
      vehicleNumber: "HR26CD9876",
      mobileNumber: "9123456789",
      challanNumber: "HR-77219",
      state: "Haryana",
      source: "FACEBOOK",
      status: "CONTACTED",
      utm_source: "facebook",
      utm_medium: "social",
      utm_campaign: "vehicle_help",
      utm_content: "ad_1",
      utm_term: "",
      landingPage: "/",
      referrer: "https://facebook.com",
      notes: "",
      honeypot: "",
    },
  ];

  demoLeads.forEach((lead) => addLead(lead));
  return leadStore;
}
