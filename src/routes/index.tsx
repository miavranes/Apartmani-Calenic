import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { QuickActions } from "@/components/QuickActions";
import { WeatherCard } from "@/components/WeatherCard";

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
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <QuickActions />
        <div id="weather" className="mt-16 scroll-mt-24">
          <WeatherCard />
        </div>
      </div>
    </>
  );
}
