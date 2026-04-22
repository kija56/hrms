import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-3xl bg-white/5" />
        <div className="absolute right-20 top-20 h-24 w-24 rounded-2xl bg-white/5" />
        <div className="absolute bottom-10 left-1/4 h-16 w-16 rotate-12 rounded-xl bg-white/5" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
          Ready to transform your HR operations?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
          Join thousands of companies already using ScoopPay HRM to streamline their workforce management. Start your free 14-day trial today.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            Schedule a Demo
          </Button>
        </div>

        <p className="mt-6 text-sm text-primary-foreground/60">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}
