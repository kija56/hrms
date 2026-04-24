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
    ...defaultFeatureFaqs.slice(1),
  ],
  "employee-engagement": [
    {
      question: "Can we run recurring employee sentiment surveys?",
      answer:
        "Yes. You can schedule pulse-style engagement checks and monitor participation and trend movement over time.",
    },
    ...defaultFeatureFaqs.slice(1),
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
