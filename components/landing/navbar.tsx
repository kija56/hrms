"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronDown,
  Layers,
  BookOpen,
  Building2,
  Users,
  ClipboardList,
  BarChart3,
  ShieldCheck,
  FileText,
  Video,
  Wrench,
  Rocket,
  Briefcase,
  Landmark,
} from "lucide-react"
import {
  featureItems,
  resourceItems,
  solutionItems,
  type NavPageItem,
} from "@/lib/zoho-navigation-data"

interface MenuGroup {
  label: string
  slugs: string[]
}

interface DropdownSection {
  href: string
  label: string
  items: NavPageItem[]
  icon: React.ComponentType<{ className?: string }>
  groups: MenuGroup[]
}

const dropdownSections: DropdownSection[] = [
  {
    href: "/features",
    label: "Features",
    items: featureItems,
    icon: Layers,
    groups: [
      {
        label: "Hiring and Core HR",
        slugs: [
          "recruitment",
          "onboarding",
          "employee-management",
          "attendance-management",
          "shift-management",
          "leave-management",
        ],
      },
      {
        label: "Talent and Productivity",
        slugs: [
          "timesheets",
          "performance-management",
          "compensation-management",
          "learning-management-system",
          "employee-engagement",
          "communication-and-collaboration",
        ],
      },
      {
        label: "Operations and Platform",
        slugs: [
          "hr-help-desk",
          "document-management",
          "offboarding-management",
          "payroll",
          "travel-and-expense",
          "hr-analytics",
          "hr-automation",
          "custom-services",
        ],
      },
    ],
  },
  {
    href: "/resources",
    label: "Resources",
    items: resourceItems,
    icon: BookOpen,
    groups: [
      {
        label: "Documentation",
        slugs: [
          "administrator-guide",
          "employee-handbook",
          "change-document",
          "api-guide",
          "troubleshooting-guide",
          "welcome-guide",
        ],
      },
      {
        label: "Toolkits and Compliance",
        slugs: ["free-tools", "hr-toolkit", "compliance"],
      },
      {
        label: "Learning and Community",
        slugs: ["help-videos", "video-lounge", "webinars", "training", "blogs", "knowledge-hive"],
      },
      {
        label: "Product Updates and Support",
        slugs: ["whats-new", "demo", "submit-tickets"],
      },
    ],
  },
  {
    href: "/solutions",
    label: "Solutions",
    items: solutionItems,
    icon: Building2,
    groups: [
      {
        label: "Business Size",
        slugs: ["small-business", "mid-size-businesses", "enterprises"],
      },
    ],
  },
]

const groupIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Hiring and Core HR": Users,
  "Talent and Productivity": ClipboardList,
  "Operations and Platform": BarChart3,
  Documentation: ShieldCheck,
  "Toolkits and Compliance": ShieldCheck,
  "Learning and Community": Video,
  "Product Updates and Support": Wrench,
  "Business Size": Briefcase,
}

const solutionItemIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "small-business": Rocket,
  "mid-size-businesses": Briefcase,
  enterprises: Landmark,
}

const simpleNavLinks = [
  { href: "/modules", label: "Modules" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <span className="font-serif text-xl font-bold text-primary-foreground">S</span>
            </div>
            <span className="font-serif text-2xl font-bold text-foreground">Payscoop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {dropdownSections.map((section) => (
              <div key={section.label} className="group relative">
                <Link
                  href={section.href}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {section.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <div
                  className={`invisible absolute top-full z-50 mt-3 flex max-h-[75vh] w-[900px] max-w-[90vw] translate-y-2 flex-col rounded-2xl border border-border bg-background p-6 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                    section.label === "Features"
                      ? "left-0 translate-x-0"
                      : "left-1/2 -translate-x-1/2"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-2">
                      <section.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">{section.label}</span>
                    </div>
                    <Link
                      href={section.href}
                      className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      View all
                    </Link>
                  </div>
                  <div
                    className={`grid gap-6 ${
                      section.label === "Solutions" ? "grid-cols-1" : "grid-cols-3"
                    } overflow-y-auto pr-2`}
                  >
                    {section.groups.map((group) => {
                      const GroupIcon = groupIconMap[group.label] ?? FileText
                      const groupedItems = group.slugs
                        .map((slug) => section.items.find((item) => item.slug === slug))
                        .filter((item): item is NavPageItem => Boolean(item))

                      return (
                        <div key={group.label}>
                          <div className="mb-3 flex items-center gap-2">
                            <GroupIcon className="h-4 w-4 text-primary" />
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              {group.label}
                            </h4>
                          </div>
                          <div className="space-y-2">
                            {groupedItems.map((item) => {
                              const SolutionIcon = solutionItemIconMap[item.slug]
                              return (
                                <Link
                                  key={item.slug}
                                  href={`${section.href}/${item.slug}`}
                                  className="block rounded-xl border border-transparent p-3 transition-all hover:border-border hover:bg-muted/50"
                                >
                                  <div className="flex items-start gap-2">
                                    {SolutionIcon && <SolutionIcon className="mt-0.5 h-4 w-4 text-primary" />}
                                    <div>
                                      <div className="text-sm font-semibold text-foreground">{item.title}</div>
                                      <div className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                                        {item.summary}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}

            {simpleNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" className="text-foreground">
              Sign In
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-background pb-6 md:hidden">
            <div className="flex flex-col gap-4 pt-4">
              {dropdownSections.map((section) => (
                <div key={section.label}>
                  <Link
                    href={section.href}
                    className="text-sm font-semibold text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {section.label}
                  </Link>
                  <div className="mt-2 ml-3 space-y-1 border-l border-border pl-3">
                    {section.items.slice(0, 6).map((item) => (
                      <Link
                        key={item.slug}
                        href={`${section.href}/${item.slug}`}
                        className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                    <Link
                      href={section.href}
                      className="block text-sm font-medium text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      View all {section.label.toLowerCase()}
                    </Link>
                  </div>
                </div>
              ))}

              {simpleNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="ghost" className="w-full justify-start text-foreground">
                  Sign In
                </Button>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
