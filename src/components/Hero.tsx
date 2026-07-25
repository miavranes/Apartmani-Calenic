import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n";
import { ChevronDown, MapPin } from "lucide-react";
import houseImg from "@/assets/kuca1.png";

export function Hero() {
  const t = useT();

  return (
    <section className="relative overflow-hidden text-foreground h-screen w-full -mt-20 sm:-mt-24">
      <div className="relative h-screen w-full">
        {/* Background image (absolute) */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={houseImg}
            alt="Apartmani Čalenić"
            className="absolute inset-0 h-full w-full object-cover hero-image opacity-100"
            style={{ minHeight: 'calc(100vh + 5rem)' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/35" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Overlay content positioned left */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-8 max-w-3xl">
            <div className="animate-fade-in-left mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-[#C9A96A]" />
              <span>{t.heroLocation}</span>
            </div>

            <h1
              className="font-serif text-white text-6xl leading-tight tracking-tight drop-shadow-[0_10px_32px_rgba(0,0,0,0.65)] sm:text-7xl lg:text-8xl"
              style={{ animation: "slide-up 0.8s cubic-bezier(.22,1,.36,1) 0.1s both" }}
            >
              Apartmani Čalenić
            </h1>

            <p
              className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)] sm:text-xl"
              style={{ animation: "slide-up 0.8s cubic-bezier(.22,1,.36,1) 0.25s both" }}
            >
              {t.heroSubtitle}
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4"
              style={{ animation: "slide-up 0.8s cubic-bezier(.22,1,.36,1) 0.4s both" }}
            >
              <Link
                to="/info"
                className="hero-cta inline-flex items-center justify-center rounded-full border border-white/20 bg-white/95 px-7 py-3 text-sm font-semibold text-[#2F5D50] transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
              >
                {t.nav.info}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="scroll-cue pointer-events-none absolute inset-x-0 bottom-8 flex justify-center text-white/80">
          <ChevronDown className="h-7 w-7" />
        </div>
      </div>
    </section>
  );
}
