import Script from 'next/script'

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-charcoal to-black">
      <div className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-neon-teal to-charcoal" />
          </div>
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Thank You!
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-white/70">
            Your quote request has been received. A licensed insurance professional will contact you shortly to discuss your options.
          </p>

          <div className="mt-12 space-y-6">
            <div className="overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-neon-teal mb-4">
                Want to Talk Sooner?
              </h2>
              <p className="text-white/70 mb-6">
                Schedule a call with a licensed agent at your convenience.
              </p>
              
              {/* Calendly inline widget */}
              <div className="calendly-inline-widget min-h-[600px]" data-url="https://calendly.com/d/your-link"></div>
              <Script src="https://assets.calendly.com/assets/external/widget.js" async />
            </div>

            <div className="text-center">
              <p className="text-sm text-white/50">
                Questions? Contact us at {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 