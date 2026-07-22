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
  mapsUrl?: string;
};

export const beaches: Place[] = [
  {
    id: "petrovac",
    name: "Gradska plaža",
    desc: {
      sr: "Najbliža opcija ako ne želite previše da se udaljavate – do nje stižete za svega nekoliko minuta hoda. Ovo je klasična gradska plaža sa svim sadržajima nadohvat ruke: kafići, restorani, prodavnice i šetalište uz more, tako da vam ništa neće nedostajati. Idealna je za goste koji žele brzo osvježenje bez planiranja, porodice sa djecom kojima je bitna blizina svega, ili za one koji jednostavno vole da budu u centru zbivanja. Nije toliko mirna i prirodna kao Lučice, ali nadoknađuje to praktičnošću i živahnom atmosferom tokom cijelog dana.",
      en: "The closest option if you don't want to travel far — just a few minutes' walk. This is a classic city beach with everything within reach: cafés, restaurants, shops and the seaside promenade, so you won't miss a thing. Ideal for guests who want a quick refresh without planning, families with children who value proximity, or those who simply love being in the heart of the action. It's not as quiet or natural as Lučice, but it makes up for it with convenience and a lively atmosphere all day.",
      de: "Die nächstgelegene Option, wenn Sie nicht weit reisen möchten – in nur wenigen Minuten zu Fuß erreichbar. Dies ist ein klassischer Stadtstrand mit allem, was man braucht: Cafés, Restaurants, Geschäfte und eine Uferpromenade, sodass Sie nichts vermissen werden. Ideal für Gäste, die eine schnelle Erfrischung ohne Planung möchten, Familien mit Kindern, die die Nähe schätzen, oder für diejenigen, die einfach gerne im Zentrum des Geschehens sind. Er ist nicht so ruhig und natürlich wie Lučice, aber er macht dies durch Praktikabilität und lebhafte Atmosphäre den ganzen Tag wett.",
      ru: "Ближайший вариант, если вы не хотите далеко ехать — всего несколько минут пешком. Это классический городской пляж со всем необходимым под рукой: кафе, ресторанами, магазинами и набережной, так что вам ничего не понадобится. Идеально для гостей, которые хотят быстро освежиться без планирования, семей с детьми, которым важна близость всего, или тех, кто просто любит быть в центре событий. Он не такой тихий и естественный, как Лучице, но компенсирует это практичностью и оживленной атмосферой на протяжении всего дня.",
      fr: "L'option la plus proche si vous ne voulez pas vous éloigner trop loin — à quelques minutes à pied seulement. C'est une plage de ville classique avec tout à portée de main : cafés, restaurants, boutiques et promenade en bord de mer, vous n'aurez rien à manquer. Idéale pour les clients qui veulent une rafraîchissement rapide sans planification, les familles avec enfants qui apprécient la proximité, ou ceux qui aiment simplement être au cœur de l'action. Elle n'est pas aussi calme et naturelle que Lučice, mais elle le compense par sa praticité et son ambiance animée toute la journée.",
    },
    distance: { sr: "5 min hoda", en: "5 min walk", de: "5 Min Fußweg", ru: "5 мин пешком", fr: "5 min à pied" },
    mapsQuery: "Petrovac Beach, Montenegro",
  },
  {
    id: "perazica",
    name: "Perazića Do",
    desc: {
      sr: "Malo je udaljenija od centra, ali vrijedi truda da se do nje dovezete ili prošetate. Ovo je jedna od većih i prostranijih plaža u okolini, sa dužom obalom koja pruža osjećaj slobode i prostora – nema onog utiska da ste zbijeni sa svih strana, čak i u jeku sezone. Zbog svoje veličine idealna je za porodice sa djecom, duže šetnje uz more i opuštanje bez žurbe. Atmosfera je znatno opuštenija nego na centralnim plažama, pa je odlična opcija za goste koji žele malo više mira, a opet ne žele previše da se udaljavaju od civilizacije.",
      en: "It's a bit farther from the center, but worth the effort to drive or walk there. This is one of the larger, more spacious beaches in the area, with a longer shoreline that gives a feeling of freedom and room — you don't feel crowded, even in peak season. Because of its size, it's ideal for families with children, longer seaside walks, and relaxed time without rushing. The atmosphere is much more laid-back than central beaches, making it a great choice for guests who want a little more peace without straying too far from civilization.",
      de: "Es ist etwas weiter vom Zentrum entfernt, aber die Mühe lohnt sich, dorthin zu fahren oder zu laufen. Dies ist einer der größeren, geräumigeren Strände in der Umgebung, mit einer längeren Küste, die ein Gefühl von Freiheit und Platz vermittelt — selbst in der Hochsaison fühlt man sich nicht eingeengt. Dadurch ist er ideal für Familien mit Kindern, längere Spaziergänge am Meer und entspanntes Verweilen ohne Eile. Die Atmosphäre ist deutlich entspannter als an den zentralen Stränden, sodass er eine gute Wahl für Gäste ist, die etwas mehr Ruhe suchen, aber nicht zu weit von der Zivilisation entfernt sein wollen.",
      ru: "Он немного дальше от центра, но стоит затраченных усилий, чтобы доехать или дойти туда. Это один из больших, просторных пляжей в окрестностях, с длинной береговой линией, которая создает ощущение свободы и пространства — даже в разгар сезона нет ощущения тесноты. Из-за своего размера он идеально подходит для семей с детьми, длительных прогулок по морю и отдыха без спешки. Атмосфера гораздо спокойнее, чем на центральных пляжах, поэтому это отличный выбор для гостей, которые хотят немного больше тишины, но не хотят уезжать слишком далеко от цивилизации.",
      fr: "Elle est un peu plus éloignée du centre, mais cela vaut le détour. C'est l'une des plages les plus grandes et les plus spacieuses de la région, avec un littoral plus long qui donne une sensation de liberté et d'espace — on ne se sent pas serré, même en haute saison. En raison de sa taille, elle est idéale pour les familles avec enfants, les longues promenades en bord de mer et la détente sans se presser. L'ambiance est beaucoup plus détendue que sur les plages centrales, ce qui en fait un excellent choix pour les clients qui veulent un peu plus de calme, sans s'éloigner trop de la civilisation.",
    },
    distance: { sr: "30 min hoda", en: "30 min walk", de: "30 Min Fußweg", ru: "30 мин пешком", fr: "30 min à pied" },
    mapsQuery: "Perazića Do beach, Montenegro",
  },
  {
    id: "lucice",
    name: "Lučice Beach",
    desc: {
      sr: "Ako tražite bijeg od gužve i malo prave prirode, Lučice je pravo mjesto za vas. Radi se o maloj, skrivenoj uvali koja je sa svih strana okružena gustom borovom šumom, pa vas već na samom prilazu dočekuje prijatan hlad i miris borovine. Voda je kristalno bistra, a zbog same konfiguracije uvale i mirna, gotovo kao malo prirodno jezero. Do plaže se stiže preko stepenica ili kraćom šetnjom, što je dodatno čini mirnijom i manje gužvanom od centralnih plaža. Po mom mišljenju, ljepša je od gradske plaže Petrovac i savršena je za goste koji žele da uživaju u tišini, hladu i prirodi, umjesto u gužvi i buci.",
      en: "If you're looking to escape the crowds and enjoy true nature, Lučice is the right place for you. This is a small hidden cove surrounded on all sides by a dense pine forest, welcoming you with cool shade and the scent of pine. The water is crystal clear, and the cove is calm, almost like a natural lake. You reach the beach via stairs or a short walk, which makes it quieter and less crowded than the central beaches. In my opinion, it is more beautiful than Petrovac city beach and perfect for guests who want to enjoy peace, shade and nature instead of crowds and noise.",
      de: "Wenn Sie dem Trubel entfliehen und echte Natur genießen möchten, ist Lučice der richtige Ort für Sie. Dies ist eine kleine versteckte Bucht, die auf allen Seiten von einem dichten Kiefernwald umgeben ist und Sie mit angenehmem Schatten und Duft von Kiefer empfängt. Das Wasser ist kristallklar und die Bucht ist ruhig, fast wie ein natürlicher See. Zum Strand gelangt man über Treppen oder einen kurzen Spaziergang, was ihn ruhiger und weniger überfüllt macht als die zentralen Strände. Meiner Meinung nach ist er schöner als der Stadtstrand Petrovac und perfekt für Gäste, die Ruhe, Schatten und Natur suchen statt Trubel und Lärm.",
      ru: "Если вы ищете побег от толпы и немного настоящей природы, Лучице — это место для вас. Это маленькая скрытая бухта, окруженная со всех сторон густым сосновым лесом, которая встречает вас приятной прохладой и ароматом сосен. Вода кристально чистая, а бухта спокойная, почти как природное озеро. До пляжа ведут лестницы или короткая прогулка, что делает его более спокойным и менее многолюдным, чем центральные пляжи. По моему мнению, он красивее городского пляжа Петровац и идеально подходит для гостей, которые хотят наслаждаться тишиной, тенью и природой, а не суетой и шумом.",
      fr: "Si vous cherchez à fuir la foule et à profiter d'un peu de vraie nature, Lučice est l'endroit idéal pour vous. C'est une petite baie cachée entourée de tous côtés par une dense forêt de pins, qui vous accueille avec une agréable fraîcheur et l'odeur des pins. L'eau est cristalline et la baie est paisible, presque comme un lac naturel. On accède à la plage par des escaliers ou une courte promenade, ce qui la rend plus calme et moins fréquentée que les plages centrales. À mon avis, elle est plus belle que la plage de la ville de Petrovac et parfaite pour les clients qui veulent profiter du silence, de l'ombre et de la nature plutôt que de la foule et du bruit.",
    },
    distance: { sr: "10 min hoda", en: "10 min walk", de: "10 Min Fußweg", ru: "10 мин пешком", fr: "10 min à pied" },
    mapsQuery: "Lučice Beach, Petrovac",
  },
  {
    id: "buljarica",
    name: "Nazaré Beach Bar",
    desc: {
      sr: "Ovo je moj apsolutni favorit i mjesto koje svakom gostu preporučujem da ne propusti. Moderna, uređena plaža sa udobnim ležaljkama i baldahinima u prepoznatljivom stilu sa drvenim detaljima, uz plavu zastavicu koja garantuje čistoću mora i samog ambijenta. Opuštena atmosfera, dobra muzika, odlična hrana i osvježavajući kokteli. Radi od 08 do 20h. Parking se plaća 5€ ceo dan, a postoji i opcija da se stigne brodićem. Za više informacija kontaktirajte Nazaré.",
      en: "My absolute favorite and a must-visit for every guest. A modern, well-kept beach with comfortable sunbeds and canopies in a signature wooden style, proudly flying a blue flag for clean sea and atmosphere. Relaxed vibe, good music, excellent food and refreshing cocktails. Open from 08:00 to 20:00. Parking costs 5€ for the whole day, and there is also a boat option to arrive. For more information, contact Nazare.",
      de: "Mein absoluter Favorit und ein Muss für jeden Gast. Ein moderner, gepflegter Strand mit bequemen Liegen und Baldachinen im charakteristischen Holzstil, mit blauer Flagge für sauberes Meer und Ambiente. Entspannte Atmosphäre, gute Musik, ausgezeichnetes Essen und erfrischende Cocktails. Geöffnet von 08:00 bis 20:00. Der Parkplatz kostet 5€ für den ganzen Tag, und es gibt auch die Möglichkeit, mit dem Boot anzureisen. Für weitere Informationen kontaktieren Sie Nazare.",
      ru: "Мой абсолютный фаворит и место, которое я рекомендую каждому гостю. Современный ухоженный пляж с удобными лежаками и навесами в фирменном деревянном стиле, с синим флагом, гарантирующим чистоту моря и атмосферы. Расслабленная атмосфера, хорошая музыка, отличная еда и освежающие коктейли. Работает с 08:00 до 20:00. Парковка стоит 5€ на весь день, а также есть возможность добраться на лодке. Для получения дополнительной информации свяжитесь с Nazare.",
      fr: "Mon coup de cœur absolu et un endroit à ne pas manquer pour chaque invité. Une plage moderne et soignée avec des transats confortables et des canopées au style bois reconnaissable, arborant un drapeau bleu garantissant la propreté de la mer et de l’atmosphère. Ambiance détendue, bonne musique, excellente cuisine et cocktails rafraîchissants. Ouvert de 08h00 à 20h00. Le parking coûte 5€ pour toute la journée et il est aussi possible d'arriver en bateau. Pour plus d'informations, contactez Nazare.",
    },
    distance: { sr: "5 min vožnje", en: "7 min drive", de: "5 Min mit dem Auto", ru: "5 мин на машине", fr: "5 min en voiture" },
    mapsUrl: "https://maps.app.goo.gl/EgoSYgPNas1MaNhLA",
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
  { key: "healthCenter", number: "+382 33 461 055", icon: "hospital" },
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
