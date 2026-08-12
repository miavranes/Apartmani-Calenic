import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Hero } from "@/components/Hero";
import { QuickActions } from "@/components/QuickActions";
import { WeatherCard } from "@/components/WeatherCard";
import { useT } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apartmani Čalenić — Petrovac na Moru, Crna Gora" },
      {
        name: "description",
        content:
          "Boutique vodič za goste apartmana Čalenić u Petrovcu na Moru — Wi-Fi, plaže, restorani, izleti, hitni kontakti i živa prognoza vremena.",
      },
      { property: "og:title", content: "Apartmani Čalenić — Petrovac na Moru" },
      { property: "og:description", content: "Vaš dom u srcu Petrovca." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Apartmani Čalenić",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ulica IX br. 5",
            addressLocality: "Petrovac na Moru",
            addressCountry: "ME",
          },
          telephone: "+382 69 232 367",
          email: "aleksandracalenic74@gmail.com",
          geo: { "@type": "GeoCoordinates", latitude: 42.205, longitude: 18.945 },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const t = useT();

  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        {/* Welcome section */}
        <div
          className="mx-auto mb-12 overflow-hidden rounded-3xl p-8 text-center sm:p-12 border-0"
          style={{
            maxWidth: "42rem",
            background: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 14%, var(--background)), color-mix(in oklab, var(--accent) 10%, var(--background)))",
            boxShadow: "0 20px 60px -16px color-mix(in oklab, var(--primary) 22%, transparent), 0 4px 16px -4px color-mix(in oklab, var(--primary) 10%, transparent)",
            animation: "slide-up 0.8s cubic-bezier(.22,1,.36,1) 0.15s both",
          }}
        >
          
          <h2
            className="font-serif text-2xl font-bold sm:text-3xl"
            style={{ color: "var(--primary)" }}
          >
            {t.welcome.greeting}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
            {t.welcome.message}
          </p>
        </div>
        <QuickActions />
        <div id="weather" className="mt-16 scroll-mt-24">
          <WeatherCard />
        </div>
        <div className="animate-fade-in mt-16 overflow-hidden rounded-3xl border border-border bg-card/80 p-8 text-center shadow-soft backdrop-blur sm:p-12">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Star className="h-6 w-6 fill-current" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl">{t.review.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-muted-foreground">
            {t.review.description}
          </p>
          <a
            href="https://www.google.com/travel/search?q=apartmani%20calenic&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C73249150%2C121529350%2C121738283%2C121762713&hl=en-ME&gl=me&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTM0ZGQ3NzRlM2VlZDJkNzoweDFiY2RiZDdlMzc0Y2Y5ZjISGhIUCgcI6g8QCBgCEgcI6g8QCBgDGAEyAhAA&qs=CAEyE0Nnb0k4dk96dXVPdjctWWJFQUU4AkIJCfL5TDd-vc0bQgkJ8vlMN369zRs&ap=KigKEgm1HqTV9hlFQBBH6X-EPkvEyQBISCZ7BXiibGkVAEfpf4YOV8jJAugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiw8dqnyd6VAxUAAAAAHQAAAAAQAw"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta mt-7 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            {t.review.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
