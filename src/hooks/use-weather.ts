import { useQuery } from "@tanstack/react-query";

const LAT = 42.205;
const LON = 18.945;

const URL =
  `https://api.open-meteo.com/v1/forecast` +
  `?latitude=${LAT}&longitude=${LON}` +
  `&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,uv_index` +
  `&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset` +
  `&timezone=auto&forecast_days=5&wind_speed_unit=kmh`;

export type WeatherData = {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    uv_index: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
  };
};

export function useWeather() {
  return useQuery<WeatherData>({
    queryKey: ["weather", "petrovac"],
    queryFn: async () => {
      const res = await fetch(URL);
      if (!res.ok) throw new Error("Weather fetch failed");
      return res.json();
    },
    staleTime: 30 * 60 * 1000,
    refetchInterval: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}

// Open-Meteo WMO weather codes → grouping
export function weatherCodeToKind(code: number): "sun" | "partly" | "cloud" | "fog" | "rain" | "snow" | "storm" {
  if (code === 0) return "sun";
  if (code === 1 || code === 2) return "partly";
  if (code === 3) return "cloud";
  if (code === 45 || code === 48) return "fog";
  if (code >= 51 && code <= 67) return "rain";
  if (code >= 71 && code <= 77) return "snow";
  if (code >= 80 && code <= 82) return "rain";
  if (code >= 95) return "storm";
  return "cloud";
}
