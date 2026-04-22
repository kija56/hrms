export interface ResourceDetail {
  slug: string
  hero: string
  overview: string[]
  includes: string[]
  bestFor: string[]
  howToUse: string[]
  links: {
    label: string
    href: string
    type: "video" | "download" | "docs" | "external"
  }[]
}

export const resourceDetails: ResourceDetail[] = [
  {
    slug: "administrator-guide",
    hero: "A complete playbook for configuring and governing your HR platform as an admin.",
    overview: [
      "The Administrator Guide helps HR and system admins set up organizational structure, policies, workflows, and permissions in a consistent way.",
      "It acts as the primary implementation manual for launching new environments and scaling configurations over time.",
    ],
    includes: [
      "Initial account and organization setup",
      "Role hierarchy and permission model design",
      "Policy configuration for attendance, leave, and approvals",
      "Workflow automation and notification setup",
      "Maintenance and governance best practices",
    ],
    bestFor: [
      "HR administrators owning system setup",
      "IT or operations teams supporting HR tooling",
      "Implementation partners and internal champions",
    ],
    howToUse: [
      "Start with environment and org-structure configuration chapters",
      "Configure modules in rollout priority order",
      "Validate access and approvals with pilot users",
      "Use governance checklists for ongoing admin hygiene",
    ],
    links: [
      {
        label: "Download Administrator Guide",
        href: "https://help.zoho.com/portal/en/kb/people/administrator-guide/introduction/articles/what-is-zoho-people",
        type: "download",
      },
    ],
  },
  {
    slug: "employee-handbook",
    hero: "A practical user guide that helps employees complete HR tasks confidently.",
    overview: [
      "The Employee Handbook explains how team members can use self-service actions such as leave requests, profile updates, attendance checks, and document access.",
      "It reduces dependency on HR for repetitive process questions and improves adoption.",
    ],
    includes: [
      "Self-service portal navigation essentials",
      "Attendance and leave request walkthroughs",
      "Document and payslip access instructions",
      "Approvals, notifications, and task tracking",
      "Common troubleshooting scenarios",
    ],
    bestFor: [
      "New joiners during onboarding",
      "Employees transitioning from manual HR processes",
      "Managers guiding teams on self-service usage",
    ],
    howToUse: [
      "Share handbook in onboarding and internal wiki",
      "Map chapters to common employee tasks",
      "Use as first line support before raising tickets",
      "Update links as workflows evolve",
    ],
    links: [
      {
        label: "Download Employee Handbook",
        href: "https://help.zoho.com/portal/en/kb/people/employee-handbook-5-0/introduction/articles/zoho-people-5-0-employee-handbook",
        type: "download",
      },
    ],
  },
  {
    slug: "change-document",
    hero: "Track platform updates and understand what changes across releases.",
    overview: [
      "The Change Document captures enhancements, behavior updates, and release-level differences between product versions.",
      "It helps teams plan adoption, retraining, and policy adjustments ahead of rollout.",
    ],
    includes: [
      "Feature additions and enhancements",
      "UI and workflow behavior changes",
      "Deprecations and migration notes",
      "Impact summary for administrators and users",
      "Recommended pre-release checks",
    ],
    bestFor: [
      "Admins planning version upgrades",
      "Change management owners",
      "Support teams preparing update communication",
    ],
    howToUse: [
      "Review release impact before enabling new settings",
      "Flag changes affecting critical HR operations",
      "Update SOPs and training docs accordingly",
      "Communicate user-facing changes ahead of rollout",
    ],
    links: [
      {
        label: "Download Change Document",
        href: "https://help.zoho.com/portal/en/kb/people/version-change-documents/articles/5-0-change-documentation",
        type: "download",
      },
    ],
  },
  {
    slug: "help-videos",
    hero: "Quick visual walkthroughs for core HR workflows and module operations.",
    overview: [
      "Help Videos provide short, task-focused demonstrations so teams can learn by watching real platform interactions.",
      "They are ideal for reducing onboarding time and clarifying multi-step processes.",
    ],
    includes: [
      "Module-specific setup walkthroughs",
      "Employee and manager task demos",
      "Configuration and approval flow tutorials",
      "Tips for avoiding common process mistakes",
      "Feature update spotlights",
    ],
    bestFor: [
      "Visual learners and first-time users",
      "Internal enablement and onboarding sessions",
      "Managers coaching teams on workflows",
    ],
    howToUse: [
      "Create playlists by role (employee, manager, admin)",
      "Embed key videos into onboarding documentation",
      "Use during team enablement sessions",
      "Pair with handbook and troubleshooting docs",
    ],
    links: [
      {
        label: "Watch Help Videos",
        href: "https://help.zoho.com/portal/en/kb/people/help-videos-5-0",
        type: "video",
      },
    ],
  },
  {
    slug: "api-guide",
    hero: "Technical reference for integrating HR data and workflows with external systems.",
    overview: [
      "The API Guide helps engineering and operations teams connect HR workflows with payroll, finance, collaboration, and analytics tools.",
      "It outlines endpoints, authentication, payload models, and integration patterns.",
    ],
    includes: [
      "Authentication and authorization basics",
      "Endpoint catalogs and request examples",
      "Common integration use cases and patterns",
      "Error handling and response code behavior",
      "Security and reliability considerations",
    ],
    bestFor: [
      "Developers building HR integrations",
      "Platform teams managing connected systems",
      "Consultants implementing automation workflows",
    ],
    howToUse: [
      "Start with authentication and sandbox setup",
      "Prototype with high-value integration endpoints",
      "Implement logging and retry strategies",
      "Roll out integration in stages with monitoring",
    ],
    links: [
      {
        label: "Open API Documentation",
        href: "https://www.zoho.com/people/api/overview.html",
        type: "docs",
      },
    ],
  },
  {
    slug: "troubleshooting-guide",
    hero: "Resolve common setup and usage issues with structured diagnostic guidance.",
    overview: [
      "The Troubleshooting Guide provides practical fixes for recurring issues in attendance, approvals, documents, permissions, and workflows.",
      "It helps teams solve problems faster before escalating to support.",
    ],
    includes: [
      "Issue classification and root-cause steps",
      "Module-specific troubleshooting checklists",
      "Permission and visibility issue diagnosis",
      "Workflow and notification failure fixes",
      "Escalation-ready issue reporting format",
    ],
    bestFor: [
      "HR ops and support teams",
      "System administrators handling first-line support",
      "Managers resolving workflow blockers",
    ],
    howToUse: [
      "Identify the impacted module and symptom",
      "Run the relevant diagnostic checklist",
      "Apply known fixes and validate user impact",
      "Escalate with complete context if unresolved",
    ],
    links: [
      {
        label: "Open Troubleshooting Guide",
        href: "https://help.zoho.com/portal/en/kb/people/troubleshooting-guide/articles/troubleshooting-guide-introduction",
        type: "docs",
      },
    ],
  },
  {
    slug: "whats-new",
    hero: "Stay up to date with product releases, improvements, and announcements.",
    overview: [
      "What's New provides a running timeline of enhancements across modules, UX, integrations, and automation capabilities.",
      "It helps teams adopt valuable improvements as they ship.",
    ],
    includes: [
      "Release highlights by month and year",
      "Feature announcements and enhancements",
      "Experience and performance improvements",
      "Integration and compatibility updates",
      "Operational impact notes for admins",
    ],
    bestFor: [
      "Product champions in HR teams",
      "Admins tracking enhancement opportunities",
      "Leadership teams reviewing platform maturity",
    ],
    howToUse: [
      "Review updates in monthly admin syncs",
      "Prioritize high-impact features for adoption",
      "Update internal documentation after releases",
      "Train users on workflow-impacting changes",
    ],
    links: [
      {
        label: "View What's New",
        href: "https://www.zoho.com/people/whats-new.html",
        type: "external",
      },
    ],
  },
  {
    slug: "blogs",
    hero: "Insights, trends, and practical HR guidance from product and domain experts.",
    overview: [
      "Blogs cover evolving HR strategies, people operations practices, compliance trends, and practical execution frameworks.",
      "They help teams align day-to-day HR processes with long-term workforce outcomes.",
    ],
    includes: [
      "Thought leadership on modern HR operations",
      "Practical implementation guides and playbooks",
      "Real-world examples and customer stories",
      "Compliance and policy trend analysis",
      "Productivity and employee experience tips",
    ],
    bestFor: [
      "HR leaders shaping strategy",
      "People ops teams improving process maturity",
      "Managers seeking workforce best practices",
    ],
    howToUse: [
      "Curate reading lists by quarterly priorities",
      "Share relevant articles in HR team reviews",
      "Convert recommendations into action plans",
      "Use examples to support change initiatives",
    ],
    links: [
      {
        label: "Read Blog",
        href: "https://blog.zoho.com/people",
        type: "external",
      },
    ],
  },
  {
    slug: "knowledge-hive",
    hero: "A curated library of deep-dive guides for practical HR execution.",
    overview: [
      "Knowledge Hive centralizes tactical resources for process design, employee engagement, workforce analytics, and policy operations.",
      "It is designed for teams that need actionable guidance, not just theory.",
    ],
    includes: [
      "Topic clusters for core HR operations",
      "Templates and process frameworks",
      "Role-specific execution guides",
      "Engagement and retention playbooks",
      "Decision-support materials for HR leaders",
    ],
    bestFor: [
      "HR practitioners improving process quality",
      "Ops teams building repeatable HR systems",
      "Organizations scaling HR maturity",
    ],
    howToUse: [
      "Select topics aligned with current HR initiatives",
      "Apply frameworks to your internal processes",
      "Track what worked and refine over time",
      "Build internal SOPs from proven guides",
    ],
    links: [
      {
        label: "Open Knowledge Hive",
        href: "https://www.zoho.com/people/hrknowledgehive/",
        type: "external",
      },
    ],
  },
  {
    slug: "webinars",
    hero: "Live and recorded learning sessions led by product and HR experts.",
    overview: [
      "Webinars provide guided walkthroughs of modules, setup strategies, and scenario-based HR implementations.",
      "They are ideal for interactive learning and team-level upskilling.",
    ],
    includes: [
      "Feature-specific walkthrough sessions",
      "Implementation strategy discussions",
      "Real-world use case demonstrations",
      "Q&A with product specialists",
      "On-demand recordings for later review",
    ],
    bestFor: [
      "Admins evaluating advanced capabilities",
      "Teams adopting new modules",
      "Organizations aligning on implementation strategy",
    ],
    howToUse: [
      "Plan attendance around rollout milestones",
      "Document takeaways and assigned actions",
      "Replay recordings for teams that missed sessions",
      "Use Q&A insights to accelerate implementation",
    ],
    links: [
      {
        label: "Watch Webinars",
        href: "https://www.zoho.com/people/free-webinar.html",
        type: "video",
      },
    ],
  },
  {
    slug: "demo",
    hero: "Explore platform capabilities through guided product demonstrations.",
    overview: [
      "Demo sessions show how core modules work together across the employee lifecycle in realistic workflows.",
      "They help stakeholders align on fit, implementation scope, and rollout sequencing.",
    ],
    includes: [
      "End-to-end product tours by use case",
      "Module demonstrations aligned to business needs",
      "Configuration and automation examples",
      "Implementation question handling",
      "Recommended rollout approaches",
    ],
    bestFor: [
      "Decision-makers evaluating platform fit",
      "Implementation teams mapping rollout plans",
      "HR leaders aligning stakeholders",
    ],
    howToUse: [
      "Prepare use-case questions before the session",
      "Validate module fit against process requirements",
      "Document implementation dependencies",
      "Use findings to finalize rollout roadmap",
    ],
    links: [
      {
        label: "Book Live Demo",
        href: "https://www.zoho.com/people/free-demo.html",
        type: "external",
      },
    ],
  },
  {
    slug: "welcome-guide",
    hero: "A structured quick-start resource for first-time platform adoption.",
    overview: [
      "The Welcome Guide provides a practical starting path for both administrators and employees.",
      "It accelerates early adoption by focusing on high-frequency tasks and setup essentials.",
    ],
    includes: [
      "Platform orientation and navigation basics",
      "First-week setup checklist for admins",
      "Core employee self-service actions",
      "Role-specific getting-started recommendations",
      "Pointers to advanced resources",
    ],
    bestFor: [
      "Newly onboarded organizations",
      "First-time administrators",
      "Employees adopting self-service workflows",
    ],
    howToUse: [
      "Follow the first-week checklist in order",
      "Assign role-specific setup responsibilities",
      "Review progress in the first admin check-in",
      "Transition to detailed guides after onboarding",
    ],
    links: [
      {
        label: "Download Welcome Guide",
        href: "https://www.zoho.com/people/welcome-guide.html",
        type: "download",
      },
    ],
  },
  {
    slug: "video-lounge",
    hero: "A growing catalog of training content and HR best-practice walkthroughs.",
    overview: [
      "Video Lounge gives teams easy access to curated long-form and short-form educational content.",
      "It helps reinforce ongoing learning beyond one-time onboarding.",
    ],
    includes: [
      "Module mastery training videos",
      "Best-practice sessions from experts",
      "Recorded learning tracks by role",
      "Feature deep dives and use cases",
      "Adoption and optimization guidance",
    ],
    bestFor: [
      "Teams building continuous learning habits",
      "Admins training distributed user groups",
      "Organizations scaling adoption maturity",
    ],
    howToUse: [
      "Create role-based viewing tracks",
      "Use videos in recurring enablement programs",
      "Track completion for critical training modules",
      "Refresh teams with periodic deep-dive sessions",
    ],
    links: [
      {
        label: "Watch Video Lounge",
        href: "https://www.youtube.com/@ZohoPeopleOfficial",
        type: "video",
      },
    ],
  },
  {
    slug: "training",
    hero: "Structured enablement programs to improve operational proficiency at scale.",
    overview: [
      "Training resources provide planned learning paths for admins, managers, and employees.",
      "They are designed to build consistent execution quality and reduce support overhead.",
    ],
    includes: [
      "Role-based training curriculum",
      "Instructor-led and guided learning paths",
      "Hands-on module configuration practice",
      "Operational best-practice reinforcement",
      "Assessment-oriented learning checkpoints",
    ],
    bestFor: [
      "Organizations onboarding large user groups",
      "Teams rolling out multiple modules",
      "Admins establishing long-term adoption plans",
    ],
    howToUse: [
      "Map curriculum to rollout phases",
      "Train admins first, then managers and employees",
      "Use checkpoints to measure readiness",
      "Repeat advanced tracks as processes mature",
    ],
    links: [
      {
        label: "Explore Training Programs",
        href: "https://www.zoho.com/people/training/",
        type: "external",
      },
    ],
  },
  {
    slug: "submit-tickets",
    hero: "Escalate technical and operational issues with structured support intake.",
    overview: [
      "Submit Tickets provides a direct path to customer support when issues need deeper investigation.",
      "It ensures requests are captured with the right context for faster resolution.",
    ],
    includes: [
      "Central support request submission",
      "Issue category and priority tagging",
      "Status tracking across support lifecycle",
      "Response and resolution communication",
      "Case reference for follow-up actions",
    ],
    bestFor: [
      "Admins handling platform blockers",
      "HR teams resolving high-impact incidents",
      "Operations teams requiring escalation support",
    ],
    howToUse: [
      "Document issue scope and reproduction steps clearly",
      "Attach screenshots, logs, and affected users",
      "Track case status and response timelines",
      "Apply resolution notes to internal SOPs",
    ],
    links: [
      {
        label: "Submit Support Ticket",
        href: "https://help.zoho.com/portal/newticket",
        type: "external",
      },
    ],
  },
]

export function getResourceDetailBySlug(slug: string) {
  return resourceDetails.find((detail) => detail.slug === slug)
}
