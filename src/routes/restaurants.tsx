import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, MapPin, UtensilsCrossed } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { useI18n, useT } from "@/i18n";
import { restaurants } from "@/data/places";

export const Route = createFileRoute("/restaurants")({
  head: () => ({
    meta: [
      { title: "Restaurants — Apartmani Čalenić" },
      { name: "description", content: "Recommended restaurants in Petrovac na Moru." },
    ],
  }),
  component: RestaurantsPage,
});

function RestaurantsPage() {
  const t = useT();
  const { locale } = useI18n();
  return (
    <PageShell>
      <PageHeader eyebrow={t.nav.restaurants} title={t.restaurants.title} subtitle={t.restaurants.subtitle} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((r) => (
          <article key={r.id} className="group flex flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-soft transition hover:-translate-y-0.5 animate-fade-in">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><UtensilsCrossed className="h-5 w-5" /></span>
            <h2 className="mt-4 font-serif text-2xl">{r.name}</h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{r.desc[locale]}</p>
            {r.mapsQuery && (
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(r.mapsQuery)}`}
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
