import { NavLink, Link } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import Resume from "@/Assets/Lokesh L - Resume.pdf";
const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

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
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-ink ${
                  isActive ? "text-ink font-medium" : "text-ink-muted"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={Resume}
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
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-2 py-2 text-sm hover:bg-surface hover:text-ink ${
                    isActive ? "text-ink font-medium bg-surface" : "text-ink-muted"
                  }`
                }
              >
                {l.label}
              </NavLink>
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
