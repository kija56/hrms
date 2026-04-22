import { notFound } from "next/navigation"
import { Check } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { getLegalDocumentBySlug, legalDocuments } from "@/lib/legal-content"

export async function generateStaticParams() {
  return legalDocuments.map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params
  const doc = getLegalDocumentBySlug(slug)

  return {
    title: doc ? `${doc.title} — ScoopPay HRM` : "Legal Page Not Found — ScoopPay HRM",
    description: doc?.summary,
  }
}

export default async function LegalPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>
}>) {
  const { slug } = await params
  const doc = getLegalDocumentBySlug(slug)

  if (!doc) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title={doc.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Legal", href: "/legal/privacy-policy" },
          { label: doc.title },
        ]}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 rounded-2xl border border-border bg-card p-6 lg:p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-3 text-muted-foreground">{doc.summary}</p>
          </div>

          <div className="space-y-6">
            {doc.sections.map((section) => (
              <article key={section.heading} className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                <h3 className="font-serif text-xl font-bold text-foreground">{section.heading}</h3>
                <ul className="mt-4 space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 rounded-full bg-primary/10 p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
