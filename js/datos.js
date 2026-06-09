/** Datos históricos del Mundial de Fútbol */

const MUNDIALES = [
  { anio: 1930, sede: "Uruguay", campeon: "Uruguay", bandera: "🇺🇾", subcampeon: "Argentina", resultado: "4-2", dato: "Primera edición. Solo 13 equipos. Final en Estadio Centenario." },
  { anio: 1934, sede: "Italia", campeon: "Italia", bandera: "🇮🇹", subcampeon: "Checoslovaquia", resultado: "2-1 t.s.", dato: "Primera edición en Europa. Mussolini usó el torneo con fines propagandísticos." },
  { anio: 1938, sede: "Francia", campeon: "Italia", bandera: "🇮🇹", subcampeon: "Hungría", resultado: "4-2", dato: "Italia repite y se convierte en primer bicampeón." },
  { anio: 1950, sede: "Brasil", campeon: "Uruguay", bandera: "🇺🇾", subcampeon: "Brasil", resultado: "2-1", dato: "Maracanazo: 200.000 espectadores en la final. Brasil no necesitaba ganar y perdió." },
  { anio: 1954, sede: "Suiza", campeon: "Alemania", bandera: "🇩🇪", subcampeon: "Hungría", resultado: "3-2", dato: "Milagro de Berna. Hungría llevaba 32 partidos sin perder." },
  { anio: 1958, sede: "Suecia", campeon: "Brasil", bandera: "🇧🇷", subcampeon: "Suecia", resultado: "5-2", dato: "Debut de Pelé, con 17 años. Brasil gana su primer título." },
  { anio: 1962, sede: "Chile", campeon: "Brasil", bandera: "🇧🇷", subcampeon: "Checoslovaquia", resultado: "3-1", dato: "Terremoto en Chile antes del torneo. Garrincha brilla sin Pelé lesionado." },
  { anio: 1966, sede: "Inglaterra", campeon: "Inglaterra", bandera: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", subcampeon: "Alemania", resultado: "4-2 t.s.", dato: "Gol de Hurst: ¿entró la pelota? Inglaterra gana su único Mundial en casa." },
  { anio: 1970, sede: "México", campeon: "Brasil", bandera: "🇧🇷", subcampeon: "Italia", resultado: "4-1", dato: "Considerado el mejor Brasil de la historia. Pelé levanta su tercera copa." },
  { anio: 1974, sede: "Alemania", campeon: "Alemania", bandera: "🇩🇪", subcampeon: "Países Bajos", resultado: "2-1", dato: "Total Football holandés vs solidez alemana. Primera copa de oro FIFA." },
  { anio: 1978, sede: "Argentina", campeon: "Argentina", bandera: "🇦🇷", subcampeon: "Países Bajos", resultado: "3-1 t.s.", dato: "Argentina campeona en casa bajo la dictadura militar. Polémica del 6-0 a Perú." },
  { anio: 1982, sede: "España", campeon: "Italia", bandera: "🇮🇹", subcampeon: "Alemania", resultado: "3-1", dato: "Primer Mundial de 24 equipos. Rossi, campeón del mundo." },
  { anio: 1986, sede: "México", campeon: "Argentina", bandera: "🇦🇷", subcampeon: "Alemania", resultado: "3-2", dato: "Mundial de Maradona: la Mano de Dios y el Gol del Siglo." },
  { anio: 1990, sede: "Italia", campeon: "Alemania", bandera: "🇩🇪", subcampeon: "Argentina", resultado: "1-0", dato: "Final más tensa. Penalti de Brehme. Maradona llora al recibir el subcampeonato." },
  { anio: 1994, sede: "Estados Unidos", campeon: "Brasil", bandera: "🇧🇷", subcampeon: "Italia", resultado: "0-0 (3-2 pen.)", dato: "Primera final decidida por penaltis. Asesinato de Escobar tras autogol en Colombia." },
  { anio: 1998, sede: "Francia", campeon: "Francia", bandera: "🇫🇷", subcampeon: "Brasil", resultado: "3-0", dato: "Zidane cabecea dos goles en la final. Ronaldo sufre crisis antes del partido." },
  { anio: 2002, sede: "Corea/Japón", campeon: "Brasil", bandera: "🇧🇷", subcampeon: "Alemania", resultado: "2-0", dato: "Primer Mundial en Asia. Corea del Sur llega a semifinales." },
  { anio: 2006, sede: "Alemania", campeon: "Italia", bandera: "🇮🇹", subcampeon: "Francia", resultado: "1-1 (5-3 pen.)", dato: "Cabezazo de Zidane a Materazzi en la final. El Sommermärchen alemán." },
  { anio: 2010, sede: "Sudáfrica", campeon: "España", bandera: "🇪🇸", subcampeon: "Países Bajos", resultado: "1-0 t.s.", dato: "Primer Mundial en África. Iniesta marca en el 116'. Sonido de vuvuzelas." },
  { anio: 2014, sede: "Brasil", campeon: "Alemania", bandera: "🇩🇪", subcampeon: "Argentina", resultado: "1-0 t.s.", dato: "Semifinal 7-1: Alemania humilla a Brasil en casa. Gol de Götze en la prórroga." },
  { anio: 2018, sede: "Rusia", campeon: "Francia", bandera: "🇫🇷", subcampeon: "Croacia", resultado: "4-2", dato: "Mbappé brilla. VAR usado por primera vez. Croacia, finalista inesperada." },
  { anio: 2022, sede: "Qatar", campeon: "Argentina", bandera: "🇦🇷", subcampeon: "Francia", resultado: "3-3 (4-2 pen.)", dato: "Última edición a la fecha. Final épica. Messi cumple su sueño. Primera edición en invierno." }
];

const MUNDIAL_2026 = {
  titulo: "FIFA World Cup 26™",
  fechas: "11 de junio — 19 de julio de 2026",
  fechaInicio: "2026-06-11T12:00:00",
  equipos: 48,
  partidos: 104,
  sedes: 16,
  paises: ["Estados Unidos", "México", "Canadá"],
  banderas: ["🇺🇸", "🇲🇽", "🇨🇦"],
  imagenBanner: "img/mundial-2026/banner.jpg",
  imagenesPaises: [
    { pais: "México", bandera: "🇲🇽", img: "img/mundial-2026/mexico.jpg", color: "#006847" },
    { pais: "Estados Unidos", bandera: "🇺🇸", img: "img/mundial-2026/usa.jpg", color: "#003087" },
    { pais: "Canadá", bandera: "🇨🇦", img: "img/mundial-2026/canada.jpg", color: "#D80621" }
  ],
  descripcion: "Por primera vez tres países organizan juntos el torneo. Se expande a 48 selecciones tras el éxito del formato ampliado. La final se jugará en el MetLife Stadium de Nueva Jersey.",
  novedades: [
    {
      icono: "🏟️",
      titulo: "48 selecciones",
      texto: "16 grupos de 3 equipos. Avanzan 2 de cada grupo más los 8 mejores terceros.",
      imagen: "img/mundial-2026/equipos.jpg"
    },
    {
      icono: "🌎",
      titulo: "3 países anfitriones",
      texto: "Estados Unidos (11 sedes), México (3) y Canadá (2). La final en Nueva Jersey.",
      imagen: "img/mundial-2026/paises.jpg"
    },
    {
      icono: "⚽",
      titulo: "104 partidos",
      texto: "El Mundial más extenso de la historia, con un mes y medio de competición.",
      imagen: "img/mundial-2026/partidos.jpg"
    },
    {
      icono: "🚇",
      titulo: "Logística continental",
      texto: "Distancias enormes entre sedes: de Toronto a Los Ángeles hay más de 3.500 km.",
      imagen: "img/mundial-2026/logistica.jpg"
    }
  ],
  ciudades: [
    { ciudad: "Ciudad de México", pais: "🇲🇽", estadio: "Estadio Azteca", dato: "Único estadio en albergar 3 finales mundialistas", imagen: "img/mundial-2026/cdmx.jpg" },
    { ciudad: "Guadalajara", pais: "🇲🇽", estadio: "Estadio Akron", dato: "Sede en el occidente de México", imagen: "img/mundial-2026/guadalajara.jpg" },
    { ciudad: "Monterrey", pais: "🇲🇽", estadio: "Estadio BBVA", dato: "Clima cálido y afición apasionada", imagen: "img/mundial-2026/monterrey.jpg" },
    { ciudad: "Los Ángeles", pais: "🇺🇸", estadio: "SoFi Stadium", dato: "Estadio más moderno y caro del mundo", imagen: "img/mundial-2026/losangeles.jpg" },
    { ciudad: "Nueva York/NJ", pais: "🇺🇸", estadio: "MetLife Stadium", dato: "Sede de la gran final", imagen: "img/mundial-2026/nyc.jpg" },
    { ciudad: "Miami", pais: "🇺🇸", estadio: "Hard Rock Stadium", dato: "Puente cultural con Latinoamérica", imagen: "img/mundial-2026/miami.jpg" },
    { ciudad: "Toronto", pais: "🇨🇦", estadio: "BMO Field", dato: "Primera vez que Canadá acoge partidos de Copa", imagen: "img/mundial-2026/toronto.jpg" },
    { ciudad: "Vancouver", pais: "🇨🇦", estadio: "BC Place", dato: "Ciudad multicultural y escenario olímpico", imagen: "img/mundial-2026/vancouver.jpg" }
  ]
};

/** Sedes con coordenadas para el mapa 3D de logística */
const SEDES_LOGISTICA = [
  { id: "atlanta", ciudad: "Atlanta", pais: "🇺🇸", paisCod: "US", estadio: "Mercedes-Benz Stadium", lat: 33.7554, lng: -84.3963 },
  { id: "boston", ciudad: "Boston", pais: "🇺🇸", paisCod: "US", estadio: "Gillette Stadium", lat: 42.0909, lng: -71.2643 },
  { id: "dallas", ciudad: "Dallas", pais: "🇺🇸", paisCod: "US", estadio: "AT&T Stadium", lat: 32.7473, lng: -97.0945 },
  { id: "houston", ciudad: "Houston", pais: "🇺🇸", paisCod: "US", estadio: "NRG Stadium", lat: 29.6847, lng: -95.4107 },
  { id: "kansas-city", ciudad: "Kansas City", pais: "🇺🇸", paisCod: "US", estadio: "Arrowhead Stadium", lat: 39.0489, lng: -94.4839 },
  { id: "los-angeles", ciudad: "Los Ángeles", pais: "🇺🇸", paisCod: "US", estadio: "SoFi Stadium", lat: 33.9535, lng: -118.3392 },
  { id: "miami", ciudad: "Miami", pais: "🇺🇸", paisCod: "US", estadio: "Hard Rock Stadium", lat: 25.958, lng: -80.2389 },
  { id: "nueva-york", ciudad: "Nueva York/NJ", pais: "🇺🇸", paisCod: "US", estadio: "MetLife Stadium", lat: 40.8128, lng: -74.0742 },
  { id: "philadelphia", ciudad: "Filadelfia", pais: "🇺🇸", paisCod: "US", estadio: "Lincoln Financial Field", lat: 39.9008, lng: -75.1675 },
  { id: "san-francisco", ciudad: "San Francisco", pais: "🇺🇸", paisCod: "US", estadio: "Levi's Stadium", lat: 37.403, lng: -121.9694 },
  { id: "seattle", ciudad: "Seattle", pais: "🇺🇸", paisCod: "US", estadio: "Lumen Field", lat: 47.5952, lng: -122.3316 },
  { id: "cdmx", ciudad: "Ciudad de México", pais: "🇲🇽", paisCod: "MX", estadio: "Estadio Azteca", lat: 19.3029, lng: -99.1504 },
  { id: "guadalajara", ciudad: "Guadalajara", pais: "🇲🇽", paisCod: "MX", estadio: "Estadio Akron", lat: 20.6818, lng: -103.4625 },
  { id: "monterrey", ciudad: "Monterrey", pais: "🇲🇽", paisCod: "MX", estadio: "Estadio BBVA", lat: 25.6691, lng: -100.2443 },
  { id: "toronto", ciudad: "Toronto", pais: "🇨🇦", paisCod: "CA", estadio: "BMO Field", lat: 43.6332, lng: -79.4186 },
  { id: "vancouver", ciudad: "Vancouver", pais: "🇨🇦", paisCod: "CA", estadio: "BC Place", lat: 49.2768, lng: -123.1089 }
];

const RUTAS_LOGISTICA = [
  { origen: "toronto", destino: "los-angeles", etiqueta: "Toronto → Los Ángeles", dato: "Más de 3.500 km: una de las rutas más largas entre sedes." },
  { origen: "vancouver", destino: "miami", etiqueta: "Vancouver → Miami", dato: "De Canadá al trópico: casi 4.500 km en línea recta." },
  { origen: "cdmx", destino: "seattle", etiqueta: "Ciudad de México → Seattle", dato: "Cruza la frontera México–EE.UU. (~3.700 km)." },
  { origen: "boston", destino: "los-angeles", etiqueta: "Boston → Los Ángeles", dato: "De la costa este a la oeste (~4.300 km)." },
  { origen: "monterrey", destino: "toronto", etiqueta: "Monterrey → Toronto", dato: "Del norte de México al Gran Lago (~2.700 km)." },
  { origen: "nueva-york", destino: "cdmx", etiqueta: "Nueva York → CDMX", dato: "Sede de la final y estadio histórico: ~3.360 km." }
];

/**
 * Grupos ilustrativos — referencias a CALENDARIO_PARTIDOS_2026
 */
const GRUPOS_2026 = [
  {
    grupo: "A",
    equipos: [
      { id: "mexico", nombre: "México", bandera: "🇲🇽", partidoIds: ["pa-a1", "pa-a3", "pa-a5"] },
      { id: "corea", nombre: "Corea del Sur", bandera: "🇰🇷", partidoIds: ["pa-a2", "pa-a3", "pa-a6"] },
      { id: "sudafrica", nombre: "Sudáfrica", bandera: "🇿🇦", partidoIds: ["pa-a1", "pa-a4", "pa-a6"] },
      { id: "ecuador", nombre: "Ecuador", bandera: "🇪🇨", partidoIds: ["pa-a2", "pa-a4", "pa-a5"] }
    ]
  },
  {
    grupo: "B",
    equipos: [
      { id: "usa", nombre: "Estados Unidos", bandera: "🇺🇸", partidoIds: ["pb-b1", "pb-b3", "pb-b5"] },
      { id: "australia", nombre: "Australia", bandera: "🇦🇺", partidoIds: ["pb-b1", "pb-b4", "pb-b6"] },
      { id: "peru", nombre: "Perú", bandera: "🇵🇪", partidoIds: ["pb-b2", "pb-b4", "pb-b5"] },
      { id: "ghana", nombre: "Ghana", bandera: "🇬🇭", partidoIds: ["pb-b2", "pb-b3", "pb-b6"] }
    ]
  },
  {
    grupo: "C",
    equipos: [
      { id: "canada", nombre: "Canadá", bandera: "🇨🇦", partidoIds: ["pc-c1", "pc-c3", "pc-c5"] },
      { id: "francia", nombre: "Francia", bandera: "🇫🇷", partidoIds: ["pc-c2", "pc-c4", "pc-c5"] },
      { id: "marruecos", nombre: "Marruecos", bandera: "🇲🇦", partidoIds: ["pc-c2", "pc-c3", "pc-c6"] },
      { id: "costa-rica", nombre: "Costa Rica", bandera: "🇨🇷", partidoIds: ["pc-c1", "pc-c4", "pc-c6"] }
    ]
  },
  {
    grupo: "D",
    equipos: [
      { id: "argentina", nombre: "Argentina", bandera: "🇦🇷", partidoIds: ["pd-d1", "pd-d3", "pd-d5"] },
      { id: "polonia", nombre: "Polonia", bandera: "🇵🇱", partidoIds: ["pd-d2", "pd-d4", "pd-d5"] },
      { id: "arabia", nombre: "Arabia Saudita", bandera: "🇸🇦", partidoIds: ["pd-d1", "pd-d4", "pd-d6"] },
      { id: "croacia", nombre: "Croacia", bandera: "🇭🇷", partidoIds: ["pd-d2", "pd-d3", "pd-d6"] }
    ]
  }
];

const AFICIONADOS = {
  celebraciones: [
    {
      anio: 2022,
      titulo: "La locura argentina en Qatar",
      texto: "Millones salieron a las calles de Buenos Aires tras la final. La afición viajó masivamente a Doha cantando «Muchachos».",
      emoji: "🇦🇷",
      imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=700&q=80",
      video: "bBmVVQnocjc",
      videoLabel: "Celebración en el Obelisco de Buenos Aires"
    },
    {
      anio: 2018,
      titulo: "Francia en los Campos Elíseos",
      texto: "Más de un millón de personas celebraron el triunfo francés en París, con cánticos de «Allez les Bleus».",
      emoji: "🇫🇷",
      imagen: "https://images.unsplash.com/photo-1502602898657-3b917719cb13?w=700&q=80",
      video: "cwQ1COkPyT4",
      videoLabel: "Desfile de los Bleus por París"
    },
    {
      anio: 2014,
      titulo: "La fiesta alemana en Berlín",
      texto: "Tras ganar en Brasil, cientos de miles se reunieron en la Puerta de Brandeburgo.",
      emoji: "🇩🇪",
      imagen: "https://images.unsplash.com/photo-1569910495989-0f4837910b67?w=700&q=80",
      video: "iDvZtHYTMPA",
      videoLabel: "Final 2014 en la Fanmeile de Berlín"
    },
    {
      anio: 2010,
      titulo: "España en Cibeles",
      texto: "Madrid se tiñó de rojo y amarillo. La afición no dormía tras décadas de espera.",
      emoji: "🇪🇸",
      imagen: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=700&q=80",
      video: "5Y11N-j_UM0",
      videoLabel: "La Roja celebra el título en Madrid"
    },
    {
      anio: 2006,
      titulo: "El Sommermärchen",
      texto: "Alemania como anfitriona vivió un mes de fiesta multicolor en las Fan Zones, aunque no ganó.",
      emoji: "🇩🇪",
      imagen: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=700&q=80",
      video: "Y1sxdLKBJco",
      videoLabel: "Ambiente en la Fan Mile de Berlín 2006"
    },
    {
      anio: 1998,
      titulo: "Francia unida bajo los arcos",
      texto: "Zidane unió a una Francia diversa. Celebraciones multiculturales en toda la nación.",
      emoji: "🇫🇷",
      imagen: "https://images.unsplash.com/photo-1499856871958-5b962479f820?w=700&q=80",
      video: "2IdPL_q1-Nw",
      videoLabel: "Francia campeona del mundo 1998"
    }
  ],
  tradiciones: [
    {
      titulo: "Cielito Lindo — México",
      texto: "Los aficionados mexicanos cantan «Cielito Lindo» en cada partido de El Tri, creando una de las atmósferas más reconocibles del Mundial.",
      emoji: "🎵",
      imagen: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=700&q=80",
      video: "3K4f1IXOcAg",
      videoLabel: "Afición mexicana cantando en el Mundial"
    },
    {
      titulo: "Afición japonesa ejemplar",
      texto: "Tras cada partido, los japoneses recogen basura del estadio aunque hayan perdido. Un gesto admirado mundialmente desde 2014.",
      emoji: "🧹",
      imagen: "https://images.unsplash.com/photo-1431324155629-1a6deb1ffd8f?w=700&q=80",
      video: "41fV0uN5yq8",
      videoLabel: "Hinchas de Japón limpian el estadio en Qatar"
    },
    {
      titulo: "Vuvuzelas en Sudáfrica 2010",
      texto: "El sonido de las vuvuzelas marcó el primer Mundial africano. Amadas y odiadas, definieron la banda sonora del torneo.",
      emoji: "📯",
      imagen: "https://images.unsplash.com/photo-1459860666175-5cabcaa412b7?w=700&q=80",
      video: "1XcIsl_mOSY",
      videoLabel: "El sonido icónico de las vuvuzelas"
    },
    {
      titulo: "Barras bravas y hinchadas",
      texto: "Desde las bandas argentinas hasta las ultras europeas, la afición organizada transforma estadios en espectáculos visuales.",
      emoji: "🎭",
      imagen: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=700&q=80",
      video: "Z5Z-l8JEVsI",
      videoLabel: "Hinchadas y coreografías en el Mundial"
    },
    {
      titulo: "Fan Fests y pantallas gigantes",
      texto: "Desde 2006, las Fan Zones permiten a millones ver partidos gratis en plazas públicas, democratizando la experiencia.",
      emoji: "📺",
      imagen: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=700&q=80",
      video: "F0Gsec_Ccjw",
      videoLabel: "FIFA Fan Festival — la fiesta fuera del estadio"
    }
  ],
  impacto: [
    {
      titulo: "Identidad nacional",
      texto: "El Mundial convierte a 32 (ahora 48) naciones en protagonistas. Para países pequeños como Croacia 2018 o Senegal, llegar lejos es un orgullo nacional.",
      emoji: "🌍",
      imagen: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=700&q=80",
      video: "jJ7rF2n0j0E",
      videoLabel: "Croacia recibe a sus héroes del Mundial 2018"
    },
    {
      titulo: "Economía y turismo",
      texto: "Qatar 2022 recibió más de 1,5 millones de visitantes. Sudáfrica 2010 generó infraestructura duradera. Brasil 2014 dejó estadios en debate.",
      emoji: "💰",
      imagen: "https://images.unsplash.com/photo-1577223625816-7546f13df404?w=700&q=80",
      video: "EuvV2MtoaY0",
      videoLabel: "Qatar 2022 — el turismo en el Mundial"
    },
    {
      titulo: "Inclusión y visibilidad",
      texto: "El fútbol femenino crece tras cada Mundial masculino. Qatar 2022 abrió debates sobre derechos laborales y diversidad.",
      emoji: "✊",
      imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=700&q=80",
      video: "9Ggy2E11Niw",
      videoLabel: "España celebra su primer Mundial femenino"
    },
    {
      titulo: "Conexión global",
      texto: "Más de 3.500 millones de personas siguieron Qatar 2022. Es el evento deportivo más visto del planeta.",
      emoji: "📡",
      imagen: "https://images.unsplash.com/photo-1459860666175-5cabcaa412b7?w=700&q=80",
      video: "Ql1_D4VJjd4",
      videoLabel: "Afición de todo el mundo en Qatar 2022"
    }
  ]
};

const INCIDENCIAS = [
  { anio: 1930, titulo: "El nacimiento humilde del torneo", texto: "Uruguay pagó el alojamiento de las selecciones europeas para que viajaran en barco 15 días. Solo 4 europeos acudieron de 13 participantes totales." },
  { anio: 1950, titulo: "El Maracanazo", texto: "Brasil solo necesitaba empatar la final. Uruguay ganó 2-1 ante 200.000 personas en silencio absoluto. Se considera el mayor trauma colectivo del fútbol brasileño." },
  { anio: 1966, titulo: "El gol fantasma de Hurst", texto: "En la final, el balón de Hurst rebotó en el larguero y bajó sobre la línea. El árbitro dio gol. La tecnología posterior sugiere que no entró del todo." },
  { anio: 1978, titulo: "La dictadura y el 6-0 a Perú", texto: "Argentina necesitaba golear a Perú para pasar a la final. Ganó 6-0 en un partido rodeado de sospechas de arreglo bajo presión de la junta militar." },
  { anio: 1982, titulo: "La guerra de las Malvinas", texto: "Argentina y Inglaterra se enfrentaron en cuartos apenas meses después del conflicto bélico. Maradona dijo que fue «vencer a un país, no a un equipo»." },
  { anio: 1986, titulo: "La Mano de Dios", texto: "Maradona marcó con la mano ante Inglaterra. Tras el partido dijo que fue «un poco con la cabeza de Maradona y otro poco con la mano de Dios»." },
  { anio: 1994, titulo: "El asesinato de Andrés Escobar", texto: "Tras autogol en el Mundial, Escobar fue asesinado en Medellín diez días después. La violencia del narcotráfico marcó la tragedia más oscura ligada al torneo." },
  { anio: 1998, titulo: "La crisis de Ronaldo", texto: "Horas antes de la final, Ronaldo sufrió una convulsión. Casi no jugó. Francia ganó 3-0. El misterio de lo ocurrido sigue generando debate." },
  { anio: 2002, titulo: "Arbitrajes coreanos", texto: "Corea del Sur avanzó a semifinales con decisiones arbitrales muy cuestionadas contra Italia y España. La FIFA investigó pero no sancionó." },
  { anio: 2006, titulo: "Cabezazo de Zidane", texto: "En su último partido, Zidane cabeceó a Materazzi tras una provocación. Expulsado en la final del mundo. Italia ganó en penaltis." },
  { anio: 2010, titulo: "La mano de Suárez", texto: "Suárez detuvo con la mano un gol de Ghana en cuartos. Expulsado, pero Uruguay ganó en penaltis. África perdió su mejor oportunidad de semifinales." },
  { anio: 2014, titulo: "El 7-1 de Alemania a Brasil", texto: "En semifinal, Alemania marcó 4 goles en 6 minutos. Brasil, anfitrión, sufrió la mayor humillación de su historia. Neymar lloraba desde el banquillo." },
  { anio: 2018, titulo: "Hooligans y seguridad", texto: "Hubo enfrentamientos entre ultras rusas e inglesas. La FIFA reforzó medidas. El VAR debutó generando polémica en varias jugadas." },
  { anio: 2022, titulo: "Controversias de Qatar", texto: "Críticas por derechos de trabajadores migrantes, prohibición de cerveza en estadios a última hora, y debate sobre el calendario invernal que alteró ligas europeas." }
];

const COMPARATIVA = {
  primero: {
    anio: 1930,
    titulo: "Uruguay 1930 — El primero",
    bandera: "🇺🇾",
    datos: [
      { label: "Equipos", valor: "13" },
      { label: "Partidos", valor: "18" },
      { label: "Goleador", valor: "Stábile (8 goles)" },
      { label: "Campeón", valor: "🇺🇾 Uruguay" },
      { label: "Final", valor: "Uruguay 4-2 Argentina" },
      { label: "Asistencia final", valor: "~68.000" },
      { label: "Balón", valor: "Tiento (cuero pesado)" },
      { label: "Transmisión", valor: "Solo radio" }
    ],
    historia: "Uruguay celebraba su centenario y su doble título olímpico (1924 y 1928). La FIFA eligió al país sudamericano como sede. Europa envió pocas selecciones por el largo viaje marítimo. Fue un torneo íntimo pero histórico: nació la mayor competición del deporte."
  },
  ultimo: {
    anio: 2022,
    titulo: "Qatar 2022 — El último (a la fecha)",
    bandera: "🇶🇦",
    datos: [
      { label: "Equipos", valor: "32" },
      { label: "Partidos", valor: "64" },
      { label: "Goleador", valor: "Mbappé (8 goles)" },
      { label: "Campeón", valor: "🇦🇷 Argentina" },
      { label: "Final", valor: "Argentina 3-3 (4-2 pen.) Francia" },
      { label: "Asistencia final", valor: "~88.966" },
      { label: "Balón", valor: "Al Rihla (tecnología avanzada)" },
      { label: "Transmisión", valor: "Global en 4K y streaming" }
    ],
    historia: "Primera edición en Oriente Medio y en invierno por el calor. Messi cumplió su sueño en una final considerada la mejor de la historia. Marruecos llegó a semifinales, la primera selección africana en lograrlo. El torneo generó el mayor debate social y mediático de cualquier Mundial."
  }
};

const RANKING_COPAS = [
  { pais: "Brasil", bandera: "🇧🇷", copas: 5 },
  { pais: "Alemania", bandera: "🇩🇪", copas: 4 },
  { pais: "Italia", bandera: "🇮🇹", copas: 4 },
  { pais: "Argentina", bandera: "🇦🇷", copas: 3 },
  { pais: "Francia", bandera: "🇫🇷", copas: 2 },
  { pais: "Uruguay", bandera: "🇺🇾", copas: 2 },
  { pais: "Inglaterra", bandera: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", copas: 1 },
  { pais: "España", bandera: "🇪🇸", copas: 1 }
];
