import Link from "next/link"
import Image from "next/image"
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
    { label: "Contact", href: "/#contact" },
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
    <>
      <svg className="-mb-px block bg-primary text-foreground" width="100%" height="40" viewBox="0 0 1728 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0 11.8288V39.3288V121.329H1728V11.8288H1712.5C1710 12.1622 1702.3 13.1288 1691.5 14.3288C1678 15.8288 1684.5 14.3288 1677.5 17.3288C1671.9 19.7288 1658.83 18.3288 1653 17.3288H1636.5H1633H1621.5L1605 14.3288H1578.5L1535 17.3288H1523.5C1523.17 14.6622 1520.7 10.3288 1513.5 14.3288C1506.3 18.3288 1496.17 13.6622 1492 10.8288H1481.5C1481.5 8.99549 1479.8 6.12883 1473 9.32883C1466.2 12.5288 1446.5 9.66217 1437.5 7.82884L1432.5 5.32883H1427L1423.5 7.82884H1413.5H1383.5C1373.5 7.82884 1372.33 9.82883 1373 10.8288C1359 13.9955 1327.2 18.4288 1312 10.8288C1293 1.32883 1243.5 5.32883 1235.5 1.82883C1227.5 -1.67117 1209 3.82883 1205.5 5.32883C1202 6.82883 1179.5 9.82883 1178.5 7.82884C1177.5 5.82885 1158 1.82883 1136 5.32883C1114 8.82883 1074.5 5.32883 1068 1.82883C1062.8 -0.971175 1056.5 0.662159 1054 1.82883C1048.8 0.228827 1043.17 2.49549 1041 3.82883C1035 8.22883 1026.5 9.66216 1023 9.82883H1003.5C1001 11.4955 995 13.8288 991 9.82883C987 5.82883 982 6.82884 980 7.82884H947C947.833 6.32884 947.7 3.72883 940.5 5.32883C931.5 7.32883 924 9.82883 925.5 7.82884C908.3 22.6289 887.333 13.9955 879 7.82884C871.667 4.4955 856 -0.171171 852 7.82884C847 17.8289 848.5 3.32883 834.5 14.8288C823.3 24.0288 806.5 13.9955 799.5 7.82884H790V5.32883H787.5L783.5 7.82884L747 9.82883C743 2.22883 738.333 6.66216 736.5 9.82883C709 4.82883 715 19.3288 698 9.82883C684.4 2.22883 673.667 0.328825 670 0.328825H661C660.5 1.32883 658.6 3.32883 655 3.32883C651.4 3.32883 629.833 6.32884 619.5 7.82884C617.833 7.82884 610.6 7.32884 595 5.32883C575.5 2.82882 559.5 5.32883 552.5 7.82884C545.5 10.3288 532 9.82883 517 3.32883C505 -1.87117 490.667 0.162163 485 1.82883H470L467 5.32883H438.5L434.5 7.82884H417L414 13.3288L402.5 14.3289C394.5 15.3289 375.8 16.5289 365 13.3288C354.2 10.1288 343.5 8.32884 339.5 7.82884C330 8.99551 309.6 10.6289 304 7.82884C298.4 5.02883 291.667 6.66217 289 7.82884H278L274.5 11.3289H258.5C248.5 5.32885 246.667 8.82885 247 11.3289C245.167 11.1622 240.2 10.9289 235 11.3289C228.5 11.8289 224.5 22.8289 216 17.3289C207.5 11.8289 206 18.8289 203 17.3289C200.6 16.1289 172.667 15.8289 159 15.8289L154.5 13.3288H148L144 14.3289H116.5C110.5 14.3289 113.5 20.3289 105.5 17.3289C99.1 14.9289 95.8333 17.3289 95 18.8289H76.5L75.5 17.3289H71.5V18.8289H65.5C64.1667 17.4955 60.9 15.6289 58.5 18.8289C55.5 22.8289 50.5 17.8289 49.5 17.3289C48.5 16.8289 45.5 13.3288 41.5 15.8289C37.5 18.3289 38 15.3289 34 13.3288C30 11.3288 22 17.3288 18.5 13.3288C15.7 10.1288 5 10.9955 0 11.8288Z" fill="currentColor"></path></svg>
      <footer className="bg-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-xl p-1">
                <Image
                  src="/images/payscoop-logo-white-on-dark.png"
                  alt="Payscoop HRM"
                  width={300}
                  height={88}
                  className="h-12 w-auto sm:h-14"
                />
              </div>
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
    </>
  )
}
