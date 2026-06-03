import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/data/places";

export function FloatingButtons() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-end px-4 sm:px-6">
      <div className="pointer-events-auto flex flex-col gap-3">
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated transition hover:scale-105 sm:hidden"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-elevated transition hover:scale-105"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
