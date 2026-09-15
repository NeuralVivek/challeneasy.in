import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          ChallanEasy.in
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton label="Talk on WhatsApp" variant="primary" className="px-4 py-2.5 text-sm" />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2 text-xs text-slate-600">
            {navItems.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full border border-slate-200 bg-white px-2 py-1">
                {item.label}
              </Link>
            ))}
          </div>
          <WhatsAppButton label="WhatsApp" variant="primary" className="px-3 py-2 text-xs" />
        </div>
      </div>
    </header>
  );
}
