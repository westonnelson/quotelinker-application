export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-charcoal to-black">
      <div className="relative px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                Admin Dashboard
              </h2>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              <button
                type="button"
                className="btn-primary"
              >
                Export Leads
              </button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Total Leads', stat: '0' },
              { name: 'This Month', stat: '0' },
              { name: 'Conversion Rate', stat: '0%' },
              { name: 'Avg. Quote Value', stat: '$0' },
            ].map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-lg bg-white/5 px-4 py-5 shadow sm:p-6"
              >
                <dt className="truncate text-sm font-medium text-white/70">
                  {item.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-neon-teal">
                  {item.stat}
                </dd>
              </div>
            ))}
          </div>

          {/* Recent Leads Table */}
          <div className="mt-8 overflow-hidden rounded-lg bg-white/5 shadow">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-white">
                Recent Leads
              </h3>
            </div>
            <div className="border-t border-white/10">
              <table className="min-w-full divide-y divide-white/10">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                    >
                      Coverage
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70" colSpan={4}>
                      No leads found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Future Features */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Agent Management',
                description: 'Add and manage insurance agents, track performance, and assign leads.',
              },
              {
                title: 'Analytics Dashboard',
                description: 'View detailed analytics, conversion rates, and ROI metrics.',
              },
              {
                title: 'Content Management',
                description: 'Manage blog posts, landing pages, and marketing content.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="relative overflow-hidden rounded-lg bg-white/5 p-6"
              >
                <h3 className="text-lg font-medium text-neon-teal">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/50">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 