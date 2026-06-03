import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useT } from "@/i18n";
import { CONTACT } from "@/data/places";

export function Footer() {
  const t = useT();
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl">Apartmani Čalenić</div>
          <p className="mt-2 text-sm text-muted-foreground">{t.heroLocation}</p>
        </div>
        <div className="space-y-2 text-sm">
          <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 hover:text-primary">
            <Phone className="h-4 w-4" /> {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-primary">
            <Mail className="h-4 w-4" /> {CONTACT.email}
          </a>
          <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary">
            <Instagram className="h-4 w-4" /> @{CONTACT.instagram}
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" /> {CONTACT.address}
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="font-medium">{t.nav.home}</div>
          <div className="grid grid-cols-2 gap-1 text-muted-foreground">
            <Link to="/info" className="hover:text-primary">{t.nav.info}</Link>
            <Link to="/wifi" className="hover:text-primary">{t.nav.wifi}</Link>
            <Link to="/beaches" className="hover:text-primary">{t.nav.beaches}</Link>
            <Link to="/restaurants" className="hover:text-primary">{t.nav.restaurants}</Link>
            <Link to="/excursions" className="hover:text-primary">{t.nav.excursions}</Link>
            <Link to="/emergency" className="hover:text-primary">{t.nav.emergency}</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Apartmani Čalenić — Petrovac na Moru, Montenegro
      </div>
    </footer>
  );
}
