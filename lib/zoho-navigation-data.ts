export interface NavPageItem {
  slug: string
  title: string
  summary: string
  highlights: string[]
}

export const featureItems: NavPageItem[] = [
  {
    slug: "recruitment",
    title: "Recruitment",
    summary: "Attract and hire the right candidates faster with an end-to-end recruiting workflow.",
    highlights: ["Candidate sourcing", "Application tracking", "Interview workflows"],
  },
  {
    slug: "onboarding",
    title: "Onboarding",
    summary: "Deliver a structured first-day experience with automated onboarding journeys.",
    highlights: ["Digital paperwork", "Task checklists", "Role-based onboarding flows"],
  },
  {
    slug: "employee-management",
    title: "Employee Management",
    summary: "Maintain a single source of truth for all employee records and HR operations.",
    highlights: ["Centralized profiles", "Department and role mapping", "Self-service updates"],
  },
  {
    slug: "attendance-management",
    title: "Attendance Management",
    summary: "Track attendance in real time for office, remote, and hybrid teams.",
    highlights: ["Location-aware check-ins", "Policy-driven attendance rules", "Real-time reports"],
  },
  {
    slug: "shift-management",
    title: "Shift Management",
    summary: "Plan and manage complex shifts while balancing workforce availability.",
    highlights: ["Shift templates", "Break and overtime controls", "Roster planning"],
  },
  {
    slug: "leave-management",
    title: "Leave Management",
    summary: "Handle leave requests, policies, accruals, and approvals in one place.",
    highlights: ["Custom leave policies", "Multi-level approvals", "Leave balance visibility"],
  },
  {
    slug: "timesheets",
    title: "Timesheets",
    summary: "Capture project time, billable hours, and team utilization accurately.",
    highlights: ["Project-based tracking", "Approval pipelines", "Client billing support"],
  },
  {
    slug: "hr-help-desk",
    title: "HR Help Desk",
    summary: "Resolve HR queries with ticketing, SLAs, and a dedicated knowledge base.",
    highlights: ["Employee ticketing", "SLA automation", "Case analytics"],
  },
  {
    slug: "document-management",
    title: "Document Management",
    summary: "Store, share, and secure HR files with centralized access control.",
    highlights: ["Template-based documents", "E-sign support", "Permission controls"],
  },
  {
    slug: "offboarding-management",
    title: "Offboarding Management",
    summary: "Run compliant and consistent employee exit workflows.",
    highlights: ["Exit checklists", "Access revocation", "Knowledge transfer"],
  },
  {
    slug: "performance-management",
    title: "Performance Management",
    summary: "Build growth-focused review cycles with measurable performance outcomes.",
    highlights: ["Goal frameworks", "Continuous feedback", "Appraisal cycles"],
  },
  {
    slug: "compensation-management",
    title: "Compensation Management",
    summary: "Plan and administer fair compensation structures across teams.",
    highlights: ["Compensation bands", "Bonus planning", "Benefits oversight"],
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System",
    summary: "Deliver structured learning paths for role-based employee development.",
    highlights: ["Course catalog", "Learning paths", "Progress tracking"],
  },
  {
    slug: "payroll",
    title: "Payroll",
    summary: "Automate payroll processing, payouts, and compliance workflows.",
    highlights: ["Salary processing", "Statutory compliance", "Payslip delivery"],
  },
  {
    slug: "travel-and-expense",
    title: "Travel and Expense",
    summary: "Manage employee expenses from submission to reimbursement.",
    highlights: ["Expense capture", "Approval controls", "Policy compliance"],
  },
  {
    slug: "employee-engagement",
    title: "Employee Engagement",
    summary: "Measure workforce sentiment and improve the employee experience.",
    highlights: ["Engagement surveys", "eNPS tracking", "Culture insights"],
  },
  {
    slug: "communication-and-collaboration",
    title: "Communication and Collaboration",
    summary: "Strengthen team communication with connected workplace tools.",
    highlights: ["Workplace communities", "Announcements", "Cross-team collaboration"],
  },
  {
    slug: "hr-analytics",
    title: "HR Analytics",
    summary: "Turn workforce data into actionable decisions with advanced reporting.",
    highlights: ["Custom dashboards", "Trend analysis", "Executive reports"],
  },
  {
    slug: "hr-automation",
    title: "HR Automation",
    summary: "Automate repetitive HR tasks with workflows, alerts, and approvals.",
    highlights: ["Workflow automation", "Auto field updates", "Webhook integrations"],
  },
  {
    slug: "custom-services",
    title: "Custom Services",
    summary: "Adapt the platform to your business with configurable HR apps.",
    highlights: ["Custom forms", "Tailored processes", "Scalable workflows"],
  },
]

