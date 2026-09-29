import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site";

type Variant = "primary" | "secondary" | "nav";

type WhatsAppButtonProps = {
  label?: string;
  vehicleNumber?: string;
  variant?: Variant;
  className?: string;
  iconOnly?: boolean;
};

export function WhatsAppButton({
  label = "Talk on WhatsApp",
  vehicleNumber,
  variant = "primary",
  className = "",
  iconOnly = false,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(vehicleNumber);
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400";

  const variants: Record<Variant, string> = {
    primary:
      "bg-orange-600 text-white shadow-sm hover:bg-orange-500 focus:ring-orange-500",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 focus:ring-slate-300",
    nav: "border border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-300",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={iconOnly ? label : undefined}
      title={iconOnly ? label : undefined}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <MessageCircleMore className="h-4 w-4" aria-hidden="true" />
      {!iconOnly ? <span>{label}</span> : null}
    </Link>
  );
}
