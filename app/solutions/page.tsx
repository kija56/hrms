import Link from "next/link"
import { ArrowRight, Landmark, Briefcase, Rocket } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { CtaBanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { solutionItems } from "@/lib/zoho-navigation-data"

export const metadata = {
  title: "Solutions — Payscoop HRM",
  description: "Discover HR solutions tailored for small, mid-size, and enterprise organizations.",
}

const solutionIcons = {
  "small-business": Rocket,
  "mid-size-businesses": Briefcase,
  enterprises: Landmark,
} as const

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Solutions"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-8 lg:p-12">
            <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-8 h-52 w-52 rounded-full bg-secondary/20 blur-3xl" />
            <div className="relative max-w-3xl">
              <span className="inline-flex rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                Solution Blueprint
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
                Pick the right Payscoop HRM operating model for your growth stage
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Each solution path is designed for a different level of complexity, governance, and
                rollout speed.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solutionItems.map((item, index) => {
              const Icon = solutionIcons[item.slug as keyof typeof solutionIcons]

              return (
              <Link
                key={item.slug}
                href={`/solutions/${item.slug}`}
                className={`group relative overflow-hidden rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
                  index % 2 === 0
                    ? "bg-linear-to-br from-card to-muted/40"
                    : "bg-linear-to-br from-card to-primary/5"
                }`}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background transition-colors group-hover:bg-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
                </div>
              </Link>
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
