"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock3, Mail, MessageSquareText, PhoneCall } from "lucide-react"

const contactChannels = [
  {
    title: "Sales inquiries",
    detail: "sales@payscoophrm.com",
    note: "For demos, pricing, and rollout plans",
    icon: Mail,
  },
  {
    title: "Support desk",
    detail: "support@payscoophrm.com",
    note: "For platform help and technical requests",
    icon: MessageSquareText,
  },
  {
    title: "Call us",
    detail: "+255 700 000 000",
    note: "Mon - Fri, 9:00 AM to 6:00 PM",
    icon: PhoneCall,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-4xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:p-10">
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Contact us
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Let us plan your HR transformation
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Share your current HR challenges and team goals. We will recommend the right setup for your workflows, scale, and rollout timeline.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm text-muted-foreground">
              <Clock3 className="h-4 w-4 text-primary" />
              Typical response time: within 1 business day
            </div>

            <div className="space-y-3">
              {contactChannels.map((channel) => (
                <div key={channel.title} className="rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/25">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <channel.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{channel.title}</p>
                      <p className="text-sm font-medium text-primary">{channel.detail}</p>
                      <p className="text-xs text-muted-foreground">{channel.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-5 sm:p-6">
            <form className="space-y-4" action="#" method="post">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                    Full name
                  </label>
                  <Input id="contact-name" name="name" placeholder="Jane Doe" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                    Work email
                  </label>
                  <Input id="contact-email" name="email" type="email" placeholder="jane@company.com" required />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="contact-company" className="text-sm font-medium text-foreground">
                    Company
                  </label>
                  <Input id="contact-company" name="company" placeholder="Your company name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-size" className="text-sm font-medium text-foreground">
                    Team size
                  </label>
                  <Input id="contact-size" name="teamSize" placeholder="e.g. 50-200 employees" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                  What do you want to improve?
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your current process, goals, and timeline."
                  className="min-h-28"
                  required
                />
              </div>

              <label className="flex items-start gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="mt-1" required />
                <span>I agree to be contacted by the Payscoop HRM team regarding my request.</span>
              </label>

              <Button
                type="submit"
                className="h-12 w-full rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
