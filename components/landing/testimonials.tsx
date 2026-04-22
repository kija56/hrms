"use client"

import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "ScoopPay HRM transformed how we manage our 500+ employees. The payroll automation alone saved us 20 hours every month.",
    author: "Sarah Kimani",
    role: "HR Director",
    company: "TechCorp Africa",
    avatar: "SK",
    rating: 5,
  },
  {
    quote: "The employee self-service portal is a game-changer. Our team loves being able to manage their own leave requests and access payslips instantly.",
    author: "James Okonkwo",
    role: "CEO",
    company: "Innovate Labs",
    avatar: "JO",
    rating: 5,
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
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Quote className="h-4 w-4" />
              Testimonials
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              What Our Clients Say
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground lg:text-right">
            Trusted by HR teams at leading companies across Africa and beyond.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl ${
                index === 1 ? "lg:-translate-y-4" : ""
              }`}
            >
              {/* Decorative gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-8 text-lg leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
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

        {/* Bottom stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-border bg-muted/30 p-8 lg:gap-16">
          <div className="text-center">
            <div className="font-serif text-4xl font-bold text-foreground">4.9/5</div>
            <div className="mt-1 text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="hidden h-12 w-px bg-border sm:block" />
          <div className="text-center">
            <div className="font-serif text-4xl font-bold text-foreground">2,500+</div>
            <div className="mt-1 text-sm text-muted-foreground">Happy Companies</div>
          </div>
          <div className="hidden h-12 w-px bg-border sm:block" />
          <div className="text-center">
            <div className="font-serif text-4xl font-bold text-foreground">50k+</div>
            <div className="mt-1 text-sm text-muted-foreground">Employees Managed</div>
          </div>
          <div className="hidden h-12 w-px bg-border lg:block" />
          <div className="text-center">
            <div className="font-serif text-4xl font-bold text-foreground">24/7</div>
            <div className="mt-1 text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
