import { Link } from "@tanstack/react-router";
import { ExternalLink, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useT } from "@/i18n";
import { CONTACT } from "@/data/places";

export function Footer() {
  const t = useT();

  const contactLinks = [
    { href: `tel:${CONTACT.phoneRaw}`, icon: Phone, label: CONTACT.phone, color: "#E2915A" },
    { href: `mailto:${CONTACT.email}`, icon: Mail, label: CONTACT.email, color: "#D1962F" },
    { href: CONTACT.instagramUrl, icon: Instagram, label: `@${CONTACT.instagram}`, color: "#C9678F", external: true },
  ];

  const quickLinks = [
    { to: "/info", label: t.nav.info },
    { to: "/wifi", label: t.nav.wifi },
    { to: "/beaches", label: t.nav.beaches },
    { to: "/restaurants", label: t.nav.restaurants },
    { to: "/excursions", label: t.nav.excursions },
    { to: "/emergency", label: t.nav.emergency },
  ] as const;

  return (
    <footer className="footer-band relative mt-24 overflow-hidden text-white">
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[#D1962F]/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#E2915A]/15 blur-3xl animate-float"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <div className="font-serif text-3xl">Apartmani Čalenić</div>
            <p className="mt-2 max-w-xs text-sm text-white/65">{t.heroLocation}</p>
            <div className="mt-5 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#D1962F] to-[#E2915A]" />
            <div className="mt-5 flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D1962F]" />
              <span>{CONTACT.address}</span>
            </div>
          </div>

          <div className="space-y-3">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="group flex items-center gap-3 text-sm"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${c.color}26`, color: c.color }}
                >
                  <c.icon className="h-4 w-4" />
                </span>
                <span className="text-white/80 transition group-hover:text-white">{c.label}</span>
              </a>
            ))}
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
              {t.nav.home}
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {quickLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-white/70 transition hover:translate-x-0.5 hover:text-[#D1962F]"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <a
              href={CONTACT.airbnb}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              Airbnb <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-4 py-5 text-center text-xs text-white/45 sm:px-6">
        © {new Date().getFullYear()} Apartmani Čalenić — Petrovac na Moru, Montenegro
      </div>
    </footer>
  );
}
