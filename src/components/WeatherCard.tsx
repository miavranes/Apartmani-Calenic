import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Droplets,
  Sun,
  Sunrise,
  Sunset,
  Thermometer,
  Wind,
} from "lucide-react";
import { useT } from "@/i18n";
import { useWeather, weatherCodeToKind } from "@/hooks/use-weather";

function Icon({ code, className = "h-8 w-8" }: { code: number; className?: string }) {
  const k = weatherCodeToKind(code);
  const cls = `${className} text-primary`;
  switch (k) {
    case "sun": return <Sun className={cls} />;
    case "partly": return <CloudSun className={cls} />;
    case "cloud": return <Cloud className={cls} />;
    case "fog": return <CloudFog className={cls} />;
    case "rain": return <CloudRain className={cls} />;
    case "snow": return <CloudSnow className={cls} />;
    case "storm": return <CloudLightning className={cls} />;
  }
}

function timeFmt(iso: string) {
  return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function dayFmt(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(locale, { weekday: "short" });
}

export function WeatherCard() {
  const t = useT();
  const { data, isLoading, isError } = useWeather();

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card/80 p-6 shadow-soft backdrop-blur sm:p-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-serif text-2xl">{t.weather.title}</div>
          <div className="text-xs text-muted-foreground">{t.weather.updated}</div>
        </div>
        {data && <Icon code={data.current.weather_code} className="h-12 w-12" />}
      </div>

      {isLoading && (
        <div className="mt-6 animate-pulse text-sm text-muted-foreground">{t.weather.loading}</div>
      )}
      {isError && (
        <div className="mt-6 text-sm text-destructive">{t.weather.error}</div>
      )}

      {data && (
        <>
          <div className="mt-6 flex items-end gap-3">
            <div className="font-serif text-5xl leading-none sm:text-6xl">
              {Math.round(data.current.temperature_2m)}°
            </div>
            <div className="mb-2 text-sm text-muted-foreground">
              {t.weather.feelsLike} {Math.round(data.current.apparent_temperature)}°C
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <Stat icon={<Thermometer className="h-4 w-4" />} label={t.weather.feelsLike} value={`${Math.round(data.current.apparent_temperature)}°`} />
            <Stat icon={<Droplets className="h-4 w-4" />} label={t.weather.humidity} value={`${data.current.relative_humidity_2m}%`} />
            <Stat icon={<Wind className="h-4 w-4" />} label={t.weather.wind} value={`${Math.round(data.current.wind_speed_10m)} km/h`} />
            <Stat icon={<Sun className="h-4 w-4" />} label={t.weather.uv} value={`${Math.round(data.current.uv_index ?? 0)}`} />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <Stat icon={<Sunrise className="h-4 w-4" />} label={t.weather.sunrise} value={timeFmt(data.daily.sunrise[0])} />
            <Stat icon={<Sunset className="h-4 w-4" />} label={t.weather.sunset} value={timeFmt(data.daily.sunset[0])} />
          </div>

          <div className="mt-6">
            <div className="mb-3 text-sm font-medium">{t.weather.forecast}</div>
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {data.daily.time.map((d, i) => (
                <div key={d} className="flex flex-col items-center gap-1 rounded-xl border border-border/60 bg-background/40 px-1 py-2 sm:px-2 sm:py-3">
                  <div className="text-[10px] uppercase tracking-wide text-muted-foreground sm:text-xs">
                    {i === 0 ? "·" : dayFmt(d, navigator.language)}
                  </div>
                  <Icon code={data.daily.weather_code[i]} className="h-5 w-5 sm:h-6 sm:w-6" />
                  <div className="text-[11px] sm:text-xs">
                    <span className="font-medium">{Math.round(data.daily.temperature_2m_max[i])}°</span>
                    <span className="ml-1 text-muted-foreground">{Math.round(data.daily.temperature_2m_min[i])}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/40 px-3 py-2">
      <span className="text-muted-foreground">{icon}</span>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
    </div>
  );
}
