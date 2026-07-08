import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { BrandName } from "@/components/BrandName";
import { ArrowRight, MessageSquare, Calendar, Phone, Mail, ClipboardList, TrendingUp, Clock, Shield, Zap, Users } from "lucide-react";

export const Route = createFileRoute("/blog/ai-for-contractors")({
  head: () => ({
    meta: [
      { title: "10 Practical AI Automations for Contractors & HVAC — EnAibleWorks" },
      { name: "description", content: "Discover 10 practical AI automations for contractors and HVAC businesses: lead follow-up, scheduling, customer support, and more. Save hours every week." },
      { property: "og:title", content: "10 Practical AI Automations for Contractors & HVAC — EnAibleWorks" },
      { property: "og:description", content: "Discover 10 practical AI automations for contractors and HVAC businesses: lead follow-up, scheduling, customer support, and more." },
      { property: "og:url", content: "/blog/ai-for-contractors" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/blog/ai-for-contractors" }],
  }),
  component: BlogPost,
});

const automations = [
  {
    icon: MessageSquare,
    title: "Instant Lead Response",
    desc: "The first company to respond wins the job 78% of the time. An AI assistant can reply to form submissions and missed calls within seconds — day or night — with a personalized message, next steps, and a scheduling link. No more leads going cold while you're on a job site.",
  },
  {
    icon: Calendar,
    title: "Self-Service Scheduling",
    desc: "Let customers book appointments directly into your calendar without a single phone call. AI-powered scheduling checks your real availability, asks the right intake questions, and sends confirmations and reminders automatically. Reduces no-shows by up to 40%.",
  },
  {
    icon: Phone,
    title: "Missed Call Text-Back",
    desc: "When you're under a sink or on a roof, you can't always answer. AI can automatically text back missed callers with a friendly message, set expectations on response time, and capture the reason for their call — so you return to a warm lead, not a voicemail maze.",
  },
  {
    icon: Mail,
    title: "Follow-Up Email Sequences",
    desc: "Not every quote turns into a job on day one. AI can nurture unconverted estimates with a polite sequence — check-in, seasonal reminder, special offer — until the homeowner is ready. The system knows when to stop and never pesters.",
  },
  {
    icon: ClipboardList,
    title: "Automated Quote Generation",
    desc: "Collect project details through a smart form, then let AI draft a professional quote based on your pricing rules. You review and send in minutes instead of hours. Consistent formatting, no math errors, and a faster path from estimate to signed contract.",
  },
  {
    icon: Shield,
    title: "Maintenance Reminders & Contracts",
    desc: "HVAC systems need seasonal tune-ups. Roofing needs inspections after storms. AI monitors customer purchase dates and local weather to trigger perfectly timed maintenance reminders — turning one-time jobs into recurring revenue without manual tracking.",
  },
  {
    icon: Users,
    title: "Review Request Automation",
    desc: "Happy customers rarely leave reviews unless prompted. AI sends a gentle, timed request after job completion, provides a direct link, and even drafts a thank-you response. More 5-star reviews mean more local search visibility and more inbound calls.",
  },
  {
    icon: Clock,
    title: "Dispatch & Routing Optimization",
    desc: "For teams with multiple techs, AI can assign jobs based on location, skill set, and current workload — then optimize driving routes to cut windshield time. Fewer miles, more billable hours, and happier crews who spend less time in traffic.",
  },
  {
    icon: TrendingUp,
    title: "Job Costing & Margin Alerts",
    desc: "AI can track estimated vs. actual hours and materials in real time, flagging jobs that are trending over budget before they finish. Catch scope creep early, adjust pricing on future quotes, and protect your margins on every project.",
  },
  {
    icon: Zap,
    title: "24/7 Customer Support Chat",
    desc: "A trained AI chatbot on your website can answer common questions — service areas, pricing, warranties, availability — at any hour. Complex issues get routed to you with full context. You sleep; your business keeps qualifying leads.",
  },
];

function BlogPost() {
  return (
    <PageShell>
      <article>
        <header className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Zap className="h-3.5 w-3.5 text-accent" />
              AI for Small Business
            </div>
            <h1 className="animate-fade-up delay-100 mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
              10 Practical AI Automations for Contractors and HVAC Businesses
            </h1>
            <p className="animate-fade-up delay-200 mt-5 text-lg leading-relaxed text-muted-foreground">
              Automated lead follow-up and scheduling that saves hours every week — and helps you win more jobs before your competitors even call back.
            </p>
            <div className="animate-fade-up delay-300 mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <span>By <BrandName /></span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>8 min read</span>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="prose-custom space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              Contractors and HVAC professionals are some of the busiest people in business.
              You're on job sites, in attics, under houses, and in crawl spaces. The last thing
              you need is to lose a lead because you couldn't answer the phone — or to spend
              your evening doing paperwork that a machine could handle in seconds.
            </p>
            <p>
              The good news: practical AI automation is no longer reserved for Fortune 500
              companies. Small service businesses can now deploy smart systems that respond
              to leads, book appointments, send reminders, and follow up on quotes — all
              without adding headcount.
            </p>
            <p>
              Here are ten automations that produce the fastest, most measurable return for
              contractors and HVAC businesses, with the biggest impact on lead follow-up and scheduling.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {automations.map((a, i) => (
              <div key={a.title} className="animate-fade-up group rounded-2xl border border-border bg-card p-8 md:p-10">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      <span className="text-muted-foreground/60 mr-2">{String(i + 1).padStart(2, "0")}.</span>
                      {a.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-2xl border border-border bg-secondary/40 p-8 md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">Where to start</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              You don't need all ten on day one. The highest-impact, fastest-to-implement
              automations are usually <strong>Instant Lead Response</strong> and
              <strong> Self-Service Scheduling</strong>. Together, they close the gap
              between "interested homeowner" and "booked appointment" — the exact moment
              where most small service businesses lose deals to larger competitors with
              faster systems.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Once those are running, layer in <strong>Missed Call Text-Back</strong> and
              <strong> Follow-Up Email Sequences</strong>. Each automation compounds the last,
              turning your business into a responsive, professional operation that wins
              trust before you ever shake a customer's hand.
            </p>
          </div>
        </section>
      </article>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="shadow-elegant surface-navy relative overflow-hidden rounded-3xl p-12 md:p-16">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Want help implementing these automations in your business?
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            We'll audit your current workflow, identify the biggest wins, and build the
            automation stack that fits how you actually work — not a generic template.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-navy-deep transition-all hover:shadow-glow"
          >
            Book a discovery call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
