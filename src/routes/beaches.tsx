import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, MapPin, Waves } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { useI18n, useT } from "@/i18n";
import { beaches, getLocalizedValue } from "@/data/places";

export const Route = createFileRoute("/beaches")({
  head: () => ({
    meta: [
      { title: "Beaches — Apartmani Čalenić" },
      { name: "description", content: "The most beautiful beaches around Petrovac na Moru." },
    ],
  }),
  component: BeachesPage,
});

function BeachesPage() {
  const t = useT();
  const { locale } = useI18n();
  return (
    <PageShell>
      <PageHeader eyebrow={t.nav.beaches} title={t.beaches.title} subtitle={t.beaches.subtitle} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {beaches.map((b) => (
          <article key={b.id} className="group flex flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-soft transition hover:-translate-y-0.5 animate-fade-in">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Waves className="h-5 w-5" /></span>
              {b.distance && (
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] uppercase tracking-wide text-secondary-foreground">
                  {b.distance[locale]}
                </span>
              )}
            </div>
            <h2 className="mt-4 font-serif text-2xl">{getLocalizedValue(b.name, locale)}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{b.desc[locale]}</p>
            {b.mapsQuery && (
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(b.mapsQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline"
              >
                <MapPin className="h-4 w-4" /> Google Maps <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
