"use client"

import { useState } from "react"
import { Upload, Settings, Zap, Rocket, Users, Building2 } from "lucide-react"

const tabs = [
  { id: "employees", label: "For Employees", icon: Users },
  { id: "business", label: "For Business", icon: Building2 },
]

const steps = {
  employees: [
    {
      number: "1",
      icon: Upload,
      title: "Sign up, It's Free!",
      description: "Create your account in minutes and get instant access to your personalized HR dashboard.",
    },
    {
      number: "2",
      icon: Settings,
      title: "Complete Your Profile",
      description: "Add your details, upload documents, and set your preferences for a tailored experience.",
    },
    {
      number: "3",
      icon: Rocket,
      title: "Access Everything",
      description: "View payslips, request leave, track goals, and stay connected with your team effortlessly.",
    },
  ],
  business: [
    {
      number: "1",
      icon: Upload,
      title: "Import Your Data",
      description: "Easily migrate your existing employee data with our smart import tools. CSV, Excel, or direct API sync.",
    },
    {
      number: "2",
      icon: Settings,
      title: "Configure Workflows",
      description: "Set up approval chains, leave policies, payroll rules, and compliance requirements for your region.",
    },
    {
      number: "3",
      icon: Rocket,
      title: "Scale With Confidence",
      description: "As your team grows, Payscoop grows with you. No limits on employees, unlimited modules, always ready.",
    },
  ],
}

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"employees" | "business">("employees")

  return (
    <section id="how-it-works" className="bg-foreground py-20 lg:py-28 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            <Zap className="h-4 w-4" />
            Process
          </span>
          <h2 className="font-serif text-3xl font-bold text-background sm:text-4xl lg:text-5xl text-balance">
            How It Works?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-background/70">
            Get started in minutes with our streamlined onboarding process designed for both employees and businesses.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full border border-background/20 bg-background/5 p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "employees" | "business")}
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-background/70 hover:text-background"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="mt-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {steps[activeTab].map((step, index) => (
              <div key={step.number} className="group relative">
                {/* Connector line (hidden on mobile, visible on lg) */}
                {index < steps[activeTab].length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-primary to-primary/20 lg:block" />
                )}

                {/* Card */}
                <div className="relative overflow-hidden rounded-3xl border border-background/10 bg-background/5 p-8 backdrop-blur transition-all duration-300 hover:bg-background/10 hover:border-background/20">
                  {/* Step number circle */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
                      {step.number}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                  </div>

                  {/* Icon */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-background/10 text-background transition-transform duration-300 group-hover:scale-105">
                    <step.icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 font-serif text-xl font-bold text-background lg:text-2xl">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-background/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-background/70">
            Ready to transform your HR operations?
          </p>
          <button className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40">
            Get Started Now
            <Rocket className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
