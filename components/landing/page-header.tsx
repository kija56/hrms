import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface PageHeaderProps {
  title: string
  breadcrumbs: {
    label: string
    href?: string
  }[]
}

export function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-foreground px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-[80px]" />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl text-center">
        {/* Title */}
        <h1 className="font-serif text-4xl font-bold text-background sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav className="mt-6 flex items-center justify-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-background/50" />
              )}
              {index === 0 && (
                <Home className="mr-1 h-4 w-4 text-background/70" />
              )}
              {crumb.href ? (
                <Link 
                  href={crumb.href}
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-sm text-primary">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  )
}
