import { notFound } from "next/navigation"
import { Check } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { getHrToolkitPageBySlug, hrToolkitPages } from "@/lib/hr-toolkit-pages"

export async function generateStaticParams() {
  return hrToolkitPages.map((toolkit) => ({ toolkit: toolkit.slug }))
}

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ toolkit: string }> }>) {
  const { toolkit } = await params
  const detail = getHrToolkitPageBySlug(toolkit)

  return {
    title: detail ? `${detail.title} — HR Toolkit — Payscoop HRM` : "Toolkit Page Not Found — Payscoop HRM",
    description: detail?.summary,
  }
}

export default async function HrToolkitDetailPage({
  params,
}: Readonly<{
  params: Promise<{ toolkit: string }>
}>) {
  const { toolkit } = await params
  const detail = getHrToolkitPageBySlug(toolkit)

  if (!detail) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title={detail.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "HR Toolkit", href: "/resources/hr-toolkit" },
          { label: detail.title },
        ]}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-serif text-3xl font-bold text-foreground">{detail.summary}</h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">{detail.purpose}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-foreground">Template set</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {detail.templates.map((template) => (
                  <div key={template.name} className="rounded-xl border border-border bg-background p-4">
                    <p className="font-semibold text-foreground">{template.name}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{template.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-serif text-2xl font-bold text-foreground">Best use cases</h3>
              <div className="mt-4 space-y-3">
                {detail.useCases.map((useCase) => (
                  <div key={useCase} className="rounded-xl border border-border bg-background p-4">
                    <p className="text-sm text-foreground">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl font-bold text-foreground">Implementation checklist</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {detail.implementationChecklist.map((step) => (
                <div key={step} className="rounded-xl border border-border bg-background p-4">
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    <p className="text-sm font-medium text-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl font-bold text-foreground">Explore other toolkit pages</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {hrToolkitPages
                .filter((item) => item.slug !== detail.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/resources/hr-toolkit/${item.slug}`}
                    className="rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/20 hover:shadow-sm"
                  >
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
