const blogPosts = [
  {
    title: 'Understanding Term Life Insurance',
    description: 'Learn the basics of term life insurance and why it might be right for you.',
    slug: 'understanding-term-life-insurance',
    date: '2024-03-15',
  },
  {
    title: 'Whole Life vs. Universal Life Insurance',
    description: 'Compare the key differences between whole life and universal life insurance policies.',
    slug: 'whole-vs-universal-life-insurance',
    date: '2024-03-10',
  },
  {
    title: 'How Much Life Insurance Do You Need?',
    description: 'Calculate the right amount of coverage for your family and financial situation.',
    slug: 'how-much-life-insurance-needed',
    date: '2024-03-05',
  },
]

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-charcoal to-black">
      <div className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Insurance Insights
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Expert advice and guides to help you make informed insurance decisions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <a href={`/blog/${post.slug}`} className="block p-8">
                  <time className="text-sm text-white/50">{post.date}</time>
                  <h2 className="mt-4 text-xl font-semibold text-neon-teal">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-white/70">{post.description}</p>
                  <div className="mt-4 flex items-center text-neon-teal">
                    <span>Read more</span>
                    <svg
                      className="ml-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 