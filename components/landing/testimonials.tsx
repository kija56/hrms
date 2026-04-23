"use client"

import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "Payscoop HRM transformed how we manage our 500+ employees. The payroll automation alone saved us 20 hours every month.",
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
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-md"
            >
              <div className="relative">
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={`${testimonial.author}-${i}`} className="h-5 w-5 fill-foreground text-foreground" />
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

      </div>
    </section>
  )
}
