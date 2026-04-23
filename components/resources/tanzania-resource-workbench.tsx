"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

type ToolSlug = "free-tools" | "compliance" | "hr-toolkit"

interface TanzaniaResourceWorkbenchProps {
  slug: ToolSlug
}

const hrToolkitPages = [
  { slug: "checklists", title: "HR Checklists", summary: "Step-by-step operational checklists for recurring HR workflows." },
  { slug: "email-playbook", title: "Email Playbook", summary: "Pre-built communication templates for employee lifecycle moments." },
  { slug: "job-descriptions", title: "Job Descriptions", summary: "Role-based JD templates with responsibilities and KPI framing." },
  { slug: "policies", title: "Policy Templates", summary: "Editable policy packs for attendance, leave, and workplace conduct." },
  { slug: "okrs", title: "OKR Templates", summary: "Structured templates for company, team, and individual OKR cycles." },
  { slug: "interview-questions", title: "Interview Question Banks", summary: "Competency-mapped interview sets with consistent scoring intent." },
  { slug: "frameworks", title: "HR Frameworks", summary: "Operating models to scale governance and people operations maturity." },
]

const currencyFormatter = new Intl.NumberFormat("en-TZ", {
  style: "currency",
  currency: "TZS",
  maximumFractionDigits: 0,
})

function parseNumber(value: string) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function calculateTzPAYE(monthlyTaxableIncome: number) {
  if (monthlyTaxableIncome <= 0) return 0
  if (monthlyTaxableIncome <= 270000) return monthlyTaxableIncome * 0.08
  if (monthlyTaxableIncome <= 520000) return 21600 + (monthlyTaxableIncome - 270000) * 0.2
  if (monthlyTaxableIncome <= 760000) return 71600 + (monthlyTaxableIncome - 520000) * 0.25
  if (monthlyTaxableIncome <= 1000000) return 131600 + (monthlyTaxableIncome - 760000) * 0.3
  return 203600 + (monthlyTaxableIncome - 1000000) * 0.3
}

const complianceFormFields: Record<string, string[]> = {
  "Employee Master Registration": [
    "employeeId",
    "fullName",
    "tin",
    "nssfNumber",
    "position",
    "department",
    "employmentStartDate",
    "baseSalaryTzs",
  ],
  "Monthly PAYE Return Draft": [
    "companyName",
    "tin",
    "taxPeriod",
    "grossPayrollTzs",
    "taxablePayrollTzs",
    "totalPayeDueTzs",
    "preparedBy",
    "preparedDate",
  ],
  "NSSF Monthly Contribution Schedule": [
    "companyName",
    "nssfEmployerNumber",
    "contributionMonth",
    "employeeContributionRate",
    "employerContributionRate",
    "totalEmployeeContributionTzs",
    "totalEmployerContributionTzs",
    "totalNssfDueTzs",
  ],
  "Skills and Development Levy (SDL) Return": [
    "companyName",
    "tin",
    "period",
    "sdlRate",
    "leviablePayrollTzs",
    "sdlAmountDueTzs",
    "preparedBy",
    "approvalName",
  ],
  "Workers Compensation Fund (WCF) Return": [
    "companyName",
    "wcfReference",
    "reportingPeriod",
    "assessablePayrollTzs",
    "wcfRate",
    "wcfAmountDueTzs",
    "contactPerson",
    "contactPhone",
  ],
  "Annual Leave and Working Hours Register": [
    "employeeName",
    "employeeId",
    "leaveYear",
    "entitlementDays",
    "daysTaken",
    "daysRemaining",
    "standardWeeklyHours",
    "overtimeHoursThisMonth",
  ],
}

