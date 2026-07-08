import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Check, ArrowRight, Monitor, Search, Phone, Sparkles, FileText, Calendar, Eye, Users, MessageSquare, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/enableme")({
  head: () => ({
    meta: [
      { title: "Free Business Growth Review | EnAibleWorks" },
      { name: "description", content: "Book a complimentary Business Growth Review with EnAibleWorks. Focus on running your business — we'll look at your website, online presence, and customer experience, then share honest, practical ideas to help you grow. No jargon. No pressure." },
      { property: "og:title", content: "Free Business Growth Review | EnAibleWorks" },
      { property: "og:description", content: "A friendly, no-pressure conversation about your business. We'll review your website, online presence, and how customers find you — then share practical ideas to save time and grow. Focus on your business. We'll help make technology work for it." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "enaibleworks.com/enableme" },
    ],
    links: [{ rel: "canonical", href: "enaibleworks.com/enableme" }],
  }),
  component: FreeReview,
});

const CALENDLY_URL = "https://calendly.com/enaibleworks/";

const deliverables = [
  {
    icon: Monitor,
    title: "A Fresh Look At Your Website",
    desc: "How your website looks and feels to a new customer — on a phone, tablet, and desktop.",
  },
  {
    icon: Search,
    title: "How Customers Find You Online",
    desc: "What people see when they search for your business — and simple ways to help them find you first.",
  },
  {
    icon: Phone,
    title: "How Easy You Are To Reach",
    desc: "How quickly and easily a new customer can call, message, or book time with you today.",
  },
  {
    icon: Sparkles,
    title: "Ideas To Save You Time",
    desc: "Simple ways to take repetitive work off your plate so you can spend more time serving customers.",
  },
  {
    icon: FileText,
    title: "Honest, Practical Suggestions",
    desc: "A short list of ideas you can use right away — whether we work together or not.",
  },
];

const steps = [
  {
    icon: Calendar,
    title: "Pick a time that works for you.",
  },
  {
    icon: Eye,
    title: "We quietly do our homework on your business ahead of time.",
  },
  {
    icon: MessageSquare,
    title: "We meet however is easiest — phone, online, or in person locally.",
  },
  {
    icon: FileText,
    title: "You walk away with honest, plain-English ideas you can actually use.",
  },
];

const businessTypes = [
  "Roofers",
  "HVAC companies",
  "Plumbers",
  "Electricians",
  "Landscapers",
  "Contractors",
  "Auto repair shops",
  "Professional services",
  "Local small businesses",
];

function CalendlyButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function FreeReview() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-32">
          <p className="animate-fade-up text-sm font-medium text-accent">A Complimentary Conversation For Local Businesses</p>
          <h1 className="animate-fade-up delay-100 mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Get a Complimentary Business Growth Review
          </h1>
          <p className="animate-fade-up delay-200 mt-6 text-lg text-muted-foreground">
            Helping local businesses save time, attract more customers, and grow with confidence.
          </p>
          <p className="animate-fade-up delay-300 mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            A friendly conversation about your business — your website, your online presence,
            how customers reach you, and simple ideas that could help you grow. You don't need
            to know anything technical. That's our job.
          </p>
          <p className="animate-fade-up delay-400 mt-6 text-sm font-medium text-accent">
            No obligation. No pressure. No confusing technical jargon.
          </p>
          <div className="animate-fade-up delay-500 mt-8 flex flex-col items-center gap-3">
            <CalendlyButton className="bg-accent text-accent-foreground hover:shadow-glow">
              Book My Complimentary Business Growth Review
            </CalendlyButton>
            <p className="text-xs text-muted-foreground">
              Choose whatever meeting format works best for you — phone, online, or in person for local businesses. We'll meet you where you're most comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">What to expect</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            What You'll Walk Away With
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-7 transition-colors hover:bg-secondary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Simple and easy</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              How It Works
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center md:text-left">
                <div className="mx-auto md:mx-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/70 text-accent">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-base font-medium text-foreground">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Who this is for</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Made For Busy Local Owners
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              For hardworking business owners who don't have time to figure out websites, AI, or
              online tools on their own — and would rather have someone they trust help sort it out.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              You don't need to be a technology expert. We'll guide you through everything, at
              your pace, in plain English.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {businessTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EnAibleWorks */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Why us</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Why EnAibleWorks
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            EnAibleWorks was created to be the trusted local partner that hardworking business
            owners deserve. Our job isn't to sell you technology — it's to help your business
            save time, look more professional, get more customer inquiries, and feel a lot
            simpler to run.
          </p>
          <p className="mt-8 text-2xl font-semibold tracking-tight text-accent">
            Focus on your business. We'll help make technology work for it.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="shadow-elegant relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center md:p-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Let's Make Your Business Easier To Run.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Book your complimentary Business Growth Review and walk away with honest,
              practical ideas for your business. No jargon. No pressure. Just a friendly
              conversation.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <CalendlyButton className="bg-foreground text-background hover:shadow-glow">
                Book My Complimentary Business Growth Review
              </CalendlyButton>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> About 30 minutes
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Phone, online, or in person locally
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
