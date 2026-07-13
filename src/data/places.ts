import type { Locale } from "@/i18n/types";

export type LocalizedText = {
  sr: string;
  en: string;
  de: string;
  ru: string;
  fr: string;
};

export type LocalizedValue = string | LocalizedText;

export function getLocalizedValue(value: LocalizedValue | undefined, locale: Locale) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[locale] ?? value.sr;
}

export type Place = {
  id: string;
  name: LocalizedValue;
  desc: LocalizedText;
  distance?: LocalizedText;
  mapsQuery?: string;
};

export const beaches: Place[] = [
  {
    id: "petrovac",
    name: "Petrovac Beach",
    desc: {
      sr: "Šljunkovita gradska plaža sa slobodnim dijelom i ležaljkama.",
      en: "Pebble city beach with free area and sunbeds available.",
      de: "Kiesiger Stadtstrand mit freiem Bereich und Sonnenliegen.",
      ru: "Галечный городской пляж с бесплатной зоной и шезлонгами.",
      fr: "Plage de galets en ville avec zone gratuite et transats.",
    },
    distance: { sr: "5 min hoda", en: "5 min walk", de: "5 Min Fußweg", ru: "5 мин пешком", fr: "5 min à pied" },
    mapsQuery: "Petrovac Beach, Montenegro",
  },
  {
    id: "perazica",
    name: "Perazića Do",
    desc: {
      sr: "Mirna uvala sa besplatnim parkingom.",
      en: "Quiet cove with free parking.",
      de: "Ruhige Bucht mit kostenlosem Parkplatz.",
      ru: "Тихая бухта с бесплатной парковкой.",
      fr: "Crique tranquille avec parking gratuit.",
    },
    distance: { sr: "30 min hoda", en: "30 min walk", de: "30 Min Fußweg", ru: "30 мин пешком", fr: "30 min à pied" },
    mapsQuery: "Perazića Do beach, Montenegro",
  },
  {
    id: "lucice",
    name: "Lučice Beach",
    desc: {
      sr: "Kristalno čista voda i mirna atmosfera.",
      en: "Crystal clear water and a peaceful atmosphere.",
      de: "Kristallklares Wasser und entspannte Atmosphäre.",
      ru: "Кристально чистая вода и спокойная атмосфера.",
      fr: "Eau cristalline et atmosphère paisible.",
    },
    distance: { sr: "10 min hoda", en: "10 min walk", de: "10 Min Fußweg", ru: "10 мин пешком", fr: "10 min à pied" },
    mapsQuery: "Lučice Beach, Petrovac",
  },
  {
    id: "buljarica",
    name: "Buljarica Beach",
    desc: {
      sr: "Duga prirodna plaža, manje turista, dostupan parking.",
      en: "Long natural beach, less crowded, parking available.",
      de: "Langer Naturstrand, weniger besucht, mit Parkplatz.",
      ru: "Длинный природный пляж, менее людный, есть парковка.",
      fr: "Longue plage naturelle, moins fréquentée, parking disponible.",
    },
    distance: { sr: "5 min vožnje", en: "5 min drive", de: "5 Min mit dem Auto", ru: "5 мин на машине", fr: "5 min en voiture" },
    mapsQuery: "Buljarica Beach, Montenegro",
  },
  {
    id: "sveti-stefan",
    name: "Sveti Stefan Beach",
    desc: {
      sr: "Jedna od najljepših plaža u Crnoj Gori.",
      en: "One of the most beautiful beaches in Montenegro.",
      de: "Einer der schönsten Strände Montenegros.",
      ru: "Один из самых красивых пляжей Черногории.",
      fr: "L'une des plus belles plages du Monténégro.",
    },
    distance: { sr: "15 min vožnje", en: "15 min drive", de: "15 Min mit dem Auto", ru: "15 мин на машине", fr: "15 min en voiture" },
    mapsQuery: "Sveti Stefan Beach, Montenegro",
  },
  {
    id: "jaz",
    name: "Jaz Beach",
    desc: {
      sr: "Popularna plaža kod Budve, idealna za kupanje i zalaske sunca.",
      en: "Popular beach near Budva, ideal for swimming and sunsets.",
      de: "Beliebter Strand bei Budva, ideal zum Schwimmen und für Sonnenuntergänge.",
      ru: "Популярный пляж у Будвы, идеален для купания и закатов.",
      fr: "Plage populaire près de Budva, idéale pour la baignade et les couchers de soleil.",
    },
    distance: { sr: "30 min vožnje", en: "30 min drive", de: "30 Min mit dem Auto", ru: "30 мин на машине", fr: "30 min en voiture" },
    mapsQuery: "Jaz Beach, Budva",
  },
];

