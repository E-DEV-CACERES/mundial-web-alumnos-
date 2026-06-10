/**
 * Sección Partidos — resultados, sedes y transmisión en vídeo
 */
(function () {
  var grupoActivo = "A";
  var equipoActivoId = "mexico";
  var selectoresListos = false;

  function getSede(id) {
    return SEDES_LOGISTICA.find(function (s) {
      return s.id === id;
    });
  }

  function renderGrupoResultados(letra) {
    var contenedor = document.getElementById("grupo-resultados");
    if (!contenedor) return;

    var partidos = partidosDelGrupo(letra);
    contenedor.innerHTML =
      '<table class="tabla-resultados">' +
      "<thead><tr><th>Fecha</th><th>Partido</th><th>Resultado</th><th>Estado</th></tr></thead><tbody>" +
      partidos
        .map(function (p) {
          var m = getMarcadorPartido(p);
          return (
            "<tr>" +
            "<td>" +
            p.fecha +
            " · " +
            p.hora +
            "</td>" +
            "<td>" +
            p.local.bandera +
            " " +
            p.local.nombre +
            " <span class='tabla-vs'>vs</span> " +
            p.visitante.bandera +
            " " +
            p.visitante.nombre +
            "</td>" +
            "<td><strong class='tabla-marcador'>" +
            m.texto +
            "</strong></td>" +
            "<td><span class='partido-estado partido-estado--" +
            p.estado +
            "'>" +
            labelEstadoPartido(p.estado) +
            "</span></td>" +
            "</tr>"
          );
        })
        .join("") +
      "</tbody></table>";
  }

  function buildPartidoCard(p, equipo, index) {
    var sede = getSede(p.sedeId);
    var rival = getRivalEnPartido(p, equipo.id);
    var marcador = getMarcadorEquipo(p, equipo.id);
    var videoId = "partido-video-" + p.id;

    return (
      '<li class="partido-ticket partido-ticket--' +
      ((index % 3) + 1) +
      " partido-ticket--" +
      p.estado +
      '">' +
      '<div class="partido-ticket-tricolor" aria-hidden="true"></div>' +
      '<span class="partido-ticket-num" aria-hidden="true">P' +
      (index + 1) +
      "</span>" +
      '<header class="partido-ticket-head">' +
      '<div class="partido-ticket-head-izq">' +
      '<span class="partido-ticket-jornada">Grupo ' +
      p.grupo +
      " · J" +
      p.jornada +
      "</span>" +
      '<time class="partido-ticket-fecha" datetime="2026-06">' +
      p.fecha +
      " · " +
      p.hora +
      "</time>" +
      "</div>" +
      '<span class="partido-ticket-estado partido-ticket-estado--' +
      p.estado +
      '">' +
      labelEstadoPartido(p.estado) +
      "</span>" +
      "</header>" +
      '<div class="partido-ticket-marcador">' +
      '<div class="partido-ticket-equipo partido-ticket-equipo--local">' +
      '<span class="partido-ticket-bandera">' +
      equipo.bandera +
      "</span>" +
      '<span class="partido-ticket-nombre">' +
      equipo.nombre +
      "</span>" +
      "</div>" +
      '<div class="partido-ticket-score">' +
      '<strong class="partido-ticket-goles">' +
      marcador.texto +
      "</strong>" +
      '<span class="partido-ticket-vs">VS</span>' +
      "</div>" +
      '<div class="partido-ticket-equipo partido-ticket-equipo--visit">' +
      '<span class="partido-ticket-bandera">' +
      rival.bandera +
      "</span>" +
      '<span class="partido-ticket-nombre">' +
      rival.nombre +
      "</span>" +
      "</div>" +
      "</div>" +
      '<div class="partido-ticket-sede">' +
      '<span class="partido-ticket-sede-icon" aria-hidden="true">🏟</span>' +
      "<div>" +
      '<span class="partido-ticket-sede-ciudad">' +
      (sede ? sede.pais + " " + sede.ciudad : "") +
      "</span>" +
      '<strong class="partido-ticket-sede-estadio">' +
      (sede ? sede.estadio : "") +
      "</strong>" +
      "</div>" +
      "</div>" +
      '<footer class="partido-ticket-pie">' +
      '<div class="partido-ticket-tv">' +
      '<span class="partido-ticket-tv-label">TV</span>' +
      p.transmision.tv +
      "</div>" +
      '<div class="partido-ticket-stream">' +
      '<span class="partido-ticket-stream-label">Stream</span>' +
      p.transmision.streaming +
      "</div>" +
      '<button type="button" class="partido-ticket-btn" data-target="' +
      videoId +
      '" aria-expanded="false">▶ Ver video</button>' +
      "</footer>" +
      '<div class="partido-ticket-video oculto" id="' +
      videoId +
      '">' +
      '<div class="video-responsive">' +
      '<iframe title="' +
      p.videoLabel +
      '" data-src="https://www.youtube-nocookie.com/embed/' +
      p.video +
      '?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' +
      "</div>" +
      '<p class="partido-ticket-video-caption">' +
      p.videoLabel +
      "</p>" +
      "</div>" +
      "</li>"
    );
  }

  function renderPartidosEquipo(equipoId) {
    var equipo = getEquipoPartidos(equipoId);
    var listaEl = document.getElementById("partidos-lista");
    if (!equipo || !listaEl) return;

    equipoActivoId = equipoId;
    var partidos = getPartidosEquipo(equipo);

    listaEl.innerHTML = partidos
      .map(function (p, i) {
        return buildPartidoCard(p, equipo, i);
      })
      .join("");

    initPartidoVideos();
  }

  function initPartidoVideos() {
    document.querySelectorAll("#partidos-lista .partido-ticket-btn").forEach(function (btn) {
      btn.onclick = function (e) {
        e.stopPropagation();
        var targetId = btn.getAttribute("data-target");
        var contenedor = document.getElementById(targetId);
        if (!contenedor) return;

        var iframe = contenedor.querySelector("iframe");
        var abierto = !contenedor.classList.contains("oculto");

        document.querySelectorAll("#partidos-lista .partido-ticket-video").forEach(function (v) {
          if (v.id !== targetId) {
            v.classList.add("oculto");
            var f = v.querySelector("iframe");
            if (f) f.removeAttribute("src");
            var b = document.querySelector('.partido-ticket-btn[data-target="' + v.id + '"]');
            if (b) {
              b.setAttribute("aria-expanded", "false");
              b.textContent = "▶ Ver video";
            }
          }
        });

        if (abierto) {
          contenedor.classList.add("oculto");
          if (iframe) iframe.removeAttribute("src");
          btn.setAttribute("aria-expanded", "false");
          btn.textContent = "▶ Ver video";
        } else {
          contenedor.classList.remove("oculto");
          if (iframe && iframe.dataset.src) iframe.src = iframe.dataset.src;
          btn.setAttribute("aria-expanded", "true");
          btn.textContent = "✕ Ocultar";
        }
      };
    });
  }

  function poblarSelectores() {
    var selGrupo = document.getElementById("partidos-grupo");
    var selEquipo = document.getElementById("partidos-equipo");
    if (!selGrupo || !selEquipo) return;

    GRUPOS_2026.forEach(function (g) {
      selGrupo.innerHTML += '<option value="' + g.grupo + '">Grupo ' + g.grupo + "</option>";
    });
    selGrupo.value = grupoActivo;

    function cargarEquiposGrupo(letra) {
      var grupo = getGrupoPartidos(letra);
      if (!grupo) return;
      grupoActivo = letra;
      selEquipo.innerHTML = "";
      grupo.equipos.forEach(function (e) {
        selEquipo.innerHTML +=
          '<option value="' + e.id + '">' + e.bandera + " " + e.nombre + "</option>";
      });
      var existe = grupo.equipos.some(function (e) {
        return e.id === equipoActivoId;
      });
      if (!existe) equipoActivoId = grupo.equipos[0].id;
      selEquipo.value = equipoActivoId;
    }

    cargarEquiposGrupo(grupoActivo);

    selGrupo.addEventListener("change", function () {
      cargarEquiposGrupo(selGrupo.value);
      renderGrupoResultados(selGrupo.value);
      renderPartidosEquipo(selEquipo.value);
    });

    selEquipo.addEventListener("change", function () {
      renderPartidosEquipo(selEquipo.value);
    });
  }

  function refreshPartidosUI() {
    renderGrupoResultados(grupoActivo);
    renderPartidosEquipo(equipoActivoId);
  }

  function initPartidos() {
    if (!document.getElementById("partidos")) return;
    if (!selectoresListos) {
      poblarSelectores();
      selectoresListos = true;
    }
    refreshPartidosUI();
  }

  document.addEventListener("DOMContentLoaded", initPartidos);
  document.addEventListener("mundial:datos-actualizados", refreshPartidosUI);
})();
