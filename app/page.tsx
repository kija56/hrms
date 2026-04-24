import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { AboutUs } from "@/components/landing/about-us"
import { CompanyMarquee } from "@/components/landing/company-marquee"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Testimonials } from "@/components/landing/testimonials"
import { CtaBanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { FaqSection } from "@/components/shared/faq-section"
import { homeFaqs } from "@/lib/faq-data"
import { buildFaqJsonLd } from "@/lib/seo"

export default function LandingPage() {
  const faqJsonLd = buildFaqJsonLd(homeFaqs)

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <AboutUs />
      <CompanyMarquee />
      <Features />
      <HowItWorks />
      <Testimonials />
      <div className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FaqSection
            title="Frequently Asked Questions"
            description="Everything teams usually ask before rolling out Payscoop HRM."
            items={homeFaqs}
          />
        </div>
      </div>
      <CtaBanner />
      <Footer />
    </main>
  )
}
