import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  CloudSun,
  Compass,
  MapPin,
  Phone,
  UtensilsCrossed,
  Waves,
  Wifi,
} from "lucide-react";
import { useT } from "@/i18n";

export function QuickActions() {
  const t = useT();
  const items = [
    { to: "/wifi", icon: Wifi, label: t.quickActions.wifi },
    { to: "/contact", icon: Phone, label: t.quickActions.contact },
    { to: "/contact", icon: MapPin, label: t.quickActions.navigation, hash: "map" },
    { to: "/beaches", icon: Waves, label: t.quickActions.beaches },
    { to: "/restaurants", icon: UtensilsCrossed, label: t.quickActions.restaurants },
    { to: "/excursions", icon: Compass, label: t.quickActions.excursions },
    { to: "/", icon: CloudSun, label: t.quickActions.weather, hash: "weather" },
    { to: "/emergency", icon: AlertTriangle, label: t.quickActions.emergency, danger: true },
  ] as const;

  return (
    <div>
      <h2 className="mb-6 font-serif text-3xl sm:text-4xl">{t.quickActions.title}</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((it, i) => (
          <Link
            key={`${it.to}-${it.label}-${i}`}
            to={it.to}
            hash={"hash" in it ? it.hash : undefined}
            className={`group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/80 px-3 py-6 text-center shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-accent ${
              "danger" in it && it.danger ? "hover:border-destructive/40" : ""
            }`}
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-full ${
                "danger" in it && it.danger
                  ? "bg-destructive/10 text-destructive"
                  : "bg-primary/10 text-primary"
              } transition group-hover:scale-110`}
            >
              <it.icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium">{it.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
