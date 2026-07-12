import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useT } from "@/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/info", label: t.nav.info },
    { to: "/wifi", label: t.nav.wifi },
    { to: "/beaches", label: t.nav.beaches },
    { to: "/restaurants", label: t.nav.restaurants },
    { to: "/excursions", label: t.nav.excursions },
    { to: "/shopping", label: t.nav.shopping },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="site-header sticky top-0 z-50 w-full border-b border-border/60 font-sans">
      <div className="flex w-full flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <Link to="/" className="flex items-center gap-2 font-serif text-lg tracking-tight sm:text-xl">
            <span>Apartmani Čalenić</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
                activeProps={{ className: "bg-accent text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-sm lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="site-header w-full border-t border-border/60 lg:hidden">
          <nav className="grid w-full grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-2 sm:px-6 lg:px-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
                activeProps={{ className: "bg-accent text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/emergency"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-destructive transition hover:bg-destructive/10"
            >
              {t.nav.emergency}
            </Link>
            <Link
              to="/qr"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              {t.nav.qr}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
