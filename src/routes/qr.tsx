import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Download, Wifi, Link as LinkIcon, Pencil } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { useT } from "@/i18n";
import { WIFI } from "@/data/places";

export const Route = createFileRoute("/qr")({
  head: () => ({
    meta: [
      { title: "QR Code — Apartmani Čalenić" },
      { name: "description", content: "Generate a QR code for the guest guide or the apartment's Wi-Fi." },
    ],
  }),
  component: QrPage,
});

type Mode = "site" | "wifi" | "custom";

function QrPage() {
  const t = useT();
  const [mode, setMode] = useState<Mode>("site");
  const [custom, setCustom] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSiteUrl(window.location.origin);
  }, []);

  const wifiPayload = `WIFI:T:WPA;S:${WIFI.floor3.network};P:${WIFI.floor3.password};;`;
  const value = mode === "site" ? siteUrl || "https://" : mode === "wifi" ? wifiPayload : custom || " ";

  const download = () => {
    const canvas = containerRef.current?.querySelector("canvas");
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = `apartmani-calenic-${mode}.png`;
    a.click();
  };

  const tabs: { key: Mode; label: string; icon: React.ReactNode }[] = [
    { key: "site", label: t.qr.siteUrl, icon: <LinkIcon className="h-4 w-4" /> },
    { key: "wifi", label: t.qr.wifiCode, icon: <Wifi className="h-4 w-4" /> },
    { key: "custom", label: t.qr.custom, icon: <Pencil className="h-4 w-4" /> },
  ];

  return (
    <PageShell>
      <PageHeader eyebrow={t.nav.qr} title={t.qr.title} subtitle={t.qr.subtitle} />

      <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-soft sm:p-8 animate-fade-in">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tb) => (
            <button
              key={tb.key}
              onClick={() => setMode(tb.key)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition ${
                mode === tb.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:bg-accent"
              }`}
            >
              {tb.icon}
              {tb.label}
            </button>
          ))}
        </div>

        {mode === "custom" && (
          <div className="mt-5">
            <label className="text-xs uppercase tracking-wide text-muted-foreground">{t.qr.customLabel}</label>
            <input
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              maxLength={500}
              placeholder="https://…"
              className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none transition focus:border-primary"
            />
          </div>
        )}

        <div className="mt-8 flex flex-col items-center gap-6">
          <div ref={containerRef} className="rounded-2xl bg-white p-5 shadow-soft">
            <QRCodeCanvas value={value} size={240} level="M" includeMargin={false} />
          </div>
          <button
            onClick={download}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Download className="h-4 w-4" /> {t.qr.download}
          </button>
        </div>
      </div>
    </PageShell>
  );
}
