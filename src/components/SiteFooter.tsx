import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-display text-sm font-semibold text-ink">
            Lokesh L<span className="text-brand">.</span>
          </p>
          <p className="mt-1 text-xs text-ink-muted">
            AI/ML Engineer · Bengaluru, India
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-muted">
          <a href="mailto:lokesh.mass@outlook.com" className="hover:text-ink">
            lokesh.mass@outlook.com
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <Link to="/contact" className="hover:text-ink">
            Get in touch
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-6 py-4 text-[11px] text-ink-muted">
          © {new Date().getFullYear()} Lokesh L. Built with React, Three.js & TanStack Start.
        </p>
      </div>
    </footer>
  );
}