export function TanzaniaResourceWorkbench({ slug }: Readonly<TanzaniaResourceWorkbenchProps>) {
  const [grossSalary, setGrossSalary] = useState("1200000")
  const [allowances, setAllowances] = useState("200000")
  const [otherDeductions, setOtherDeductions] = useState("50000")
  const [nssfEmployeeRate, setNssfEmployeeRate] = useState("10")
  const [nssfEmployerRate, setNssfEmployerRate] = useState("10")
  const [sdlRate, setSdlRate] = useState("4.5")
  const [wcfRate, setWcfRate] = useState("1")

  const [overtimeMonthlySalary, setOvertimeMonthlySalary] = useState("900000")
  const [normalOtHours, setNormalOtHours] = useState("8")
  const [publicHolidayOtHours, setPublicHolidayOtHours] = useState("4")

  const [leaveAnnualEntitlement, setLeaveAnnualEntitlement] = useState("28")
  const [monthsWorked, setMonthsWorked] = useState("9")
  const [daysTaken, setDaysTaken] = useState("7")

  const [selectedForm, setSelectedForm] = useState<keyof typeof complianceFormFields>(
    "Employee Master Registration",
  )
  const [formState, setFormState] = useState<Record<string, string>>({})
  const [notes, setNotes] = useState("")

  const payrollResults = useMemo(() => {
    const gross = parseNumber(grossSalary)
    const allowanceAmount = parseNumber(allowances)
    const deductions = parseNumber(otherDeductions)
    const employeeNssf = (gross * parseNumber(nssfEmployeeRate)) / 100
    const employerNssf = (gross * parseNumber(nssfEmployerRate)) / 100
    const taxableIncome = Math.max(gross + allowanceAmount - employeeNssf, 0)
    const paye = calculateTzPAYE(taxableIncome)
    const sdl = (gross * parseNumber(sdlRate)) / 100
    const wcf = (gross * parseNumber(wcfRate)) / 100
    const netPay = gross + allowanceAmount - employeeNssf - paye - deductions
    const totalEmployerCost = gross + allowanceAmount + employerNssf + sdl + wcf

    return {
      employeeNssf,
      employerNssf,
      taxableIncome,
      paye,
      sdl,
      wcf,
      netPay,
      totalEmployerCost,
    }
  }, [
    allowances,
    grossSalary,
    nssfEmployeeRate,
    nssfEmployerRate,
    otherDeductions,
    sdlRate,
    wcfRate,
  ])

  const overtimeResult = useMemo(() => {
    const monthly = parseNumber(overtimeMonthlySalary)
    const hourlyRate = monthly / 195
    const normalHours = parseNumber(normalOtHours)
    const holidayHours = parseNumber(publicHolidayOtHours)
    const normalAmount = hourlyRate * 1.5 * normalHours
    const holidayAmount = hourlyRate * 2 * holidayHours
    return {
      hourlyRate,
      normalAmount,
      holidayAmount,
      total: normalAmount + holidayAmount,
    }
  }, [normalOtHours, overtimeMonthlySalary, publicHolidayOtHours])

  const leaveResult = useMemo(() => {
    const entitlement = parseNumber(leaveAnnualEntitlement)
    const workedMonths = Math.min(parseNumber(monthsWorked), 12)
    const taken = parseNumber(daysTaken)
    const accrued = (entitlement / 12) * workedMonths
    return {
      accrued,
      remaining: Math.max(accrued - taken, 0),
    }
  }, [daysTaken, leaveAnnualEntitlement, monthsWorked])

  const formPayload = useMemo(() => {
    const requiredFields = complianceFormFields[selectedForm]
    const values = requiredFields.reduce<Record<string, string>>((acc, field) => {
      acc[field] = formState[field] ?? ""
      return acc
    }, {})

    return {
      country: "Tanzania",
      formType: selectedForm,
      values,
      notes,
      generatedAt: new Date().toISOString(),
    }
  }, [formState, notes, selectedForm])

  const handleCopyPayload = async () => {
    await navigator.clipboard.writeText(JSON.stringify(formPayload, null, 2))
  }

  if (slug === "free-tools") {
    return (
      <section className="mt-8 rounded-2xl border border-border bg-card p-6">
        <h3 className="font-serif text-2xl font-bold text-foreground">Tanzania tools workspace</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Default country: Tanzania. Values are in TZS and can be adjusted to match your internal policy.
        </p>

        <Tabs defaultValue="payroll" className="mt-6">
          <TabsList className="grid h-auto w-full grid-cols-1 gap-2 bg-transparent p-0 md:grid-cols-3">
            <TabsTrigger value="payroll">Payroll + statutory</TabsTrigger>
            <TabsTrigger value="overtime">Overtime</TabsTrigger>
            <TabsTrigger value="leave">Leave accrual</TabsTrigger>
          </TabsList>

          <TabsContent value="payroll" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: "Gross salary (monthly)", value: grossSalary, onChange: setGrossSalary },
                { label: "Taxable allowances", value: allowances, onChange: setAllowances },
                { label: "Other deductions", value: otherDeductions, onChange: setOtherDeductions },
                { label: "NSSF employee rate (%)", value: nssfEmployeeRate, onChange: setNssfEmployeeRate },
                { label: "NSSF employer rate (%)", value: nssfEmployerRate, onChange: setNssfEmployerRate },
                { label: "SDL rate (%)", value: sdlRate, onChange: setSdlRate },
                { label: "WCF rate (%)", value: wcfRate, onChange: setWcfRate },
              ].map((field) => (
                <div key={field.label} className="space-y-2">
                  <Label>{field.label}</Label>
                  <Input value={field.value} onChange={(event) => field.onChange(event.target.value)} />
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 rounded-xl border border-border bg-background p-4 md:grid-cols-2">
              <ResultRow label="Employee NSSF" value={payrollResults.employeeNssf} />
              <ResultRow label="Employer NSSF" value={payrollResults.employerNssf} />
              <ResultRow label="Taxable income" value={payrollResults.taxableIncome} />
              <ResultRow label="PAYE estimate" value={payrollResults.paye} />
              <ResultRow label="SDL estimate" value={payrollResults.sdl} />
              <ResultRow label="WCF estimate" value={payrollResults.wcf} />
              <ResultRow label="Net pay estimate" value={payrollResults.netPay} emphasize />
              <ResultRow label="Total employer cost" value={payrollResults.totalEmployerCost} emphasize />
            </div>
          </TabsContent>

          <TabsContent value="overtime" className="mt-6">
            <div className="grid gap-4 md:grid-cols-3">
              <InputBlock
                label="Monthly salary"
                value={overtimeMonthlySalary}
                onChange={setOvertimeMonthlySalary}
              />
              <InputBlock label="Normal OT hours" value={normalOtHours} onChange={setNormalOtHours} />
              <InputBlock
                label="Public holiday OT hours"
                value={publicHolidayOtHours}
                onChange={setPublicHolidayOtHours}
              />
            </div>
            <div className="mt-6 grid gap-3 rounded-xl border border-border bg-background p-4 md:grid-cols-2">
              <ResultRow label="Hourly rate (salary / 195)" value={overtimeResult.hourlyRate} />
              <ResultRow label="Normal OT payout (1.5x)" value={overtimeResult.normalAmount} />
              <ResultRow label="Holiday OT payout (2x)" value={overtimeResult.holidayAmount} />
              <ResultRow label="Total OT payout" value={overtimeResult.total} emphasize />
            </div>
          </TabsContent>

          <TabsContent value="leave" className="mt-6">
            <div className="grid gap-4 md:grid-cols-3">
              <InputBlock
                label="Annual entitlement (days)"
                value={leaveAnnualEntitlement}
                onChange={setLeaveAnnualEntitlement}
              />
              <InputBlock label="Months worked" value={monthsWorked} onChange={setMonthsWorked} />
              <InputBlock label="Leave days taken" value={daysTaken} onChange={setDaysTaken} />
            </div>
            <div className="mt-6 grid gap-3 rounded-xl border border-border bg-background p-4 md:grid-cols-2">
              <ResultRow label="Accrued leave" value={leaveResult.accrued} precision={2} />
              <ResultRow label="Remaining leave" value={leaveResult.remaining} precision={2} emphasize />
            </div>
          </TabsContent>
        </Tabs>
      </section>
    )
  }

  if (slug === "hr-toolkit") {
    return (
      <section className="mt-8 rounded-2xl border border-border bg-card p-6">
        <h3 className="font-serif text-2xl font-bold text-foreground">Toolkit pages</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Open any toolkit page to get focused templates, use cases, and implementation checklists.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {hrToolkitPages.map((page) => (
            <Link
              key={page.slug}
              href={`/resources/hr-toolkit/${page.slug}`}
              className="rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/20 hover:shadow-sm"
            >
              <p className="font-semibold text-foreground">{page.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{page.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="mt-8 rounded-2xl border border-border bg-card p-6">
      <h3 className="font-serif text-2xl font-bold text-foreground">Tanzania compliance forms workspace</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Default country: Tanzania. Fill the form draft, then copy JSON for API, workflow, or document generation.
      </p>

      <div className="mt-6">
        <Label>Form type</Label>
        <select
          className="border-input mt-2 h-10 w-full rounded-md border bg-transparent px-3 text-sm"
          value={selectedForm}
          onChange={(event) => {
            const nextForm = event.target.value
            if (nextForm in complianceFormFields) {
              setSelectedForm(nextForm)
            }
          }}
        >
          {Object.keys(complianceFormFields).map((formName) => (
            <option key={formName} value={formName}>
              {formName}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {complianceFormFields[selectedForm].map((fieldName) => (
          <div key={fieldName} className="space-y-2">
            <Label>{fieldName}</Label>
            <Input
              value={formState[fieldName] ?? ""}
              onChange={(event) =>
                setFormState((prev) => ({
                  ...prev,
                  [fieldName]: event.target.value,
                }))
              }
            />
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <Label>Internal notes</Label>
        <Textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Add compliance notes, assumptions, references, or document IDs."
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button type="button" onClick={handleCopyPayload}>
          Copy JSON payload
        </Button>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-background p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Payload preview</p>
        <pre className="overflow-x-auto text-xs text-foreground">
          {JSON.stringify(formPayload, null, 2)}
        </pre>
      </div>
    </section>
  )
}

function ResultRow({
  label,
  value,
  emphasize = false,
  precision = 0,
}: Readonly<{
  label: string
  value: number
  emphasize?: boolean
  precision?: number
}>) {
  const displayValue =
    precision > 0
      ? value.toLocaleString("en-US", { minimumFractionDigits: precision, maximumFractionDigits: precision })
      : currencyFormatter.format(value)

  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className={`mt-1 text-sm font-semibold ${emphasize ? "text-primary" : "text-foreground"}`}>
        {displayValue}
      </p>
    </div>
  )
}

function InputBlock({
  label,
  value,
  onChange,
}: Readonly<{
  label: string
  value: string
  onChange: (next: string) => void
}>) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  )
}
