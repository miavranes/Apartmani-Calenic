import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, Menu, X } from "lucide-react";
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
    <header className="site-header fixed top-0 left-0 right-0 z-50 w-full border-b border-border/50 font-sans backdrop-blur-lg h-20 sm:h-18 overflow-hidden">
      <div className="flex h-full w-full items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <Link to="/" className="flex items-center gap-2 font-serif text-base tracking-tight text-white sm:text-xl">
            <span className="truncate font-semibold">Apartmani Čalenić</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-3 py-1.5 text-sm text-white/70 transition duration-200 hover:bg-white/10 hover:text-white"
                activeProps={{ className: "bg-white/15 text-white" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/emergency"
              className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-[#E2685A]/40 bg-[#E2685A]/15 px-3 py-1.5 text-sm font-medium text-[#ff9c8d] transition duration-200 hover:bg-[#E2685A]/25"
            >
              <AlertTriangle className="h-3.5 w-3.5" />
              {t.nav.emergency}
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm transition hover:border-white/30 hover:bg-white/20 sm:h-10 sm:w-10 lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="site-header w-full border-t border-white/10 lg:hidden">
          <nav className="grid w-full grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-2 sm:px-6 lg:px-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                activeProps={{ className: "bg-white/15 text-white" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/emergency"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-[#ff9c8d] transition hover:bg-[#E2685A]/15"
            >
              {t.nav.emergency}
            </Link>
            <Link
              to="/qr"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {t.nav.qr}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
