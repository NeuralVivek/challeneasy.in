import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Page not found</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">This page is unavailable</h1>
        <p className="mt-5 max-w-xl leading-7 text-slate-600">The address may be incorrect or the page may have moved. Use the links below to continue to a current ChallanEasy resource.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 text-sm font-semibold text-white hover:bg-orange-500"><ArrowLeft className="h-4 w-4" />Back to home</Link>
          <Link href="/guides" className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-50">Browse guides</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
