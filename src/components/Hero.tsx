import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n";
import { MapPin } from "lucide-react";
import houseImg from "@/assets/kuca.png";

export function Hero() {
  const t = useT();

  return (
    <section className="relative overflow-hidden text-foreground h-screen w-screen">
      <div className="relative h-screen w-screen">
        {/* Background image (absolute) */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={houseImg}
            alt="Apartmani Čalenić"
            className="h-screen w-screen object-cover opacity-90"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/45" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Overlay content positioned left */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-8 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <MapPin className="h-3.5 w-3.5" />
              <span className="uppercase tracking-wide">{t.heroLocation}</span>
            </div>

            <h1 className="font-serif text-white text-6xl leading-tight tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl">
              Apartmani Čalenić
            </h1>

            <div className="mt-8 flex gap-3">
              <Link
                to="/info"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                {t.nav.info}
              </Link>
              <a
                href="#weather"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white transition hover:opacity-90"
              >
                {t.weather.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
