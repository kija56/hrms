"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  BellRing,
  CheckCircle2,
  Download,
  Wifi,
} from "lucide-react"

const appHighlights = [
  { title: "Approve on the go", icon: CheckCircle2 },
  { title: "Real-time alerts", icon: BellRing },
  { title: "Works on any network", icon: Wifi },
]

export function HowItWorks() {
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

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {appHighlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-background/15 bg-background/5 p-4">
                    <div className="mb-2 inline-flex rounded-full bg-primary/15 p-2 text-primary">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium text-background/85">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-4xl bg-primary/15 blur-3xl" />
              <div className="relative mx-auto max-w-sm rounded-4xl border border-background/20 bg-background/10 p-4 shadow-2xl shadow-black/35 backdrop-blur">
                <div className="mb-3 flex items-center justify-between rounded-xl border border-background/15 bg-background/10 px-3 py-2">
                  <p className="text-sm font-semibold text-background">Payscoop Mobile</p>
                  <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">Live</span>
                </div>
                <div className="space-y-3 rounded-xl border border-background/15 bg-background/5 p-3">
                  <div className="rounded-lg bg-background/10 p-3">
                    <p className="text-xs text-background/60">Pending approvals</p>
                    <p className="mt-1 text-lg font-bold text-background">12 requests</p>
                  </div>
                  <div className="rounded-lg bg-background/10 p-3">
                    <p className="text-xs text-background/60">This week attendance</p>
                    <p className="mt-1 text-lg font-bold text-background">96.4%</p>
                  </div>
                  <div className="rounded-lg bg-background/10 p-3">
                    <p className="text-xs text-background/60">Next payroll run</p>
                    <p className="mt-1 text-lg font-bold text-background">In 2 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
