import Image from "next/image"

const companies = [
  { name: "Safaricom", logo: "/logos/safaricom.png" },
  { name: "Equity Bank", logo: "/logos/equity.png" },
  { name: "KCB Group", logo: "/logos/kcb.png" },
  { name: "M-PESA", logo: "/logos/mpesa.png" },
  { name: "Twiga Foods", logo: "/logos/twiga.png" },
  { name: "Jumia", logo: "/logos/jumia.svg" },
  { name: "Andela", logo: "/logos/andela.png" },
  { name: "Cellulant", logo: "/logos/cellulant.png" },
  { name: "Sendy", logo: "/logos/sendy.jpeg" },
  { name: "Kobo360", logo: "/logos/kobo.png" },
  { name: "Flutterwave", logo: "/logos/flutterwave.png" },
  { name: "Paystack", logo: "/logos/paystack.png" },
]

export function CompanyMarquee() {
  // We double the list to ensure the loop is seamless
  const marqueeItems = [...companies, ...companies]

  return (
    <section className="py-16 bg-background overflow-hidden">
      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .marquee-mask {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 mb-12">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/50">
          Trusted by Industry Giants
        </p>
      </div>

      <div className="marquee-mask relative w-full">
        <div className="animate-marquee-infinite hover:[animation-play-state:paused] flex items-center">
          {marqueeItems.map((company, i) => (
            <div
              key={`${company.name}-${i}`}
              className="flex items-center justify-center px-12 transition-all duration-500"
            >
              <div className="relative h-12 w-36 shrink-0 transition-all duration-500 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 hover:scale-110">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}