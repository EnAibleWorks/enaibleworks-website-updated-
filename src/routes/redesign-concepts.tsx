import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import conceptGroundEffex from "@/assets/concept-ground-effex.jpg";
import conceptMorrisSussex from "@/assets/concept-morris-sussex.jpg";
import conceptJerseyMetal from "@/assets/concept-jersey-metal.jpg";

export const Route = createFileRoute("/redesign-concepts")({
  head: () => ({
    meta: [
      { title: "Website Redesign Concepts — EnAibleWorks" },
      {
        name: "description",
        content:
          "Independent website redesign concepts created by EnAibleWorks to showcase modern design, improved user experience, and stronger lead generation for local businesses.",
      },
      { property: "og:title", content: "Website Redesign Concepts — EnAibleWorks" },
      {
        property: "og:description",
        content:
          "Concept redesigns demonstrating how EnAibleWorks helps local businesses modernize their online presence.",
      },
      { property: "og:url", content: "/redesign-concepts" },
    ],
    links: [{ rel: "canonical", href: "/redesign-concepts" }],
  }),
  component: RedesignConcepts,
});

type Concept = {
  name: string;
  industry: string;
  description: string;
  image: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
};

const concepts: Concept[] = [
  {
    name: "Ground Effex Landscaping",
    industry: "Landscaping & Hardscaping",
    description:
      "A complete 2026 website redesign concept focused on modern outdoor living, improved lead generation, premium project photography, and a luxury customer experience.",
    image: conceptGroundEffex,
    imageAlt: "Ground Effex Landscaping website redesign concept preview",
    liveUrl: "https://groundfx.enaibleworks.com/",
  },
  {
    name: "Morris Sussex Heating & Air Conditioning",
    industry: "HVAC",
    description:
      "A modern redesign concept featuring improved branding, stronger calls-to-action, better mobile usability, enhanced trust signals, and a streamlined customer experience.",
    image: conceptMorrisSussex,
    imageAlt: "Morris Sussex Heating & Air Conditioning website redesign concept preview",
    liveUrl: "https://heating-elevated.emergent.host/",
  },
  {
    name: "Jersey Metal Reimagined",
    industry: "Publishing & Music History",
    description:
      "A redesign concept for the Jersey Metal book brand, chronicling New Jersey's heavy metal scene — built around bold editorial typography, an integrated merch shop, band photo galleries, and press coverage in a clean, immersive dark layout.",
    image: conceptJerseyMetal,
    imageAlt: "Jersey Metal Reimagined website redesign concept preview",
    liveUrl: "https://jerseymetal.enaibleworks.com/",
    githubUrl: "https://github.com/EnAibleWorks/jersey-metal-reimaged-.git",
  },
];

function RedesignConcepts() {
  return (
    <PageShell>
      {/* Intro / hero */}
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="animate-fade-up text-sm font-medium text-accent">Portfolio</p>
          <h1 className="animate-fade-up delay-100 mt-3 max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl">
            Website Redesign <span className="text-accent">Concepts</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            These independent redesign concepts demonstrate how EnAibleWorks helps businesses
            modernize their online presence. Each concept is created to showcase ideas for
            improving user experience, visual appeal, lead generation, and overall
            professionalism.
          </p>
          <p className="animate-fade-up delay-300 mt-4 max-w-2xl text-sm italic leading-relaxed text-muted-foreground">
            These concepts are not affiliated with or endorsed by the businesses shown and are
            presented solely as examples of our design capabilities.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:gap-14">
          {concepts.map((c, i) => (
            <article
              key={c.name}
              className="group animate-fade-up overflow-hidden rounded-3xl border border-border bg-card shadow-elegant transition-all hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col gap-6 p-8 md:flex-row md:items-end md:justify-between md:p-10">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {c.industry}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    {c.name}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>
                <div className="flex flex-shrink-0 flex-wrap gap-3 self-start md:self-end">
                  {c.liveUrl && (
                    <a
                      href={c.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:shadow-glow"
                    >
                      View Live Concept
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  )}
                  {c.githubUrl && (
                    <a
                      href={c.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-foreground"
                    >
                      GitHub Repo
                      <Github className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="surface-navy shadow-elegant relative overflow-hidden rounded-3xl p-12 md:p-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Like what you see?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              I'd be happy to create a complimentary concept showing what your business could
              look like with a modern website.
            </p>
            <Link
              to="/free-review"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-glow"
            >
              Request Your Complimentary Website Review
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
