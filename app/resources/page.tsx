import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { CtaBanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { resourceItems } from "@/lib/zoho-navigation-data"

export const metadata = {
  title: "Resources — Payscoop HRM",
  description: "Explore free tools, HR toolkits, compliance resources, and enablement content.",
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Resources"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Everything your team needs to adopt faster
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore guides, webinars, support channels, and education content designed for admins
              and employees.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourceItems.map((item) => (
              <Link
                key={item.slug}
                href={`/resources/${item.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  )
}
