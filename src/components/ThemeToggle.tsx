import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useT } from "@/i18n";

const KEY = "calenic.theme";

export function ThemeToggle() {
  const t = useT();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Default to light when there's no saved preference
    const initial = saved ? saved === "dark" : false;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(KEY, next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? t.common.lightMode : t.common.darkMode}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur transition hover:bg-accent"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
