export type TopicSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type TopicPageData = {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  sections: TopicSection[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
  kind: "service" | "guide";
};

export const topicPages: Record<string, TopicPageData> = {
  "/delhi-challan-settlement": {
    path: "/delhi-challan-settlement",
    title: "Delhi Challan Settlement Help | Traffic Challan Guidance",
    description: "Understand Delhi traffic challan status, payment, court and Lok Adalat routes with independent guidance from ChallanEasy.",
    h1: "Delhi Challan Settlement: Understand Your Options",
    eyebrow: "Delhi traffic challan guidance",
    intro: "A Delhi traffic challan can have different next steps depending on the offence, issuing authority, current status and applicable process. This page explains how to review the record without assuming that every challan qualifies for settlement or reduction.",
    kind: "service",
    sections: [
      { heading: "Start with the official Delhi challan record", paragraphs: ["Use the official e-Challan or relevant Delhi traffic authority resource to verify the vehicle number, challan number, offence, amount and current status. A record may show a payment route, a notice, court-related information or another instruction.", "ChallanEasy is an independent private assistance service. We can help explain the information you have, but we cannot access, alter or decide an official record."], bullets: ["Confirm the issuing authority and challan date", "Check whether the record is payable, pending or referred", "Keep the official receipt or notice for your records"] },
      { heading: "Delhi court and Lok Adalat context", paragraphs: ["Some matters may be associated with a court or Virtual Court process, while eligible matters may be considered through a notified Lok Adalat process. The applicable authority decides eligibility, date, amount and outcome.", "A Delhi location alone does not establish eligibility. Verify current instructions through the notice, official portal or competent authority before making a payment or attending a proceeding."], bullets: ["Do not assume an old challan is eligible", "Do not rely on an advertised fixed discount", "Follow the date and document instructions in the official notice"] },
      { heading: "How ChallanEasy can help", paragraphs: ["We can help you organize the basic details, understand common status terms and identify questions to ask about payment, court or other available routes. Our assistance does not replace legal advice or an official decision.", "Share only the information needed for an initial review. Never share a password, PIN or one-time password."], bullets: ["Vehicle registration number", "Challan number or notice reference", "Current status and amount shown", "Court or Virtual Court information, where applicable"] },
    ],
    faqs: [
      { question: "How can I check a Delhi traffic challan?", answer: "Use the relevant official e-Challan or Delhi traffic authority portal and verify the vehicle or challan details shown there. ChallanEasy can help explain the record after you check it." },
      { question: "Can every Delhi challan be settled through Lok Adalat?", answer: "No. Eligibility depends on the offence, status, applicable rules and the notified process. The competent authority decides whether a matter can be considered and what outcome applies." },
      { question: "Does Delhi challan settlement guarantee a reduction?", answer: "No. Payment, settlement and any amount are controlled by the applicable official process. ChallanEasy does not promise cancellation, reduction or approval." },
    ],
    related: [{ label: "Check traffic challan status", href: "/check-challan" }, { label: "Court challan guidance", href: "/court-challan-settlement" }, { label: "Lok Adalat challan information", href: "/challan-lok-adalat" }],
  },
  "/challan-lok-adalat": {
    path: "/challan-lok-adalat",
    title: "Lok Adalat Challan Settlement | Eligibility and Process",
    description: "Learn how traffic challans may be handled through Lok Adalat, how to verify eligibility and why a reduction is never guaranteed.",
    h1: "Lok Adalat Challan Settlement: Process and Limits",
    eyebrow: "Lok Adalat information",
    intro: "Lok Adalat is a statutory dispute-resolution forum. Certain matters may be considered through a notified process, but not every traffic challan is eligible and no fixed reduction should be assumed.",
    kind: "service",
    sections: [
      { heading: "What Lok Adalat means for a traffic challan", paragraphs: ["A Lok Adalat may help resolve eligible disputes through a settlement-based process under the applicable legal framework. A traffic challan must meet the relevant requirements before it can be considered.", "The existence of a pending challan, an old challan or a Delhi location does not by itself prove eligibility."], bullets: ["Check the offence and current status", "Confirm the notified date and venue or online instructions", "Use the relevant authority's notice as the source of truth"] },
      { heading: "How to verify the process", paragraphs: ["Start with the official challan record and any court or authority notice. Verify whether the matter is listed, what documents are requested and whether attendance or another action is required.", "Dates, eligibility rules and procedures can change. Do not rely on social media posts, unofficial payment links or promises from a service provider."], bullets: ["Official challan or court reference", "Valid identity or vehicle documents only when requested", "Payment or settlement receipt after the process"] },
      { heading: "Payment, settlement and reduction are different", paragraphs: ["A normal online payment is not the same as a Lok Adalat proceeding. A settlement outcome is decided within the applicable process, and the final record should be verified after completion.", "ChallanEasy can help you understand the information and prepare practical questions. We do not issue notices, set dates, determine eligibility or guarantee a reduction, cancellation or result."], bullets: ["Never share OTPs or account credentials", "Confirm the final amount through the official channel", "Keep proof of any completed official transaction"] },
    ],
    faqs: [
      { question: "Can I take any traffic challan to Lok Adalat?", answer: "No. Only matters that meet the applicable requirements and are accepted through the notified process may be considered. Verify the record and current instructions with the relevant authority." },
      { question: "Does Lok Adalat always reduce a challan amount?", answer: "No. A reduction is not automatic or guaranteed. The authority or forum handling the matter determines the applicable outcome." },
      { question: "What should I verify before a Lok Adalat date?", answer: "Verify the challan reference, listing or notice, date, venue or online instructions, documents required and the official source of any payment information." },
    ],
    related: [{ label: "Delhi challan settlement", href: "/delhi-challan-settlement" }, { label: "Court challan guidance", href: "/court-challan-settlement" }, { label: "How Lok Adalat works", href: "/guides/challan-settlement-lok-adalat" }],
  },
  "/court-challan-settlement": {
    path: "/court-challan-settlement",
    title: "Court Challan Settlement Help | Virtual Court Guidance",
    description: "Understand court challans, Virtual Court instructions and the difference between court processes and ordinary online challan payment.",
    h1: "Court Challan Settlement and Virtual Court Guidance",
    eyebrow: "Court challan assistance",
    intro: "A court challan is not the same as an ordinary payable challan. The correct next step depends on the notice, court or Virtual Court record, offence and instructions issued by the competent authority.",
    kind: "service",
    sections: [
      { heading: "What is a court challan?", paragraphs: ["A challan may be associated with court or Virtual Court when the record follows a process beyond a straightforward online payment. The status and instructions shown in the official system or notice are more important than the label used in a message.", "Read the reference number, date, offence, authority and next action carefully. If details conflict, contact the relevant official authority before acting."], bullets: ["Review the official notice or case information", "Check whether an online response or appearance is required", "Keep copies of notices and receipts"] },
      { heading: "Court process versus online payment", paragraphs: ["An ordinary online payment may close a payable record after the official system confirms it. A court or Virtual Court matter can have separate instructions, deadlines or document requirements.", "Do not treat a payment link from an unknown message as proof that a court matter is resolved. Verify the domain and record through the official source."], bullets: ["Use official portals for status and payment", "Do not ignore a court or Virtual Court notice", "Check the updated status after any action"] },
      { heading: "Practical help without legal promises", paragraphs: ["ChallanEasy can help explain general terminology and organize the details you need to review. We are not a court, law firm or government authority and cannot decide the procedure or outcome.", "For a legal interpretation or representation question, consult a qualified legal professional or the competent authority."], bullets: ["Challan number and vehicle number", "Notice or Virtual Court reference", "Current status and official instructions"] },
    ],
    faqs: [
      { question: "Can a court challan be paid online?", answer: "Some matters may provide an official online route, while others require a different court or Virtual Court action. Follow the instructions attached to the current official record." },
      { question: "What happens if a traffic challan goes to court?", answer: "The matter follows the process of the court or platform handling it. Review the notice, deadlines and required action, and verify the current status through the official source." },
      { question: "Can ChallanEasy guarantee a court result?", answer: "No. ChallanEasy provides independent assistance and cannot guarantee approval, reduction, cancellation, settlement or any court outcome." },
    ],
    related: [{ label: "Check challan status", href: "/check-challan" }, { label: "Pending challan help", href: "/pending-challan" }, { label: "Traffic challan settlement", href: "/challan-settlement" }],
  },
  "/pending-challan": {
    path: "/pending-challan",
    title: "Pending Challan Help | Check and Understand Unpaid Challans",
    description: "Learn what a pending traffic challan means, how to check its status and what to review before payment or follow-up.",
    h1: "Pending Challan: Check the Status and Next Step",
    eyebrow: "Pending challan guidance",
    intro: "A pending challan means the official record has not been marked complete. It may need payment, a response, court action or another update. The status alone does not establish that a settlement or reduction is available.",
    kind: "service",
    sections: [
      { heading: "Why a challan may remain pending", paragraphs: ["A record can remain pending because payment has not been completed, a receipt has not yet been reflected, the matter has been referred, or another process is still open. Multiple challans for one vehicle may also have different statuses.", "Use the official record rather than an old screenshot or an unverified message to understand what is current."], bullets: ["Payment is incomplete or not yet reflected", "The matter has court or Virtual Court instructions", "The record needs an authority or administrative update"] },
      { heading: "How to check a pending challan", paragraphs: ["Open the official e-Challan or relevant authority portal and search using the details it requests. Review the offence, date, amount, issuing authority, status and any instruction before choosing an action.", "If the record is unclear, keep the reference details ready for a review. Do not send passwords, PINs or OTPs."], bullets: ["Vehicle registration number", "Challan number and date", "Current amount and status", "Receipt or notice, if available"] },
      { heading: "What to do next", paragraphs: ["A pending record may be payable online, connected to a court process or subject to another official route. Confirm which path applies before making a payment or assuming that an old record can be settled through Lok Adalat.", "ChallanEasy can help explain common status terms and organize questions, while the competent authority controls the final process and record."], bullets: ["Verify the official payment channel", "Follow any court or notice deadline", "Check the status again after action"] },
    ],
    faqs: [
      { question: "Does pending mean my challan can be settled?", answer: "No. Pending is a status, not an eligibility decision. The offence, authority, applicable rules and current process determine the available route." },
      { question: "What happens if I do not pay a traffic challan?", answer: "Consequences depend on the offence, jurisdiction, status and applicable rules. Review the official record and any notice rather than assuming one outcome applies to every challan." },
      { question: "Can multiple pending challans be handled together?", answer: "Not necessarily. Each challan can have a different authority, offence or status. Review them individually before assuming a common process is available." },
    ],
    related: [{ label: "Check challan status", href: "/check-challan" }, { label: "Challan settlement process", href: "/challan-settlement" }, { label: "Court challan guidance", href: "/court-challan-settlement" }],
  },
  "/challan-payment": {
    path: "/challan-payment",
    title: "Traffic Challan Payment | Use Official Payment Channels",
    description: "Understand traffic challan payment, e-Challan verification and the difference between official payment and private assistance.",
    h1: "Traffic Challan Payment: Verify Before You Pay",
    eyebrow: "Payment guidance",
    intro: "Traffic challan payment should be completed through the relevant official channel after you verify the vehicle, offence, amount and current status. ChallanEasy does not collect government fines or replace the official payment system.",
    kind: "service",
    sections: [
      { heading: "Use the official payment route", paragraphs: ["Begin by opening the official e-Challan or traffic authority portal and checking the record. Confirm that the vehicle number, challan reference, offence and amount match before proceeding.", "Avoid links received through unexpected messages. Type the official address yourself or reach it through a trusted government source."], bullets: ["Verify the domain before entering details", "Check the final payable amount", "Save the official receipt"] },
      { heading: "Payment is different from settlement", paragraphs: ["Payment may resolve a challan that is available for online payment. A court, Virtual Court or Lok Adalat matter can follow another process and should not be treated as an ordinary payment record.", "A private assistance service can explain general steps, but it cannot confirm eligibility, change an official amount or guarantee a result."], bullets: ["Check whether the record is payable", "Read any court or notice instruction", "Verify the status after payment"] },
      { heading: "Stay secure while paying", paragraphs: ["Never share a one-time password, UPI PIN, card PIN or account password with a service provider. Enter payment credentials only on the trusted official payment flow.", "If a payment fails or the status does not update, keep the transaction reference and contact the official support channel."], bullets: ["Do not share OTPs or PINs", "Keep transaction references private", "Use official support for failed payments"] },
    ],
    faqs: [
      { question: "Where should I pay a traffic challan?", answer: "Use the official e-Challan, traffic police or other competent authority payment channel shown for your record. Verify the domain and details before paying." },
      { question: "Can ChallanEasy take my challan payment?", answer: "No. ChallanEasy is an independent assistance platform and does not replace the official government payment system. Use official channels for payments and receipts." },
      { question: "How do I know whether payment was successful?", answer: "Keep the official transaction reference and check the record again through the official portal. Contact the official payment support channel if the status does not update." },
    ],
    related: [{ label: "Check challan status", href: "/check-challan" }, { label: "Pending challan help", href: "/pending-challan" }, { label: "Challan settlement guidance", href: "/challan-settlement" }],
  },
  "/guides/how-to-settle-traffic-challan": {
    path: "/guides/how-to-settle-traffic-challan",
    title: "How to Settle a Traffic Challan in India: Complete Guide",
    description: "A practical guide to checking, paying and understanding traffic challan, court, Virtual Court and Lok Adalat processes in India.",
    h1: "How to Settle a Traffic Challan in India",
    eyebrow: "Challan guide",
    intro: "The phrase traffic challan settlement can describe different official routes. This guide walks through the checks that help you identify the correct route without promising a reduction or outcome.",
    kind: "guide",
    sections: [
      { heading: "1. Check the current challan status", paragraphs: ["Use the official portal connected to the issuing authority. Review the challan number, vehicle number, offence, date, amount and status. This is the foundation for every later step."] },
      { heading: "2. Identify the route", paragraphs: ["A record may be payable online, connected to Virtual Court or court instructions, or potentially considered through a notified Lok Adalat process. Not every record qualifies for every route.", "Payment resolves only what the official system says is payable. A settlement process has its own rules and authority."], bullets: ["Ordinary official payment", "Court or Virtual Court instructions", "Notified Lok Adalat process where eligible"] },
      { heading: "3. Verify the final status", paragraphs: ["After any official action, save the receipt or order and check the record again. Common mistakes include paying through an unverified link, confusing multiple challans and assuming an old record is automatically eligible for reduction."] },
    ],
    faqs: [
      { question: "Can every traffic challan be settled?", answer: "No. The available route depends on the offence, status, jurisdiction and applicable rules. Verify the current official record." },
      { question: "Can a traffic challan amount be reduced?", answer: "A reduction is not automatic or guaranteed. Only the applicable official process can determine the amount and outcome." },
      { question: "What is the safest first step?", answer: "Check the record through the relevant official portal, confirm the status and follow the instruction attached to that record." },
    ],
    related: [{ label: "Check traffic challan status", href: "/check-challan" }, { label: "Pending challan guide", href: "/guides/unpaid-traffic-challan" }, { label: "Court versus pending challan", href: "/guides/court-vs-pending-challan" }],
  },
  "/guides/challan-settlement-lok-adalat": {
    path: "/guides/challan-settlement-lok-adalat",
    title: "How Traffic Challan Settlement Through Lok Adalat Works",
    description: "Learn what Lok Adalat is, how traffic challan eligibility is verified and what information to check before a notified process.",
    h1: "How Traffic Challan Settlement Through Lok Adalat Works",
    eyebrow: "Lok Adalat guide",
    intro: "Lok Adalat can provide a settlement forum for eligible matters, but it is not a general discount scheme for every traffic challan. Current notices and competent authorities control the process.",
    kind: "guide",
    sections: [
      { heading: "What is Lok Adalat?", paragraphs: ["Lok Adalat is a statutory forum for resolving certain disputes through a settlement-based process. Traffic matters can be considered only when they meet the applicable requirements and are accepted through the notified route."] },
      { heading: "How to check eligibility", paragraphs: ["Check the official challan and any current notice for the offence, status, listing, date, venue and document requirements. A location, age of challan or online advertisement is not enough to establish eligibility."] },
      { heading: "What happens after the process", paragraphs: ["Keep the official order, receipt or other proof and verify the updated record. Do not assume that attending a date or submitting a request automatically closes a challan.", "No fixed settlement amount, reduction, cancellation or approval can be promised in advance."] },
    ],
    faqs: [
      { question: "How do I find a Lok Adalat date?", answer: "Use current information from the relevant official court, authority or notice. Dates and procedures can change, so verify before relying on a third-party post." },
      { question: "Do I need documents?", answer: "The required documents depend on the official process. Read the notice and provide only the information requested by the competent authority." },
      { question: "Is a Lok Adalat settlement guaranteed?", answer: "No. Eligibility, amount and outcome are determined through the applicable process and authority." },
    ],
    related: [{ label: "Lok Adalat assistance", href: "/challan-lok-adalat" }, { label: "Delhi challan settlement", href: "/delhi-challan-settlement" }, { label: "Traffic challan settlement", href: "/challan-settlement" }],
  },
  "/guides/unpaid-traffic-challan": {
    path: "/guides/unpaid-traffic-challan",
    title: "What Happens If You Don't Pay a Traffic Challan?",
    description: "Understand unpaid and old traffic challan records, possible next steps and how to verify the current status safely.",
    h1: "What Happens If You Don't Pay a Traffic Challan?",
    eyebrow: "Pending challan guide",
    intro: "An unpaid traffic challan can remain pending or move into another official process depending on the offence, authority and applicable rules. There is no single consequence that applies to every record.",
    kind: "guide",
    sections: [
      { heading: "Start with the current record", paragraphs: ["Check the official record instead of relying on memory, an old message or a screenshot. Confirm whether the challan is still payable, has a notice, has been referred or has another status."] },
      { heading: "Possible routes", paragraphs: ["Some records remain available for official payment. Others may include court or Virtual Court instructions, a deadline or a requirement to follow a different process. The authority and status determine what applies.", "Do not assume that an old challan has disappeared or automatically qualifies for settlement."] },
      { heading: "Avoid common mistakes", paragraphs: ["Use the official portal, verify the amount and keep proof of any transaction. Do not share OTPs or PINs with anyone offering help, and do not pay through an unverified link."] },
    ],
    faqs: [
      { question: "Can an old traffic challan still be pending?", answer: "It may be. Check the current official record and status rather than assuming that age closes or cancels a challan." },
      { question: "Can unpaid challans affect a vehicle transaction?", answer: "Possible effects depend on the record, authority and applicable rules. Verify the current status before a sale, transfer or related transaction." },
      { question: "Should I ignore a pending challan notice?", answer: "No. Review the notice and official record promptly so you understand any deadline or required action." },
    ],
    related: [{ label: "Pending challan assistance", href: "/pending-challan" }, { label: "Check challan status", href: "/check-challan" }, { label: "Court challan guide", href: "/guides/court-vs-pending-challan" }],
  },
  "/guides/court-vs-pending-challan": {
    path: "/guides/court-vs-pending-challan",
    title: "Court Challan vs Pending Challan: What's the Difference?",
    description: "Compare pending, paid and court challan statuses, including Virtual Court and Lok Adalat considerations.",
    h1: "Court Challan vs Pending Challan: What's the Difference?",
    eyebrow: "Status guide",
    intro: "Pending and court challan are not interchangeable labels. Understanding the status shown in the official record helps you follow the correct instructions.",
    kind: "guide",
    sections: [
      { heading: "Pending challan", paragraphs: ["Pending generally means the official record has not been completed. It may be payable, awaiting an update or connected to another instruction. Read the details rather than relying on the single status word."] },
      { heading: "Court or Virtual Court challan", paragraphs: ["A court-related record follows instructions from the court or Virtual Court platform handling it. It may require an online response, payment through a specific route, a document or another action.", "Do not treat a court record as an ordinary payment page without checking the notice."] },
      { heading: "Paid and closed status", paragraphs: ["A successful transaction should be supported by an official receipt and a status update. If the record still appears pending, keep the transaction reference and contact official support.", "Lok Adalat is a separate notified process for eligible matters; it is not another name for every pending or court challan."] },
    ],
    faqs: [
      { question: "Is every pending challan a court challan?", answer: "No. Pending is a broad status. A record may be payable or may have separate court-related instructions; check the details in the official system." },
      { question: "Can a court challan become a pending challan?", answer: "Statuses can change as a matter moves through a process. Use the current official record and notice as the source of truth." },
      { question: "What should I do when the status is unclear?", answer: "Record the reference details, review the official notice or portal instructions and seek assistance from the relevant authority or a qualified professional where needed." },
    ],
    related: [{ label: "Court challan assistance", href: "/court-challan-settlement" }, { label: "Pending challan help", href: "/pending-challan" }, { label: "How to check challan", href: "/guides/how-to-check-traffic-challan" }],
  },
  "/guides/how-to-check-traffic-challan": {
    path: "/guides/how-to-check-traffic-challan",
    title: "How to Check Traffic Challan Status Online",
    description: "Learn how to check e-Challan and pending traffic challan status through official resources and what details to review.",
    h1: "How to Check Traffic Challan Status Online",
    eyebrow: "Challan status guide",
    intro: "The safest way to check a traffic challan is through the official portal or authority connected to the record. ChallanEasy can explain information you have, but it is not the government e-Challan system.",
    kind: "guide",
    sections: [
      { heading: "Use the official e-Challan resource", paragraphs: ["Open the official e-Challan portal and enter the vehicle number, challan number or other details it requests. Check the domain before entering information and avoid unofficial payment links."] },
      { heading: "Review more than the amount", paragraphs: ["Read the offence, date, issuing authority, status, payment instructions and any court or Virtual Court reference. Multiple records can appear for one vehicle and may need separate action."] },
      { heading: "After checking", paragraphs: ["Save the reference and receipt where relevant. If the status is pending or confusing, compare the official notice with the record and ask the relevant authority or an independent assistance service about the terminology."] },
    ],
    faqs: [
      { question: "Can I check a challan by vehicle number?", answer: "The official e-Challan or authority portal may offer vehicle-number search along with other options. Use the fields and instructions shown on the official resource." },
      { question: "Is ChallanEasy the official e-Challan portal?", answer: "No. ChallanEasy is an independent private assistance platform. Use the official government portal to check records and make payments." },
      { question: "What if my payment is not reflected?", answer: "Keep the official transaction reference, check the record again and contact the official payment support channel if the status remains unchanged." },
    ],
    related: [{ label: "Open check challan page", href: "/check-challan" }, { label: "Traffic challan payment", href: "/challan-payment" }, { label: "Pending challan guide", href: "/guides/unpaid-traffic-challan" }],
  },
  "/guides/delhi-traffic-challan-guide": {
    path: "/guides/delhi-traffic-challan-guide",
    title: "Delhi Traffic Challan: Check, Pay and Understand Your Options",
    description: "A Delhi-specific guide to checking, paying and understanding pending, court, Virtual Court and Lok Adalat challan options.",
    h1: "Delhi Traffic Challan: Check, Pay and Understand Your Options",
    eyebrow: "Delhi traffic challan guide",
    intro: "Delhi traffic challan records can follow different routes depending on the issuing authority, offence and current status. Use the official record first, then evaluate the instruction that applies to that matter.",
    kind: "guide",
    sections: [
      { heading: "Check the Delhi challan details", paragraphs: ["Verify the vehicle number, challan reference, offence, date, amount and issuing authority through the relevant official resource. A Delhi location does not make every record eligible for the same process."] },
      { heading: "Payment, court and Virtual Court", paragraphs: ["Some records may be available for official online payment. Others may show court or Virtual Court instructions. Follow the notice and confirm the final status after action.", "Do not use an unofficial link or assume that a payment request resolves a court matter."] },
      { heading: "Lok Adalat and settlement information", paragraphs: ["Eligible matters may sometimes be considered through a notified Lok Adalat process, but eligibility and outcome are decided by the relevant authority. ChallanEasy can provide general assistance and does not promise a discount, cancellation or settlement."] },
    ],
    faqs: [
      { question: "Where can I check a Delhi traffic challan?", answer: "Use the relevant official e-Challan or Delhi traffic authority resource. Verify the record and instructions shown there." },
      { question: "Can a Delhi challan be settled online?", answer: "Some records may have an official payment route; court, Virtual Court and Lok Adalat matters can follow different processes. Check the current record." },
      { question: "Does ChallanEasy provide government challan services?", answer: "No. ChallanEasy is an independent private assistance service and is not affiliated with a government department, traffic police authority or court." },
    ],
    related: [{ label: "Delhi challan settlement help", href: "/delhi-challan-settlement" }, { label: "Check challan status", href: "/check-challan" }, { label: "Lok Adalat guide", href: "/guides/challan-settlement-lok-adalat" }],
  },
};
