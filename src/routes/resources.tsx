import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, BookOpen, FileText, Download, Zap, ClipboardList, TrendingUp, Wrench, Mail } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Guides, Blog & Downloads | EnAibleWorks" },
      { name: "description", content: "Practical AI and automation resources for small businesses: blog posts, in-depth guides, and downloadable checklists to help you save time and win more work." },
      { property: "og:title", content: "Resources — Guides, Blog & Downloads | EnAibleWorks" },
      { property: "og:description", content: "Blog posts, guides, and downloadable assets on AI, automation, and small-business growth." },
      { property: "og:url", content: "/resources" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const blogPosts = [
  {
    to: "/blog/ai-for-contractors" as const,
    tag: "AI for Small Business",
    title: "10 Practical AI Automations for Contractors and HVAC Businesses",
    desc: "Automated lead follow-up and scheduling that saves hours every week — and helps you win more jobs before your competitors even call back.",
    read: "8 min read",
    icon: Zap,
  },
];

const guides = [
  {
    icon: ClipboardList,
    title: "The Small Business Automation Playbook",
    desc: "A step-by-step framework for identifying the highest-ROI automations in your business — from lead capture to invoicing — without ripping out the tools you already use.",
    length: "12-chapter guide",
  },
  {
    icon: TrendingUp,
    title: "Choosing the Right AI Tools (Without the Hype)",
    desc: "A plain-English buyer's guide that cuts through the noise. What actually matters, what to ignore, and the questions to ask any vendor before you sign anything.",
    length: "Long-form guide",
  },
  {
    icon: Wrench,
    title: "From Spreadsheets to Systems",
    desc: "How to migrate the messy spreadsheets running your operations into simple, reliable workflows your team will actually use.",
    length: "Practical guide",
  },
];

const downloads = [
  {
    icon: FileText,
    title: "AI Readiness Checklist",
    desc: "A one-page checklist to assess whether your business is ready to adopt AI — and where to start if it isn't.",
    format: "PDF · 1 page",
  },
  {
    icon: FileText,
    title: "Lead Follow-Up Template Pack",
    desc: "Copy-and-paste email and SMS templates for instant lead response, quote follow-ups, and review requests.",
    format: "PDF + DOCX",
  },
  {
    icon: FileText,
    title: "Workflow Audit Worksheet",
    desc: "Map your current process, spot bottlenecks, and prioritize what to automate first. Perfect prep for a discovery call.",
    format: "PDF · 4 pages",
  },
];

function ResourcesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <header className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <BookOpen className="h-3.5 w-3.5 text-accent" />
            Resources
          </div>
          <h1 className="animate-fade-up delay-100 mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Practical guides for putting AI to <span className="text-accent">work for you</span>.
          </h1>
          <p className="animate-fade-up delay-200 mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Blog posts, in-depth guides, and downloadable tools to help you automate the busywork,
            respond faster to leads, and grow without burning out your team.
          </p>
        </div>
      </header>

      {/* Blog */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Blog</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Latest posts</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/40 hover:shadow-elegant"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <p.icon className="h-3.5 w-3.5 text-accent" />
                {p.tag}
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                {p.read}
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight group-hover:text-accent">
                {p.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                Read post <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
          <div className="flex flex-col items-start justify-center rounded-2xl border border-dashed border-border bg-secondary/30 p-8">
            <p className="text-sm font-medium text-muted-foreground">More posts coming soon</p>
            <p className="mt-2 text-base text-muted-foreground/80">
              We publish new pieces on AI, automation, and small-business operations regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Guides</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">In-depth guides</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Longer reads that go beyond the blog — frameworks, playbooks, and how-tos you can
              apply directly to your business.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {guides.map((g) => (
              <div key={g.title} className="flex flex-col rounded-2xl border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{g.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{g.desc}</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground/80">{g.length}</span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-muted-foreground">
                    Coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Downloads</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Free downloadable assets</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Templates, checklists, and worksheets you can use today. No fluff — just tools that
            help you move faster.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {downloads.map((d) => (
            <div key={d.title} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{d.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{d.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-muted-foreground/80">{d.format}</span>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                >
                  <Download className="h-4 w-4" /> Request
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="shadow-elegant surface-navy relative overflow-hidden rounded-3xl p-12 md:p-16">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Want a resource we haven't published yet?
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            Tell us what you're working on and we'll point you to the right guide, template, or
            walkthrough — or build one for you.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-navy-deep transition-all hover:shadow-glow"
          >
            <Mail className="h-4 w-4" />
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
