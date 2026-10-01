import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site";
import type { TopicPageData } from "@/lib/topic-pages";

export function TopicPage({ data }: { data: TopicPageData }) {
  const pageUrl = `${siteConfig.siteUrl}${data.path}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": data.kind === "guide" ? "Article" : "WebPage",
      name: data.title,
      headline: data.h1,
      description: data.description,
      url: pageUrl,
      author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
      isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.siteUrl },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
        ...(data.kind === "guide" ? [{ "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.siteUrl}/guides` }] : []),
        { "@type": "ListItem", position: data.kind === "guide" ? 3 : 2, name: data.h1, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">{data.eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">{data.h1}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{data.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/check-challan" className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 text-sm font-semibold text-white hover:bg-orange-500">Check official status <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100">Ask for assistance <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-4 text-sm text-slate-500 sm:px-6 lg:px-8">
          <Link href="/" className="hover:text-slate-900">Home</Link><span className="mx-2">/</span>
          {data.kind === "guide" ? <><Link href="/guides" className="hover:text-slate-900">Guides</Link><span className="mx-2">/</span></> : null}
          <span className="text-slate-700">{data.h1}</span>
        </nav>

        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="space-y-12">
            {data.sections.map((section, index) => (
              <section key={section.heading} className={index % 2 === 1 ? "rounded-2xl bg-slate-50 p-6 sm:p-8" : ""}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets ? <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />{bullet}</li>)}</ul> : null}
              </section>
            ))}
          </div>

          <section className="mt-14 border-t border-slate-200 pt-10" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Frequently asked questions</h2>
            <div className="mt-6 space-y-3">
              {data.faqs.map((faq) => <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p></details>)}
            </div>
          </section>

          <section className="mt-14 rounded-2xl bg-slate-900 p-6 text-white sm:p-8" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-2xl font-bold">Continue learning</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">Review the official record first, then use these related pages to understand the relevant route. ChallanEasy is an independent private assistance platform, not a government website.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">{data.related.map((link) => <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-white">{link.label}<ArrowRight className="h-4 w-4" /></Link>)}</div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
