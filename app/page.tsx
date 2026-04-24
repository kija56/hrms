import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { AboutUs } from "@/components/landing/about-us"
import { CompanyMarquee } from "@/components/landing/company-marquee"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Testimonials } from "@/components/landing/testimonials"
import { CtaBanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <CompanyMarquee />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  )
}
