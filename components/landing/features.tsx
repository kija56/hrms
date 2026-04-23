"use client"

import Link from "next/link"
import { 
  Users, 
  Wallet, 
  Calendar, 
  Target, 
  GraduationCap, 
  BarChart3,
  ArrowUpRight,
  Sparkles
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Retain Top Talent",
    description: "Build a stronger employee experience with engagement, collaboration, and growth-focused workflows.",
    href: "/features/employee-engagement",
  },
  {
    icon: Wallet,
    title: "Automated Payroll",
    description: "Run accurate payroll with automated calculations, approvals, and policy-aligned processing.",
    href: "/features/payroll",
  },
  {
    icon: Calendar,
    title: "Leave Management",
    description: "Configure leave policies, approvals, and team availability views in one self-service flow.",
    href: "/features/leave-management",
  },
  {
    icon: Target,
    title: "Performance Tracking",
    description: "Align goals, run review cycles, and support continuous performance conversations across teams.",
    href: "/features/performance-management",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Create role-based learning journeys and track progress with measurable development milestones.",
    href: "/features/learning-management-system",
  },
  {
    icon: BarChart3,
    title: "HR Analytics",
    description: "Turn HR data into dashboards and trend insights for smarter people decisions.",
    href: "/features/hr-analytics",
  },
]

const categories = [
  "Payroll", "Attendance", "Leave", "Performance", "Recruitment", "Analytics",
  "Onboarding", "Benefits", "Compliance", "Training", "Engagement", "Reports",
]

export function Features() {
  return (
    <section id="features" className="overflow-hidden bg-background py-20 lg:py-28">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Why Us
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Why Choose Payscoop HRM
            </h2>
          </div>
          <div className="max-w-md space-y-3 lg:text-right">
            <p className="text-muted-foreground">
              From day-one onboarding to payroll and analytics, Payscoop HRM helps teams run modern HR without operational chaos.
            </p>
            <div className="flex items-center justify-center gap-2 lg:justify-end">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                End-to-end HR
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
                Built to scale
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Background hover effect */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Icon */}
              <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-background transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <feature.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground lg:text-2xl">
                  {feature.title}
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                
                {/* Link */}
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Marquee */}
      <div className="mt-20 border-y border-border bg-muted/30 py-6">
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8">
            {[...categories, ...categories].map((category, i) => (
              <div 
                key={`${category}-${i}`}
                className="flex items-center gap-8"
              >
                <span className="whitespace-nowrap text-lg font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {category}
                </span>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0 items-center gap-8" aria-hidden>
            {[...categories, ...categories].map((category, i) => (
              <div 
                key={`${category}-dup-${i}`}
                className="flex items-center gap-8"
              >
                <span className="whitespace-nowrap text-lg font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {category}
                </span>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
