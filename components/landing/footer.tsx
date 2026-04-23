import Link from "next/link"
import { MessageCircle, Briefcase, Users, Camera } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Modules", href: "/modules" },
    { label: "Pricing", href: "/solutions" },
    { label: "Integrations", href: "/features/custom-services" },
    { label: "API", href: "/resources/api-guide" },
  ],
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Careers", href: "/solutions/mid-size-businesses" },
    { label: "Blog", href: "/resources/blogs" },
    { label: "Press", href: "/resources/whats-new" },
    { label: "Contact", href: "/resources/submit-tickets" },
  ],
  resources: [
    { label: "Free Tools", href: "/resources/free-tools" },
    { label: "HR Toolkit", href: "/resources/hr-toolkit" },
    { label: "Compliance", href: "/resources/compliance" },
    { label: "Help Center", href: "/resources/troubleshooting-guide" },
    { label: "Webinars", href: "/resources/webinars" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms-of-service" },
    { label: "Security", href: "/legal/security" },
    { label: "GDPR", href: "/legal/gdpr" },
  ],
}

const socialLinks = [
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
  { icon: Users, href: "#", label: "Facebook" },
  { icon: Camera, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <span className="font-serif text-xl font-bold text-primary-foreground">S</span>
              </div>
              <span className="font-serif text-2xl font-bold text-background">Payscoop</span>
            </Link>
            <p className="mt-4 max-w-xs text-background/60">
              Modern HR management that feels human, scales like software. Built for teams across Africa and beyond.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background/60 transition-colors hover:bg-background/20 hover:text-background"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-4 font-serif font-bold text-background">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-serif font-bold text-background">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="mb-4 font-serif font-bold text-background">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 font-serif font-bold text-background">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Payscoop HRM. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            Made with ❤️ for HR teams everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
