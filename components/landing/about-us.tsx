"use client"

import { Check } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: "50", suffix: "k", label: "Active Employees" },
  { value: "99", suffix: "%", label: "Jobs Fulfillment Rate" },
  { value: "10", suffix: "k+", label: "Tasks Completed" },
  { value: "200", suffix: "+", label: "Satisfied Businesses" },
]

const benefits = [
  "Automates repetitive HR tasks for efficiency",
  "Ensures compliance with labor regulations",
  "Scales seamlessly as your team grows",
]

export function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Images */}
          <div className="relative">
            {/* Main image container with rounded background */}
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -bottom-8 -left-8 h-[90%] w-[85%] rounded-[2rem] bg-secondary/10" />
              
              {/* Main image */}
              <div className="relative z-10 overflow-hidden rounded-[2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                  alt="Team collaboration"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Secondary floating image */}
              <div className="absolute -bottom-12 -right-4 z-20 w-[45%] overflow-hidden rounded-2xl border-4 border-background shadow-2xl sm:-right-8 lg:-right-12">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=250&fit=crop"
                  alt="Team meeting"
                  width={300}
                  height={250}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Stats card floating */}
              <div className="absolute -left-4 bottom-8 z-30 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-left-8">
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="font-serif text-2xl font-bold text-foreground">
                        {stat.value}
                        <span className="text-primary">{stat.suffix}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-8">
            {/* Section Label */}
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-semibold text-primary">About Us</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              The Leading HR Management Platform
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our HR platform provides access to comprehensive workforce management tools 
              with specialized features for payroll, attendance, performance tracking, and more. 
              We help businesses of all sizes streamline their human resource operations.
            </p>

            {/* Benefits List */}
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                    {stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
