import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Globe, Palette, BrainCircuit, Workflow, Search, Network, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Business Solutions — EnAibleWorks" },
      { name: "description", content: "Practical business solutions for busy business owners — websites that bring in customers, simpler day-to-day operations, and technology that finally works for you." },
      { property: "og:title", content: "Business Solutions — EnAibleWorks" },
      { property: "og:description", content: "We combine technology, AI, automation, and practical business expertise to create solutions that simplify operations and help your business grow." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Globe,
    title: "Bring In More Customers",
    outcome: "Your website should work as hard as you do.",
    problem: "New customers can't find you, or your site doesn't inspire confidence when they do.",
    desc: "We build clean, modern websites that make a strong first impression and make it easy for customers to reach out — from phone, tablet, or desktop.",
    items: ["Modern, mobile-friendly design", "Easy for customers to contact you", "Fast, professional, and secure", "Shows up well when people search"],
  },
  {
    icon: Palette,
    title: "Look Like The Business You Are",
    outcome: "Be remembered. Build trust.",
    problem: "Your brand doesn't yet reflect the quality of your work.",
    desc: "A polished logo, consistent look, and clear messaging so customers instantly trust what they see — online, on your truck, on a business card, or on a proposal.",
    items: ["Logo and visual identity", "Simple brand guidelines", "Clear, honest messaging", "A consistent professional look"],
  },
  {
    icon: BrainCircuit,
    title: "Save Time With Practical AI",
    outcome: "Less busywork. More time for customers.",
    problem: "You're spending too much time on repetitive tasks — answering the same questions, writing the same emails, chasing the same follow-ups.",
    desc: "We introduce small, useful AI tools that quietly handle the repetitive parts of your day — explained in plain English, no jargon required.",
    items: ["Answering common customer questions", "Faster follow-up and replies", "Writing help for emails and posts", "Small automations that save real hours"],
  },
  {
    icon: Workflow,
    title: "Simplify Your Day",
    outcome: "Your business, running smoother in the background.",
    problem: "Too many things live in your head, on sticky notes, or slip through the cracks when you're busy.",
    desc: "We set up simple scheduling, contact forms, reminders, and follow-up so leads don't get missed and customers feel taken care of — automatically.",
    items: ["Online scheduling and forms", "Reminders and follow-up", "A simple place to track customers", "Fewer things slipping through the cracks"],
  },
  {
    icon: Search,
    title: "Be Found. Be Chosen.",
    outcome: "Show up when customers are looking.",
    problem: "People in your area are searching for what you do — but they're finding someone else.",
    desc: "We help your business show up online where local customers are looking, and look professional when they get there.",
    items: ["Google Business Profile setup", "Local search visibility", "Consistent info across the web", "Simple reputation guidance"],
  },
  {
    icon: Network,
    title: "Business Technology Consulting",
    outcome: "Your Trusted Partner for Smarter Business Operations",
    problem: "Technology should make your business easier — not more complicated.",
    desc: "We help businesses identify inefficient workflows, confusing POS systems, disconnected software, and operational bottlenecks. By understanding how your business works first, we recommend practical technology solutions that simplify operations, improve efficiency, and support long-term growth.",
    items: ["Business Technology Reviews", "Workflow Optimization", "POS System Consulting", "Practical AI Integration", "Technology Planning", "Operational Efficiency Improvements"],
  },
];

function Services() {
  return (
    <PageShell>
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="animate-fade-up text-sm font-medium text-accent">Business Solutions</p>
          <h1 className="animate-fade-up delay-100 mt-3 max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl">
            Real solutions for real businesses — starting with what's getting <span className="text-accent">in your way</span>.
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-lg text-muted-foreground">
            Every business has unique challenges. We combine technology, AI, automation, and practical business
            expertise to create solutions that simplify operations, improve efficiency, and help your business grow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Business Solutions</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Every business has unique challenges. We combine technology, AI, automation, and practical business
            expertise to create solutions that simplify operations, improve efficiency, and help your business grow.
            We focus on solving problems — not selling products.
          </p>
        </div>
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-0.5 hover:shadow-elegant md:p-10">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>
                  <p className="mt-1 text-sm font-medium text-accent">{s.outcome}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                  <span className="font-semibold not-italic text-foreground/80">The problem: </span>
                  {s.problem}
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-auto grid gap-2 pt-6 text-sm text-muted-foreground sm:grid-cols-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="surface-navy shadow-elegant relative overflow-hidden rounded-3xl p-12 md:p-16">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Not sure where to start?
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            That's completely normal. We'll listen first, then suggest the smallest set of
            changes that will make the biggest difference for your business.
          </p>
          <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-navy-deep transition-all hover:shadow-glow">
            Let's Talk About Your Business
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
