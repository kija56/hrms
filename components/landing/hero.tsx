"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-0 pt-28 sm:px-6 lg:px-8 lg:pt-36">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute -left-20 top-1/2 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Content */}
          <div className="relative z-10 max-w-xl">
            {/* Main Headline */}
            <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              <span className="block">Manage Your</span>
              <span className="block">
                <span className="text-primary">Workforce</span> Here
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Streamline HR operations with our all-in-one platform. From payroll to performance, 
              manage everything in one place with enterprise security.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button 
                size="lg" 
                className="h-14 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              {/* Watch video CTA */}
              <a
                href="#how-it-works"
                aria-label="Watch product walkthrough video"
                className="group inline-flex items-center gap-3 rounded-full pr-2 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-foreground/20 bg-background transition-all group-hover:border-primary group-hover:bg-primary/95">
                  <span className="absolute inset-0 rounded-full ring-8 ring-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <Play className="relative h-5 w-5 fill-foreground text-foreground transition-colors group-hover:fill-primary-foreground group-hover:text-primary-foreground" />
                </span>
                <span className="text-base font-semibold text-foreground">
                  Watch Video
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image with Decorative Elements */}
          <div className="relative lg:h-[600px]">
            {/* Main hero image container */}
            <div className="relative h-full">
              {/* Background decorative rounded rectangle */}
              <div className="absolute bottom-0 right-0 h-[90%] w-[85%] rounded-[3rem] bg-secondary/10" />
              
              {/* Hero image */}
              <div className="relative z-10 h-full">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=face"
                  alt="HR Professional"
                  width={500}
                  height={600}
                  className="relative z-10 mx-auto h-full max-h-[550px] w-auto object-contain object-bottom lg:mx-0"
                  priority
                />
              </div>

              {/* Floating stat card - Top */}
              <div className="absolute -left-4 top-8 z-20 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:left-0 lg:-left-12">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-foreground">50k+</div>
                    <div className="text-sm text-muted-foreground">Active Employees</div>
                  </div>
                </div>
              </div>

              {/* Floating stat card - Middle Right */}
              <div className="absolute -right-4 top-1/3 z-20 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:right-0 lg:-right-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-foreground">99%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              {/* Floating stat card - Bottom */}
              <div className="absolute -left-4 bottom-24 z-20 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:left-0 lg:-left-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-foreground">10k+</div>
                    <div className="text-sm text-muted-foreground">Companies Trust Us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row - Jobaway style */}
        <div className="relative z-10 mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 lg:mt-20 lg:grid-cols-4 lg:pt-16">
          {[
            { value: "50", suffix: "k", label: "Active Employees" },
            { value: "99", suffix: "%", label: "Fulfillment Rate" },
            { value: "10", suffix: "k+", label: "Companies Served" },
            { value: "200", suffix: "+", label: "Enterprise Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="font-serif text-4xl font-bold text-foreground lg:text-5xl">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
