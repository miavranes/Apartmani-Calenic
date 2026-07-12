import { Globe } from "lucide-react";
import { LOCALES, useI18n } from "@/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const current = LOCALES.find((l) => l.code === locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Select language"
        className="lang-trigger inline-flex h-10 items-center gap-2 rounded-full border border-border px-3 text-sm shadow-sm transition hover:bg-accent"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{current?.code.toUpperCase()}</span>
        <span className="sm:hidden">{current?.flag}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="lang-menu min-w-[180px] rounded-2xl border border-border p-1 text-foreground shadow-xl">
        {LOCALES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLocale(l.code)}
            className={locale === l.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{l.flag}</span>
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
