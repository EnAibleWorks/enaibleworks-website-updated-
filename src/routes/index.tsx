import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Search, Pencil, Settings2, TrendingUp, ArrowRight, Check, Users, ShieldCheck, Target, LineChart, Monitor, BrainCircuit, Settings, Rocket } from "lucide-react";
import heroLaptop from "@/assets/hero-ai-laptop.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EnAibleWorks — A Trusted Local Partner Helping Businesses Work Better" },
      { name: "description", content: "We help local business owners save time, attract more customers, and take the stress out of technology. Focus on your business — we'll make technology work for it." },
      { property: "og:title", content: "EnAibleWorks — A Trusted Local Partner Helping Businesses Work Better" },
      { property: "og:description", content: "Focus on your business. We'll help make technology work for it — websites, AI, and automation, explained in plain English." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const pillars = [
  { icon: Monitor, title: "A Website That Brings In Customers", desc: "So new customers can find you, trust you, and reach out — without you thinking about it." },
  { icon: BrainCircuit, title: "Practical AI That Solves Real Problems", desc: "Small, useful AI tools that quietly save you time and handle repetitive tasks. No jargon. No pressure to become a tech expert." },
  { icon: Settings, title: "Workflows That Free Up Your Day", desc: "Scheduling, follow-up, and everyday tasks handled behind the scenes so you can focus on customers and growth." },
  { icon: Rocket, title: "A Partner For The Long Run", desc: "We stay by your side as your business grows — a trusted technology partner you can call when you have a question." },
];

const industries = [
  "HVAC", "Plumbers", "Electricians", "Roofing", "Landscapers", "Contractors",
  "Auto Repair", "Restaurants", "Retail", "Medical", "Professional Services", "Family-Owned",
];

const process = [
  { n: "01", title: "Listen", desc: "We start with a friendly conversation about your business — no jargon, no pressure." },
  { n: "02", title: "Suggest", desc: "We recommend a small, practical set of changes that will make the biggest difference." },
  { n: "03", title: "Set Up", desc: "We handle the technical side and explain everything in plain English along the way." },
  { n: "04", title: "Stay Close", desc: "We're here as your business grows — a phone call away whenever you need us." },
];

function Index() {
  return (
    <PageShell>
      {/* Hero: split layout */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:gap-8">
          <div className="animate-fade-up">
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Focus on your business. We'll help make technology
              <span className="text-accent"> work for it</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A trusted business technology partner for hardworking business owners. We simplify technology so you can save time, attract more customers, and get back to what you do best.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-glow">
                Let's Talk About Your Business
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/services" className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent">
                See Our Solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="animate-fade-up delay-200 relative">
            <div className="shadow-elegant relative overflow-hidden rounded-2xl">
              <img
                src={heroLaptop}
                alt="Laptop showing a glowing AI network connecting automation, insights, efficiency, growth, and innovation"
                width={1536}
                height={1024}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -inset-x-10 -bottom-10 -z-10 h-40 rounded-full bg-accent/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(90deg, oklch(0.42 0.18 258) 0%, oklch(0.52 0.20 255) 50%, oklch(0.42 0.18 258) 100%)" }}>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {[
            { icon: Users, title: "Built For Local Business", desc: "Solutions for the businesses in your neighborhood" },
            { icon: ShieldCheck, stat: "25+", title: "Years Of Experience", desc: "Real operations experience — not just technology" },
            { icon: Target, title: "Plain-English Guidance", desc: "We explain everything so nothing feels overwhelming" },
            { icon: LineChart, title: "Focused On Results", desc: "More time. More customers. Less stress." },
          ].map((s) => (
            <div key={s.title} className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/40 text-white">
                <s.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div className="text-white">
                {s.stat && <p className="text-3xl font-bold leading-none">{s.stat}</p>}
                <p className={`${s.stat ? "mt-1" : ""} text-sm font-bold uppercase tracking-wide`}>{s.title}</p>
                <p className="mt-1 text-xs leading-snug text-white/85">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">How We Help</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              A friendly, four-step way to make your business easier to run.
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-accent/60" />
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Search, title: "Listen", desc: "We start with a real conversation about how your business runs today." },
              { icon: Pencil, title: "Suggest", desc: "We share honest, practical ideas — only what actually makes sense for you." },
              { icon: Settings2, title: "Set Up", desc: "We handle the technical side and explain everything in plain English." },
              { icon: TrendingUp, title: "Stay Close", desc: "We're a phone call away as your business grows and questions come up." },
            ].map((s) => (
              <div key={s.title} className="text-center md:text-left">
                <div className="mx-auto md:mx-0 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/70 text-accent">
                  <s.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Proud to work with the hardworking businesses in our community
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
            {industries.map((i) => (
              <span key={i} className="transition-colors hover:text-foreground">{i}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Business Solutions</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            One trusted partner. Everything technology-related, handled.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            You don't need a web person, a marketing person, and an "AI person." You need a trusted business
            technology partner who understands your business and can quietly take these things off your plate.
          </p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="group bg-card p-8 transition-colors hover:bg-background md:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background transition-transform group-hover:-translate-y-0.5">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="shadow-elegant relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              We Don't Just Build Websites.
            </h2>
            <p className="mt-4 text-2xl font-semibold text-accent md:text-3xl">
              We Help Businesses Work Smarter.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Technology should support your business — not slow it down.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Whether you're looking to attract more customers with a professional website, streamline daily operations
              with AI, simplify a POS system, improve business workflows, or modernize the technology your business
              relies on, EnAibleWorks provides practical solutions tailored to your unique needs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We believe every recommendation should have one goal: save time, reduce frustration, and improve results.
              We don't begin with technology. We begin by understanding your business. That's why our clients trust us as
              a long-term technology partner — not simply another vendor.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:shadow-glow"
            >
              Let's Talk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="surface-navy relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-electric-soft">How we work</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              A calm, four-step way of working.
            </h2>
            <p className="mt-5 text-lg text-white/70">
              No overwhelm. No pressure. Just a simple, steady process built around your business
              and what matters most to you.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {process.map((s) => (
              <div key={s.n} className="border-t border-white/15 pt-6">
                <p className="font-mono text-sm text-electric-soft">{s.n}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-accent">Why it matters</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              You're already great at what you do.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              You shouldn't have to become a technology expert on top of running your business.
              Our job is to handle the technology side — so you can focus on your customers,
              your team, and the work you love.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Spend less time worrying about websites and tools.",
              "Make it easier for customers to find you and reach out.",
              "Get more calls, more inquiries, and more repeat business.",
              "Cut down on repetitive tasks that eat up your day.",
              "Feel confident that technology is working for you — not against you.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-base">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-36 px-6 pb-28 pt-16">
        <div className="shadow-elegant relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Let's make your business <span className="gradient-text">easier to run</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              A friendly 30-minute conversation. No jargon, no pressure — just an honest chat
              about your business and where a little help would go a long way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:shadow-glow">
                Let's Talk About Your Business
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary">
                See Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
