import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: ReactNode }) {
  const showEyebrow =
    !!eyebrow &&
    eyebrow.trim() !== "" &&
    !title.toLowerCase().includes(eyebrow.toLowerCase());
  return (
    <header className="mb-10 animate-fade-in sm:mb-14">
      {showEyebrow && (
        <div className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</div>
      )}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl">{title}</h1>
      {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
    </header>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">{children}</div>;
}
