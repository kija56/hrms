export interface LegalSection {
  heading: string
  points: string[]
}

export interface LegalDocument {
  slug: string
  title: string
  summary: string
  sections: LegalSection[]
}

export const legalDocuments: LegalDocument[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    summary: "How Payscoop HRM collects, uses, and protects personal data.",
    sections: [
      {
        heading: "Information We Collect",
        points: [
          "Account details such as name, email, and organization information.",
          "Workforce and HR records submitted by authorized users.",
          "Usage and technical diagnostics needed to improve reliability and performance.",
        ],
      },
      {
        heading: "How We Use Information",
        points: [
          "To deliver core HRM product functionality and support requests.",
          "To secure accounts, prevent fraud, and maintain platform integrity.",
          "To provide product updates and service-related notifications.",
        ],
      },
      {
        heading: "Data Protection",
        points: [
          "Data is encrypted in transit and protected by role-based access controls.",
          "Operational monitoring and audits help detect unauthorized access.",
          "Only authorized personnel can access customer data for support and maintenance.",
        ],
      },
    ],
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    summary: "Rules and conditions governing use of Payscoop HRM services.",
    sections: [
      {
        heading: "Account Responsibilities",
        points: [
          "Customers are responsible for maintaining secure credentials and access control.",
          "Organizations must ensure user activity complies with applicable laws and internal policies.",
          "Misuse, abuse, or unauthorized platform exploitation may result in suspension.",
        ],
      },
      {
        heading: "Service Usage",
        points: [
          "Payscoop HRM provides cloud-based HR tools under active subscription plans.",
          "Feature availability may vary by plan, region, or compliance requirements.",
          "We may update services to improve security, performance, and user experience.",
        ],
      },
      {
        heading: "Limitation and Support",
        points: [
          "Support is provided through documented channels and response windows.",
          "Customers are responsible for lawful and accurate data entered into the system.",
          "Liability is limited to the extent permitted under applicable law.",
        ],
      },
    ],
  },
  {
    slug: "security",
    title: "Security",
    summary: "Our security practices for protecting customer systems and HR data.",
    sections: [
      {
        heading: "Infrastructure Security",
        points: [
          "Platform services are hosted in secure cloud environments.",
          "System hardening, monitoring, and alerting are applied to production services.",
          "Backups and recovery controls support service continuity and resilience.",
        ],
      },
      {
        heading: "Application Controls",
        points: [
          "Role-based access and audit trails are available across core workflows.",
          "Authentication and authorization controls prevent unauthorized access.",
          "Regular updates are applied to address vulnerabilities and maintain security posture.",
        ],
      },
      {
        heading: "Operational Practices",
        points: [
          "Incident response processes are maintained for security event handling.",
          "Internal access follows least-privilege principles.",
          "Customer support access is logged and controlled for accountability.",
        ],
      },
    ],
  },
  {
    slug: "gdpr",
    title: "GDPR",
    summary: "How Payscoop HRM supports GDPR-aligned data handling practices.",
    sections: [
      {
        heading: "Lawful Processing",
        points: [
          "Customer data is processed only for legitimate HR operations and service delivery.",
          "Data processing purposes are documented and aligned to contractual obligations.",
          "Customers retain control over the data they submit and manage.",
        ],
      },
      {
        heading: "Data Subject Rights",
        points: [
          "Processes are available to support access, correction, and deletion requests.",
          "Customer admins can manage workforce records and retention actions.",
          "Support channels are available for privacy and data-right requests.",
        ],
      },
      {
        heading: "Retention and Transfers",
        points: [
          "Data retention follows customer configuration and legal requirements.",
          "Security safeguards are applied to data transfers and storage.",
          "We continuously review controls to align with evolving compliance expectations.",
        ],
      },
    ],
  },
]

export function getLegalDocumentBySlug(slug: string) {
  return legalDocuments.find((doc) => doc.slug === slug)
}
