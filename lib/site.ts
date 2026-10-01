export const siteConfig = {
  name: "ChallanEasy.in",
  tagline: "Vehicle Challan Assistance & Settlement Support",
  phoneDisplay: "+91 76783 59217",
  phoneHref: "tel:+917678359217",
  waNumber: "917678359217",
  whatsappLink: "https://wa.me/917678359217",
  siteUrl: "https://challaneasy.in",
  canonicalUrl: "https://challaneasy.in/",
};

export const businessStats = {
  casesAssisted: "20K+",
  settlements: "3K+",
  response: "Fast",
};

// Replace demo/business-provided figures with verified numbers before publishing.

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Check Challan", href: "/check-challan" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    title: "Pending Challan Assistance",
    href: "/pending-challan",
    description:
      "Get help understanding pending challan notices, due dates, and the next steps to resolve them properly.",
  },
  {
    title: "Challan Status Guidance",
    href: "/check-challan",
    description:
      "Understand the current status of your challan and what action may be required for payment or follow-up.",
  },
  {
    title: "Challan Payment Assistance",
    href: "/challan-payment",
    description:
      "Get clear guidance around payment-related steps, timelines, and verification before making a payment.",
  },
  {
    title: "Virtual Court / Court Challan Guidance",
    href: "/court-challan-settlement",
    description:
      "Learn how court-related challan matters are handled and what documents or follow-up may be relevant.",
  },
  {
    title: "Traffic Challan Settlement Assistance",
    href: "/challan-settlement",
    description:
      "Receive support with understanding settlement-related processes and the practical steps involved.",
  },
  {
    title: "Vehicle Challan Documentation Support",
    href: "/contact",
    description:
      "Get help organizing the documents and information needed to understand and resolve a vehicle challan matter.",
  },
] as const;

export const howItWorks = [
  "Submit Vehicle Details",
  "Our Team Reviews Your Request",
  "Talk To Our Assistance Team",
  "Get Guidance On The Next Step",
] as const;

export const testimonials = [
  {
    quote:
      "ChallanEasy made the process much easier for me. The team explained what I needed to do and guided me through the process.",
    author: "Rahul S.",
    location: "Delhi",
  },
  {
    quote:
      "I was confused about my pending challan. Their team explained the process clearly and helped me understand the next steps.",
    author: "Amit K.",
    location: "Gurugram",
  },
  {
    quote:
      "The support was clear, simple, and professional. I am glad I reached out before my challan issue became more complicated.",
    author: "Neha P.",
    location: "Noida",
  },
  {
    quote:
      "Everything was explained in a straightforward way. I had a better understanding of my options and what I needed to do next.",
    author: "Vikram R.",
    location: "Faridabad",
  },
  {
    quote:
      "The process felt organized and reassuring. The team answered my questions patiently and helped me understand the steps.",
    author: "Sonia M.",
    location: "Delhi",
  },
  {
    quote:
      "I appreciated the practical guidance. The team helped me understand the issue without making the process feel overwhelming.",
    author: "Jatin D.",
    location: "Gurugram",
  },
] as const;

export const faqItems = [
  {
    question: "How can I check my vehicle challan?",
    answer:
      "You can check challan details through official transport and traffic portals, or contact our team for guidance on how to understand and verify the challan record. Official portals should always be used to confirm the latest status.",
  },
  {
    question: "How can I pay my pending challan?",
    answer:
      "Pending challans are generally paid through the relevant official portal or payment channel. We can help you understand the process and the information needed before making a payment.",
  },
  {
    question: "What is challan settlement?",
    answer:
      "Challan settlement usually refers to a resolution process where a challan-related matter is addressed through the appropriate legal or procedural channel, depending on the case and the competent authority involved.",
  },
  {
    question: "What happens if my challan goes to court?",
    answer:
      "A challan that proceeds to court follows the relevant legal process set by the competent authority. We can help explain the information you may need and the typical next steps involved in understanding the matter.",
  },
  {
    question: "Can I resolve a challan online?",
    answer:
      "In many cases, challan-related information and payments can be handled through official online portals. The exact process depends on the issue and the competent authority involved. We can explain the likely steps and documentation involved.",
  },
  {
    question: "How can ChallanEasy help me?",
    answer:
      "ChallanEasy.in provides private assistance and guidance for vehicle challan-related queries, including understanding the issue, reviewing available information, and helping you understand the next action or resolution steps.",
  },
  {
    question: "Is ChallanEasy a government website?",
    answer:
      "No. ChallanEasy.in is an independent private service and assistance platform. Official challan services should be verified through the relevant government portals and authorities.",
  },
] as const;

export const blogArticles = [
  {
    slug: "how-to-check-vehicle-challan-online",
    title: "How to Check Vehicle Challan Online",
    description: "Learn the common steps to verify a pending vehicle challan and understand what to check before proceeding.",
  },
  {
    slug: "how-to-pay-traffic-challan-online",
    title: "How to Pay Traffic Challan Online",
    description: "Understand the basics of online challan payment and how to verify payment information.",
  },
  {
    slug: "what-is-vehicle-challan-settlement",
    title: "What Is Vehicle Challan Settlement?",
    description: "Learn what challan settlement generally means and how the process is usually handled.",
  },
  {
    slug: "what-happens-if-a-traffic-challan-goes-to-court",
    title: "What Happens If a Traffic Challan Goes to Court?",
    description: "Understand the typical legal and procedural steps when a challan-related matter reaches court.",
  },
] as const;

export const buildWhatsAppLink = (vehicleNumber?: string) => {
  const message = vehicleNumber
    ? `Hello ChallanEasy, I need assistance with my vehicle challan. Vehicle Number: ${vehicleNumber}.`
    : "Hello ChallanEasy, I need assistance with my vehicle challan.";

  return `${siteConfig.whatsappLink}?text=${encodeURIComponent(message)}`;
};

export const statesList = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Gurugram",
] as const;
