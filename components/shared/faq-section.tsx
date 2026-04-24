"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  title: string
  description?: string
  items: FaqItem[]
  className?: string
}

export function FaqSection({ title, description, items, className }: Readonly<FaqSectionProps>) {
  if (!items.length) return null

  return (
    <section className={className ?? ""}>
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-3 text-muted-foreground">{description}</p>
          ) : null}
        </div>

        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
