"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  ArrowUpRight,
  Check,
} from "lucide-react"

const featureGroups = [
  {
    title: "Hiring & Onboarding",
    description:
      "Great hires build stronger teams. Streamline recruitment and onboarding with guided workflows from offer to day-one readiness.",
    links: [
      { label: "Explore Hiring", href: "/features/recruitment" },
      { label: "Explore Onboarding", href: "/features/onboarding" },
    ],
    bullets: [
      "Automated hiring workflows",
      "Custom onboarding journeys",
      "Offer letter and e-sign support",
      "Onboarding and readiness reports",
    ],
    image: { src: "/images/why-choose-dashboard.png", alt: "Payscoop HRM dashboard overview" },
  },
  {
    title: "Core HR Management",
    description:
      "Run daily HR operations from one centralized system with accurate records, self-service flows, and policy-aligned controls.",
    links: [
      { label: "Explore Core HR", href: "/features/employee-management" },
      { label: "Explore Leave & Attendance", href: "/features/leave-management" },
    ],
    bullets: [
      "Employee records and profiles",
      "Time, attendance, and leave tracking",
      "Document and compliance management",
      "Approvals and HR helpdesk workflows",
    ],
    image: { src: "/images/why-choose-report-builder.png", alt: "Custom report builder in Payscoop HRM" },
  },
  {
    title: "Compensation, Performance & Learning",
    description:
      "Connect payroll visibility, performance outcomes, and learning progress to support continuous growth and smarter talent decisions.",
    links: [
      { label: "Explore Payroll", href: "/features/payroll" },
      { label: "Explore Performance", href: "/features/performance-management" },
    ],
    bullets: [
      "Automated and accurate payroll processing",
      "Goal, review, and performance tracking",
      "Continuous learning and skill visibility",
      "Manager and leadership performance insights",
    ],
    image: { src: "/images/why-choose-analytics-executive.png", alt: "Executive analytics dashboard in Payscoop HRM" },
  },
  {
    title: "Payroll, Expenses & Compliance",
    description:
      "Handle complex payroll and reimbursement flows with policy checks, approvals, and compliance-ready reporting.",
    links: [
      { label: "Explore Payroll", href: "/features/payroll" },
      { label: "Explore Leave & Policies", href: "/features/leave-management" },
    ],
    bullets: [
      "Policy-aligned payroll runs",
      "Allowance and deduction controls",
      "Approval-based reimbursement processing",
      "Audit-friendly payroll records",
    ],
    image: { src: "/images/why-choose-scheduled-reports.png", alt: "Scheduled reports and payroll delivery workflows" },
  },
  {
    title: "Advanced HR Analytics",
    description:
      "Track workforce trends with executive and team-level dashboards, custom reports, and scheduled insights for faster decisions.",
    links: [
      { label: "Explore Analytics", href: "/features/hr-analytics" },
      { label: "Explore Dashboards", href: "/features/hr-analytics" },
    ],
    bullets: [
      "Executive and workforce dashboards",
      "Standard and custom report templates",
      "Scheduled report distribution",
      "Data-backed planning and forecasting",
    ],
    image: { src: "/images/why-choose-analytics-workforce.png", alt: "Workforce analytics dashboard in Payscoop HRM" },
  },
  {
    title: "Employee Engagement",
    description:
      "Improve employee experience with transparent self-service, quick approvals, and communication that keeps teams aligned.",
    links: [
      { label: "Explore Engagement", href: "/features/employee-engagement" },
      { label: "Explore Employee Experience", href: "/features/employee-engagement" },
    ],
    bullets: [
      "Self-service requests and visibility",
      "Faster manager approval loops",
      "Clear access to payslips and leave status",
      "Better employee satisfaction and retention",
    ],
    image: { src: "/images/why-choose-approvals.png", alt: "Employee request approvals and self-service workflows" },
  },
]

const categories = [
  "Payroll", "Attendance", "Leave", "Performance", "Recruitment", "Analytics",
  "Onboarding", "Benefits", "Compliance", "Training", "Engagement", "Reports",
]

