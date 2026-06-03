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

      <div className="grid gap-4 sm:grid-cols-2">
        {emergencyContacts.map((c) => {
          const Icon = ICONS[c.icon];
          const tel = c.number.replace(/\s/g, "");
          return (
            <a
              key={c.key}
              href={`tel:${tel}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <Icon className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{labels[c.key]}</div>
                <div className="font-serif text-2xl">{c.number}</div>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:scale-110">
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
        <div className="mt-1 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
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
