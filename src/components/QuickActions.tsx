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
    { to: "/wifi", icon: Wifi, label: t.quickActions.wifi, color: "#E2915A" },
    { to: "/contact", icon: Phone, label: t.quickActions.contact, color: "#D1962F" },
    { to: "/contact", icon: MapPin, label: t.quickActions.navigation, hash: "map", color: "#5B8AA6" },
    { to: "/beaches", icon: Waves, label: t.quickActions.beaches, color: "#5B8AA6" },
    { to: "/restaurants", icon: UtensilsCrossed, label: t.quickActions.restaurants, color: "#E2915A" },
    { to: "/excursions", icon: Compass, label: t.quickActions.excursions, color: "#D1962F" },
    { to: "/", icon: CloudSun, label: t.quickActions.weather, hash: "weather", color: "#5B8AA6" },
    { to: "/emergency", icon: AlertTriangle, label: t.quickActions.emergency, danger: true },
  ] as const;

  return (
    <div>
      <h2 className="mb-6 font-serif text-3xl sm:text-4xl">{t.quickActions.title}</h2>
      <div className="stagger grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((it, i) => {
          const isDanger = "danger" in it && it.danger;
          return (
            <Link
              key={`${it.to}-${it.label}-${i}`}
              to={it.to}
              hash={"hash" in it ? it.hash : undefined}
              className={`stagger-item hover-lift group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/80 px-3 py-6 text-center shadow-soft backdrop-blur transition-colors duration-200 hover:bg-accent ${
                isDanger ? "hover:border-destructive/40" : ""
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                  isDanger ? "bg-destructive/10 text-destructive" : ""
                }`}
                style={!isDanger ? { backgroundColor: `${it.color}22`, color: it.color } : undefined}
              >
                <it.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">{it.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