export function Features() {
  const imageLayouts = [
    "aspect-4/3",
    "aspect-[5/4]",
    "aspect-video",
    "aspect-[6/5]",
  ] as const

  const imagePositions = [
    "object-top",
    "object-center",
    "object-[center_20%]",
    "object-[center_30%]",
  ] as const

  const imageFrames = [
    "rounded-[1.1rem] border-white/20",
    "rounded-[1.35rem] border-primary/25",
    "rounded-[1rem] border-secondary/40",
    "rounded-[1.25rem] border-foreground/10",
  ] as const

  return (
    <section id="features" className="overflow-hidden bg-background py-20 lg:py-28">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
            Why Choose Payscoop HRM
          </h2>
          <p className="mt-4 text-muted-foreground">
            From hiring and onboarding to analytics and engagement, every HR workflow is connected in one modern platform.
          </p>
        </div>
      </div>

      {/* Highlight Banner */}
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 overflow-hidden rounded-3xl border border-border bg-card p-4 sm:p-5 lg:grid-cols-[1.2fr_1fr] lg:p-6">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/60">
            <Image
              src="/images/why-choose-scheduled-reports.png"
              alt="Scheduled reports and automated report delivery in Payscoop HRM"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="space-y-3 p-2">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Automation First
            </span>
            <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Schedule reports once, stay informed always
            </h3>
            <p className="text-muted-foreground">
              Set up recurring deliveries for payroll, attendance, and workforce reports so leadership gets timely insights without manual follow-up.
            </p>
          </div>
        </div>
      </div>

      {/* Grouped Feature Blocks */}
      <div className="mx-auto mt-16 max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        {featureGroups.map((group, index) => {
          const isEven = index % 2 === 0
          let glowClass = "bg-linear-to-br from-secondary/40 via-transparent to-transparent"
          let orbClass = "bg-primary/12"
          let overlayClass = "bg-linear-to-t from-black/50 via-transparent to-black/10"

          if (isEven) {
            glowClass = "bg-linear-to-br from-primary/6 via-transparent to-transparent"
          }

          if (index % 3 === 0) {
            orbClass = "bg-primary/20"
            overlayClass = "bg-linear-to-t from-black/45 via-black/10 to-transparent"
          } else if (index % 3 === 1) {
            orbClass = "bg-secondary/50"
            overlayClass = "bg-linear-to-br from-black/30 via-transparent to-black/20"
          }

          const contentOrderClass = isEven ? "" : "lg:order-2"
          const imageOrderClass = isEven ? "" : "lg:order-1"
          const gridColumnsClass = isEven ? "lg:grid-cols-[1.08fr_1fr]" : "lg:grid-cols-[1fr_1.08fr]"

          return (
          <div
            key={group.title}
            className={`relative grid gap-6 overflow-hidden rounded-3xl border border-border bg-card/95 p-5 sm:p-6 lg:gap-8 ${gridColumnsClass}`}
          >
            <div className={`pointer-events-none absolute inset-0 opacity-70 ${glowClass}`} />
            <div className={`space-y-5 ${contentOrderClass}`}>
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                {`0${index + 1}`}
              </span>
              <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                {group.title}
              </h3>
              <p className="max-w-2xl text-muted-foreground">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>

              <ul className="grid gap-3 text-sm text-foreground sm:grid-cols-2">
                {group.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative overflow-hidden rounded-[1.35rem] border border-border/70 bg-background/60 p-2 shadow-lg shadow-primary/5 ${imageOrderClass}`}>
              <div className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl ${orbClass}`} />
              <div className={`group relative overflow-hidden border ${imageLayouts[index % imageLayouts.length]} ${imageFrames[index % imageFrames.length]}`}>
                <Image
                  src={group.image.src}
                  alt={group.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${imagePositions[index % imagePositions.length]}`}
                />
                <div className={`pointer-events-none absolute inset-0 ${overlayClass}`} />
              </div>
            </div>
          </div>
          )
        })}
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
