import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { useT } from "@/i18n";
import { CONTACT } from "@/data/places";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Apartmani Čalenić" },
      { name: "description", content: "Reach Apartmani Čalenić by phone, email, Instagram or visit on the map." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}`;
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&z=16&output=embed`;

  return (
    <PageShell>
      <PageHeader eyebrow={t.nav.contact} title={t.contact.title} subtitle={t.contact.subtitle} />

      <div className="grid gap-6 md:grid-cols-2">
        <a href={`tel:${CONTACT.phoneRaw}`} className="group flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-accent">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{t.contact.phone}</div>
            <div className="text-lg font-medium">{CONTACT.phone}</div>
          </div>
        </a>
        <a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-accent">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span>
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{t.contact.email}</div>
            <div className="truncate text-lg font-medium">{CONTACT.email}</div>
          </div>
        </a>
        <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-accent">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Instagram className="h-5 w-5" /></span>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{t.contact.instagram}</div>
            <div className="text-lg font-medium">@{CONTACT.instagram}</div>
          </div>
        </a>
        <a href={CONTACT.airbnb} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-accent">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><ExternalLink className="h-5 w-5" /></span>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{t.contact.airbnb}</div>
            <div className="text-lg font-medium">airbnb.rs/rooms/42249739</div>
          </div>
        </a>
      </div>

      <div id="map" className="mt-10 scroll-mt-24">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{t.contact.address}</span>
            </div>
            <div className="mt-1 font-serif text-2xl">{CONTACT.address}</div>
          </div>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90">
            <MapPin className="h-4 w-4" /> {t.contact.openMaps}
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Map"
            src={mapsEmbed}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </PageShell>
  );
}
