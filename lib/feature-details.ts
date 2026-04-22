export interface FeatureDetail {
  slug: string
  hero: string
  overview: string[]
  capabilities: string[]
  workflow: string[]
  outcomes: string[]
}

export const featureDetails: FeatureDetail[] = [
  {
    slug: "recruitment",
    hero: "Hire faster with structured recruiting workflows and candidate intelligence.",
    overview: [
      "Build a reliable hiring pipeline from requisition to offer by standardizing every recruiting stage.",
      "Coordinate hiring managers, recruiters, and interview panels in one shared process with clear ownership.",
    ],
    capabilities: [
      "Role-based requisitions with approval rules",
      "Multi-channel job publishing and candidate sourcing",
      "Resume screening with configurable evaluation criteria",
      "Interview scheduling and panel feedback collection",
      "Offer workflow tracking and acceptance updates",
    ],
    workflow: [
      "Create job requisitions and route them for approval",
      "Publish openings and centralize all incoming applications",
      "Screen candidates, run interviews, and capture scorecards",
      "Issue offers, finalize hiring, and hand off to onboarding",
    ],
    outcomes: [
      "Shorter time-to-hire with fewer manual handoffs",
      "Higher-quality hiring decisions through standardized evaluations",
      "Clear hiring visibility for HR and leadership teams",
    ],
  },
  {
    slug: "onboarding",
    hero: "Deliver a guided first-day experience that gets new hires productive quickly.",
    overview: [
      "Move from ad hoc onboarding to a repeatable program that aligns HR, IT, payroll, and managers.",
      "Automate pre-joining tasks and ensure every hire completes required forms, policies, and setup steps.",
    ],
    capabilities: [
      "Preboarding checklists for documentation and compliance",
      "Digital forms and e-signatures for policy acknowledgements",
      "Task assignment by department, role, or location",
      "Automated reminders for pending onboarding actions",
      "Progress dashboards for HR and people managers",
    ],
    workflow: [
      "Trigger onboarding plan after candidate acceptance",
      "Assign role-specific tasks and due dates to stakeholders",
      "Track completion of orientation, systems access, and paperwork",
      "Close onboarding once all milestone tasks are completed",
    ],
    outcomes: [
      "Faster ramp-up for new employees",
      "Improved onboarding consistency across teams",
      "Better early engagement and retention",
    ],
  },
  {
    slug: "employee-management",
    hero: "Centralize employee data and maintain a clean, trusted HR system of record.",
    overview: [
      "Manage employee lifecycle data in one place with structured profiles and organization-wide visibility.",
      "Reduce fragmented spreadsheets by connecting role history, reporting lines, and policy data centrally.",
    ],
    capabilities: [
      "Comprehensive employee records and document attachments",
      "Department, designation, and location-based data views",
      "Custom fields for business-specific workforce attributes",
      "Employee self-service updates with approval controls",
      "Lifecycle events for transfers, promotions, and exits",
    ],
    workflow: [
      "Create and maintain complete employee profiles",
      "Define organizational structure and reporting hierarchy",
      "Control updates through policy-based approvals",
      "Use centralized data for downstream payroll and analytics",
    ],
    outcomes: [
      "Stronger data accuracy and governance",
      "Less administrative overhead for HR operations",
      "Reliable workforce data for strategic planning",
    ],
  },
  {
    slug: "attendance-management",
    hero: "Track attendance in real time across offices, remote teams, and field operations.",
    overview: [
      "Capture attendance with flexible check-in methods that fit your workforce model and policy rules.",
      "Convert attendance logs into payroll-ready records through accurate shift and overtime calculations.",
    ],
    capabilities: [
      "Web and mobile check-in/check-out options",
      "Geo-fencing and IP-based attendance restrictions",
      "Biometric device integrations for controlled locations",
      "Attendance regularization and manager approvals",
      "Daily, weekly, and monthly attendance analytics",
    ],
    workflow: [
      "Set attendance rules by team, role, and location",
      "Collect check-ins through approved tracking channels",
      "Review anomalies and process regularization requests",
      "Finalize attendance data for payroll and reporting",
    ],
    outcomes: [
      "Higher attendance accuracy with fewer disputes",
      "Reduced payroll leakage from incorrect work-hour data",
      "Actionable productivity trends across teams",
    ],
  },
  {
    slug: "shift-management",
    hero: "Plan complex rosters with policy controls for breaks, overlaps, and exceptions.",
    overview: [
      "Design shift calendars that support rotating, split, and role-based schedules at scale.",
      "Balance business coverage with employee availability while maintaining labor compliance.",
    ],
    capabilities: [
      "Shift templates and rotation patterns",
      "Roster planning with team-wise assignment",
      "Break, grace time, and overtime policy controls",
      "Shift swap and exception workflows",
      "Coverage visibility and staffing gap tracking",
    ],
    workflow: [
      "Create shift templates and scheduling rules",
      "Assign rosters to teams based on operational demand",
      "Handle shift changes with approval and audit trail",
      "Sync final schedules with attendance and payroll",
    ],
    outcomes: [
      "Improved staffing efficiency",
      "Lower schedule conflicts and policy violations",
      "Better workforce planning predictability",
    ],
  },
  {
    slug: "leave-management",
    hero: "Automate leave operations with policy-driven requests, approvals, and balances.",
    overview: [
      "Simplify leave administration for employees, managers, and HR through self-service workflows.",
      "Apply entitlement, accrual, and carry-forward rules consistently across leave types and teams.",
    ],
    capabilities: [
      "Custom leave policies by grade or location",
      "Accrual and carry-forward rule configuration",
      "Holiday calendars and business-unit exceptions",
      "Multi-level leave approval workflows",
      "Team availability view for capacity planning",
    ],
    workflow: [
      "Configure leave categories and entitlement policies",
      "Enable self-service leave applications",
      "Route approvals with escalation where needed",
      "Maintain real-time leave balances and summaries",
    ],
    outcomes: [
      "Faster leave processing with better employee experience",
      "Consistent policy enforcement across the organization",
      "Improved planning with visibility into team availability",
    ],
  },
  {
    slug: "timesheets",
    hero: "Capture project time accurately and convert effort into clear productivity insights.",
    overview: [
      "Track task-level and project-level effort with structured timesheet submissions.",
      "Enable managers to monitor utilization and billable capacity across teams.",
    ],
    capabilities: [
      "Project and task-based time logging",
      "Billable and non-billable hour classification",
      "Submission and approval workflows",
      "Utilization and effort trend dashboards",
      "Export-ready timesheet reports",
    ],
    workflow: [
      "Create project structures and assignment rules",
      "Employees log daily or weekly work effort",
      "Managers validate and approve timesheet entries",
      "Use approved data for billing and capacity planning",
    ],
    outcomes: [
      "Better project visibility and delivery control",
      "Higher billing confidence for client-facing teams",
      "Clearer resource utilization insights",
    ],
  },
  {
    slug: "hr-help-desk",
    hero: "Resolve employee requests with SLA-backed HR support operations.",
    overview: [
      "Provide a centralized service desk where employees can raise HR requests and track status updates.",
      "Reduce response delays with category routing, ownership rules, and escalation timelines.",
    ],
    capabilities: [
      "Ticket intake with category and priority settings",
      "SLA and escalation configurations",
      "Knowledge base for self-service support",
      "Agent workload and resolution dashboards",
      "Employee communication history per case",
    ],
    workflow: [
      "Employees submit requests through the help desk portal",
      "Tickets route automatically to relevant HR specialists",
      "Track SLA compliance and overdue cases",
      "Close requests with resolution notes and feedback",
    ],
    outcomes: [
      "Faster issue resolution and better HR responsiveness",
      "Lower inbound ticket volume through self-service articles",
      "Improved trust through transparent support handling",
    ],
  },
  {
    slug: "document-management",
    hero: "Store and govern HR documents securely with structured access controls.",
    overview: [
      "Maintain a central repository for employee and policy documents with version clarity.",
      "Reduce document retrieval time and compliance risk with secure, role-based access.",
    ],
    capabilities: [
      "Document categorization and secure storage",
      "Template-driven letter and form generation",
      "E-signature support for HR document workflows",
      "Access controls by role, department, and document type",
      "Audit visibility for uploads, updates, and downloads",
    ],
    workflow: [
      "Define document categories and retention rules",
      "Upload or generate employee-specific files",
      "Route documents for review and digital sign-off",
      "Track access and document lifecycle changes",
    ],
    outcomes: [
      "Higher compliance readiness",
      "Faster document operations for HR and employees",
      "Reduced risk from uncontrolled file sharing",
    ],
  },
  {
    slug: "offboarding-management",
    hero: "Run compliant exits with checklist-driven offboarding and access governance.",
    overview: [
      "Standardize employee exits to protect business continuity and policy compliance.",
      "Coordinate HR, IT, finance, and managers through one controlled offboarding process.",
    ],
    capabilities: [
      "Exit workflow templates with responsible owners",
      "Asset recovery and handover tracking",
      "System access revocation checkpoints",
      "Exit interview scheduling and documentation",
      "Clearance approvals and completion summary",
    ],
    workflow: [
      "Trigger offboarding on resignation or termination",
      "Assign department-wise clearance and handover tasks",
      "Verify completion of access and asset controls",
      "Archive exit records and close employee lifecycle",
    ],
    outcomes: [
      "Lower operational and security risk during exits",
      "Consistent handover quality across teams",
      "Clear compliance evidence for audits",
    ],
  },
  {
    slug: "performance-management",
    hero: "Drive a continuous performance culture with measurable goals and feedback loops.",
    overview: [
      "Replace once-a-year reviews with a structured cycle that supports ongoing growth and accountability.",
      "Connect employee goals to business priorities and monitor progress with objective metrics.",
    ],
    capabilities: [
      "Goal and OKR planning across teams",
      "Continuous feedback and check-in workflows",
      "Multi-rater and manager-led appraisal cycles",
      "Performance calibration and trend analysis",
      "Development planning tied to review outcomes",
    ],
    workflow: [
      "Set review periods and goal frameworks",
      "Run check-ins and gather feedback inputs",
      "Complete appraisal cycles with calibrations",
      "Publish outcomes and track development actions",
    ],
    outcomes: [
      "Stronger performance accountability",
      "Higher employee growth and engagement",
      "Better talent decisions supported by data",
    ],
  },
  {
    slug: "compensation-management",
    hero: "Plan and administer compensation transparently across roles and levels.",
    overview: [
      "Create structured compensation frameworks that balance market competitiveness and internal equity.",
      "Manage salary revisions, allowances, and variable pay through governed workflows.",
    ],
    capabilities: [
      "Salary structure and component definitions",
      "Compensation revision cycles and approvals",
      "Allowance, bonus, and benefit administration",
      "Compensation history with employee-level visibility",
      "Policy alignment for different employee groups",
    ],
    workflow: [
      "Design compensation bands and pay components",
      "Launch revision cycles with budget controls",
      "Route approvals across HR and leadership",
      "Sync approved updates with payroll operations",
    ],
    outcomes: [
      "Greater consistency in pay decisions",
      "Improved transparency for managers and HR",
      "Reduced errors in compensation execution",
    ],
  },
  {
    slug: "learning-management-system",
    hero: "Build role-based learning journeys that develop skills at every career stage.",
    overview: [
      "Deliver structured learning experiences aligned with competency and role requirements.",
      "Support continuous development with assigned courses, assessments, and progress tracking.",
    ],
    capabilities: [
      "Course library with role-based assignment",
      "Learning paths by department or skill track",
      "Assessments, completion criteria, and scoring",
      "Manager visibility into employee progress",
      "Learning analytics and adoption reporting",
    ],
    workflow: [
      "Create learning paths for functions and levels",
      "Assign mandatory and elective courses",
      "Track completion, scores, and certifications",
      "Use learning data in performance discussions",
    ],
    outcomes: [
      "Faster upskilling across teams",
      "Higher learning completion rates",
      "Better alignment between development and business goals",
    ],
  },
  {
    slug: "payroll",
    hero: "Run accurate payroll with compliance controls and seamless HR data sync.",
    overview: [
      "Automate payroll operations using attendance, leave, and compensation inputs from one system.",
      "Ensure salaries are processed on time with statutory deductions and payout readiness checks.",
    ],
    capabilities: [
      "Payroll component and salary template setup",
      "Attendance and leave impact calculations",
      "Tax, deductions, and statutory compliance support",
      "Payslip generation and employee access",
      "Payroll summaries and reconciliation reports",
    ],
    workflow: [
      "Configure payroll structure and statutory rules",
      "Pull validated attendance and leave records",
      "Process payroll run and verify exceptions",
      "Publish payslips and close payroll period",
    ],
    outcomes: [
      "Higher payroll accuracy and reliability",
      "Lower compliance and penalty risk",
      "Reduced payroll processing effort",
    ],
  },
  {
    slug: "travel-and-expense",
    hero: "Control expense operations with policy-based submissions and approvals.",
    overview: [
      "Simplify employee reimbursements while enforcing travel and spending policies.",
      "Track expenses end-to-end from receipt submission to final payout.",
    ],
    capabilities: [
      "Expense claim creation with receipt attachments",
      "Policy controls for limits and category eligibility",
      "Approval chains and escalation workflows",
      "Reimbursement tracking and closure status",
      "Expense analytics by team, category, and period",
    ],
    workflow: [
      "Define travel and expense policy rules",
      "Employees submit claims and supporting documents",
      "Managers and finance review and approve requests",
      "Process reimbursements and close expense cycles",
    ],
    outcomes: [
      "Faster reimbursements with fewer disputes",
      "Better spend governance and policy adherence",
      "Improved visibility into operating expenses",
    ],
  },
  {
    slug: "employee-engagement",
    hero: "Measure employee sentiment and improve workplace experience proactively.",
    overview: [
      "Run regular engagement measurements to understand morale, motivation, and team health.",
      "Use actionable feedback to prioritize initiatives that strengthen retention and productivity.",
    ],
    capabilities: [
      "eNPS and pulse survey templates",
      "Anonymous feedback collection options",
      "Participation and sentiment trend tracking",
      "Segment-level analysis by team or location",
      "Action planning for engagement interventions",
    ],
    workflow: [
      "Schedule recurring engagement surveys",
      "Collect and analyze feedback data",
      "Identify key friction areas and priorities",
      "Launch targeted initiatives and monitor impact",
    ],
    outcomes: [
      "Stronger employee voice in decision-making",
      "Higher engagement and retention outcomes",
      "Faster detection of culture and morale risks",
    ],
  },
  {
    slug: "communication-and-collaboration",
    hero: "Build connected teams through transparent communication and shared channels.",
    overview: [
      "Enable cross-functional communication with structured updates, announcements, and communities.",
      "Promote collaboration that supports culture, alignment, and knowledge sharing.",
    ],
    capabilities: [
      "Organization-wide and team-specific announcements",
      "Collaboration spaces for projects and communities",
      "Employee interactions and discussion threads",
      "Knowledge sharing through internal posts",
      "Communication activity insights",
    ],
    workflow: [
      "Create communication channels by function or initiative",
      "Publish updates and policy announcements",
      "Encourage team participation and collaboration",
      "Review engagement metrics and optimize communication cadence",
    ],
    outcomes: [
      "Improved cross-team alignment",
      "Faster information flow across departments",
      "Stronger belonging and organizational culture",
    ],
  },
  {
    slug: "hr-analytics",
    hero: "Transform workforce data into decision-ready HR intelligence.",
    overview: [
      "Move beyond static reporting with dashboards that show patterns across talent, attendance, and attrition.",
      "Support leadership decisions using real-time metrics and customizable HR views.",
    ],
    capabilities: [
      "Prebuilt workforce and HR operations reports",
      "Custom report builder for business-specific metrics",
      "Dashboards for trend and variance monitoring",
      "Segmented analytics by location, function, or manager",
      "Export and sharing options for stakeholders",
    ],
    workflow: [
      "Define reporting dimensions and required HR metrics",
      "Build dashboards for operational and strategic views",
      "Monitor trends and investigate anomalies",
      "Use data insights to guide HR interventions",
    ],
    outcomes: [
      "Faster, data-backed people decisions",
      "Better visibility into workforce performance and risk",
      "Stronger alignment between HR and business strategy",
    ],
  },
  {
    slug: "hr-automation",
    hero: "Automate repetitive HR tasks to increase speed, consistency, and control.",
    overview: [
      "Replace manual HR follow-ups with event-driven workflows that scale as teams grow.",
      "Ensure policy consistency by triggering approvals, updates, and notifications automatically.",
    ],
    capabilities: [
      "Workflow rules for common HR events",
      "Automated notifications and reminder triggers",
      "Condition-based field updates",
      "Approval routing based on policy logic",
      "Webhook-ready automation for connected systems",
    ],
    workflow: [
      "Identify repeatable HR processes and trigger points",
      "Configure automation rules and role responsibilities",
      "Test flow behavior with edge-case scenarios",
      "Launch workflows and monitor automation outcomes",
    ],
    outcomes: [
      "Significant reduction in manual HR effort",
      "Higher process consistency and SLA adherence",
      "Better scalability for growing organizations",
    ],
  },
  {
    slug: "custom-services",
    hero: "Extend your HR platform with tailored services built for your internal processes.",
    overview: [
      "Model unique HR workflows that are not covered by standard modules using configurable components.",
      "Adapt quickly to evolving organizational needs without introducing fragmented tools.",
    ],
    capabilities: [
      "Custom forms and data capture models",
      "Configurable workflows and approval chains",
      "Business-specific process apps",
      "Role-based access and control policies",
      "Integration readiness for existing systems",
    ],
    workflow: [
      "Map business-specific HR process requirements",
      "Design custom forms and approval journeys",
      "Launch services with role-based permissions",
      "Refine and iterate based on adoption feedback",
    ],
    outcomes: [
      "Better fit for specialized HR operations",
      "Reduced dependency on external point solutions",
      "Higher agility for process improvements",
    ],
  },
]

export function getFeatureDetailBySlug(slug: string) {
  return featureDetails.find((detail) => detail.slug === slug)
}
