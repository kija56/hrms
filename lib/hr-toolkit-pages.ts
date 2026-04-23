export interface HrToolkitPage {
  slug: string
  title: string
  summary: string
  purpose: string
  useCases: string[]
  templates: {
    name: string
    description: string
  }[]
  implementationChecklist: string[]
}

export const hrToolkitPages: HrToolkitPage[] = [
  {
    slug: "checklists",
    title: "HR Checklists",
    summary: "Operational checklists for recurring HR workflows from hiring to exits.",
    purpose:
      "Standardize HR execution with repeatable step-by-step checklists that reduce misses and speed up onboarding for new HR team members.",
    useCases: [
      "Joining and onboarding task tracking",
      "Probation review readiness checks",
      "Offboarding and asset recovery tracking",
      "Monthly payroll readiness verification",
    ],
    templates: [
      {
        name: "Employee Onboarding Checklist",
        description: "Role-wise day 0, day 7, and day 30 onboarding completion checklist.",
      },
      {
        name: "Payroll Run Readiness Checklist",
        description: "Pre-payroll validation for attendance, approvals, and salary changes.",
      },
      {
        name: "Employee Exit Checklist",
        description: "Formal separation flow including clearance, access revocation, and final dues.",
      },
    ],
    implementationChecklist: [
      "Assign owners to each checklist task",
      "Add due dates and approval points",
      "Track completion percentage weekly",
      "Review checklist quality every quarter",
    ],
  },
  {
    slug: "email-playbook",
    title: "HR Email Playbook",
    summary: "Ready-to-edit communication templates for key employee lifecycle moments.",
    purpose:
      "Improve consistency and tone of HR communication with reusable templates across onboarding, policy updates, performance, and exits.",
    useCases: [
      "Offer release and pre-joining communication",
      "Policy announcement broadcasts",
      "Performance cycle launch communication",
      "Exit interview and clearance communication",
    ],
    templates: [
      {
        name: "Offer Release Mail",
        description: "Structured offer communication with role details and joining timeline.",
      },
      {
        name: "Policy Update Notice",
        description: "Clear format for introducing or revising people policies.",
      },
      {
        name: "Performance Cycle Kickoff",
        description: "Manager and employee guidance for goal setting and review deadlines.",
      },
    ],
    implementationChecklist: [
      "Define template owner by communication type",
      "Version and date each approved template",
      "Localize tone for leadership and employee groups",
      "Review legal and policy language semi-annually",
    ],
  },
  {
    slug: "job-descriptions",
    title: "Job Description Library",
    summary: "Role-specific job description templates with competency and KPI structure.",
    purpose:
      "Create a consistent hiring intake standard with role purpose, key responsibilities, must-have skills, and measurable outcomes.",
    useCases: [
      "New role request and hiring intake",
      "Role leveling and career architecture",
      "Performance expectation alignment",
      "Internal mobility and succession planning",
    ],
    templates: [
      {
        name: "General Professional Role JD",
        description: "Template with role objective, responsibilities, and required capabilities.",
      },
      {
        name: "Manager Role JD",
        description: "Includes team leadership outcomes, collaboration scope, and delivery KPIs.",
      },
      {
        name: "Technical Role JD",
        description: "Adds stack requirements, architecture responsibilities, and quality metrics.",
      },
    ],
    implementationChecklist: [
      "Define competency matrix per function",
      "Attach KPI examples for each role level",
      "Review every JD before opening requisition",
      "Update role scope after organization changes",
    ],
  },
  {
    slug: "policies",
    title: "Policy Templates",
    summary: "Editable policy templates for attendance, leave, conduct, and workplace operations.",
    purpose:
      "Accelerate policy rollout with a structured baseline that can be localized for company rules and legal requirements.",
    useCases: [
      "Leave and attendance policy rollout",
      "Code of conduct and disciplinary frameworks",
      "Hybrid and remote work policy communication",
      "Data handling and workplace behavior standards",
    ],
    templates: [
      {
        name: "Leave and Attendance Policy",
        description: "Covers eligibility, accrual, requests, approvals, and misuse handling.",
      },
      {
        name: "Code of Conduct Policy",
        description: "Defines expected behavior, reporting paths, and disciplinary actions.",
      },
      {
        name: "Remote Work Policy",
        description: "Guidelines for work hours, communication, performance, and security.",
      },
    ],
    implementationChecklist: [
      "Obtain legal review before publishing",
      "Capture employee acknowledgment digitally",
      "Create manager enablement notes for enforcement",
      "Audit policy adherence quarterly",
    ],
  },
  {
    slug: "okrs",
    title: "OKR Templates",
    summary: "Goal planning templates for company, team, and individual performance alignment.",
    purpose:
      "Improve performance clarity by defining measurable objectives with time-bound key results across organizational levels.",
    useCases: [
      "Quarterly performance planning cycles",
      "Cross-functional goal alignment",
      "Leadership review and progress tracking",
      "Manager one-on-one goal calibration",
    ],
    templates: [
      {
        name: "Company-Level OKR Template",
        description: "Executive-level strategic objectives with measurable quarterly outcomes.",
      },
      {
        name: "Team OKR Template",
        description: "Department goals linked to company outcomes and owner accountability.",
      },
      {
        name: "Individual OKR Template",
        description: "Role-level goals with achievement targets and review cadence.",
      },
    ],
    implementationChecklist: [
      "Limit objective count to maintain focus",
      "Make key results numeric and time-bound",
      "Run bi-weekly progress review routines",
      "Capture learnings after each cycle",
    ],
  },
  {
    slug: "interview-questions",
    title: "Interview Question Banks",
    summary: "Structured interview question sets by role, level, and competency.",
    purpose:
      "Reduce interview bias and improve quality of hire by using role-calibrated question banks and consistent evaluation criteria.",
    useCases: [
      "Structured first-round screening",
      "Managerial and behavioral rounds",
      "Technical depth and practical scenarios",
      "Final culture and values assessment",
    ],
    templates: [
      {
        name: "Behavioral Interview Set",
        description: "Questions mapped to ownership, collaboration, and conflict resolution.",
      },
      {
        name: "Managerial Interview Set",
        description: "People leadership scenarios, coaching capability, and stakeholder management.",
      },
      {
        name: "Role-Specific Technical Set",
        description: "Domain-specific depth checks and case-based practical questions.",
      },
    ],
    implementationChecklist: [
      "Map every question to a competency",
      "Use a scoring rubric in every panel",
      "Store interviewer feedback in a standard format",
      "Refresh question bank with hiring outcomes data",
    ],
  },
  {
    slug: "frameworks",
    title: "HR Frameworks",
    summary: "Practical operating frameworks for people operations, engagement, and compliance rhythm.",
    purpose:
      "Provide scalable HR operating models teams can adopt to improve governance, consistency, and organizational maturity.",
    useCases: [
      "Building HR operating cadence for growth",
      "Mapping people metrics and reporting governance",
      "Designing manager enablement systems",
      "Rolling out process maturity initiatives",
    ],
    templates: [
      {
        name: "HR Operating Rhythm Framework",
        description: "Monthly and quarterly routines across hiring, payroll, and engagement.",
      },
      {
        name: "People Metrics Governance Framework",
        description: "Metric ownership, report cycles, and review governance.",
      },
      {
        name: "Manager Enablement Framework",
        description: "Structured training, review checkpoints, and support pathways.",
      },
    ],
    implementationChecklist: [
      "Assign owners for each framework pillar",
      "Define measurable adoption targets",
      "Review outcomes in leadership cadence",
      "Refine framework based on quarterly retrospectives",
    ],
  },
]

export function getHrToolkitPageBySlug(slug: string) {
  return hrToolkitPages.find((page) => page.slug === slug)
}
