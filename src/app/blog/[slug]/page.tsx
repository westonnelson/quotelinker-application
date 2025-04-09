import { notFound } from 'next/navigation'

// This would typically come from a CMS or database
const posts = {
  'understanding-term-life-insurance': {
    title: 'Understanding Term Life Insurance',
    date: '2024-03-15',
    content: `
      Term life insurance is one of the most straightforward and affordable types of life insurance. 
      It provides coverage for a specific period, typically 10, 20, or 30 years.

      ## How Term Life Insurance Works

      When you purchase a term life insurance policy, you agree to pay a premium for a set period. 
      If you pass away during this term, your beneficiaries receive the death benefit. If you outlive 
      the term, the policy expires without value unless you choose to renew it.

      ## Benefits of Term Life Insurance

      1. **Affordable Protection**: Term life insurance generally offers the most coverage for the lowest cost.
      2. **Flexible Terms**: Choose the coverage period that matches your needs.
      3. **Simple to Understand**: No complex investment components or cash value calculations.
      4. **Level Premiums**: Your premium stays the same throughout the term.

      ## Is Term Life Insurance Right for You?

      Term life insurance might be ideal if you:
      - Need coverage for a specific period (e.g., until retirement or until children are grown)
      - Want the most affordable coverage option
      - Prefer simple, straightforward insurance
      - Have temporary financial obligations to protect

      Contact us today to learn more about term life insurance options that fit your needs.
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-charcoal to-black">
      <article className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <time className="text-sm text-white/50">{post.date}</time>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {post.title}
            </h1>
          </div>

          <div className="prose prose-invert prose-neon-teal mx-auto">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-white mt-8 mb-4">
                    {paragraph.replace('##', '').trim()}
                  </h2>
                )
              }
              if (paragraph.trim().startsWith('-')) {
                return (
                  <ul key={index} className="list-disc list-inside text-white/70 mt-4">
                    {paragraph.trim().split('\n').map((item, i) => (
                      <li key={i}>{item.replace('-', '').trim()}</li>
                    ))}
                  </ul>
                )
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-white/70 mt-4">
                    {paragraph.trim()}
                  </p>
                )
              }
              return null
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/blog"
              className="inline-flex items-center text-neon-teal hover:text-neon-teal/80 transition-colors"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </a>
          </div>
        </div>
      </article>
    </main>
  )
} 