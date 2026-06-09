/**
 * Calendario de partidos — resultados y transmisión en vídeo
 * Grupos ilustrativos · Mundial 2026
 */

function transmisionSede(paisCod) {
  if (paisCod === "MX") {
    return { tv: "Televisa · Azteca 7", streaming: "ViX Premium · TUDN" };
  }
  if (paisCod === "CA") {
    return { tv: "TSN · CTV · RDS", streaming: "FIFA+ · DAZN" };
  }
  return { tv: "Fox Sports · Telemundo", streaming: "Peacock · FIFA+" };
}

const CALENDARIO_PARTIDOS_2026 = {
  "pa-a1": {
    id: "pa-a1", grupo: "A", jornada: 1, fecha: "11 jun", hora: "14:00 CT", sedeId: "cdmx",
    local: { id: "mexico", nombre: "México", bandera: "🇲🇽" },
    visitante: { id: "sudafrica", nombre: "Sudáfrica", bandera: "🇿🇦" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("MX"),
    video: "3K4f1IXOcAg", videoLabel: "Ambiente en el Estadio Azteca — referencia"
  },
  "pa-a2": {
    id: "pa-a2", grupo: "A", jornada: 1, fecha: "12 jun", hora: "17:00 CT", sedeId: "guadalajara",
    local: { id: "corea", nombre: "Corea del Sur", bandera: "🇰🇷" },
    visitante: { id: "ecuador", nombre: "Ecuador", bandera: "🇪🇨" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("MX"),
    video: "41fV0uN5yq8", videoLabel: "Afición coreana en el Mundial — referencia"
  },
  "pa-a3": {
    id: "pa-a3", grupo: "A", jornada: 2, fecha: "18 jun", hora: "20:00 CT", sedeId: "monterrey",
    local: { id: "mexico", nombre: "México", bandera: "🇲🇽" },
    visitante: { id: "corea", nombre: "Corea del Sur", bandera: "🇰🇷" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("MX"),
    video: "Z5Z-l8JEVsI", videoLabel: "Previo partido en sede mexicana — referencia"
  },
  "pa-a4": {
    id: "pa-a4", grupo: "A", jornada: 2, fecha: "19 jun", hora: "14:00 CT", sedeId: "guadalajara",
    local: { id: "sudafrica", nombre: "Sudáfrica", bandera: "🇿🇦" },
    visitante: { id: "ecuador", nombre: "Ecuador", bandera: "🇪🇨" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("MX"),
    video: "F0Gsec_Ccjw", videoLabel: "Resumen de ambiente en fase de grupos — referencia"
  },
  "pa-a5": {
    id: "pa-a5", grupo: "A", jornada: 3, fecha: "24 jun", hora: "20:00 CT", sedeId: "guadalajara",
    local: { id: "mexico", nombre: "México", bandera: "🇲🇽" },
    visitante: { id: "ecuador", nombre: "Ecuador", bandera: "🇪🇨" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("MX"),
    video: "3K4f1IXOcAg", videoLabel: "Cánticos en estadio mexicano — referencia"
  },
  "pa-a6": {
    id: "pa-a6", grupo: "A", jornada: 3, fecha: "25 jun", hora: "17:00 CT", sedeId: "cdmx",
    local: { id: "sudafrica", nombre: "Sudáfrica", bandera: "🇿🇦" },
    visitante: { id: "corea", nombre: "Corea del Sur", bandera: "🇰🇷" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("MX"),
    video: "41fV0uN5yq8", videoLabel: "Ambiente en partido de grupos — referencia"
  },
  "pb-b1": {
    id: "pb-b1", grupo: "B", jornada: 1, fecha: "12 jun", hora: "15:00 PT", sedeId: "los-angeles",
    local: { id: "usa", nombre: "Estados Unidos", bandera: "🇺🇸" },
    visitante: { id: "australia", nombre: "Australia", bandera: "🇦🇺" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "Y1sxdLKBJco", videoLabel: "SoFi Stadium — ambiente mundialista — referencia"
  },
  "pb-b2": {
    id: "pb-b2", grupo: "B", jornada: 1, fecha: "13 jun", hora: "18:00 CT", sedeId: "houston",
    local: { id: "peru", nombre: "Perú", bandera: "🇵🇪" },
    visitante: { id: "ghana", nombre: "Ghana", bandera: "🇬🇭" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "jJ7rF2n0j0E", videoLabel: "Partido de selecciones en EE.UU. — referencia"
  },
  "pb-b3": {
    id: "pb-b3", grupo: "B", jornada: 2, fecha: "19 jun", hora: "20:00 ET", sedeId: "nueva-york",
    local: { id: "usa", nombre: "Estados Unidos", bandera: "🇺🇸" },
    visitante: { id: "ghana", nombre: "Ghana", bandera: "🇬🇭" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "EuvV2MtoaY0", videoLabel: "MetLife Stadium — previa — referencia"
  },
  "pb-b4": {
    id: "pb-b4", grupo: "B", jornada: 2, fecha: "20 jun", hora: "16:00 PT", sedeId: "seattle",
    local: { id: "peru", nombre: "Perú", bandera: "🇵🇪" },
    visitante: { id: "australia", nombre: "Australia", bandera: "🇦🇺" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "9Ggy2E11Niw", videoLabel: "Afición en estadio de la costa oeste — referencia"
  },
  "pb-b5": {
    id: "pb-b5", grupo: "B", jornada: 3, fecha: "25 jun", hora: "19:00 ET", sedeId: "miami",
    local: { id: "usa", nombre: "Estados Unidos", bandera: "🇺🇸" },
    visitante: { id: "peru", nombre: "Perú", bandera: "🇵🇪" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "Ql1_D4VJjd4", videoLabel: "Hard Rock Stadium — ambiente — referencia"
  },
  "pb-b6": {
    id: "pb-b6", grupo: "B", jornada: 3, fecha: "26 jun", hora: "17:00 PT", sedeId: "san-francisco",
    local: { id: "ghana", nombre: "Ghana", bandera: "🇬🇭" },
    visitante: { id: "australia", nombre: "Australia", bandera: "🇦🇺" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "cwQ1COkPyT4", videoLabel: "Celebración en gradas — referencia"
  },
  "pc-c1": {
    id: "pc-c1", grupo: "C", jornada: 1, fecha: "12 jun", hora: "14:00 ET", sedeId: "toronto",
    local: { id: "canada", nombre: "Canadá", bandera: "🇨🇦" },
    visitante: { id: "costa-rica", nombre: "Costa Rica", bandera: "🇨🇷" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("CA"),
    video: "2IdPL_q1-Nw", videoLabel: "BMO Field — apertura en Canadá — referencia"
  },
  "pc-c2": {
    id: "pc-c2", grupo: "C", jornada: 1, fecha: "13 jun", hora: "16:00 ET", sedeId: "boston",
    local: { id: "francia", nombre: "Francia", bandera: "🇫🇷" },
    visitante: { id: "marruecos", nombre: "Marruecos", bandera: "🇲🇦" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "cwQ1COkPyT4", videoLabel: "Francia en fase de grupos — referencia"
  },
  "pc-c3": {
    id: "pc-c3", grupo: "C", jornada: 2, fecha: "19 jun", hora: "18:00 PT", sedeId: "vancouver",
    local: { id: "canada", nombre: "Canadá", bandera: "🇨🇦" },
    visitante: { id: "marruecos", nombre: "Marruecos", bandera: "🇲🇦" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("CA"),
    video: "5Y11N-j_UM0", videoLabel: "BC Place — ambiente canadiense — referencia"
  },
  "pc-c4": {
    id: "pc-c4", grupo: "C", jornada: 2, fecha: "20 jun", hora: "15:00 ET", sedeId: "philadelphia",
    local: { id: "francia", nombre: "Francia", bandera: "🇫🇷" },
    visitante: { id: "costa-rica", nombre: "Costa Rica", bandera: "🇨🇷" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "iDvZtHYTMPA", videoLabel: "Partido en la costa este — referencia"
  },
  "pc-c5": {
    id: "pc-c5", grupo: "C", jornada: 3, fecha: "25 jun", hora: "20:00 ET", sedeId: "toronto",
    local: { id: "canada", nombre: "Canadá", bandera: "🇨🇦" },
    visitante: { id: "francia", nombre: "Francia", bandera: "🇫🇷" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("CA"),
    video: "bBmVVQnocjc", videoLabel: "Gran partido en sede canadiense — referencia"
  },
  "pc-c6": {
    id: "pc-c6", grupo: "C", jornada: 3, fecha: "26 jun", hora: "14:00 PT", sedeId: "seattle",
    local: { id: "marruecos", nombre: "Marruecos", bandera: "🇲🇦" },
    visitante: { id: "costa-rica", nombre: "Costa Rica", bandera: "🇨🇷" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "1XcIsl_mOSY", videoLabel: "Cierre de fase de grupos — referencia"
  },
  "pd-d1": {
    id: "pd-d1", grupo: "D", jornada: 1, fecha: "13 jun", hora: "19:00 CT", sedeId: "dallas",
    local: { id: "argentina", nombre: "Argentina", bandera: "🇦🇷" },
    visitante: { id: "arabia", nombre: "Arabia Saudita", bandera: "🇸🇦" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "bBmVVQnocjc", videoLabel: "Argentina campeona — referencia Qatar 2022"
  },
  "pd-d2": {
    id: "pd-d2", grupo: "D", jornada: 1, fecha: "14 jun", hora: "16:00 CT", sedeId: "kansas-city",
    local: { id: "polonia", nombre: "Polonia", bandera: "🇵🇱" },
    visitante: { id: "croacia", nombre: "Croacia", bandera: "🇭🇷" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "iDvZtHYTMPA", videoLabel: "Europa en fase de grupos — referencia"
  },
  "pd-d3": {
    id: "pd-d3", grupo: "D", jornada: 2, fecha: "20 jun", hora: "20:00 PT", sedeId: "los-angeles",
    local: { id: "argentina", nombre: "Argentina", bandera: "🇦🇷" },
    visitante: { id: "croacia", nombre: "Croacia", bandera: "🇭🇷" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "5Y11N-j_UM0", videoLabel: "Final 2022 — referencia Argentina vs Croacia"
  },
  "pd-d4": {
    id: "pd-d4", grupo: "D", jornada: 2, fecha: "21 jun", hora: "18:00 ET", sedeId: "nueva-york",
    local: { id: "arabia", nombre: "Arabia Saudita", bandera: "🇸🇦" },
    visitante: { id: "polonia", nombre: "Polonia", bandera: "🇵🇱" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "jJ7rF2n0j0E", videoLabel: "Partido sorpresa en el Mundial — referencia"
  },
  "pd-d5": {
    id: "pd-d5", grupo: "D", jornada: 3, fecha: "26 jun", hora: "16:00 PT", sedeId: "seattle",
    local: { id: "argentina", nombre: "Argentina", bandera: "🇦🇷" },
    visitante: { id: "polonia", nombre: "Polonia", bandera: "🇵🇱" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "bBmVVQnocjc", videoLabel: "Albiceleste en fase de grupos — referencia"
  },
  "pd-d6": {
    id: "pd-d6", grupo: "D", jornada: 3, fecha: "27 jun", hora: "20:00 ET", sedeId: "miami",
    local: { id: "arabia", nombre: "Arabia Saudita", bandera: "🇸🇦" },
    visitante: { id: "croacia", nombre: "Croacia", bandera: "🇭🇷" },
    estado: "programado", golesLocal: null, golesVisitante: null,
    transmision: transmisionSede("US"),
    video: "cwQ1COkPyT4", videoLabel: "Último partido del grupo — referencia"
  }
};

function getPartidoCalendario(partidoId) {
  return CALENDARIO_PARTIDOS_2026[partidoId] || null;
}

function getPartidosEquipo(equipo) {
  return (equipo.partidoIds || [])
    .map(function (id) {
      return getPartidoCalendario(id);
    })
    .filter(Boolean);
}

function getGrupoPartidos(letra) {
  return GRUPOS_2026.find(function (g) {
    return g.grupo === letra;
  });
}

function getEquipoPartidos(id) {
  var encontrado = null;
  GRUPOS_2026.some(function (g) {
    return g.equipos.some(function (e) {
      if (e.id === id) {
        encontrado = e;
        return true;
      }
      return false;
    });
  });
  return encontrado;
}

function partidosDelGrupo(letra) {
  var grupo = getGrupoPartidos(letra);
  if (!grupo) return [];
  var ids = {};
  grupo.equipos.forEach(function (e) {
    (e.partidoIds || []).forEach(function (id) {
      ids[id] = true;
    });
  });
  return Object.keys(ids)
    .map(getPartidoCalendario)
    .filter(Boolean)
    .sort(function (a, b) {
      return a.jornada - b.jornada || a.fecha.localeCompare(b.fecha);
    });
}

function getMarcadorPartido(partido) {
  if (partido.estado === "programado") {
    return { local: "—", visitante: "—", texto: "Por jugar" };
  }
  if (partido.golesLocal === null || partido.golesVisitante === null) {
    return { local: "—", visitante: "—", texto: "Sin resultado" };
  }
  return {
    local: String(partido.golesLocal),
    visitante: String(partido.golesVisitante),
    texto: partido.golesLocal + " - " + partido.golesVisitante
  };
}

function getMarcadorEquipo(partido, equipoId) {
  var m = getMarcadorPartido(partido);
  if (partido.local.id === equipoId) {
    return { propio: m.local, rival: m.visitante, texto: m.propio + " : " + m.rival };
  }
  return { propio: m.visitante, rival: m.local, texto: m.propio + " : " + m.rival };
}

function labelEstadoPartido(estado) {
  if (estado === "en_vivo") return "En vivo";
  if (estado === "finalizado") return "Finalizado";
  return "Programado";
}

function getRivalEnPartido(partido, equipoId) {
  if (partido.local.id === equipoId) return partido.visitante;
  if (partido.visitante.id === equipoId) return partido.local;
  return partido.visitante;
}
