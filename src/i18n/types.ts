export type Locale = "sr" | "en" | "de" | "ru" | "fr";

export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "sr", label: "Srpski", flag: "🇷🇸" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

export type Dict = {
  brand: string;
  heroSubtitle: string;
  heroLocation: string;
  nav: {
    home: string;
    wifi: string;
    contact: string;
    emergency: string;
    info: string;
    beaches: string;
    restaurants: string;
    shopping: string;
    excursions: string;
    qr: string;
  };
  quickActions: {
    title: string;
    wifi: string;
    contact: string;
    navigation: string;
    beaches: string;
    restaurants: string;
    excursions: string;
    weather: string;
    emergency: string;
  };
  weather: {
    title: string;
    feelsLike: string;
    humidity: string;
    wind: string;
    uv: string;
    sunrise: string;
    sunset: string;
    forecast: string;
    loading: string;
    error: string;
    updated: string;
  };
  wifi: {
    title: string;
    subtitle: string;
    floor12: string;
    floor3: string;
    network: string;
    password: string;
    copy: string;
    copied: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    instagram: string;
    address: string;
    airbnb: string;
    openMaps: string;
    call: string;
    write: string;
  };
  emergency: {
    title: string;
    subtitle: string;
    note: string;
    medical: string;
    police: string;
    fire: string;
    healthCenter: string;
    general: string;
    addressLabel: string;
  };
  info: {
    title: string;
    checkIn: string;
    checkOut: string;
    rules: string;
    rulesIntro?: string;
    rulesList: string[];
    parking: string;
    parkingText: string;
  };
  beaches: { title: string; subtitle: string };
  restaurants: { title: string; subtitle: string };
  shopping: {
    title: string;
    subtitle: string;
    supermarkets: string;
    pharmacies: string;
    atms: string;
    market: string;
    supermarketsNoteTitle: string;
    supermarketsNote: string;
    holidayDatesLabel: string;
    holidayDates: string;
  };
  excursions: { title: string; subtitle: string };
  qr: {
    title: string;
    subtitle: string;
    download: string;
    customLabel: string;
    custom: string;
    siteUrl: string;
    wifiCode: string;
  };
  common: {
    distance: string;
    learnMore: string;
    backHome: string;
    notFound: string;
    notFoundText: string;
    goHome: string;
    darkMode: string;
    lightMode: string;
  };
};
