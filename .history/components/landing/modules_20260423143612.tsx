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
    metric: "340+ hires",
    href: "/modules/recruitment",
  },
  {
    id: "payroll",
    icon: Wallet,
    title: "Payroll",
    description: "Automate salary processing, deductions, and payslip generation with audit-ready records.",
    metric: "1,247 processed",
    href: "/modules/payroll",
  },
  {
    id: "attendance",
    icon: Calendar,
    title: "Attendance",
    description: "Capture attendance across office and remote teams with policy-based controls.",
    metric: "98.5% attendance rate",
    href: "/modules/attendance",
  },
  {
    id: "leave",
    icon: Plane,
    title: "Leave Management",
    description: "Run leave requests, approvals, and team availability with real-time visibility.",
    metric: "12 leave policy types",
    href: "/modules/leave",
  },
  {
    id: "performance",
    icon: Target,
    title: "Performance Tracking",
    description: "Align goals, conduct appraisals, and monitor development outcomes across teams.",
    metric: "4,509 reviews",
    href: "/modules/performance",
  },
  {
    id: "onboarding",
    icon: UserPlus,
    title: "Onboarding",
    description: "Deliver smooth first-day experiences with automated onboarding checklists and tasks.",
    metric: "91% completion in first week",
    href: "/modules/onboarding",
  },
  {
    id: "learning-management-system",
    icon: GraduationCap,
    title: "Learning",
    description: "Assign training paths and track completion to improve role readiness and growth.",
    metric: "1,039 courses",
    href: "/features/learning-management-system",
  },
]

export function Modules() {
  return (
    <section id="modules" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground">
            <BarChart3 className="h-4 w-4" />
            Modules
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Modules We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Eight powerful modules that work together seamlessly. Pick what you need or get them all for the complete HR experience.
          </p>
        </div>

        {/* Modules List */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card">
          {modules.map((module, index) => (
            <Link
              key={module.id}
              href={module.href}
              className={`group grid gap-4 px-6 py-6 transition-colors hover:bg-muted lg:grid-cols-[56px_1fr_auto] lg:items-center lg:px-8 ${
                index < modules.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-muted text-foreground transition-colors group-hover:bg-muted">
                <module.icon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">{module.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{module.description}</p>
              </div>

              <div className="flex items-center gap-4 lg:justify-end">
                <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
                  {module.metric}
                </span>
                <span className="inline-flex items-center gap-2 font-medium text-foreground transition-colors group-hover:text-primary">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Two-column CTA */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* For Employees */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-10">
            <div className="relative">
              <span className="mb-4 inline-block rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-foreground">
                Category
              </span>
              <h3 className="mb-4 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                For Employees
              </h3>
              <p className="mb-6 max-w-md text-muted-foreground">
                Access your payslips, request leave, track goals, and manage your profile from anywhere with our intuitive self-service portal.
              </p>
              <Link
                href="/modules"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium text-foreground transition-all hover:gap-3"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* For Businesses */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-10">
            <div className="relative">
              <span className="mb-4 inline-block rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-foreground">
                Category
              </span>
              <h3 className="mb-4 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                For Business Owners
              </h3>
              <p className="mb-6 max-w-md text-muted-foreground">
                Streamline your HR operations with powerful tools for payroll, attendance, recruitment, and analytics all in one place.
              </p>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:gap-3"
              >
                Book a Demo
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
