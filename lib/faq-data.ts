import type { FaqItem } from "@/components/shared/faq-section"

export const homeFaqs: FaqItem[] = [
  {
    question: "How quickly can we go live with Payscoop HRM?",
    answer:
      "Most teams launch core workflows in 2-4 weeks, depending on data readiness, approval setup complexity, and rollout scope.",
  },
  {
    question: "Do you offer implementation and onboarding support?",
    answer:
      "Yes. We guide data migration, workflow setup, admin training, and go-live planning so your team adopts the platform with confidence.",
  },
  {
    question: "Can Payscoop HRM scale as our company grows?",
    answer:
      "Absolutely. You can start with core modules and expand into payroll, performance, analytics, and automation as your operations mature.",
  },
  {
    question: "Is employee self-service included?",
    answer:
      "Yes. Employees can submit requests, view payslips, track leave, and manage key profile updates through guided self-service workflows.",
  },
  {
    question: "How do you handle HR data security and access control?",
    answer:
      "Payscoop HRM uses role-based access controls, approval trails, and governed workflows to protect sensitive employee and payroll data.",
  },
  {
    question: "Can we integrate Payscoop HRM with existing processes?",
    answer:
      "Yes. We support practical integrations and configurable workflows to align with your existing HR and operational processes.",
  },
]

const defaultModuleFaqs: FaqItem[] = [
  {
    question: "Can we configure this module to match our internal policies?",
    answer:
      "Yes. Module workflows, approval routing, and key rules can be configured to align with your organizational policy requirements.",
  },
  {
    question: "How long does implementation usually take?",
    answer:
      "Timelines vary by complexity, but most module rollouts are completed in a few weeks with guided implementation support.",
  },
  {
    question: "Will this module work with our other HR workflows?",
    answer:
      "Yes. Payscoop modules are designed to work together so data from one workflow supports downstream approvals, reporting, and decisions.",
  },
  {
    question: "Can managers and employees use this without heavy training?",
    answer:
      "Yes. The interface is built for practical day-to-day use, and we provide onboarding support to accelerate user adoption.",
  },
]

const defaultFeatureFaqs: FaqItem[] = [
  {
    question: "Is this feature suitable for both small and large teams?",
    answer:
      "Yes. Feature controls are designed to support different team sizes and can be configured as your process complexity increases.",
  },
  {
    question: "Can this feature be enabled alongside existing modules?",
    answer:
      "Yes. Features are designed to fit into your existing Payscoop setup and share data with related workflows where relevant.",
  },
  {
    question: "Does this feature support approval and audit visibility?",
    answer:
      "Yes. Core actions can be tracked through approval steps and activity trails to maintain transparency and governance.",
  },
  {
    question: "Can we tailor this feature to our operational needs?",
    answer:
      "Yes. You can configure fields, process flow rules, and ownership patterns to reflect your internal operating model.",
  },
]

const defaultSolutionFaqs: FaqItem[] = [
  {
    question: "How do we know if this solution is right for our growth stage?",
    answer:
      "We map your current processes, team size, governance requirements, and goals to recommend the best-fit rollout path.",
  },
  {
    question: "Can we start small and expand later?",
    answer:
      "Yes. You can launch with priority workflows first, then expand modules and automation as your organization evolves.",
  },
  {
    question: "Does this solution support multi-team or multi-location operations?",
    answer:
      "Yes. Payscoop supports structured policies, permissions, and reporting views across departments and locations.",
  },
  {
    question: "What support do we receive during rollout?",
    answer:
      "Our team supports onboarding, implementation planning, and optimization guidance to ensure a smooth transition.",
  },
]

const moduleFaqById: Record<string, FaqItem[]> = {
  payroll: [
    {
      question: "Can payroll be processed with attendance and leave inputs automatically?",
      answer:
        "Yes. Payroll calculations can incorporate validated attendance, leave balances, and compensation rules in one controlled run.",
    },
    {
      question: "Does payroll support statutory deductions and compliance reporting?",
      answer:
        "Yes. You can configure deductions and generate payroll records designed to support compliance and audit readiness.",
    },
    ...defaultModuleFaqs.slice(2),
  ],
}

