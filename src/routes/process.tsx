import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — EnAibleWorks" },
      { name: "description", content: "Discover, Design, Enable, Grow. A calm four-step process for modernizing your business without overwhelming it." },
      { property: "og:title", content: "Our Process — EnAibleWorks" },
      { property: "og:description", content: "A four-step process: Discover, Design, Enable, Grow." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

const steps = [
  { n: "01", title: "Discover", desc: "We start by listening. We learn your business, your customers, your goals, and where the real friction lives today. No assumptions.", deliverables: ["Stakeholder interviews", "Current-state audit", "Opportunity map"] },
  { n: "02", title: "Design", desc: "We create a modern digital experience — visual identity, website, messaging — that reflects the quality of your work and earns trust quickly.", deliverables: ["Brand & visual direction", "Website design & build", "Clear, human messaging"] },
  { n: "03", title: "Enable", desc: "We implement AI and automation where it matters most: customer response, scheduling, follow-up, content, internal workflow. Practical, measurable wins.", deliverables: ["AI assistant setup", "Workflow automation", "CRM & lead routing"] },
  { n: "04", title: "Grow", desc: "We stay with you. As your business and the technology evolve, we keep refining — so you compound the advantage instead of starting over.", deliverables: ["Ongoing support", "Quarterly reviews", "Continuous improvements"] },
];

function Process() {
  return (
    <PageShell>
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <p className="animate-fade-up text-sm font-medium text-accent">Our process</p>
          <h1 className="animate-fade-up delay-100 mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
            Deliberate. Measurable. <span className="text-accent">Calm</span>.
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-lg text-muted-foreground">
            Modernization shouldn't feel like a fire drill. Four clear steps, each one
            building on the last.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <ol className="space-y-12">
          {steps.map((s) => (
            <li key={s.n} className="grid gap-8 border-t border-border pt-12 md:grid-cols-[120px_1fr]">
              <div>
                <p className="font-mono text-sm text-accent">{s.n}</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">{s.title}</h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