export const restaurants: Place[] = [
  {
    id: "mali-trg",
    name: "Mali Trg — Brunch & Pizza",
    desc: {
      sr: "Odlična pica i doručak. Sjajan odnos cijene i kvaliteta. Na šetalištu.",
      en: "Excellent pizza and breakfast. Great value for money. On the promenade.",
      de: "Ausgezeichnete Pizza und Frühstück. Tolles Preis-Leistungs-Verhältnis. An der Promenade.",
      ru: "Отличная пицца и завтраки. Хорошее соотношение цены и качества. На набережной.",
      fr: "Excellente pizza et brunchs. Très bon rapport qualité-prix. Sur la promenade.",
    },
    mapsQuery: "Mali Trg Petrovac",
  },
  {
    id: "fortuna",
    name: "Fortuna",
    desc: {
      sr: "Svježi morski plodovi, mediteranska atmosfera, ljubazno osoblje. Na šetalištu.",
      en: "Fresh seafood, Mediterranean atmosphere, friendly staff. On the promenade.",
      de: "Frische Meeresfrüchte, mediterrane Atmosphäre, freundliches Personal. An der Promenade.",
      ru: "Свежие морепродукты, средиземноморская атмосфера, приветливый персонал. На набережной.",
      fr: "Fruits de mer frais, ambiance méditerranéenne, personnel chaleureux. Sur la promenade.",
    },
    mapsQuery: "Restaurant Fortuna Petrovac",
  },
  {
    id: "pasterija-pellegrino",
    name: "Pasterija Pellegrino",
    desc: {
      sr: "Odlična pasta, razne vrste i pogled na more. Idealno za lagani ručak uz zvuk talasa.",
      en: "Excellent pasta, many varieties and a seaside view. Perfect for a light lunch with the sound of the waves.",
      de: "Ausgezeichnete Pasta, viele Sorten und Meerblick. Ideal für ein leichtes Mittagessen mit Meeresrauschen.",
      ru: "Отличная паста, много видов и вид на море. Идеально для легкого обеда под шум волн.",
      fr: "Excellente pasta, diverses variétés et vue sur la mer. Parfait pour un déjeuner léger au son des vagues.",
    },
    mapsQuery: "Pasterija Pellegrino Petrovac",
  },
  {
    id: "pod-lozom",
    name: "Pod Lozom",
    desc: {
      sr: "50 m od smještaja. Tradicionalna kuhinja, prirodna hladovina pod lozom, opuštena porodična atmosfera.",
      en: "50 m from the apartment. Traditional cuisine, natural grapevine shade, relaxed family atmosphere.",
      de: "50 m von der Unterkunft. Traditionelle Küche, natürlicher Schatten unter Weinreben, entspannte Familienatmosphäre.",
      ru: "В 50 м от апартаментов. Традиционная кухня, естественная тень виноградной лозы, уютная семейная атмосфера.",
      fr: "À 50 m du logement. Cuisine traditionnelle, ombre naturelle sous les vignes, ambiance familiale détendue.",
    },
    mapsQuery: "Pod Lozom Petrovac",
  },
];

