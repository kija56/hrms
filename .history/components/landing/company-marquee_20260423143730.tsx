const companies = [
  "Safaricom",
  "Equity Bank",
  "KCB Group",
  "M-PESA",
  "Twiga Foods",
  "Jumia",
  "Andela",
  "Cellulant",
  "Sendy",
  "Kobo360",
  "Flutterwave",
  "Paystack",
]

export function CompanyMarquee() {
  return (
    <section className="border-y border-border bg-card py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          Trusted by leading companies across Africa
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-card to-transparent" />
        
        {/* Marquee */}
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {[...companies, ...companies].map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex items-center gap-2 text-lg font-medium text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                <span className="font-serif text-sm font-bold">{company[0]}</span>
              </div>
              <span>{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
