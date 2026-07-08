import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { BrandName } from "@/components/BrandName";
import {
  ArrowRight,
  Wrench,
  Target,
  TrendingUp,
  BadgeCheck,
  Users,
  BrainCircuit,
  Monitor,
  Handshake,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EnAibleWorks" },
      {
        name: "description",
        content:
          "EnAibleWorks is a trusted local partner for hardworking business owners — combining 25+ years of real operations experience with practical technology.",
      },
      { property: "og:title", content: "About — EnAibleWorks" },
      {
        property: "og:description",
        content:
          "A knowledgeable neighbor who happens to know technology. Here to help you succeed — not to sell you software.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const philosophy = [
  {
    icon: Wrench,
    t: "Keep It Simple",
    d: "Technology should make your day easier — never harder. If it's not simple, it's not right.",
  },
  {
    icon: Target,
    t: "Business First",
    d: "Every suggestion starts with your business, your customers, and the work you actually do.",
  },
  {
    icon: TrendingUp,
    t: "Built To Last",
    d: "We recommend things that will still be right for you a year from now — not the shiny new trend.",
  },
  {
    icon: BadgeCheck,
    t: "Honest Advice",
    d: "If something won't help, we'll tell you. Our job is to give you real answers, not a sales pitch.",
  },
];

const reasons = [
  {
    icon: Users,
    t: "25+ Years In Real Businesses",
    d: "Decades leading operations, customer service, and field service teams — plus working alongside tradespeople and small business owners.",
  },
  {
    icon: BrainCircuit,
    t: "Technology, Explained Simply",
    d: "You'll never be talked down to or buried in jargon. If we can't explain it in plain English, we won't recommend it.",
  },
  {
    icon: Monitor,
    t: "A Professional Presence",
    d: "A modern, credible online presence so customers trust you before they've even picked up the phone.",
  },
  {
    icon: Handshake,
    t: "A Real, Local Partner",
    d: "We're here for the long run — a phone call away when you have a question, an idea, or just need a second opinion.",
  },
];

function About() {
  return (
    <PageShell>
      {/* Hero */}
      <section
        className="border-b border-border"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <p className="animate-fade-up text-sm font-medium text-accent">
            About
          </p>
          <h1 className="animate-fade-up delay-100 mt-3 text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            A knowledgeable neighbor who happens to <span className="text-accent">know technology</span>.
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We're not a technology company. We're a trusted local partner who helps hardworking
            business owners save time, attract more customers, and take the stress out of
            technology.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            After more than 25 years leading operations, customer service, field service, and
            technology teams — and working shoulder-to-shoulder with tradespeople and small
            business owners along the way — I kept noticing the same thing.
          </p>
          <p>
            Hardworking local businesses were being asked to compete with much larger companies,
            but they didn't have the time, the tools, or a trusted person to help them make sense
            of the technology side.
          </p>
          <p>
            <BrandName /> was created to be that person.
          </p>
          <p>
            We help business owners with the practical things — a website that actually brings in
            customers, a professional online presence, simple automation, and honest advice about
            AI. We handle the technical side so you don't have to.
          </p>
          <p>We don't recommend technology because it's new or exciting.</p>
          <p>We recommend it when it solves a real problem in your business.</p>
          <p className="text-2xl font-medium tracking-tight">
            Every recommendation starts with one honest question:
          </p>
          <p className="text-2xl font-medium tracking-tight text-accent">
            "Will this actually help your business — save you time, bring in more customers, or
            make your day easier?"
          </p>
          <p>If the answer is no, we won't recommend it.</p>
          <p className="text-lg text-muted-foreground">
            You don't need to become a technology expert. That's our job. You focus on your
            business — we'll help make technology work for it.
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
            How We Think
          </p>
          <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
            The simple principles behind every recommendation.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((v) => (
              <div key={v.t} className="bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose EnAibleWorks */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
          Why Local Businesses Choose Us
        </p>
        <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
          Real experience. Honest advice. A partner who sticks around.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.t} className="bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{r.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {r.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl scroll-mt-36 px-6 pb-28 pt-16">
        <div className="shadow-elegant relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Let's make your business easier to run.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Whether you're just getting started, ready to modernize, or curious about how AI
              and automation could help — we'd love to hear about your business and share honest,
              practical ideas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:shadow-glow"
              >
                Let's Talk About Your Business
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
