import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-slate-900">{siteConfig.name}</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              Vehicle Challan Assistance & Settlement Support
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-600">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-600">Contact</h4>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>WhatsApp: <a href={siteConfig.whatsappLink} className="font-medium text-slate-900">{siteConfig.phoneDisplay}</a></p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">
          ChallanEasy.in is an independent private service/assistance platform and is not affiliated with or operated by any government department, traffic police authority, court or transport department.
        </div>
      </div>
    </footer>
  );
}
