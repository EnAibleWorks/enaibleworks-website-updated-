import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { getCaseStudy, caseStudies, type CaseStudy } from "@/data/case-studies";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  ExternalLink,
  Globe,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/our-work/$slug")({
  head: ({ params }) => {
    const study = params?.slug ? getCaseStudy(params.slug) : undefined;
    const title = study
      ? `How We Helped ${study.name} — EnAibleWorks`
      : "Success Story — EnAibleWorks";
    const desc = study?.story?.subtitle ?? study?.outcome ?? "An EnAibleWorks success story.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/our-work/${params?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/our-work/${params?.slug ?? ""}` }],
    };
  },
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Success story not found</h1>
        <Link to="/our-work" className="mt-8 inline-flex items-center gap-2 text-accent">
          <ArrowLeft className="h-4 w-4" /> Back to Our Work
        </Link>
      </div>
    </PageShell>
  ),
  errorComponent: ({ reset }) => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-3xl font-semibold">Something went wrong.</h1>
        <button
          onClick={reset}
          className="mt-6 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
        >
          Try again
        </button>
      </div>
    </PageShell>
  ),
  component: SuccessStoryPage,
});

function SuccessStoryPage() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const story = study.story;
  const showLive = Boolean(study.website) && !story?.hideLiveButton;

  return (
    <PageShell>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-[-10%] h-[420px] w-[420px] rounded-full bg-electric-soft/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Our Work
          </Link>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {study.industry} · Success Story
          </p>
          <h1 className="animate-fade-up mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            How We Helped <span className="text-accent">{study.name}</span>
          </h1>
          {story?.subtitle && (
            <p className="animate-fade-up delay-100 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {story.subtitle}
            </p>
          )}

          {story?.inDevelopment && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Project Currently In Development
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-3">
            {showLive && (
              <a
                href={study.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:shadow-glow"
              >
                View Live Website
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            )}
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Our Work
            </Link>
          </div>

          {/* Screenshot */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-white shadow-elegant">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <div className="mx-auto flex max-w-[70%] items-center gap-1.5 truncate rounded-md bg-white px-3 py-1 text-[11px] font-medium text-muted-foreground">
                {study.website ? new URL(study.website).host : `${study.slug}.example.com`}
              </div>
            </div>
            <div
              className="relative aspect-[16/10] overflow-hidden bg-white"
              style={{ background: study.screenshot ? undefined : "var(--gradient-hero)" }}
            >
              {study.screenshot ? (
                <img
                  src={study.screenshot}
                  alt={`${study.name} website preview`}
                  loading="lazy"
                  className="w-full select-none"
                  draggable={false}
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-electric-soft text-2xl font-bold text-white shadow-glow">
                      {study.heroLabel ?? study.name.slice(0, 2)}
                    </div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {story?.previewText ?? "Preview coming soon"}
                  </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Client */}
      {story?.client && (
        <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Section 01</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">The Client</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{story.client}</p>
        </section>
      )}

      {/* Section 2: The Challenge */}
      {story?.challenge && story.challenge.length > 0 && (
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Section 02</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">The Challenge</h2>
            {story.challengeIntro && (
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{story.challengeIntro}</p>
            )}
            <ul className="mt-8 space-y-3">
              {story.challenge.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-base leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Section 3: Our Solution */}
      {story?.solution && story.solution.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Section 03</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Our Solution</h2>
          {story.solutionIntro && (
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{story.solutionIntro}</p>
          )}
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {story.solution.map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-base leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Section 4: Business Outcome */}
      {story?.outcome && story.outcome.length > 0 && (
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Section 04</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Business Outcome</h2>
            <div className="mt-8 space-y-5">
              {story.outcome.map((o) => (
                <p key={o} className="text-lg leading-relaxed text-foreground/90">
                  {o}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Services Delivered */}
      {story?.servicesDelivered && story.servicesDelivered.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Section 05</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Services Delivered</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {story.servicesDelivered.map((s) => (
              <li
                key={s}
                className="rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-sm font-semibold text-accent"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Section 6: Project Highlights */}
      {story?.highlights && story.highlights.length > 0 && (
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Section 06</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Project Highlights</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              The value delivered to the client—built for growth, credibility, and everyday performance.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {story.highlights.map((h) => (
                <li
                  key={h}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-gradient-to-br from-accent/10 to-electric-soft/10 px-5 py-2 text-sm font-semibold text-foreground/90"
                >
                  <Check className="h-4 w-4 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Section 7: Visit the Website */}
      {showLive && (
        <section className="mx-auto max-w-4xl px-6 py-20 md:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Section 07</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Visit the Website</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Explore the finished project and see the transformation for yourself.
          </p>
          <a
            href={study.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-elegant transition-all hover:shadow-glow"
          >
            <Globe className="h-5 w-5" />
            View Live Website
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-28 pt-8">
        <div className="surface-navy shadow-elegant relative overflow-hidden rounded-3xl p-12 md:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Get started</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Whether you're launching a new business or modernizing an existing one,
            EnAibleWorks helps organizations compete with confidence through modern
            websites, practical AI, and thoughtful automation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:shadow-glow"
            >
              Schedule a Free Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Other success stories */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">More success stories</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {caseStudies
            .filter((c) => c.slug !== study.slug)
            .map((c) => (
              <Link
                key={c.slug}
                to="/our-work/$slug"
                params={{ slug: c.slug }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {c.industry}
                </p>
                <p className="mt-2 text-xl font-semibold tracking-tight">{c.name}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  View Success Story{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
        </div>
      </section>
    </PageShell>
  );
}
