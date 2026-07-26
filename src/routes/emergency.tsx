import { createFileRoute } from "@tanstack/react-router";
import { Ambulance, AlertTriangle, Flame, Hospital, MapPin, Phone, Shield } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { useT } from "@/i18n";
import { emergencyContacts } from "@/data/places";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency — Apartmani Čalenić" },
      { name: "description", content: "Emergency contacts and click-to-call numbers for guests in Petrovac na Moru." },
    ],
  }),
  component: EmergencyPage,
});

const ICONS = {
  ambulance: Ambulance,
  shield: Shield,
  flame: Flame,
  hospital: Hospital,
  alert: AlertTriangle,
} as const;

function EmergencyPage() {
  const t = useT();
  const labels: Record<string, string> = {
    medical: t.emergency.medical,
    police: t.emergency.police,
    fire: t.emergency.fire,
    healthCenter: t.emergency.healthCenter,
    general: t.emergency.general,
  };

  return (
    <PageShell>
      <PageHeader eyebrow={t.nav.emergency} title={t.emergency.title} subtitle={t.emergency.subtitle} />

      <div className="mb-6 rounded-2xl border border-destructive/30 bg-destructive/5 px-5 py-4 text-sm text-destructive">
        <AlertTriangle className="mr-2 inline h-4 w-4" />
        {t.emergency.note}
      </div>

      <div className="stagger grid gap-4 sm:grid-cols-2">
        {emergencyContacts.map((c) => {
          const Icon = ICONS[c.icon];
          const tel = c.number.replace(/\s/g, "");
          return (
            <a
              key={c.key}
              href={`tel:${tel}`}
              className="stagger-item hover-lift group flex items-center gap-3 rounded-2xl border border-border bg-card/80 p-4 shadow-soft transition-colors hover:border-primary/40 hover:bg-accent sm:gap-4 sm:p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{labels[c.key]}</div>
                <div className="truncate font-serif text-lg sm:text-2xl">{c.number}</div>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:scale-110 sm:h-10 sm:w-10">
                <Phone className="h-4 w-4" />
              </span>
            </a>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card/80 p-5 shadow-soft">
        <div className="text-xs uppercase tracking-wide text-muted-foreground">
          {t.emergency.healthCenter}
        </div>
        <div className="mt-1 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <span>{t.emergency.addressLabel}</span>
          </div>
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent("Dom zdravlja Petrovac, Stupovi bb, Petrovac na Moru")}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            Google Maps
          </a>
        </div>
      </div>
    </PageShell>
  );
}
