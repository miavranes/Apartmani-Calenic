import { createFileRoute } from "@tanstack/react-router";
import { Car, Clock, ScrollText } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { useT } from "@/i18n";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "Stay info — Apartmani Čalenić" },
      { name: "description", content: "Check-in, check-out, house rules and parking for Apartmani Čalenić." },
    ],
  }),
  component: InfoPage,
});

function InfoPage() {
  const t = useT();
  return (
    <PageShell>
      <PageHeader eyebrow={t.nav.info} title={t.info.title} />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-6 shadow-soft">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Clock className="h-5 w-5" /></span>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{t.info.checkIn}</div>
            <div className="font-serif text-3xl">12:00</div>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-6 shadow-soft">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Clock className="h-5 w-5" /></span>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{t.info.checkOut}</div>
            <div className="font-serif text-3xl">09:00</div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-card/80 p-6 shadow-soft sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><ScrollText className="h-5 w-5" /></span>
          <h2 className="font-serif text-2xl">{t.info.rules}</h2>
        </div>
        {t.info.rulesIntro && (
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{t.info.rulesIntro}</p>
        )}
        <ul className="mt-5 space-y-5 text-[15px] text-muted-foreground">
          {t.info.rulesList.map((r, i) => (
            <li key={i} className="flex gap-4 rounded-2xl border border-border/70 bg-background/70 p-4">
              <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="leading-7">{r}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-card/80 p-6 shadow-soft sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Car className="h-5 w-5" /></span>
          <h2 className="font-serif text-2xl">{t.info.parking}</h2>
        </div>
        <p className="mt-3 text-[15px] text-muted-foreground">{t.info.parkingText}</p>
      </div>
    </PageShell>
  );
}
