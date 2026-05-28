import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lokesh L" },
      {
        name: "description",
        content:
          "Get in touch with Lokesh L for AI/ML roles, contracts and collaborations.",
      },
      { property: "og:title", content: "Contact — Lokesh L" },
      {
        property: "og:description",
        content: "Open to AI/ML roles, contracts and collaborations.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  { Icon: Mail, label: "lokesh.mass@outlook.com", href: "mailto:lokesh.mass@outlook.com" },
  { Icon: Phone, label: "+91 80725 67729", href: "tel:+918072567729" },
  { Icon: MapPin, label: "Bengaluru, India", href: null },
  { Icon: Github, label: "GitHub", href: "https://github.com/" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry — ${form.name || "Hello"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:lokesh.mass@outlook.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
        Contact
      </p>
      <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
        Let's build something<span className="text-brand">.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Open to AI/ML engineering roles, contract work and interesting research
        collaborations. The fastest way to reach me is email.
      </p>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <ul className="space-y-3">
          {channels.map(({ Icon, label, href }) => {
            const inner = (
              <span className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-ink/30">
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-brand" />
                  <span className="text-sm text-ink">{label}</span>
                </span>
                {href && <ArrowUpRight className="h-4 w-4 text-ink-muted" />}
              </span>
            );
            return (
              <li key={label}>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>

        <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-background p-6">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
                Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-ink outline-none focus:border-brand"
              />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-ink outline-none focus:border-brand"
              />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-ink outline-none focus:border-brand"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send message
            </button>
            <p className="text-[11px] text-ink-muted">
              Opens your email client — no data is stored.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