export const excursions: Place[] = [
  {
    id: "old-bar",
    name: { sr: "Stari Bar", en: "Old Bar Fortress", de: "Old Bar Fortress", ru: "Старый Бар", fr: "Forteresse d'Old Bar" },
    desc: {
      sr: "Drevne ruševine i panoramski pogled na primorje.",
      en: "Ancient ruins and panoramic coastal views.",
      de: "Antike Ruinen und Panoramablick auf die Küste.",
      ru: "Древние руины и панорамные виды на побережье.",
      fr: "Ruines antiques et vues panoramiques sur la côte.",
    },
    mapsQuery: "Stari Bar fortress",
  },
  {
    id: "skadar",
    name: { sr: "Skadarsko jezero", en: "Skadar Lake — Virpazar", de: "Skadar-See — Virpazar", ru: "Скадарское озеро", fr: "Lac de Skadar — Virpazar" },
    desc: {
      sr: "Najveće jezero na Balkanu, krstarenje i nacionalni park.",
      en: "Largest lake in the Balkans, boat tours and national park.",
      de: "Größter See des Balkans, Bootstouren und Nationalpark.",
      ru: "Крупнейшее озеро Балкан, прогулки на лодках и нац. парк.",
      fr: "Plus grand lac des Balkans, croisières et parc national.",
    },
    mapsQuery: "Virpazar Skadar Lake",
  },
  {
    id: "lightland",
    name: "Lightland Park",
    desc: {
      sr: "Tematski park sa svjetlosnim instalacijama, idealan za porodice.",
      en: "Theme park with light installations, great for families.",
      de: "Themenpark mit Lichtinstallationen, ideal für Familien.",
      ru: "Тематический парк со световыми инсталляциями, отлично для семей.",
      fr: "Parc à thème avec installations lumineuses, parfait en famille.",
    },
    mapsQuery: "Lightland Park Montenegro",
  },
  {
    id: "sveti-stefan",
    name: "Sveti Stefan",
    desc: {
      sr: "Ikonsko ostrvce-hotel — jedan od simbola Crne Gore.",
      en: "Iconic island-hotel — one of Montenegro's symbols.",
      de: "Ikonische Inselhotelanlage — eines der Wahrzeichen Montenegros.",
      ru: "Знаковый отель-остров — символ Черногории.",
      fr: "Île-hôtel emblématique — un symbole du Monténégro.",
    },
    mapsQuery: "Sveti Stefan",
  },
  {
    id: "kotor",
    name: "Kotor",
    desc: {
      sr: "UNESCO stari grad, zidine i Bokokotorski zaliv.",
      en: "UNESCO old town, fortifications and the Bay of Kotor.",
      de: "UNESCO-Altstadt, Festungsmauern und Bucht von Kotor.",
      ru: "Старый город ЮНЕСКО, крепостные стены и Которский залив.",
      fr: "Vieille ville UNESCO, remparts et baie de Kotor.",
    },
    mapsQuery: "Kotor Old Town",
  },
  {
    id: "budva",
    name: { sr: "Stari grad Budva", en: "Budva Old Town", de: "Altstadt Budva", ru: "Старый город Будвы", fr: "Vieille ville de Budva" },
    desc: {
      sr: "Srednjovjekovne uličice, citadela i živa šetnja uz more.",
      en: "Medieval lanes, citadel and a lively seaside promenade.",
      de: "Mittelalterliche Gassen, Zitadelle und lebhafte Strandpromenade.",
      ru: "Средневековые улочки, цитадель и оживлённая набережная.",
      fr: "Ruelles médiévales, citadelle et promenade animée au bord de l'eau.",
    },
    mapsQuery: "Budva Old Town",
  },
  {
    id: "lovcen",
    name: { sr: "Lovćen nacionalni park", en: "Lovćen National Park", de: "Nationalpark Lovćen", ru: "Национальный парк Ловчен", fr: "Parc national du Lovćen" },
    desc: {
      sr: "Planinski nacionalni park i Njegošev mauzolej.",
      en: "Mountain national park and Njegoš mausoleum.",
      de: "Berg-Nationalpark und das Njegoš-Mausoleum.",
      ru: "Горный нац. парк и мавзолей Негоша.",
      fr: "Parc national de montagne et mausolée de Njegoš.",
    },
    mapsQuery: "Lovćen National Park",
  },
  {
    id: "ostrog",
    name: { sr: "Manastir Ostrog", en: "Ostrog Monastery", de: "Kloster Ostrog", ru: "Монастырь Острог", fr: "Monastère d'Ostrog" },
    desc: {
      sr: "Manastir uklesan u stijenu — duhovni dragulj Crne Gore.",
      en: "Monastery carved into a cliff — Montenegro's spiritual gem.",
      de: "In den Fels gehauenes Kloster — geistliches Juwel Montenegros.",
      ru: "Монастырь, высеченный в скале — духовная жемчужина Черногории.",
      fr: "Monastère taillé dans la falaise — joyau spirituel du Monténégro.",
    },
    mapsQuery: "Ostrog Monastery",
  },
];

