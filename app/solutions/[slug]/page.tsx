import { notFound } from "next/navigation"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { CtaBanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { getSolutionBySlug, solutionItems } from "@/lib/zoho-navigation-data"
import { getSolutionDetailBySlug } from "@/lib/solution-details"
import { FaqSection } from "@/components/shared/faq-section"
import { getSolutionFaqs } from "@/lib/faq-data"
import Link from "next/link"

export async function generateStaticParams() {
  return solutionItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params
  const item = getSolutionBySlug(slug)
  const detail = getSolutionDetailBySlug(slug)

  return {
    title: item ? `${item.title} — Payscoop HRM` : "Solution Not Found — Payscoop HRM",
    description: detail?.hero ?? item?.summary,
  }
}

export default async function SolutionDetailPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>
}>) {
  const { slug } = await params
  const item = getSolutionBySlug(slug)
  const detail = getSolutionDetailBySlug(slug)

  if (!item || !detail) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title={item.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: item.title },
        ]}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative mb-12 overflow-hidden rounded-3xl border border-border bg-linear-to-br from-foreground to-foreground/90 p-8 lg:grid-cols-3 lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 left-10 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                <Sparkles className="h-3.5 w-3.5" />
                Solution Focus
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white">{detail.hero}</h2>
              <div className="mt-5 space-y-3">
                {detail.overview.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-white/75">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="font-serif text-xl font-bold text-white">At a glance</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.summary}</p>
                <Link
                  href="/solutions"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground transition-colors hover:text-white"
                >
                  Back to all solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-foreground">Core capabilities</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {detail.capabilities.map((capability) => (
                  <div key={capability} className="rounded-xl border border-border bg-background p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="font-medium text-foreground">{capability}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-serif text-2xl font-bold text-foreground">Business outcomes</h3>
              <div className="mt-5 space-y-3">
                {detail.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-xl border border-border bg-background p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-secondary p-1">
                        <Check className="h-4 w-4 text-secondary-foreground" />
                      </div>
                      <p className="text-sm font-medium text-foreground">{outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Suggested implementation path
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {detail.implementation.map((step) => (
                <div key={step} className="rounded-xl border border-border bg-background p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <FaqSection
              title={`${item.title} FAQs`}
              description="Common questions from teams evaluating this solution path."
              items={getSolutionFaqs(item.slug)}
            />
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  )
}
