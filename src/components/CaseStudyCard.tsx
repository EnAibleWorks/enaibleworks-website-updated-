import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ExternalLink, Globe } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";

const BADGES = ["Responsive", "SEO Ready", "AI Ready", "Fast Performance"];

/**
 * Premium browser mockup with hover-driven slow scroll of the site screenshot.
 * Click anywhere on the preview -> opens the live website in a new tab.
 */
function BrowserPreview({ study }: { study: CaseStudy }) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [translate, setTranslate] = useState(0);
  const [hovering, setHovering] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const startScroll = () => {
    setHovering(true);
    if (!imgRef.current || !frameRef.current) return;
    const overflow = Math.max(
      0,
      imgRef.current.offsetHeight - frameRef.current.offsetHeight,
    );
    if (overflow <= 0) return;
    const duration = 9000; // slow, elegant
    startRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const t = Math.min(1, elapsed / duration);
      // ease-in-out
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setTranslate(-overflow * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const stopScroll = () => {
    setHovering(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTranslate(0);
  };

  const openLive = () => {
    if (study.website) window.open(study.website, "_blank", "noopener,noreferrer");
  };

  const hasScreenshot = Boolean(study.screenshot);

  return (
    <div
      onMouseEnter={startScroll}
      onMouseLeave={stopScroll}
      onClick={openLive}
      role={study.website ? "link" : undefined}
      tabIndex={study.website ? 0 : -1}
      aria-label={study.website ? `Open ${study.name} live website` : study.name}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-white shadow-elegant transition-all duration-500 ${
        study.website ? "cursor-pointer" : ""
      } ${hovering ? "-translate-y-1 scale-[1.02]" : ""}`}
      style={{
        boxShadow: hovering
          ? "0 30px 80px -30px oklch(0.62 0.22 255 / 0.45), 0 0 0 1px oklch(0.62 0.22 255 / 0.25)"
          : undefined,
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <div className="mx-auto flex max-w-[70%] items-center gap-1.5 truncate rounded-md bg-white px-3 py-1 text-[11px] font-medium text-muted-foreground">
          {study.website ? new URL(study.website).host : `${study.slug}.example.com`}
        </div>
      </div>

      {/* Scrollable screenshot */}
      <div
        ref={frameRef}
        className="relative aspect-[16/10] overflow-hidden bg-white"
        style={{ background: hasScreenshot ? undefined : "var(--gradient-hero)" }}
      >
        {hasScreenshot ? (
          <img
            ref={imgRef}
            src={study.screenshot}
            alt={`${study.name} website homepage`}
            loading="lazy"
            className="w-full select-none will-change-transform"
            style={{
              transform: `translateY(${translate}px)`,
              transition: hovering
                ? "none"
                : "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            draggable={false}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-electric-soft text-2xl font-bold text-white shadow-glow">
                {study.heroLabel ?? study.name.slice(0, 2)}
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {study.story?.previewText ?? "Preview coming soon"}
              </p>
            </div>
          </div>
        )}

        {/* Soft glow overlay on hover */}
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
            hovering ? "opacity-100" : "opacity-0"
          }`}
          style={{
            boxShadow: "inset 0 0 60px oklch(0.62 0.22 255 / 0.15)",
          }}
        />
      </div>
    </div>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const host = study.website ? new URL(study.website).host : null;
  return (
    <article className="animate-fade-up overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-elegant md:p-8">
      <BrowserPreview study={study} />

      {/* Live website URL row */}
      {study.website ? (
        <a
          href={study.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          <span className="text-muted-foreground">Live Website:</span>
          <span>{host}</span>
        </a>
      ) : (
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Globe className="h-4 w-4" aria-hidden="true" />
          Live preview coming soon
        </p>
      )}

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {study.industry}
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight">{study.name}</h3>

        {/* Badges beneath title */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {study.status === "completed" && (
            <li className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
              <Check className="h-3 w-3" /> Completed
            </li>
          )}
          {BADGES.map((b) => (
            <li
              key={b}
              className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[11px] font-semibold text-accent"
            >
              {b}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {study.challenge}
        </p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
            Services delivered
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {study.services.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
            Business outcome
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/90">
            {study.outcome}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {study.website ? (
            <a
              href={study.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-glow"
            >
              View Live Website
              <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-muted px-5 py-2.5 text-sm font-semibold text-muted-foreground"
            >
              Live Website Coming Soon
            </span>
          )}
          <Link
            to="/our-work/$slug"
            params={{ slug: study.slug }}
            className="group/btn inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View Success Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
