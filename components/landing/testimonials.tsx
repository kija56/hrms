"use client"

import Link from "next/link"
import { ArrowUpRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "Payscoop HRM transformed how we manage our 500+ employees. The payroll automation alone saved us 20 hours every month.",
    author: "Sarah Kimani",
    role: "HR Director",
    company: "TechCorp Africa",
    avatar: "SK",
    rating: 4.5,
  },
  {
    quote: "The employee self-service portal is a game-changer. Our team loves being able to manage their own leave requests and access payslips instantly.",
    author: "James Okonkwo",
    role: "CEO",
    company: "Innovate Labs",
    avatar: "JO",
    rating: 3,
  },
  {
    quote: "From recruitment to performance reviews, everything is in one place. We finally have real-time visibility into our workforce data.",
    author: "Amara Diallo",
    role: "People Operations",
    company: "GreenGrow Industries",
    avatar: "AD",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-5">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Quote className="h-4 w-4" />
              Testimonials
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Loved by Growing Teams
            </h2>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 ${
                index === 1 ? "lg:-mt-4" : ""
              }`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative">
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={`${testimonial.author}-${i}`} className="relative h-5 w-5">
                      <Star className="absolute inset-0 h-5 w-5 fill-white text-primary/80" />
                      {i < Math.floor(testimonial.rating) && (
                        <Star className="absolute inset-0 h-5 w-5 fill-primary text-primary" />
                      )}
                      {i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0 && (
                        <span className="absolute inset-0 w-1/2 overflow-hidden">
                          <Star className="h-5 w-5 fill-primary text-primary" />
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-8 text-lg leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-muted text-foreground">
                    <span className="font-serif text-lg font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-serif font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-3xl border border-border bg-linear-to-r from-primary/8 via-card to-secondary/50 p-6 sm:p-7 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Join teams growing with Payscoop HRM
            </h3>
          </div>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35 lg:mt-0"
          >
            Book a live demo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
