import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Mail, Phone, Globe } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Let's Talk About Your Business — EnAibleWorks" },
      { name: "description", content: "A friendly, no-pressure conversation about your business. We'll listen first, then share honest, practical ideas — no jargon, no sales pitch." },
      { property: "og:title", content: "Let's Talk About Your Business — EnAibleWorks" },
      { property: "og:description", content: "Tell us a little about your business. We'll respond within one business day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      company: String(data.get('company') || ''),
      phone: String(data.get('phone') || ''),
      message: String(data.get('message') || ''),
      website: String(data.get('website') || ''), // honeypot
    };
    try {
      const res = await fetch('/api/public/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Could not send your message. Please try again or email info@enaibleworks.com.');
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageShell>
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-28">
          <p className="animate-fade-up text-sm font-medium text-accent">Get In Touch</p>
          <h1 className="animate-fade-up delay-100 mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
            Let's talk about <span className="text-accent">your</span> <span className="text-accent">business</span>.
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg text-muted-foreground">
            A friendly, no-pressure conversation. We'll listen first, then share honest ideas —
            in plain English, with no jargon and no sales pitch.
          </p>
          <p className="animate-fade-up delay-300 mt-4 max-w-xl text-sm text-muted-foreground">
            Prefer phone, email, or meeting in person? Whatever works best for you — just let us know.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_320px]">
          <form
            onSubmit={handleSubmit}
            className="shadow-elegant rounded-2xl border border-border bg-card p-8 md:p-10"
          >
            {sent ? (
              <div className="py-12 text-center">
                <h2 className="text-2xl font-semibold">Thanks — we'll be in touch soon.</h2>
                <p className="mt-3 text-muted-foreground">You'll hear from us within one business day, usually much sooner.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your Name" name="name" required />
                  <Field label="Business Name" name="company" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">Tell us a little about your business</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="What do you do, and what would make your day a little easier? Don't worry about the technical side — that's our job."
                  />
                </div>
                {/* Honeypot: hidden from users, bots fill it */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:shadow-glow disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </div>
            )}
          </form>

          <aside className="space-y-6">
            <InfoRow icon={Phone} label="Call or text" value="732-778-8816" />
            <InfoRow icon={Mail} label="Email" value="info@enaibleworks.com" />
            <InfoRow icon={Globe} label="Hours" value="Mon–Fri, 9–6 ET" />
            <div className="rounded-2xl border border-border bg-secondary/50 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Our Promise</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A real person will respond within one business day — usually much sooner. No
                automated replies, no pressure, and no jargon. Just a friendly conversation
                about your business.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
