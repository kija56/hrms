import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { modules, getModuleIcon } from "@/lib/modules-data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Modules — Payscoop HRM",
  description: "Explore our comprehensive HR modules including payroll, attendance, leave management, performance tracking, and more.",
}

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader 
        title="Our Modules" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Modules" }
        ]}
      />

      {/* What We Provide Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-semibold text-primary">What We Provide</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Inspiring HR Solutions
            </h2>
          </div>

          {/* Modules Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={`/modules/${module.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/20 hover:shadow-xl"
              >
                {/* Hover gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground transition-colors group-hover:bg-primary">
                  <svg 
                    className="h-8 w-8 text-background" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d={getModuleIcon(module.icon)} />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                  {module.title}
                </h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {module.shortDescription}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Hiring Sections - Jobaway Style */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* For Employees */}
            <div className="relative overflow-hidden rounded-3xl bg-secondary p-8 text-secondary-foreground lg:p-12">
              {/* Background decoration */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10" />
              <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/5" />
              
              <div className="relative">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/70">
                  For Employees
                </h3>
                <h2 className="mb-4 font-serif text-2xl font-bold text-white lg:text-3xl">
                  Manage Your Work Life
                </h2>
                <p className="mb-8 text-white/80 leading-relaxed">
                  Access your payslips, submit leave requests, track your attendance, and manage your 
                  performance goals all from one intuitive platform.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-secondary transition-all hover:bg-white/90"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* For Business Owners */}
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground lg:p-12">
              {/* Background decoration */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10" />
              <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/5" />
              
              <div className="relative">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/70">
                  For Business Owners
                </h3>
                <h2 className="mb-4 font-serif text-2xl font-bold text-white lg:text-3xl">
                  Transform Your HR Operations
                </h2>
                <p className="mb-8 text-white/80 leading-relaxed">
                  Streamline your entire HR workflow from recruitment to retirement. 
                  Automate repetitive tasks and focus on what matters most - your people.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-white/90"
                >
                  Schedule Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote>
            <p className="font-serif text-2xl font-medium leading-relaxed text-foreground lg:text-3xl">
              &ldquo;Payscoop HRM has transformed how we manage our workforce. The platform is intuitive, 
              comprehensive, and has saved us countless hours on administrative tasks.&rdquo;
            </p>
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-14 w-14 rounded-full bg-secondary/20" />
            <div className="text-left">
              <div className="font-semibold text-foreground">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">HR Director, TechCorp Africa</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
