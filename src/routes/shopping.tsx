import { createFileRoute } from "@tanstack/react-router";
import { Banknote, Cross, ShoppingBag, ShoppingCart } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { useI18n, useT } from "@/i18n";
import { shopping } from "@/data/places";

export const Route = createFileRoute("/shopping")({
  head: () => ({
    meta: [
      { title: "Shopping — Apartmani Čalenić" },
      { name: "description", content: "Supermarkets, pharmacies, ATMs and the local market in Petrovac na Moru." },
    ],
  }),
  component: ShoppingPage,
});

function ShoppingPage() {
  const t = useT();
  const { locale } = useI18n();

  return (
    <PageShell>
      <PageHeader eyebrow={t.nav.shopping} title={t.shopping.title} subtitle={t.shopping.subtitle} />

      <div className="mb-8 rounded-3xl border border-destructive/25 bg-destructive/5 p-6 shadow-soft animate-fade-in sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 text-destructive font-semibold">!</span>
          <h2 className="font-serif text-2xl">{t.shopping.supermarketsNoteTitle}</h2>
        </div>
        <p className="text-[15px] text-foreground/80 whitespace-pre-line leading-6">{t.shopping.supermarketsNote}</p>
        <p className="mt-3 text-sm font-medium text-destructive">
          {t.shopping.holidayDatesLabel}: {t.shopping.holidayDates}
        </p>
      </div>

      <div className="stagger grid gap-6 md:grid-cols-2">
        <Card icon={<ShoppingCart className="h-5 w-5" />} title={t.shopping.supermarkets}>
          <ul className="space-y-2 text-[15px] text-muted-foreground">
            {shopping.supermarkets.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{s[locale]}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card icon={<ShoppingBag className="h-5 w-5" />} title={t.shopping.market}>
          <p className="text-[15px] text-muted-foreground">{shopping.market[locale]}</p>
        </Card>
        <Card icon={<Cross className="h-5 w-5" />} title={t.shopping.pharmacies}>
          <p className="text-[15px] text-muted-foreground">{shopping.pharmacies[locale]}</p>
        </Card>
        <Card icon={<Banknote className="h-5 w-5" />} title={t.shopping.atms}>
          <div className="flex flex-wrap gap-2">
            {shopping.atms.map((a) => (
              <span key={a} className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">{a}</span>
            ))}
          </div>
        </Card>
      </div>
    </PageShell>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="stagger-item hover-lift rounded-3xl border border-border bg-card/80 p-6 shadow-soft sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">{icon}</span>
        <h2 className="font-serif text-2xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}
