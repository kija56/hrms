import Link from "next/link"
import { ArrowRight, Layers, Sparkles, Users } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { CtaBanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { featureItems } from "@/lib/zoho-navigation-data"

export const metadata = {
  title: "Features — Payscoop HRM",
  description: "Explore all HR platform capabilities inspired by Zoho People feature sections.",
}

const featureGroups = [
  {
    title: "Hiring and Core HR",
    description: "Set up a solid people operations foundation from hiring to day-to-day workforce management.",
    slugs: [
      "recruitment",
      "onboarding",
      "employee-management",
      "attendance-management",
      "shift-management",
      "leave-management",
      "timesheets",
    ],
  },
  {
    title: "Talent and Employee Experience",
    description: "Develop, engage, and retain employees with structured growth and collaboration experiences.",
    slugs: [
      "performance-management",
      "compensation-management",
      "learning-management-system",
      "employee-engagement",
      "communication-and-collaboration",
    ],
  },
  {
    title: "Operations, Analytics, and Automation",
    description: "Run HR at scale with strong support workflows, automation, and decision-ready analytics.",
    slugs: [
      "hr-help-desk",
      "document-management",
      "offboarding-management",
      "payroll",
      "travel-and-expense",
      "hr-analytics",
      "hr-automation",
      "custom-services",
    ],
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Features"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Features" }]}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-8 lg:p-12">
            <div className="pointer-events-none absolute -right-12 -top-16 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-14 left-10 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />

            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                <Sparkles className="h-3.5 w-3.5" />
                Product capabilities
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
                HR features for every stage of the employee lifecycle
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Explore Payscoop HRM capabilities grouped by outcomes, not just modules, so it is easier
                to find what matters to your team.
              </p>
            </div>

            <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Layers className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wider">Feature groups</span>
                </div>
                <p className="mt-2 font-serif text-2xl font-bold text-white">3</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wider">Capabilities</span>
                </div>
                <p className="mt-2 font-serif text-2xl font-bold text-white">{featureItems.length}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wider">Coverage</span>
                </div>
                <p className="mt-2 font-serif text-2xl font-bold text-white">End-to-end</p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-10">
            {featureGroups.map((group) => {
              const groupedItems = group.slugs
                .map((slug) => featureItems.find((item) => item.slug === slug))
                .filter((item): item is (typeof featureItems)[number] => Boolean(item))

              return (
                <section key={group.title} className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                  <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                      <h3 className="font-serif text-2xl font-bold text-foreground">{group.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                    <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {groupedItems.length} features
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {groupedItems.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/features/${item.slug}`}
                        className="group rounded-2xl border border-border bg-background p-5 transition-all hover:border-primary/20 hover:shadow-md"
                      >
                        <h4 className="font-serif text-lg font-bold text-foreground">{item.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Explore feature
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  )
}