export const resourceItems: NavPageItem[] = [
  {
    slug: "free-tools",
    title: "Free Tools",
    summary: "Practical HR and payroll calculators to speed up daily decisions.",
    highlights: ["HR calculators", "Salary utilities", "Maturity assessments"],
  },
  {
    slug: "hr-toolkit",
    title: "HR Toolkit",
    summary: "Download-ready HR templates, checklists, and policy resources.",
    highlights: ["Document templates", "Policy packs", "Interview kits"],
  },
  {
    slug: "compliance",
    title: "Compliance",
    summary: "Labor-law, payroll, and statutory compliance resources in one place.",
    highlights: ["Statutory forms", "Wage guidance", "Leave and hours rules"],
  },
  {
    slug: "administrator-guide",
    title: "Administrator Guide",
    summary: "Step-by-step setup guidance for admins configuring the HR platform.",
    highlights: ["Setup walkthroughs", "Configuration best practices", "Admin reference"],
  },
  {
    slug: "employee-handbook",
    title: "Employee Handbook",
    summary: "Practical user guide for employees navigating daily HR actions.",
    highlights: ["Self-service flows", "Common tasks", "Portal guidance"],
  },
  {
    slug: "change-document",
    title: "Change Document",
    summary: "Track product changes and understand upgrades between versions.",
    highlights: ["Release updates", "Upgrade notes", "Feature deltas"],
  },
  {
    slug: "help-videos",
    title: "Help Videos",
    summary: "Short product videos that explain workflows and module usage.",
    highlights: ["Feature walkthroughs", "How-to videos", "Module demos"],
  },
  {
    slug: "api-guide",
    title: "API Guide",
    summary: "Technical documentation for integrating with third-party systems.",
    highlights: ["API references", "Authentication basics", "Integration patterns"],
  },
  {
    slug: "troubleshooting-guide",
    title: "Troubleshooting Guide",
    summary: "Find fixes for commonly reported product and setup issues.",
    highlights: ["Issue diagnostics", "Known fixes", "Support-ready checks"],
  },
  {
    slug: "whats-new",
    title: "What's New",
    summary: "Latest product enhancements, launches, and announcement highlights.",
    highlights: ["Recent updates", "New capabilities", "Platform announcements"],
  },
  {
    slug: "blogs",
    title: "Blogs",
    summary: "Insights from HR experts, product teams, and customer stories.",
    highlights: ["HR trends", "Thought leadership", "Product tips"],
  },
  {
    slug: "knowledge-hive",
    title: "Knowledge Hive",
    summary: "Deep-dive HR resources and practical guides for modern teams.",
    highlights: ["Best practices", "HR playbooks", "Operational frameworks"],
  },
  {
    slug: "webinars",
    title: "Webinars",
    summary: "Live and recorded sessions for product learning and strategy.",
    highlights: ["Expert sessions", "Live Q&A", "Scenario walkthroughs"],
  },
  {
    slug: "demo",
    title: "Demo",
    summary: "See key platform capabilities in guided demo sessions.",
    highlights: ["Live product tours", "Use-case coverage", "Q&A support"],
  },
  {
    slug: "welcome-guide",
    title: "Welcome Guide",
    summary: "Quick-start onboarding guide for new organizations and teams.",
    highlights: ["Getting started", "First-week checklist", "Adoption setup"],
  },
  {
    slug: "video-lounge",
    title: "Video Lounge",
    summary: "A growing collection of training and best-practice video content.",
    highlights: ["Training episodes", "Implementation tips", "Advanced tutorials"],
  },
  {
    slug: "training",
    title: "Training",
    summary: "Structured training to help teams adopt the platform effectively.",
    highlights: ["Instructor-led sessions", "Learning paths", "Certification support"],
  },
  {
    slug: "submit-tickets",
    title: "Submit Tickets",
    summary: "Contact support quickly for technical and account assistance.",
    highlights: ["Issue reporting", "Priority support", "Resolution tracking"],
  },
]

export const solutionItems: NavPageItem[] = [
  {
    slug: "small-business",
    title: "For Small Businesses",
    summary: "A streamlined HR stack built for lean teams that need quick setup and fast ROI.",
    highlights: ["Quick implementation", "Affordable growth plans", "Essential HR workflows"],
  },
  {
    slug: "mid-size-businesses",
    title: "For Mid-Size Businesses",
    summary: "Scale HR operations with stronger automation, structure, and analytics.",
    highlights: ["Policy standardization", "Operational automation", "Cross-team visibility"],
  },
  {
    slug: "enterprises",
    title: "For Enterprises",
    summary: "Advanced governance, flexibility, and controls for global organizations.",
    highlights: ["Multi-entity support", "Advanced security controls", "Enterprise-grade reporting"],
  },
]

export function getFeatureBySlug(slug: string) {
  return featureItems.find((item) => item.slug === slug)
}

export function getResourceBySlug(slug: string) {
  return resourceItems.find((item) => item.slug === slug)
}

export function getSolutionBySlug(slug: string) {
  return solutionItems.find((item) => item.slug === slug)
}
