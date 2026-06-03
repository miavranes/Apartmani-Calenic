import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { sr } from "./sr";
import { en } from "./en";
import { de } from "./de";
import { ru } from "./ru";
import { fr } from "./fr";
import type { Dict, Locale } from "./types";

export { LOCALES } from "./types";
export type { Locale, Dict } from "./types";

const DICTS: Record<Locale, Dict> = { sr, en, de, ru, fr };
const STORAGE_KEY = "calenic.locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const I18nContext = createContext<Ctx | null>(null);

function readInitial(): Locale {
  if (typeof window === "undefined") return "sr";
  const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (saved && saved in DICTS) return saved;
  const nav = window.navigator.language.slice(0, 2).toLowerCase();
  if (nav in DICTS) return nav as Locale;
  return "sr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("sr");

  useEffect(() => {
    setLocaleState(readInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: DICTS[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}
