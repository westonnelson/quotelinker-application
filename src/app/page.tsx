'use client'

import { QuoteForm } from '@/components/quote-form'
import { Nav } from '@/components/ui/nav'

const benefits = [
  {
    title: 'Expert Guidance',
    description: 'Get personalized recommendations from licensed insurance professionals.',
  },
  {
    title: 'Top-Rated Carriers',
    description: 'Compare quotes from the most trusted insurance companies.',
  },
  {
    title: 'Fast & Easy',
    description: 'Complete our simple form in minutes, not hours.',
  },
  {
    title: 'Best Rates',
    description: 'Find competitive rates that fit your budget and needs.',
  },
]

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#1A1A1A]">
        <div className="relative pt-16">
          {/* Hero Section */}
          <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
                <div className="aspect-[1155/678] w-[72.1875rem] bg-[#2EE4D4]" />
              </div>
            </div>

            <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Hero Text */}
              <div className="text-left max-w-2xl">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
                  Life Insurance{' '}
                  <span className="block text-[#2EE4D4]">
                    Made Simple
                  </span>
                </h1>
                <p className="mt-6 text-xl leading-8 text-white/70">
                  Get connected with a licensed agent and receive personalized quotes tailored to your specific needs.
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => {
                      const formSection = document.querySelector('#quote-form')
                      formSection?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="bg-[#2EE4D4] text-black font-semibold px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(46,228,212,0.3)] hover:shadow-[0_0_30px_rgba(46,228,212,0.5)]"
                  >
                    Get My Free Quote
                  </button>
                </div>
              </div>

              {/* Right Column - Form */}
              <div id="quote-form" className="relative">
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Benefits Section */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Why Choose QuoteLinker?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-neon-teal mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="relative mx-auto max-w-7xl text-center">
            <p className="text-sm text-white/50">
              Licensed in 50 states • A+ BBB Rating • 100% Secure
            </p>
          </div>
        </section>
      </main>
    </>
  )
} 