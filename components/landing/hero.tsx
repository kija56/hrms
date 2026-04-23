"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [rotationIndex, setRotationIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex((prev) => (prev + 1) % 3)
    }, 8200)

    return () => clearInterval(interval)
  }, [])

  const rotatingImages = [
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=face",
      alt: "HR Professional",
    },
    {
      src: "/images/hero-team-1.png",
      alt: "People discussing HR workflows",
    },
    {
      src: "/images/hero-team-2.png",
      alt: "Team collaboration meeting",
    },
  ] as const

  const slotClasses = [
    "z-10 left-0 top-0 h-[560px] w-[84%]",
    "z-20 -left-4 top-8 h-36 w-[34%] sm:-left-6",
    "z-20 -right-3 -bottom-10 h-44 w-[43%] sm:-right-6",
  ] as const

  return (
    <section className="relative overflow-hidden bg-background px-4 pb-0 pt-28 sm:px-6 lg:px-8 lg:pt-36">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Content */}
          <div className="relative z-10 max-w-xl">
            {/* Main Headline */}
            <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              <span className="block">Manage Your</span>
              <span className="block">
                <span className="text-primary">Workforce</span> Here
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Streamline HR operations with our all-in-one platform. From payroll to performance, 
              manage everything in one place with enterprise security.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button 
                size="lg" 
                className="h-14 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              {/* Watch video CTA */}
              <a
                href="#how-it-works"
                aria-label="Watch product walkthrough video"
                className="group inline-flex items-center gap-3 rounded-full pr-2 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-foreground/20 bg-background transition-all group-hover:border-primary group-hover:bg-primary/95">
                  <span className="absolute inset-0 rounded-full ring-8 ring-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <Play className="relative h-5 w-5 fill-foreground text-foreground transition-colors group-hover:fill-primary-foreground group-hover:text-primary-foreground" />
                </span>
                <span className="text-base font-semibold text-foreground">
                  Watch Video
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="lg:h-[600px]">
            <div className="relative h-full">
              <div className="absolute -bottom-8 -left-6 h-[88%] w-[84%] rounded-4xl bg-muted/40" />

              {rotatingImages.map((image, index) => {
                const slot = (index + rotationIndex) % rotatingImages.length
                const isMain = slot === 0

                return (
                  <div
                    key={image.src}
                    className={`absolute overflow-hidden border border-border bg-background shadow-xl transition-all duration-2200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isMain
                        ? "rounded-4xl opacity-100"
                        : "rounded-2xl border-4 border-background opacity-90"
                    } ${slotClasses[slot]}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={isMain ? 720 : 360}
                      height={isMain ? 980 : 220}
                      className="h-full w-full object-cover object-center"
                      priority={isMain}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
