import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getLeadStats, listLeads, seedDemoLeads } from "@/lib/lead-store";

export default function LeadsAdminPage() {
  seedDemoLeads();
  const leads = listLeads();
  const stats = getLeadStats();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Admin</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Leads Dashboard</h1>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Total Leads", String(stats.total)],
            ["Today&apos;s Leads", String(stats.todays)],
            ["Pending Leads", String(stats.pending)],
            ["Resolved Leads", String(stats.resolved)],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-600">{label}</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase tracking-[0.08em] text-slate-600">
                <tr>
                  <th className="px-4 py-3">Vehicle Number</th>
                  <th className="px-4 py-3">Mobile Number</th>
                  <th className="px-4 py-3">Challan Number</th>
                  <th className="px-4 py-3">State</th>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Created At</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={`${lead._id}`} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-900">{lead.vehicleNumber}</td>
                    <td className="px-4 py-3">{lead.mobileNumber}</td>
                    <td className="px-4 py-3">{lead.challanNumber || "—"}</td>
                    <td className="px-4 py-3">{lead.state}</td>
                    <td className="px-4 py-3">{lead.source}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{new Date(lead.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <a href={`/admin/leads/${lead._id}`} className="rounded border border-slate-200 px-2 py-1 text-xs font-medium hover:bg-slate-50">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
