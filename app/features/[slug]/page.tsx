import { notFound } from "next/navigation"
import { Check, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { CtaBanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { featureItems, getFeatureBySlug } from "@/lib/zoho-navigation-data"
import { getFeatureDetailBySlug } from "@/lib/feature-details"
import { FaqSection } from "@/components/shared/faq-section"
import { getFeatureFaqs } from "@/lib/faq-data"
import Link from "next/link"

export async function generateStaticParams() {
  return featureItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params
  const item = getFeatureBySlug(slug)
  const detail = getFeatureDetailBySlug(slug)

  const description = detail?.hero ?? item?.summary

  return {
    title: item ? `${item.title} — Payscoop HRM` : "Feature Not Found — Payscoop HRM",
    description,
  }
}

export default async function FeatureDetailPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>
}>) {
  const { slug } = await params
  const item = getFeatureBySlug(slug)
  const detail = getFeatureDetailBySlug(slug)

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
          { label: "Features", href: "/features" },
          { label: item.title },
        ]}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 rounded-3xl border border-border bg-card p-8 lg:grid-cols-3 lg:p-10">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-foreground">{detail.hero}</h2>
              <div className="mt-5 space-y-3">
                {detail.overview.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="font-serif text-xl font-bold text-foreground">Why this module matters</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              <Link
                href="/features"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Back to all features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-foreground">Key capabilities</h3>
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
              How teams typically implement this
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {detail.workflow.map((step) => (
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
              description="Helpful answers to common questions for this feature."
              items={getFeatureFaqs(item.slug)}
            />
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  )
}
