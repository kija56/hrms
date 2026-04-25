"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  Download,
} from "lucide-react"

export function HowItWorks() {
  const appImages = [
    "/images/payscoop-mobile-app.png",
    "/images/payscoop-mobile-app-2.png",
    "/images/payscoop-mobile-app-3.png",
  ] as const

  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % appImages.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [appImages.length])

  return (
    <section id="download-app" className="bg-foreground py-20 lg:py-28 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-4xl border border-background/15 bg-linear-to-br from-background/10 via-background/5 to-background/10 p-6 sm:p-8 lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                <Download className="h-3.5 w-3.5" />
                Mobile App
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-background text-balance sm:text-4xl lg:text-5xl">
                Download Payscoop HRM App
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-background/75">
                Manage leave requests, approvals, payroll updates, and team communication from anywhere. Built for employees and managers who need HR in their pocket.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
                >
                  Download for Android
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:border-background/50"
                >
                  Download for iOS
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-4xl bg-primary/20 blur-3xl" />
              <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10 blur-2xl animation-duration-[4s]" />
              <div className="relative mx-auto aspect-square w-full max-w-xl lg:max-w-2xl">
                {appImages.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Payscoop HRM mobile app screens on smartphones"
                    width={1024}
                    height={1024}
                    className={`animate-mobile-sway absolute inset-0 h-full w-full object-contain drop-shadow-2xl origin-[55%_45%] transition-opacity duration-700 ${
                      index === activeImage ? "opacity-100" : "opacity-0"
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {appImages.map((src, index) => (
                  <button
                    key={`${src}-dot`}
                    type="button"
                    aria-label={`Show app image ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeImage ? "w-6 bg-primary" : "w-2.5 bg-background/40 hover:bg-background/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
