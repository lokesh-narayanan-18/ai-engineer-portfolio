import { Link } from "@tanstack/react-router";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-display text-base font-bold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Lokesh L<span className="text-brand">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-ink font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/Lokesh_L_Resume.pdf"
            download
            className="hidden items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            Résumé
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-ink-muted hover:bg-surface hover:text-ink"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-ink font-medium bg-surface" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/Lokesh_L_Resume.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground"
            >
              <Download className="h-3.5 w-3.5" />
              Download Résumé
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
