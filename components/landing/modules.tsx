"use client"

import Link from "next/link"
import { 
  UserPlus,
  Wallet, 
  Calendar, 
  Briefcase, 
  Target, 
  GraduationCap, 
  BarChart3,
  Plane,
  ArrowUpRight
} from "lucide-react"

const modules = [
  {
    id: "recruitment",
    icon: Briefcase,
    title: "Recruitment",
    description: "Build candidate pipelines, track interviews, and hire faster with structured workflows.",
    href: "/modules/recruitment",
  },
  {
    id: "payroll",
    icon: Wallet,
    title: "Payroll",
    description: "Automate salary processing, deductions, and payslip generation with audit-ready records.",
    href: "/modules/payroll",
  },
  {
    id: "attendance",
    icon: Calendar,
    title: "Attendance",
    description: "Capture attendance across office and remote teams with policy-based controls.",
    href: "/modules/attendance",
  },
  {
    id: "leave",
    icon: Plane,
    title: "Leave Management",
    description: "Run leave requests, approvals, and team availability with real-time visibility.",
    href: "/modules/leave",
  },
  {
    id: "performance",
    icon: Target,
    title: "Performance Tracking",
    description: "Align goals, conduct appraisals, and monitor development outcomes across teams.",
    href: "/modules/performance",
  },
  {
    id: "onboarding",
    icon: UserPlus,
    title: "Onboarding",
    description: "Deliver smooth first-day experiences with automated onboarding checklists and tasks.",
    href: "/modules/onboarding",
  },
  {
    id: "learning-management-system",
    icon: GraduationCap,
    title: "Learning",
    description: "Assign training paths and track completion to improve role readiness and growth.",
    href: "/features/learning-management-system",
  },
]

export function Modules() {
  const cardStyles = [
    "sm:col-span-2 bg-linear-to-br from-primary/12 via-card to-card",
    "bg-card",
    "bg-card",
    "bg-card",
    "bg-linear-to-br from-secondary/50 via-card to-card",
    "bg-card",
    "sm:col-span-2 bg-linear-to-br from-primary/8 via-card to-card",
  ] as const

  return (
    <section id="modules" className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-2 text-sm font-medium text-secondary">
            <BarChart3 className="h-4 w-4" />
            Modules
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Explore Powerful HR Modules
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Seven connected modules designed to simplify the full employee lifecycle, from hiring and onboarding to payroll and performance.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Link
              key={module.id}
              href={module.href}
              className={`group relative overflow-hidden rounded-3xl border border-border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 ${cardStyles[index % cardStyles.length]}`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground text-background transition-colors group-hover:bg-primary">
                  <module.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-border bg-background/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Module
                </span>
              </div>

              <h3 className="relative mt-5 font-serif text-2xl font-bold text-foreground">
                {module.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {module.description}
              </p>

              <div className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
