import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, MapPin, Compass } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { useI18n, useT } from "@/i18n";
import { excursions, getLocalizedValue } from "@/data/places";

export const Route = createFileRoute("/excursions")({
  head: () => ({
    meta: [
      { title: "Excursions — Apartmani Čalenić" },
      { name: "description", content: "Best day trips and excursions around Petrovac na Moru and Montenegro." },
    ],
  }),
  component: ExcursionsPage,
});

function ExcursionsPage() {
  const t = useT();
  const { locale } = useI18n();
  const tones = ["#5B8AA6", "#E2915A", "#D1962F"];
  return (
    <PageShell>
      <PageHeader eyebrow={t.nav.excursions} title={t.excursions.title} subtitle={t.excursions.subtitle} />
      <div className="stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {excursions.map((e, i) => {
          const color = tones[i % tones.length];
          return (
            <article key={e.id} className="stagger-item hover-lift group flex flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-soft">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: `${color}22`, color }}
              >
                <Compass className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-serif text-xl">{getLocalizedValue(e.name, locale)}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{e.desc[locale]}</p>
              {e.mapsQuery && (
                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(e.mapsQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline"
                >
                  <MapPin className="h-4 w-4" /> Google Maps <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </article>
          );
        })}
      </div>
    </PageShell>
  );
}
