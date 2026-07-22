import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy, Wifi } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { useT } from "@/i18n";
import { WIFI } from "@/data/places";

export const Route = createFileRoute("/wifi")({
  head: () => ({
    meta: [
      { title: "Wi-Fi — Apartmani Čalenić" },
      { name: "description", content: "Wi-Fi networks and passwords for guests of Apartmani Čalenić." },
    ],
  }),
  component: WifiPage,
});

function WifiCard({ floor, network, password }: { floor: string; network: string; password: string }) {
  const t = useT();
  const [copied, setCopied] = useState<"net" | "pwd" | null>(null);

  const copy = (val: string, which: "net" | "pwd") => {
    navigator.clipboard.writeText(val).then(() => {
      setCopied(which);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  const wifiQrValue = `WIFI:T:WPA;S:${network};P:${password};;`;

  return (
    <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-soft backdrop-blur sm:p-8 animate-scale-in">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Wifi className="h-5 w-5" />
        </span>
        <div className="font-serif text-xl">{floor}</div>
      </div>
      <dl className="mt-6 space-y-4">
        <Row label={t.wifi.network} value={network} copied={copied === "net"} onCopy={() => copy(network, "net")} copyLabel={t.wifi.copy} copiedLabel={t.wifi.copied} />
        <Row label={t.wifi.password} value={password} copied={copied === "pwd"} onCopy={() => copy(password, "pwd")} copyLabel={t.wifi.copy} copiedLabel={t.wifi.copied} mono />
      </dl>
      <div className="mt-8 rounded-3xl bg-background/70 p-4 text-center shadow-sm">
        <div className="mb-4 font-serif text-2xl text-foreground">QR kod</div>
        <div className="mx-auto inline-flex rounded-3xl bg-white p-3 shadow-soft">
          <QRCodeCanvas value={wifiQrValue} size={156} level="M" includeMargin={false} />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, copied, onCopy, copyLabel, copiedLabel, mono }: { label: string; value: string; copied: boolean; onCopy: () => void; copyLabel: string; copiedLabel: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-background/40 px-4 py-3">
      <div>
        <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
        <div className={`text-lg ${mono ? "font-mono" : "font-medium"}`}>{value}</div>
      </div>
      <button
        onClick={onCopy}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs transition hover:bg-accent"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}

function WifiPage() {
  const t = useT();
  return (
    <PageShell>
      <PageHeader eyebrow={t.nav.wifi} title={t.wifi.title} subtitle={t.wifi.subtitle} />
      <div className="grid gap-6 md:grid-cols-2">
        <WifiCard floor={t.wifi.floor12} network={WIFI.floor12.network} password={WIFI.floor12.password} />
        <WifiCard floor={t.wifi.floor3} network={WIFI.floor3.network} password={WIFI.floor3.password} />
      </div>
    </PageShell>
  );
}
