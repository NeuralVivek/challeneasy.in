import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.siteUrl}/challan-settlement`;

export const metadata: Metadata = {
  title: "Challan Settlement Online | Traffic Challan Help",
  description:
    "Need challan settlement help? Understand pending traffic challan options, eligibility and online assistance for Delhi and NCR with clear, independent guidance.",
  alternates: { canonical: "/challan-settlement" },
  openGraph: {
    title: "Challan Settlement Online | Traffic Challan Help",
    description:
      "Understand pending traffic challan options, eligibility and online assistance for Delhi and NCR with clear, independent guidance.",
    url: pageUrl,
    type: "website",
    siteName: siteConfig.name,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Challan Easy traffic challan settlement assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Challan Settlement Online | Traffic Challan Help",
    description:
      "Understand pending traffic challan options, eligibility and online assistance for Delhi and NCR with clear, independent guidance.",
    images: ["/og-image.svg"],
  },
};

const faqs = [
  {
    question: "What is challan settlement?",
    answer:
      "Challan settlement generally means resolving a traffic challan matter through the route available for that challan. Depending on its status and the applicable law, this may involve payment through an official system or proceedings before a court or Lok Adalat where the matter is eligible. Settlement does not automatically mean a discount or reduced fine.",
  },
  {
    question: "How can I settle my traffic challan?",
    answer:
      "Start by checking the challan number, vehicle record and current status through the relevant official channel. The next step depends on whether the challan is payable online, referred to a virtual court or court, or eligible for a notified Lok Adalat process. Challan Easy can help you understand the information and options; the relevant authority determines the outcome.",
  },
  {
    question: "Can I settle my traffic challan online?",
    answer:
      "Some challans can be paid online through the applicable official portal. That is different from getting assistance with a settlement process. Court, virtual court and Lok Adalat matters may follow their own instructions, dates and appearance or document requirements. Use official systems to confirm status and payment, and treat Challan Easy as an independent assistance service.",
  },
  {
    question: "Can every traffic challan be settled?",
    answer:
      "No. Eligibility depends on the offence, challan status, applicable rules, jurisdiction and the decision or process of the relevant authority or court. A pending challan, court challan or traffic fine should not be assumed to qualify for Lok Adalat or any reduction. We help explain available options only after the relevant details are reviewed.",
  },
  {
    question: "What is Lok Adalat for traffic challans?",
    answer:
      "Lok Adalat is a statutory dispute-resolution forum where certain matters can be taken up for settlement according to the applicable legal framework. In simple terms, eligible compoundable traffic matters may be considered through the notified process. Eligibility, dates, documents, settlement amount and outcome are controlled by the relevant authority. Not every traffic challan is eligible.",
  },
  {
    question: "Can a court challan be settled?",
    answer:
      "A court or virtual-court challan must follow the instructions and procedure of the court or platform handling it. Some matters may have a resolution route, while others may require a different step. Check the notice and current status carefully. Challan Easy can help you understand the next step, but it cannot decide eligibility or guarantee a court result.",
  },
  {
    question: "Can I settle multiple challans together?",
    answer:
      "Multiple challans may have different issuing authorities, statuses, dates and legal routes. They should be reviewed individually before assuming they can be handled together. In some situations, a common process may be available, while in others separate action is required. Keep each challan number and vehicle detail ready so the records are not mixed up.",
  },
  {
    question: "How do I check my pending challan?",
    answer:
      "Use the relevant official e-challan, traffic police or court portal to verify the latest record, amount, status and payment instructions. Details can change after payment, referral or an administrative update. If you are unsure how to read the record, you can share the basic challan information with our team for assistance, without sending unnecessary sensitive documents.",
  },
  {
    question: "What information is required for challan settlement?",
    answer:
      "The vehicle registration number and challan number are usually useful starting points. Depending on the matter, you may also need the registered mobile number, driving licence details, notice, court or virtual-court information, and identity documents requested by the official process. Share only what is necessary, and verify that any request for sensitive information comes through a trusted channel.",
  },
  {
    question: "Does challan settlement always reduce the fine?",
    answer:
      "No. A settlement is not an automatic discount, and no reduction should be assumed. The amount and outcome depend on the applicable rules, the nature and status of the challan, and the relevant authority or court. Challan Easy does not promise a fixed reduction, approval or result. Confirm the payable amount through the official process before making payment.",
  },
  {
    question: "How long does challan settlement take?",
    answer:
      "There is no single timeline. Online payment, court or virtual-court processing, and Lok Adalat proceedings can follow different schedules. Availability of records, verification, notified dates and the authority handling the matter may affect the time required. We can help you understand the next step, but the authority or court controls processing and final status updates.",
  },
  {
    question: "Is Challan Easy a government website?",
    answer:
      "No. Challan Easy is an independent private assistance platform. It is not a government department, traffic police authority, court, transport department or official e-challan portal. Use the applicable government or court system to verify challan status, make payments and follow official instructions. Our role is to help vehicle owners understand the information and possible next steps.",
  },
  {
    question: "Can I settle a Delhi traffic challan?",
    answer:
      "A Delhi traffic challan may have different options depending on its offence, status, issuing authority and the current process. Some records may be payable through an official system, while others may be referred to court or considered only if eligible under a notified Lok Adalat process. We can provide Delhi challan assistance while the competent authority decides the outcome.",
  },
  {
    question: "Can I get help with a Gurgaon or Noida challan?",
    answer:
      "Yes, you can contact Challan Easy for assistance understanding a Gurgaon/Gurugram, Noida, Ghaziabad or Faridabad challan. Procedures may differ by issuing authority and jurisdiction, so a Delhi process should not be assumed to apply in NCR. Keep the vehicle number and challan details ready; we will explain the information needed for the relevant route.",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Check Your Challan",
    text: "Share the vehicle registration number and, if available, the challan number. We help you identify the basic record details to verify, including the issuing location, current status and whether the matter appears to be a payment, court or follow-up issue. Always confirm the latest information through the applicable official channel.",
  },
  {
    number: "02",
    title: "Review Challan Details",
    text: "Read the offence, date, amount, notice and status carefully instead of assuming that every pending record follows the same route. A single vehicle can have multiple challans with different authorities or stages. We help organize the information so you can understand what each record means and what needs attention first.",
  },
  {
    number: "03",
    title: "Understand Available Options",
    text: "Based on the information available, we explain whether the next step is to verify payment on an official portal, follow court or virtual-court instructions, or check whether a notified Lok Adalat process may be relevant. This is guidance, not a legal guarantee. Eligibility and the final decision remain with the competent authority.",
  },
  {
    number: "04",
    title: "Get Assistance With the Process",
    text: "Once you understand the likely route, our team can help you prepare the relevant information, follow up on practical questions and avoid common confusion. We communicate clearly about what is known and what still needs official confirmation. No fixed settlement amount, approval or court outcome is promised.",
  },
] as const;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traffic Challan Settlement Assistance",
  serviceType: "Traffic challan settlement assistance",
  description:
    "Independent assistance for understanding pending traffic challan status, eligibility and available resolution options.",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
  areaServed: ["Delhi", "Gurugram", "Noida", "Ghaziabad", "Faridabad"],
  url: pageUrl,
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Challan Settlement Online | Traffic Challan Help",
    description: metadata.description,
    url: pageUrl,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.siteUrl },
  },
  serviceSchema,
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Challan Settlement", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function ChallanSettlementPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-orange-700">
                <ShieldCheck className="h-4 w-4" />
                Clear guidance for pending challans
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Traffic Challan Settlement: Get Help With Pending Challans
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Have a pending traffic challan? Challan Easy helps vehicle owners understand their challan status and available settlement options. We explain the practical next step without promising a discount, approval or particular court outcome.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/check-challan" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-500">
                  Check My Challan <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  Get Settlement Assistance
                </a>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Transparent communication</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Independent private service</span>
              </div>
            </div>

            <div id="challan-assistance" className="scroll-mt-24">
              <LeadForm />
              <p className="mt-3 text-center text-xs leading-5 text-slate-500">This form requests assistance. It does not directly check a government database or confirm eligibility.</p>
            </div>
          </div>
        </section>

        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-4 text-sm text-slate-500 sm:px-6 lg:px-8">
          <Link href="/" className="hover:text-slate-900">Home</Link><span className="mx-2">/</span><span className="text-slate-700">Challan Settlement</span>
        </nav>

        <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-4">
              {[
                ["Clear process", "Understand what information matters before you choose the next step."],
                ["No false promises", "Eligibility, amount and outcome depend on the relevant authority or court."],
                ["Practical support", "Get help reading pending, court and virtual-court challan details."],
                ["Privacy-aware", "Share only the information needed to discuss your request."],
              ].map(([title, text]) => (
                <div key={title} className="border-l-2 border-orange-500 pl-4">
                  <h3 className="text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Start with the basics</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">What Is Traffic Challan Settlement?</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              <p>A traffic challan is an official notice or fine connected with an alleged traffic-rule violation. It may include the vehicle number, offence, date, amount, issuing authority and a status showing whether it is pending, payable, referred or otherwise under process.</p>
              <p>People use the phrase <strong className="font-semibold text-slate-900">challan settlement</strong> to describe resolving a challan-related matter through the route available for that record. Depending on the challan and applicable law, that route may be payment through the relevant official portal, a court or virtual-court process, or proceedings before a Lok Adalat where the matter is legally eligible.</p>
              <p>Settlement does not automatically mean a discount. Not every offence can be compounded, not every pending record can be taken to Lok Adalat, and no service provider can promise the decision of the competent authority. The safe approach is to verify the current record, understand the route and confirm the final amount through the official process.</p>
            </div>
          </div>
        </section>

        <section id="process" className="bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">How Challan Easy Helps</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">How Does Challan Settlement Work?</h2></div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => <article key={step.number} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="text-sm font-bold text-orange-600">{step.number}</span><h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p></article>)}
            </div>
            <div className="mt-8 text-center"><a href="#challan-assistance" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-600">Start a challan review request <ArrowRight className="h-4 w-4" /></a></div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Eligibility depends on the record</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Can Your Challan Be Settled?</h2><p className="mt-5 leading-7 text-slate-600">A request for help can be useful when the record is confusing or has more than one possible next step. These situations are not automatic proof of eligibility; they are common reasons vehicle owners seek pending challan settlement assistance. The offence, status, applicable rules and relevant authority or court determine the available route.</p></div>
              <div className="grid gap-4 sm:grid-cols-2">
                {["Pending traffic challans with an unclear status", "Multiple challans that may have different authorities", "Older challans needing a current record check", "Challans referred to court or virtual court", "Uncertainty about payment, notice or next steps", "Vehicle owners preparing for a transfer or related transaction"].map((item) => <div key={item} className="flex gap-3 rounded-xl border border-slate-200 p-4"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" /><span className="text-sm leading-6 text-slate-700">{item}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Older or unresolved records</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">Pending Challan Settlement</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Old challans, multiple challans and records with an unclear status should be reviewed one at a time. A pending traffic challan may require payment, a notice response, court or virtual-court action, or another step depending on the record. Do not assume that age alone makes a challan eligible for settlement or reduction.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Court and virtual court</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">Court Challan Settlement</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">A court challan is not the same as an ordinary online payment record. Follow the notice or virtual-court instructions and check which authority currently handles the matter. Challan Easy can help explain the information and questions to ask, but only the relevant court or authority can decide the procedure, amount and outcome.</p>
            </article>
          </div>
        </section>

        <section className="bg-slate-900 py-14 text-white sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-300">Know the route before you act</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Traffic Challan Settlement Through Lok Adalat</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
              <p>Lok Adalat is a statutory forum intended to help resolve certain disputes through a settlement-based process. In traffic matters, eligible compoundable offences may sometimes be considered through a notified Lok Adalat process. “Compoundable” is a high-level description of a matter that the applicable law permits to be resolved in the prescribed way; it does not mean every challan qualifies.</p>
              <p>Eligibility can vary with the offence, issuing authority, jurisdiction, challan status and instructions for a particular sitting. Dates, procedures and document requirements can also change. The relevant court or authority decides whether the matter can be taken up, what amount applies and whether the proceeding results in settlement.</p>
              <p>Challan Easy can help you understand the information you have and prepare questions for the applicable process. We do not issue Lok Adalat notices, set dates, determine eligibility or guarantee approval, reduction or outcome. For current dates and instructions, rely on the relevant official court or authority communication.</p>
            </div>
            <Link href="/faq" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-orange-300 hover:text-white">Read more challan FAQs <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Local context matters</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Traffic Challan Settlement in Delhi &amp; NCR</h2><div className="mt-5 space-y-4 leading-7 text-slate-600"><p>People searching for challan settlement in Delhi NCR may be dealing with records from different authorities. A Delhi traffic challan, Gurgaon or Gurugram challan, Noida challan, Ghaziabad challan and Faridabad challan may not follow identical procedures, even when the issue appears similar.</p><p>For <strong className="font-semibold text-slate-900">Delhi challan settlement</strong> or Delhi traffic challan settlement, start with the exact challan status and issuing authority. The same principle applies to Gurgaon challan settlement and Noida challan settlement: location alone does not decide whether payment, court, virtual court or Lok Adalat is available.</p><p>Challan Easy provides independent assistance for understanding these differences across Delhi and NCR. Verify the final instructions and amount with the relevant official system before taking action.</p></div></div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-bold text-slate-900">Common traffic challan examples</h3><ul className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">{["Overspeeding", "Red-light violations", "No helmet", "No seat belt", "Parking violations", "Other traffic-rule violations"].map((item) => <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-600" />{item}</li>)}</ul><p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">These are examples, not an eligibility list. Whether a particular offence can be paid, compounded or considered through a court or Lok Adalat depends on the applicable rules and relevant authority.</p></div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Payment is not the same as settlement</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Can You Settle a Traffic Challan Online?</h2></div><div className="mt-8 grid gap-4 md:grid-cols-2"><div className="rounded-2xl bg-white p-5 shadow-sm"><h3 className="font-bold text-slate-900">1. Online payment</h3><p className="mt-2 text-sm leading-7 text-slate-600">A payable challan may be paid through the applicable official system. Confirm the record, amount, receipt and updated status there.</p></div><div className="rounded-2xl bg-white p-5 shadow-sm"><h3 className="font-bold text-slate-900">2. Assistance</h3><p className="mt-2 text-sm leading-7 text-slate-600">Challan Easy can help explain the information and practical next steps. Assistance does not itself change the challan or confirm eligibility.</p></div><div className="rounded-2xl bg-white p-5 shadow-sm"><h3 className="font-bold text-slate-900">3. Court or virtual court</h3><p className="mt-2 text-sm leading-7 text-slate-600">These matters follow the instructions of the court or platform handling the record and may require specific action or documents.</p></div><div className="rounded-2xl bg-white p-5 shadow-sm"><h3 className="font-bold text-slate-900">4. Lok Adalat</h3><p className="mt-2 text-sm leading-7 text-slate-600">Only matters that meet the applicable requirements can be considered through a notified process. Dates and outcomes are decided by the authority.</p></div></div></div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Prepare the basics</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Information You May Need</h2><p className="mt-5 leading-7 text-slate-600">Having the right reference details makes a challan review easier. Start with the minimum information and provide additional documents only when the relevant official process requires them.</p><ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">{["Vehicle registration number", "Challan number", "Registered mobile number where applicable", "Driving licence details where required", "Notice or court information where applicable"].map((item) => <li key={item} className="flex gap-3"><FileText className="h-5 w-5 shrink-0 text-orange-600" />{item}</li>)}</ul><p className="mt-6 text-sm leading-6 text-slate-500">Do not share passwords, PINs, one-time passwords or unnecessary identity information. Use official portals for payments and receipts.</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold text-slate-900">Why Choose Challan Easy?</h2><ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">{["Simple process for starting a request", "Clear communication about available information", "Transparent discussion of uncertainty and eligibility", "Convenient online assistance for vehicle owners", "Help understanding payment and resolution options"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />{item}</li>)}</ul><Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-600">Contact our team <ArrowRight className="h-4 w-4" /></Link></div></div>
        </section>

        <section id="faq" className="bg-slate-50 py-14 sm:py-20"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Answers before you start</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Challan Settlement FAQs</h2></div><div className="mt-8 space-y-3">{faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-slate-900"><span>{faq.question}</span><HelpCircle className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-45" /></summary><div className="border-t border-slate-200 px-5 py-4 text-sm leading-7 text-slate-600">{faq.answer}</div></details>)}</div></div></section>

        <section className="bg-slate-900 py-12 text-white sm:py-16"><div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need help understanding a pending challan?</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">Start with the vehicle or challan details you have. We will explain the next practical step and clearly identify what still needs official confirmation.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><a href="#challan-assistance" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 text-sm font-semibold text-white hover:bg-orange-500">Get Settlement Assistance <ArrowRight className="h-4 w-4" /></a><Link href="/about" className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-3.5 text-sm font-semibold text-white hover:bg-slate-800">Learn about Challan Easy</Link></div><p className="mx-auto mt-7 max-w-3xl text-xs leading-6 text-slate-400">Information on this page is provided for general informational purposes. Eligibility, procedure, settlement amount and outcome may vary depending on the challan, applicable rules and the relevant authority or court. Challan Easy is an independent service and is not a government department unless explicitly stated otherwise.</p></div></section>
      </main>

      <Footer />
      <div className="fixed bottom-4 right-4 z-40 md:hidden"><WhatsAppButton label="WhatsApp Now" variant="primary" iconOnly className="h-14 w-14 rounded-full p-0 shadow-lg" /></div>
    </div>
  );
}
