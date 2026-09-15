import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getLeadById, seedDemoLeads } from "@/lib/lead-store";

export default function LeadDetailPage({ params }: { params: { id: string } }) {
  seedDemoLeads();
  const lead = getLeadById(params.id);

  if (!lead) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">Lead not found</h1>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Admin Lead</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Lead #{lead._id.slice(0, 8)}</h1>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Vehicle Number</p>
              <p className="mt-2 font-semibold text-slate-900">{lead.vehicleNumber}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Mobile Number</p>
              <p className="mt-2 font-semibold text-slate-900">{lead.mobileNumber}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Status</p>
              <p className="mt-2 font-semibold text-slate-900">{lead.status}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Source</p>
              <p className="mt-2 font-semibold text-slate-900">{lead.source}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Notes</p>
              <p className="mt-2 text-slate-700">{lead.notes || "No notes yet."}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
