import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { modules, getModuleById, getModuleIcon } from "@/lib/modules-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return modules.map((module) => ({
    id: module.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const module = getModuleById(id)
  
  if (!module) {
    return {
      title: "Module Not Found — ScoopPay HRM",
    }
  }

  return {
    title: `${module.title} — ScoopPay HRM`,
    description: module.shortDescription,
  }
}

export default async function ModuleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const module = getModuleById(id)

  if (!module) {
    notFound()
  }

  // Get related modules (excluding current)
  const relatedModules = modules.filter(m => m.id !== module.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader 
        title={module.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: module.title }
        ]}
      />

      {/* Main Content */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Download E-book Card */}
              <div className="mb-8 rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
                  The 2024 Guide for {module.title}
                </h3>
                <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download className="h-4 w-4" />
                  Download E-book
                </Button>
              </div>

              {/* All Modules List */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
                  All Modules
                </h3>
                <nav className="space-y-2">
                  {modules.map((m) => (
                    <Link
                      key={m.id}
                      href={`/modules/${m.id}`}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        m.id === module.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <svg 
                        className="h-5 w-5 shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d={getModuleIcon(m.icon)} />
                      </svg>
                      {m.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Module Icon */}
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary">
                <svg 
                  className="h-10 w-10 text-primary-foreground" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d={getModuleIcon(module.icon)} />
                </svg>
              </div>

              {/* Title & Description */}
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                The {module.title} Process for Optimal Results
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {module.fullDescription}
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Leveraging advanced technology and best practices, our {module.title.toLowerCase()} module 
                  provides comprehensive tools that help organizations of all sizes manage their workforce 
                  efficiently. The system includes rigorous validation, automated workflows, and detailed 
                  reporting to ensure complete visibility and control.
                </p>
              </div>

              {/* Features Section with Image */}
              <div className="mt-16">
                <h3 className="mb-8 font-serif text-2xl font-bold text-foreground">
                  Key Features That Drive Results
                </h3>
                
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                      alt={`${module.title} in action`}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Features List */}
                  <div className="space-y-4">
                    {module.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/20 hover:shadow-md"
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefits Section - Tabbed Style */}
              <div className="mt-16">
                <h3 className="mb-8 font-serif text-2xl font-bold text-foreground">
                  Benefits for Your Organization
                </h3>

                <div className="grid gap-6 md:grid-cols-3">
                  {module.benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 font-serif text-xl font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h4 className="mb-2 font-serif text-lg font-bold text-foreground">
                        {benefit.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote/Testimonial */}
              <div className="mt-16 rounded-2xl bg-muted/50 p-8 lg:p-12">
                <FileText className="mb-4 h-10 w-10 text-primary" />
                <blockquote className="font-serif text-xl font-medium leading-relaxed text-foreground lg:text-2xl">
                  &ldquo;Implementing the {module.title.toLowerCase()} module has significantly improved our 
                  operational efficiency. The automation and insights it provides are invaluable to our 
                  HR team.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/20" />
                  <div>
                    <div className="font-semibold text-foreground">Michael Chen</div>
                    <div className="text-sm text-muted-foreground">Operations Manager, Global Solutions Ltd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Modules */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Explore Other Modules
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedModules.map((relatedModule) => (
              <Link
                key={relatedModule.id}
                href={`/modules/${relatedModule.id}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-foreground transition-colors group-hover:bg-primary">
                  <svg 
                    className="h-7 w-7 text-background" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d={getModuleIcon(relatedModule.icon)} />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                  {relatedModule.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {relatedModule.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
            Ready to Transform Your {module.title}?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get started with ScoopPay HRM today and experience the difference our platform can make.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg"
              className="h-14 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-2 px-8 text-base font-semibold"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
