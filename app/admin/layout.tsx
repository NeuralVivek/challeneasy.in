import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = await requireAdmin();

  if (!isAuthenticated) {
    redirect("/");
  }

  return <>{children}</>;
}