export const shopping = {
  supermarkets: [
    {
      sr: "VOLI Supermarket — najveći supermarket u Petrovcu. 50 metara.",
      en: "VOLI Supermarket — largest supermarket in Petrovac. 50 meters.",
      de: "VOLI Supermarkt — größter Supermarkt in Petrovac. 50 Meter.",
      ru: "VOLI — крупнейший супермаркет в Петроваце. 50 метров.",
      fr: "VOLI — le plus grand supermarché de Petrovac. 50 mètres.",
    },
    {
      sr: "Aroma Market — odlična delikatesna sekcija. 400 m.",
      en: "Aroma Market — excellent deli section. 400 m.",
      de: "Aroma Market — exzellente Feinkostabteilung. 400 m.",
      ru: "Aroma Market — отличный гастрономический отдел. 400 м.",
      fr: "Aroma Market — excellent rayon traiteur. 400 m.",
    },
  ],
  market: {
    sr: "Lokalna pijaca — svježe voće, povrće, sir i med.",
    en: "Local farmers market — fresh fruits, vegetables, cheese and honey.",
    de: "Lokaler Bauernmarkt — frisches Obst, Gemüse, Käse und Honig.",
    ru: "Местный рынок — свежие фрукты, овощи, сыр и мёд.",
    fr: "Marché local — fruits, légumes, fromages et miel frais.",
  },
  pharmacies: {
    sr: "Tri apoteke u blizini Doma zdravlja i jedna u sklopu hotela Vile Oliva.",
    en: "Three pharmacies near the Health Center and one inside Hotel Vile Oliva.",
    de: "Drei Apotheken in der Nähe des Gesundheitszentrums und eine im Hotel Vile Oliva.",
    ru: "Три аптеки рядом с поликлиникой и одна в отеле Vile Oliva.",
    fr: "Trois pharmacies près du centre de santé et une à l'hôtel Vile Oliva.",
  },
  atms: ["NLB", "CKB", "Erste"],
};

export const emergencyContacts = [
  { key: "medical", number: "124", icon: "ambulance" },
  { key: "police", number: "122", icon: "shield" },
  { key: "fire", number: "123", icon: "flame" },
  { key: "healthCenter", number: "+382 33 461 444", icon: "hospital" },
  { key: "general", number: "112", icon: "alert" },
] as const;

export const CONTACT = {
  phone: "+382 69 232 367",
  phoneRaw: "+38269232367",
  email: "aleksandracalenic74@gmail.com",
  instagram: "apartmani_calenic",
  instagramUrl: "https://www.instagram.com/apartmani_calenic",
  address: "Ulica IX br. 5, Petrovac na Moru, Montenegro",
  airbnb: "https://www.airbnb.rs/rooms/42249739",
  mapsQuery: "Apartmani Čalenić, Ulica IX 5, Petrovac na Moru",
  whatsapp: "https://wa.me/38269232367",
};

export const WIFI = {
  floor12: { network: "Sandra", password: "nikimia9" },
  floor3: { network: "Apartmani Čalenić", password: "nikimia9" },
};
