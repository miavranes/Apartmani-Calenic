import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  const [openBeach, setOpenBeach] = useState<string | null>(null);
  const visibleBeachIds = ["petrovac", "lucice", "buljarica"];
  const visibleBeaches = beaches.filter((b) => visibleBeachIds.includes(b.id));
  const selectedBeach = visibleBeaches.find((b) => b.id === openBeach);
  const otherBeaches = visibleBeaches.filter((b) => b.id !== openBeach);
  const orderedBeaches = openBeach && selectedBeach ? [otherBeaches[0], selectedBeach, otherBeaches[1]] : visibleBeaches;

  return (
    <PageShell>
      <PageHeader eyebrow={t.nav.beaches} title={t.beaches.title} subtitle={t.beaches.subtitle} />
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start">
        {orderedBeaches.map((b) => {
          const isOpen = openBeach === b.id;
          const cardClasses = isOpen
            ? "w-full max-w-4xl flex-1 rounded-[2rem] border border-border bg-card/95 p-6 shadow-[0_40px_110px_-30px_rgba(0,0,0,0.45)] transition-all duration-500 ease-out sm:p-8 lg:scale-[1.04]"
            : "w-full max-w-sm rounded-3xl border border-border bg-card/80 p-4 shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-elevated lg:basis-[22%]";

          return (
            <article key={b.id} className={`group ${cardClasses}`}>
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Waves className="h-5 w-5" /></span>
                {b.distance && (
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] uppercase tracking-wide text-secondary-foreground">
                    {b.distance[locale]}
                  </span>
                )}
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setOpenBeach(isOpen ? null : b.id)}
                  className="w-full text-left font-serif text-2xl text-foreground transition hover:text-primary"
                >
                  {getLocalizedValue(b.name, locale)}
                </button>
              </div>

              {isOpen ? (
                <div className="mt-6 space-y-4 text-sm text-muted-foreground transition-all duration-300 ease-out">
                  <p>{b.desc[locale]}</p>
                  {(b.mapsUrl || b.mapsQuery) && (
                    <a
                      href={b.mapsUrl ? b.mapsUrl : `https://www.google.com/maps?q=${encodeURIComponent(b.mapsQuery ?? "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline"
                    >
                      <MapPin className="h-4 w-4" /> Google Maps <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ) : (
                <p className="mt-5 text-sm text-muted-foreground underline-offset-4 group-hover:underline">
                  {t.beaches.clickToExpand}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </PageShell>
  );
}
