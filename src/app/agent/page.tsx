export default function AgentPortal() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-charcoal to-black">
      <div className="relative px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                Agent Portal
              </h2>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              <button
                type="button"
                className="btn-primary"
              >
                Update Availability
              </button>
            </div>
          </div>

          {/* Agent Stats */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Active Leads', stat: '0' },
              { name: 'Closed Deals', stat: '0' },
              { name: 'Conversion Rate', stat: '0%' },
              { name: 'Commission', stat: '$0' },
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

          {/* Lead Queue */}
          <div className="mt-8 overflow-hidden rounded-lg bg-white/5 shadow">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-white">
                Your Lead Queue
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
                      Lead
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                    >
                      Contact Info
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                    >
                      Quote Details
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70" colSpan={5}>
                      No leads assigned yet.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Calendar Integration */}
          <div className="mt-8 overflow-hidden rounded-lg bg-white/5 p-6">
            <h3 className="text-lg font-medium text-white mb-4">
              Your Schedule
            </h3>
            <div className="aspect-[3/2] bg-white/10 rounded-lg flex items-center justify-center">
              <p className="text-white/50">
                Calendar integration coming soon
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Update Profile',
                description: 'Manage your agent profile and credentials.',
              },
              {
                title: 'Commission Reports',
                description: 'View your earnings and commission statements.',
              },
              {
                title: 'Training Resources',
                description: 'Access training materials and product guides.',
              },
              {
                title: 'Support',
                description: 'Get help with the agent portal.',
              },
            ].map((action) => (
              <div
                key={action.title}
                className="relative overflow-hidden rounded-lg bg-white/5 p-6 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-medium text-neon-teal">
                  {action.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  {action.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 