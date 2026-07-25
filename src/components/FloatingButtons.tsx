import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/data/places";

export function FloatingButtons() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-end px-4 sm:px-6">
      <div className="pointer-events-auto flex flex-col gap-3">
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated transition hover:scale-105"
        >
          <Phone className="h-5 w-5" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-soft transition group-hover:opacity-100">
            {CONTACT.phone}
          </span>
        </a>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="animate-soft-pulse group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-elevated transition hover:scale-105"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-soft transition group-hover:opacity-100">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
