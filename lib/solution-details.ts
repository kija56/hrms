export interface SolutionDetail {
  slug: string
  hero: string
  overview: string[]
  capabilities: string[]
  implementation: string[]
  outcomes: string[]
}

export const solutionDetails: SolutionDetail[] = [
  {
    slug: "small-business",
    hero: "A lightweight, fast-to-launch HR solution for growing teams with limited admin bandwidth.",
    overview: [
      "Small businesses need immediate operational clarity without complex implementation overhead.",
      "This solution focuses on essential workflows first, then expands as team size and process maturity grow.",
    ],
    capabilities: [
      "Rapid setup for employee records, leave, and attendance",
      "Simple approval chains for common HR requests",
      "Self-service workflows that reduce HR dependency",
      "Starter analytics for workforce visibility",
      "Scalable module expansion as business grows",
    ],
    implementation: [
      "Launch core HR modules in the first phase",
      "Train managers and employees on self-service actions",
      "Standardize policies with minimal approval complexity",
      "Expand into performance and automation as headcount increases",
    ],
    outcomes: [
      "Faster HR digitization with low setup friction",
      "Reduced manual admin workload",
      "Improved visibility into people operations",
    ],
  },
  {
    slug: "mid-size-businesses",
    hero: "A scalable operating model for teams that need stronger governance, consistency, and automation.",
    overview: [
      "Mid-size organizations often run into process fragmentation as teams and locations expand.",
      "This solution creates standardized policies, reliable workflows, and better cross-functional coordination.",
    ],
    capabilities: [
      "Multi-team policy standardization and control",
      "Automated workflows for approvals and notifications",
      "Integrated attendance, leave, payroll, and performance operations",
      "Department-level analytics and planning dashboards",
      "Configurable role-based access and governance",
    ],
    implementation: [
      "Assess current process gaps by function and location",
      "Define standardized policy and workflow templates",
      "Roll out modules in operational dependency order",
      "Track adoption and optimize using reporting insights",
    ],
    outcomes: [
      "Higher process consistency across teams",
      "Lower operational bottlenecks and delays",
      "Better decision-making through structured analytics",
    ],
  },
  {
    slug: "enterprises",
    hero: "Enterprise-grade HR architecture for complex organizations with advanced governance needs.",
    overview: [
      "Large organizations require deep configurability, stronger controls, and broad stakeholder alignment.",
      "This solution supports multi-entity operations, compliance requirements, and leadership-level reporting needs.",
    ],
    capabilities: [
      "Advanced role hierarchy and data access controls",
      "Multi-entity workforce structures and policy segmentation",
      "Automation at scale with conditional workflow logic",
      "Executive dashboards for strategic workforce analysis",
      "Cross-system integration readiness and governance support",
    ],
    implementation: [
      "Design governance model across entities and departments",
      "Configure compliance-aligned controls and approval layers",
      "Integrate core systems for unified data flow",
      "Operate continuous improvement cycles with executive reporting",
    ],
    outcomes: [
      "Stronger governance and audit readiness",
      "Operational resilience across global HR processes",
      "Strategic workforce planning driven by reliable data",
    ],
  },
]

export function getSolutionDetailBySlug(slug: string) {
  return solutionDetails.find((detail) => detail.slug === slug)
}
