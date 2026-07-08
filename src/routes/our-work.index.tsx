import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";
import { ArrowRight, Globe, Sparkles, BrainCircuit, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/our-work/")({
  head: () => ({
    meta: [
      { title: "Our Work — EnAibleWorks" },
      { name: "description", content: "Real businesses. Real results. See how EnAibleWorks modernizes companies through thoughtful design, practical AI, and business automation." },
      { property: "og:title", content: "Our Work — EnAibleWorks" },
      { property: "og:description", content: "Case studies from small and mid-sized businesses transformed through modern websites, practical AI, and automation." },
      { property: "og:url", content: "/our-work" },
    ],
    links: [{ rel: "canonical", href: "/our-work" }],
  }),
  component: OurWork,
});

const steps = ["Discover", "Design", "Enable", "Grow"];

const results = [
  { icon: Globe, title: "Professional Online Presence", desc: "Websites that reflect the true quality of the business." },
  { icon: Sparkles, title: "Modern Brand Identity", desc: "Design and messaging that earn trust on first impression." },
  { icon: BrainCircuit, title: "AI-Ready Business", desc: "Foundations that make practical AI adoption effortless." },
  { icon: TrendingUp, title: "Built for Future Growth", desc: "Scalable systems that grow with the business." },
];

function OurWork() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        {/* Abstract AI-inspired background */}
        <div className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-[-10%] h-[420px] w-[420px] rounded-full bg-electric-soft/30 blur-3xl" />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="animate-fade-up text-sm font-medium text-accent">Our work</p>
          <h1 className="animate-fade-up delay-100 mt-3 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            Real Businesses. <span className="text-accent">Real Transformations.</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every project begins with understanding the business. We help organizations
            modernize through thoughtful design, practical AI, automation, and digital
            experiences that create measurable value.
          </p>
        </div>
      </section>

      {/* Featured case studies */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Featured success stories</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Helping Businesses Become <span className="text-accent">Enabled.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Every project is a story of a business embracing modern technology, practical
              AI, and thoughtful automation to compete at a higher level.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
      </section>

      {/* Process in action */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our process in action</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">A proven framework, every engagement.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Every engagement follows this proven framework, ensuring every project is
              strategic, measurable, and aligned with the client's goals.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {steps.map((label, i) => (
              <div key={label} className="relative">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-elegant">
                  <p className="font-mono text-xs text-accent">0{i + 1}</p>
                  <p className="mt-2 text-xl font-semibold tracking-tight">{label}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-accent md:block">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client results */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Client results</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">The outcomes clients feel.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {results.map((r) => (
            <div key={r.title} className="rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-electric-soft text-white shadow-glow">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future success stories CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="surface-navy shadow-elegant relative overflow-hidden rounded-3xl p-12 md:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Get started</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Every successful transformation begins with a conversation. Whether you're
            launching a new business or modernizing an existing one, EnAibleWorks helps
            organizations compete with much larger companies through modern websites,
            practical AI, and thoughtful automation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:shadow-glow">
              Schedule a Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