const featureFaqBySlug: Record<string, FaqItem[]> = {
  recruitment: [
    {
      question: "Can recruitment workflows be customized by role or department?",
      answer:
        "Yes. You can configure requisition steps, interview stages, and approval paths based on team or role requirements.",
    },
    {
      question: "Can we track candidates from sourcing to offer in one place?",
      answer:
        "Yes. Candidate records, stage transitions, interview feedback, and offer progress are managed in one end-to-end recruiting flow.",
    },
    {
      question: "Does recruitment support interviewer scorecards?",
      answer:
        "Yes. Interviewers can capture structured feedback so hiring decisions are based on consistent evaluation criteria.",
    },
    {
      question: "Can we view hiring pipeline bottlenecks?",
      answer:
        "Yes. Recruitment reporting helps identify slow stages, conversion gaps, and requisitions requiring attention.",
    },
  ],
  onboarding: [
    {
      question: "Can onboarding tasks be assigned automatically by role?",
      answer:
        "Yes. You can assign onboarding checklists by role, team, or location so every new hire follows the right setup path.",
    },
    {
      question: "Does onboarding support document collection and acknowledgements?",
      answer:
        "Yes. New hires can complete required forms and policy acknowledgements through guided digital steps.",
    },
    {
      question: "Can managers track onboarding progress in real time?",
      answer:
        "Yes. HR and managers can monitor completion status and pending actions from a centralized progress view.",
    },
    {
      question: "Can we standardize pre-joining and day-one workflows?",
      answer:
        "Yes. Onboarding workflows can be structured into preboarding, joining, and early productivity milestones.",
    },
  ],
  "employee-management": [
    {
      question: "Can we maintain all employee records in one system?",
      answer:
        "Yes. Employee Management centralizes profile, role, department, and lifecycle data in a single HR source of truth.",
    },
    {
      question: "Does the feature support controlled profile updates?",
      answer:
        "Yes. Employee-initiated updates can be routed through approvals before they are applied.",
    },
    {
      question: "Can we manage transfers and role changes?",
      answer:
        "Yes. Lifecycle events like transfers, promotions, and status changes can be tracked with historical visibility.",
    },
    {
      question: "Can access be segmented by role or department?",
      answer:
        "Yes. Role-based access helps protect sensitive employee data while keeping relevant information available to authorized users.",
    },
  ],
  "attendance-management": [
    {
      question: "Can we track attendance for office and remote teams?",
      answer:
        "Yes. Attendance Management supports multiple check-in methods suitable for onsite, remote, and hybrid work models.",
    },
    {
      question: "Can attendance records flow into payroll processing?",
      answer:
        "Yes. Validated attendance can be used to support payroll calculations and exception handling.",
    },
    {
      question: "Can managers review and regularize anomalies?",
      answer:
        "Yes. Attendance exceptions can be reviewed and approved using a structured regularization flow.",
    },
    {
      question: "Are attendance policies configurable by team?",
      answer:
        "Yes. You can apply attendance rules by role, department, or location to match operational needs.",
    },
  ],
  "shift-management": [
    {
      question: "Can we handle rotating and complex shift schedules?",
      answer:
        "Yes. Shift Management supports shift templates, rotations, and roster assignment at team scale.",
    },
    {
      question: "Can employees request shift swaps?",
      answer:
        "Yes. Shift change and swap requests can be managed through approval-based workflows.",
    },
    {
      question: "Can we configure break and overtime rules per shift?",
      answer:
        "Yes. Break, grace time, and overtime controls can be configured to align with policy requirements.",
    },
    {
      question: "Can managers identify staffing gaps early?",
      answer:
        "Yes. Shift visibility helps teams spot coverage issues and adjust rosters proactively.",
    },
  ],
  "leave-management": [
    {
      question: "Can leave policies differ by grade, team, or location?",
      answer:
        "Yes. Leave categories, accrual logic, and policy rules can be configured for different employee groups.",
    },
    {
      question: "Does leave management support multi-level approvals?",
      answer:
        "Yes. Requests can pass through one or more approvers based on your organizational policy structure.",
    },
    {
      question: "Can employees see balances before requesting leave?",
      answer:
        "Yes. Employees can check real-time leave balances and entitlements from self-service views.",
    },
    {
      question: "Can managers view team availability while approving?",
      answer:
        "Yes. Leave approval views can include team schedule visibility to support better decision-making.",
    },
  ],
  timesheets: [
    {
      question: "Can employees log time by project or task?",
      answer:
        "Yes. Timesheets support project and task-level entries to improve effort tracking and accountability.",
    },
    {
      question: "Can we separate billable and non-billable hours?",
      answer:
        "Yes. Time entries can be categorized to support client billing and utilization analysis.",
    },
    {
      question: "Do timesheets support manager approvals?",
      answer:
        "Yes. Submitted timesheets can be reviewed and approved before being finalized for reporting.",
    },
    {
      question: "Can we export timesheet data for reporting?",
      answer:
        "Yes. Teams can generate timesheet summaries for operational and project performance analysis.",
    },
  ],
  "hr-help-desk": [
    {
      question: "Can HR requests be managed through a ticketing workflow?",
      answer:
        "Yes. HR Help Desk provides structured ticket intake, ownership routing, and status tracking.",
    },
    {
      question: "Can we apply SLA targets to HR tickets?",
      answer:
        "Yes. SLA and escalation settings can be configured to improve responsiveness and resolution consistency.",
    },
    {
      question: "Does it support employee self-service knowledge articles?",
      answer:
        "Yes. A knowledge base can reduce repetitive requests by helping employees find answers quickly.",
    },
    {
      question: "Can we monitor HR support workload and trends?",
      answer:
        "Yes. Ticket analytics can highlight volume, response times, and recurring issue categories.",
    },
  ],
  "document-management": [
    {
      question: "Can we centralize employee and policy documents securely?",
      answer:
        "Yes. Document Management keeps HR files in one controlled repository with permission-based access.",
    },
    {
      question: "Does document management support templates and e-sign workflows?",
      answer:
        "Yes. Teams can generate standard documents and route them for digital acknowledgements where needed.",
    },
    {
      question: "Can we control who can view or download sensitive files?",
      answer:
        "Yes. Access permissions can be scoped by role, department, or document type.",
    },
    {
      question: "Is document activity traceable for audits?",
      answer:
        "Yes. Uploads, updates, and access actions can be tracked to support governance requirements.",
    },
  ],
  "offboarding-management": [
    {
      question: "Can offboarding tasks be standardized across departments?",
      answer:
        "Yes. Offboarding templates can coordinate HR, IT, finance, and managers using one structured checklist.",
    },
    {
      question: "Can we track asset returns and access revocation?",
      answer:
        "Yes. Exit workflows can include asset handover and system access controls before closure.",
    },
    {
      question: "Does this support exit interview documentation?",
      answer:
        "Yes. Exit conversations and final notes can be captured as part of the employee exit record.",
    },
    {
      question: "Can we ensure policy-compliant exit completion?",
      answer:
        "Yes. Approval gates and completion checks help teams close offboarding in a controlled way.",
    },
  ],
  "performance-management": [
    {
      question: "Can we run structured review cycles with continuous feedback?",
      answer:
        "Yes. Performance workflows support goal planning, check-ins, feedback loops, and periodic appraisals.",
    },
    {
      question: "Can goals be aligned to team or company objectives?",
      answer:
        "Yes. Goals can be connected across levels to improve alignment and measurable accountability.",
    },
    {
      question: "Does performance support multi-rater or manager-led reviews?",
      answer:
        "Yes. Review configurations can be adapted to your preferred appraisal model.",
    },
    {
      question: "Can performance outcomes feed development planning?",
      answer:
        "Yes. Review insights can inform targeted growth actions and capability-building priorities.",
    },
  ],
  "compensation-management": [
    {
      question: "Can compensation bands be configured by role and level?",
      answer:
        "Yes. Compensation structures can be organized by designation, team, or policy group.",
    },
    {
      question: "Does this support revision cycles with approvals?",
      answer:
        "Yes. Salary and compensation changes can be managed through controlled approval workflows.",
    },
    {
      question: "Can we track compensation history per employee?",
      answer:
        "Yes. Compensation timelines can be maintained to support transparency and planning.",
    },
    {
      question: "Can compensation updates sync with payroll operations?",
      answer:
        "Yes. Approved compensation changes can flow into payroll-ready data processes.",
    },
  ],
  "learning-management-system": [
    {
      question: "Can learning paths be assigned by role or department?",
      answer:
        "Yes. Learning Management supports role-based course assignment and structured development tracks.",
    },
    {
      question: "Can we monitor completion and assessment performance?",
      answer:
        "Yes. Teams can track course progress, completion rates, and assessment outcomes.",
    },
    {
      question: "Can managers view team learning progress?",
      answer:
        "Yes. Managers can monitor participation and identify upskilling needs across their teams.",
    },
    {
      question: "Can learning insights support performance reviews?",
      answer:
        "Yes. Learning progress can be used as an input for development and performance discussions.",
    },
  ],
  payroll: [
    {
      question: "Can payroll automate salary runs with policy checks?",
      answer:
        "Yes. Payroll supports structured runs with configurable components, deductions, and validation controls.",
    },
    {
      question: "Does payroll support statutory compliance requirements?",
      answer:
        "Yes. Payroll processing can be configured to support statutory deductions and reporting needs.",
    },
    {
      question: "Can employees access payslips in self-service?",
      answer:
        "Yes. Payslip distribution can be handled digitally for faster and more secure access.",
    },
    {
      question: "Can payroll data be reviewed before final release?",
      answer:
        "Yes. Teams can validate payroll summaries and exception reports before closing the period.",
    },
  ],
  "travel-and-expense": [
    {
      question: "Can employees submit expenses with receipt attachments?",
      answer:
        "Yes. Travel and Expense workflows support digital claim submission with supporting documents.",
    },
    {
      question: "Can approvals enforce policy limits and categories?",
      answer:
        "Yes. Expense rules can be configured to flag non-compliant claims before reimbursement.",
    },
    {
      question: "Can we track reimbursement status end to end?",
      answer:
        "Yes. Teams can monitor claims from submission through approval and final payout.",
    },
    {
      question: "Can finance teams analyze spend trends by category?",
      answer:
        "Yes. Expense reporting can provide visibility by employee, team, category, and time period.",
    },
  ],
  "employee-engagement": [
    {
      question: "Can we run recurring employee sentiment surveys?",
      answer:
        "Yes. You can schedule pulse-style engagement checks and monitor participation and trend movement over time.",
    },
    {
      question: "Does employee engagement support eNPS-style measurement?",
      answer:
        "Yes. Engagement workflows can include eNPS and other feedback formats for consistent tracking.",
    },
    {
      question: "Can results be segmented by team or location?",
      answer:
        "Yes. Sentiment and participation insights can be reviewed by organizational segments for targeted action.",
    },
    {
      question: "Can engagement feedback drive follow-up actions?",
      answer:
        "Yes. Teams can convert survey findings into action plans and monitor outcomes over time.",
    },
  ],
  "communication-and-collaboration": [
    {
      question: "Can teams publish updates and announcements centrally?",
      answer:
        "Yes. Communication channels support organization-wide and team-level announcements with visibility controls.",
    },
    {
      question: "Can employees collaborate across teams inside the platform?",
      answer:
        "Yes. Collaboration spaces help teams share updates, align on work, and maintain communication continuity.",
    },
    {
      question: "Can we reduce information silos between departments?",
      answer:
        "Yes. Structured communication workflows improve transparency and cross-functional alignment.",
    },
    {
      question: "Can leaders track communication engagement patterns?",
      answer:
        "Yes. Activity insights help teams optimize communication cadence and channel effectiveness.",
    },
  ],
  "hr-analytics": [
    {
      question: "Can we build dashboards for leadership and HR operations?",
      answer:
        "Yes. HR Analytics supports executive and operational views with configurable dashboard layouts.",
    },
    {
      question: "Can we create custom reports for specific workforce questions?",
      answer:
        "Yes. Teams can define report dimensions and metrics for business-specific analysis.",
    },
    {
      question: "Can analytics data be shared with stakeholders regularly?",
      answer:
        "Yes. Reporting workflows can support recurring distribution and structured stakeholder visibility.",
    },
    {
      question: "Can HR analytics help identify workforce risk trends?",
      answer:
        "Yes. Trend monitoring supports earlier detection of attrition, attendance, and performance risks.",
    },
  ],
  "hr-automation": [
    {
      question: "Can we automate repetitive HR approval workflows?",
      answer:
        "Yes. HR Automation supports event-driven triggers, approvals, and alerts for recurring processes.",
    },
    {
      question: "Can automation update fields and notify stakeholders automatically?",
      answer:
        "Yes. Rules can execute updates, assign responsibilities, and send notifications based on configured conditions.",
    },
    {
      question: "Can we apply conditional logic to automation rules?",
      answer:
        "Yes. Workflow logic can adapt by role, policy, location, and process state.",
    },
    {
      question: "Can automation scale as process volume grows?",
      answer:
        "Yes. Automated workflows reduce manual load and help maintain process consistency at scale.",
    },
  ],
  "custom-services": [
    {
      question: "Can we build custom HR processes not covered by standard modules?",
      answer:
        "Yes. Custom Services allows teams to model unique workflows with configurable forms and approvals.",
    },
    {
      question: "Can custom services match our internal business terminology and steps?",
      answer:
        "Yes. Process fields, labels, and workflow logic can be adapted to your operating model.",
    },
    {
      question: "Can custom workflows integrate with existing HR operations?",
      answer:
        "Yes. Custom flows are designed to coexist with core Payscoop workflows and data governance controls.",
    },
    {
      question: "Can custom services evolve as our processes change?",
      answer:
        "Yes. Teams can refine and extend custom workflows as requirements mature.",
    },
  ],
}

const solutionFaqBySlug: Record<string, FaqItem[]> = {
  enterprises: [
    {
      question: "Can enterprise teams apply stricter governance and approval controls?",
      answer:
        "Yes. Enterprise rollouts support layered permissions, structured approvals, and process controls across complex organizations.",
    },
    ...defaultSolutionFaqs.slice(1),
  ],
}

export function getModuleFaqs(moduleId: string): FaqItem[] {
  return moduleFaqById[moduleId] ?? defaultModuleFaqs
}

export function getFeatureFaqs(featureSlug: string): FaqItem[] {
  return featureFaqBySlug[featureSlug] ?? defaultFeatureFaqs
}

export function getSolutionFaqs(solutionSlug: string): FaqItem[] {
  return solutionFaqBySlug[solutionSlug] ?? defaultSolutionFaqs
}
