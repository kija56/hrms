export interface Module {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  features: string[]
  benefits: {
    title: string
    description: string
  }[]
}

export const modules: Module[] = [
  {
    id: "payroll",
    title: "Payroll Management",
    shortDescription: "Automate salary calculations, tax deductions, and payment processing with precision.",
    fullDescription: "Our payroll management system is meticulously designed to handle all aspects of employee compensation with accuracy and compliance. It automates complex calculations, ensures timely payments, and maintains complete audit trails for every transaction.",
    icon: "wallet",
    features: [
      "Automated salary calculations",
      "Tax deduction management",
      "Multi-currency support",
      "Bank integration for direct deposits",
      "Payslip generation and distribution",
      "Year-end tax reporting"
    ],
    benefits: [
      {
        title: "Time Savings",
        description: "Reduce payroll processing time by up to 80% with automated calculations and batch processing capabilities."
      },
      {
        title: "Compliance Assured",
        description: "Stay compliant with local tax regulations and labor laws with automatic updates and built-in compliance checks."
      },
      {
        title: "Error Reduction",
        description: "Minimize costly payroll errors with automated validation and approval workflows."
      }
    ]
  },
  {
    id: "attendance",
    title: "Attendance & Time Tracking",
    shortDescription: "Track employee hours, manage shifts, and monitor attendance in real-time.",
    fullDescription: "Comprehensive attendance management that captures every clock-in and clock-out with precision. Our system supports multiple tracking methods including biometric, mobile, and web-based check-ins for complete flexibility.",
    icon: "clock",
    features: [
      "Real-time attendance tracking",
      "Biometric integration",
      "Mobile check-in/check-out",
      "Shift scheduling",
      "Overtime calculations",
      "Attendance reports and analytics"
    ],
    benefits: [
      {
        title: "Accurate Time Records",
        description: "Eliminate time theft and buddy punching with biometric and GPS-verified attendance tracking."
      },
      {
        title: "Flexible Tracking",
        description: "Support remote and hybrid workforces with mobile and web-based attendance options."
      },
      {
        title: "Automated Compliance",
        description: "Ensure labor law compliance with automated break tracking and overtime management."
      }
    ]
  },
  {
    id: "leave",
    title: "Leave Management",
    shortDescription: "Streamline leave requests, approvals, and balance tracking effortlessly.",
    fullDescription: "A complete leave management solution that simplifies the entire process from request to approval. Employees can easily check balances, submit requests, and managers can approve with a single click while maintaining full visibility of team availability.",
    icon: "calendar",
    features: [
      "Self-service leave requests",
      "Multi-level approval workflows",
      "Leave balance tracking",
      "Holiday calendar management",
      "Team availability view",
      "Leave policy configuration"
    ],
    benefits: [
      {
        title: "Employee Self-Service",
        description: "Empower employees to manage their own leave requests and check balances anytime, anywhere."
      },
      {
        title: "Manager Visibility",
        description: "Give managers complete visibility of team schedules to make informed approval decisions."
      },
      {
        title: "Policy Automation",
        description: "Automatically enforce leave policies, accruals, and carry-forward rules without manual intervention."
      }
    ]
  },
  {
    id: "performance",
    title: "Performance Management",
    shortDescription: "Set goals, track progress, and conduct meaningful performance reviews.",
    fullDescription: "Transform your performance management process with continuous feedback, goal alignment, and data-driven reviews. Our system promotes a culture of growth by connecting individual objectives to organizational goals.",
    icon: "target",
    features: [
      "OKR and goal setting",
      "Continuous feedback",
      "360-degree reviews",
      "Performance analytics",
      "Competency frameworks",
      "Development planning"
    ],
    benefits: [
      {
        title: "Goal Alignment",
        description: "Align individual goals with company objectives using OKR methodology for maximum impact."
      },
      {
        title: "Continuous Growth",
        description: "Foster continuous improvement with regular check-ins and real-time feedback mechanisms."
      },
      {
        title: "Data-Driven Decisions",
        description: "Make informed talent decisions with comprehensive performance analytics and insights."
      }
    ]
  },
  {
    id: "recruitment",
    title: "Recruitment & Hiring",
    shortDescription: "Attract, screen, and hire top talent with our ATS-powered recruitment tools.",
    fullDescription: "End-to-end recruitment solution that helps you find and hire the best candidates efficiently. From job posting to offer management, streamline every step of your hiring process with powerful automation and analytics.",
    icon: "users",
    features: [
      "Job posting management",
      "Applicant tracking (ATS)",
      "Resume parsing",
      "Interview scheduling",
      "Candidate scoring",
      "Offer management"
    ],
    benefits: [
      {
        title: "Faster Hiring",
        description: "Reduce time-to-hire by 40% with automated screening and streamlined workflows."
      },
      {
        title: "Better Candidates",
        description: "Find quality candidates faster with AI-powered resume matching and scoring."
      },
      {
        title: "Seamless Experience",
        description: "Provide a modern candidate experience with easy applications and timely communications."
      }
    ]
  },
  {
    id: "onboarding",
    title: "Employee Onboarding",
    shortDescription: "Create memorable first-day experiences with structured onboarding workflows.",
    fullDescription: "Set new hires up for success from day one with our comprehensive onboarding solution. Automate paperwork, assign training, and create personalized onboarding journeys that integrate new employees into your culture seamlessly.",
    icon: "user-plus",
    features: [
      "Digital document signing",
      "Onboarding checklists",
      "Training assignment",
      "Buddy system setup",
      "Equipment provisioning",
      "Progress tracking"
    ],
    benefits: [
      {
        title: "Faster Productivity",
        description: "Get new hires productive 50% faster with structured onboarding programs and clear milestones."
      },
      {
        title: "Paperless Process",
        description: "Eliminate paper-based onboarding with digital forms, e-signatures, and automated workflows."
      },
      {
        title: "Better Retention",
        description: "Improve new hire retention with engaging onboarding experiences and early connection building."
      }
    ]
  }
]

export function getModuleById(id: string): Module | undefined {
  return modules.find(m => m.id === id)
}

export function getModuleIcon(iconName: string) {
  const icons: Record<string, string> = {
    wallet: "M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM3 6h18v2H3V6zm0 4h18v8H3v-8zm16 6h-4v-2h4v2z",
    clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-13h-2v6l5.25 3.15.75-1.23-4-2.42V7z",
    calendar: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2zm0 4h7v2H7v-2z",
    target: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-14a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
    users: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    "user-plus": "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }
  return icons[iconName] || icons.users
}
