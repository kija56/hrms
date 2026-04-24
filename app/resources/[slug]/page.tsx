import { notFound } from "next/navigation"
import { Check, ArrowRight, Download, ExternalLink, PlayCircle, BookOpen } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { CtaBanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { getResourceBySlug, resourceItems } from "@/lib/zoho-navigation-data"
import { getResourceDetailBySlug } from "@/lib/resource-details"
import { TanzaniaResourceWorkbench } from "@/components/resources/tanzania-resource-workbench"
import Link from "next/link"

export async function generateStaticParams() {
  return resourceItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params
  const item = getResourceBySlug(slug)
  const detail = getResourceDetailBySlug(slug)

  return {
    title: item ? `${item.title} — Payscoop HRM` : "Resource Not Found — Payscoop HRM",
    description: detail?.hero ?? item?.summary,
  }
}

export default async function ResourceDetailPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>
}>) {
  const { slug } = await params
  const item = getResourceBySlug(slug)
  const detail = getResourceDetailBySlug(slug)

  if (!item || !detail) {
    notFound()
  }

  const linkMeta = {
    video: { icon: PlayCircle, buttonLabel: "Watch now" },
    download: { icon: Download, buttonLabel: "Download" },
    docs: { icon: BookOpen, buttonLabel: "Open docs" },
    external: { icon: ExternalLink, buttonLabel: "Open link" },
  } as const

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title={item.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
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
              <h3 className="font-serif text-xl font-bold text-foreground">At a glance</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              <Link
                href="/resources"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Back to all resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-foreground">What this resource includes</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {detail.includes.map((point) => (
                  <div key={point} className="rounded-xl border border-border bg-background p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="font-medium text-foreground">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-serif text-2xl font-bold text-foreground">Best for</h3>
              <div className="mt-5 space-y-3">
                {detail.bestFor.map((useCase) => (
                  <div key={useCase} className="rounded-xl border border-border bg-background p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-secondary p-1">
                        <Check className="h-4 w-4 text-secondary-foreground" />
                      </div>
                      <p className="text-sm font-medium text-foreground">{useCase}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl font-bold text-foreground">Resource links</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {detail.links.map((resourceLink) => {
                const meta = linkMeta[resourceLink.type]
                const Icon = meta.icon

                return (
                  <a
                    key={resourceLink.href}
                    href={resourceLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/20 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{resourceLink.label}</p>
                          <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                            {resourceLink.type}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-primary">{meta.buttonLabel}</span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl font-bold text-foreground">How to use this resource effectively</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {detail.howToUse.map((step) => (
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

          {(slug === "free-tools" || slug === "compliance" || slug === "hr-toolkit") && (
            <TanzaniaResourceWorkbench slug={slug} />
          )}
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  )
}
