/**
 * Mapa 3D — Logística continental Mundial 2026
 */
(function () {
  var globeInstance = null;
  var modoActivo = "sedes";
  var origenActivo = "toronto";
  var destinoActivo = "los-angeles";
  var equipoActivoId = "mexico";
  var grupoActivo = "A";

  var COLORES_PAIS = {
    US: "#003087",
    MX: "#006847",
    CA: "#D80621"
  };

  var COLORES_TRAMO = ["#FFB800", "#006847", "#003087", "#D80621"];

  function haversineKm(lat1, lng1, lat2, lng2) {
    var R = 6371;
    var dLat = ((lat2 - lat1) * Math.PI) / 180;
    var dLng = ((lng2 - lng1) * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function formatKm(km) {
    return Math.round(km).toLocaleString("es-ES") + " km";
  }

  function getSede(id) {
    return SEDES_LOGISTICA.find(function (s) {
      return s.id === id;
    });
  }

  function getGrupo(letra) {
    return GRUPOS_2026.find(function (g) {
      return g.grupo === letra;
    });
  }

  function getEquipo(id) {
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

  function calcularViajeEquipo(equipo) {
    var partidos = getPartidosEquipo(equipo);
    var sedes = partidos.map(function (p) {
      return getSede(p.sedeId);
    });
    var tramos = [];
    var total = 0;

    for (var i = 0; i < sedes.length - 1; i++) {
      var km = haversineKm(sedes[i].lat, sedes[i].lng, sedes[i + 1].lat, sedes[i + 1].lng);
      tramos.push({
        desde: sedes[i],
        hasta: sedes[i + 1],
        km: km,
        indice: i + 1
      });
      total += km;
    }

    return { sedes: sedes, tramos: tramos, total: total };
  }

  function puntosConRuta(origenId, destinoId) {
    return SEDES_LOGISTICA.map(function (s) {
      var rol = "normal";
      if (s.id === origenId) rol = "origen";
      else if (s.id === destinoId) rol = "destino";
      return puntoGlobo(s, rol, null);
    });
  }

  function puntoGlobo(sede, rol, numero) {
    return {
      lat: sede.lat,
      lng: sede.lng,
      ciudad: sede.ciudad,
      estadio: sede.estadio,
      pais: sede.pais,
      paisCod: sede.paisCod,
      rol: rol,
      numero: numero,
      color:
        rol === "origen"
          ? "#ffd966"
          : rol === "destino"
            ? "#00b359"
            : rol === "partido"
              ? "#ffd966"
              : COLORES_PAIS[sede.paisCod] || "#666"
    };
  }

  function puntosEquipo(equipo) {
    var partidos = getPartidosEquipo(equipo);
    var sedesIds = partidos.map(function (p) {
      return p.sedeId;
    });
    var unicas = {};

    return SEDES_LOGISTICA.map(function (s) {
      var idx = sedesIds.indexOf(s.id);
      if (idx === -1) {
        return puntoGlobo(s, "normal", null);
      }
      var ocurrencias = sedesIds.filter(function (id) {
        return id === s.id;
      }).length;
      var rol = ocurrencias > 0 ? "partido" : "normal";
      var numero = idx + 1;
      unicas[s.id] = (unicas[s.id] || 0) + 1;
      return puntoGlobo(s, rol, numero);
    });
  }

  function actualizarPanel(origen, destino, km) {
    var distEl = document.getElementById("logistica-distancia");
    var rutaEl = document.getElementById("logistica-ruta-info");
    var origenEl = document.getElementById("logistica-origen-nombre");
    var destinoEl = document.getElementById("logistica-destino-nombre");

    if (distEl) distEl.textContent = formatKm(km);
    if (origenEl) origenEl.textContent = origen.pais + " " + origen.ciudad;
    if (destinoEl) destinoEl.textContent = destino.pais + " " + destino.ciudad;
    if (rutaEl) {
      rutaEl.textContent =
        origen.estadio +
        " → " +
        destino.estadio +
        ". Vuelo directo aprox. " +
        Math.round(km / 800) +
        "–" +
        Math.round(km / 750) +
        " h.";
    }
  }

  function centrarGloboEnPuntos(puntos, altitud) {
    if (!globeInstance || !puntos.length) return;
    var lat =
      puntos.reduce(function (sum, p) {
        return sum + p.lat;
      }, 0) / puntos.length;
    var lng =
      puntos.reduce(function (sum, p) {
        return sum + p.lng;
      }, 0) / puntos.length;
    globeInstance.pointOfView({ lat: lat, lng: lng, altitude: altitud || 1.55 }, 1200);
  }

  function aplicarEstiloPuntos() {
    if (!globeInstance) return;
    globeInstance
      .pointColor("color")
      .pointRadius(function (d) {
        if (d.rol === "origen" || d.rol === "destino" || d.rol === "partido") return 0.55;
        return modoActivo === "equipos" ? 0.12 : 0.28;
      })
      .pointAltitude(function (d) {
        if (d.rol === "origen" || d.rol === "destino" || d.rol === "partido") return 0.045;
        return 0.01;
      })
      .pointLabel(function (d) {
        var num = d.numero ? "<span class='globe-num'>P" + d.numero + "</span> " : "";
        return (
          '<div class="globe-tooltip">' +
          num +
          "<strong>" +
          d.pais +
          " " +
          d.ciudad +
          "</strong><br>" +
          d.estadio +
          "</div>"
        );
      });
  }

  function renderRuta(origenId, destinoId) {
    var origen = getSede(origenId);
    var destino = getSede(destinoId);
    if (!origen || !destino) return;

    origenActivo = origenId;
    destinoActivo = destinoId;

    if (origenId === destinoId) {
      actualizarPanel(origen, destino, 0);
      if (globeInstance) {
        globeInstance.arcsData([]).pointsData(puntosConRuta(origenId, destinoId));
        aplicarEstiloPuntos();
      }
      return;
    }

    var km = haversineKm(origen.lat, origen.lng, destino.lat, destino.lng);
    actualizarPanel(origen, destino, km);

    if (!globeInstance) return;

    var altitud = Math.min(0.15 + km / 20000, 0.45);

    globeInstance
      .pointsData(puntosConRuta(origenId, destinoId))
      .arcsData([
        {
          startLat: origen.lat,
          startLng: origen.lng,
          endLat: destino.lat,
          endLng: destino.lng,
          color: ["#ffd966", "#00b359"]
        }
      ])
      .arcAltitude(altitud)
      .arcStroke(km > 3000 ? 0.85 : 0.65);

    aplicarEstiloPuntos();
    centrarGloboEnPuntos([origen, destino], km > 3500 ? 1.45 : 1.75);
  }

  function renderEquipo(equipoId) {
    var equipo = getEquipo(equipoId);
    if (!equipo) return;

    equipoActivoId = equipoId;
    var viaje = calcularViajeEquipo(equipo);
    var sedesPartido = viaje.sedes;

    var kmTotalEl = document.getElementById("equipo-km-total");
    var kmInfoEl = document.getElementById("equipo-km-info");

    if (kmTotalEl) kmTotalEl.textContent = formatKm(viaje.total);
    if (kmInfoEl) {
      kmInfoEl.textContent =
        equipo.bandera +
        " " +
        equipo.nombre +
        ": " +
        viaje.tramos.length +
        " tramo(s) entre sedes en fase de grupos.";
    }

    renderRankingGrupo(grupoActivo, equipoId);

    if (!globeInstance) return;

    var arcs = viaje.tramos.map(function (t, i) {
      return {
        startLat: t.desde.lat,
        startLng: t.desde.lng,
        endLat: t.hasta.lat,
        endLng: t.hasta.lng,
        km: t.km,
        color: [COLORES_TRAMO[i] || "#ffd966", COLORES_TRAMO[i + 1] || "#00b359"]
      };
    });

    globeInstance
      .pointsData(puntosEquipo(equipo))
      .arcsData(arcs)
      .arcAltitude(function (d) {
        return Math.min(0.12 + d.km / 25000, 0.4);
      })
      .arcStroke(0.75);

    aplicarEstiloPuntos();
    centrarGloboEnPuntos(sedesPartido, viaje.total > 5000 ? 1.35 : 1.6);

    if (globeInstance.controls()) {
      globeInstance.controls().autoRotate = false;
    }
  }


  function renderRankingGrupo(letra, equipoSeleccionadoId) {
    var grupo = getGrupo(letra);
    var rankingEl = document.getElementById("grupo-ranking");
    if (!grupo || !rankingEl) return;

    var filas = grupo.equipos
      .map(function (e) {
        var viaje = calcularViajeEquipo(e);
        return { equipo: e, total: viaje.total };
      })
      .sort(function (a, b) {
        return b.total - a.total;
      });

    rankingEl.innerHTML = filas
      .map(function (f, i) {
        var activo = f.equipo.id === equipoSeleccionadoId ? " ranking-card--activo" : "";
        var medalla = i === 0 ? " ranking-card--oro" : i === 1 ? " ranking-card--plata" : i === 2 ? " ranking-card--bronce" : "";
        return (
          '<li class="ranking-card' +
          activo +
          medalla +
          '" data-equipo="' +
          f.equipo.id +
          '">' +
          '<span class="ranking-pos">' +
          (i + 1) +
          "</span>" +
          '<span class="ranking-nombre">' +
          f.equipo.bandera +
          " " +
          f.equipo.nombre +
          "</span>" +
          '<span class="ranking-km">' +
          formatKm(f.total) +
          "</span>" +
          "</li>"
        );
      })
      .join("");

    rankingEl.querySelectorAll(".ranking-card").forEach(function (item) {
      item.addEventListener("click", function () {
        var id = item.getAttribute("data-equipo");
        var selEquipo = document.getElementById("logistica-equipo");
        if (selEquipo) selEquipo.value = id;
        renderEquipo(id);
      });
    });
  }

  function initGlobe(container) {
    if (globeInstance || typeof Globe === "undefined") return;

    var isOscuro = document.documentElement.getAttribute("data-tema") === "oscuro";

    globeInstance = Globe()(container)
      .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
      .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
      .backgroundColor(isOscuro ? "rgba(10,10,10,0)" : "rgba(250,250,250,0)")
      .width(container.clientWidth)
      .height(container.clientHeight)
      .pointsData(puntosConRuta(origenActivo, destinoActivo))
      .pointLat("lat")
      .pointLng("lng")
      .arcsData([])
      .arcStartLat("startLat")
      .arcStartLng("startLng")
      .arcEndLat("endLat")
      .arcEndLng("endLng")
      .arcColor("color")
      .arcAltitude(0.3)
      .arcStroke(0.7)
      .arcDashLength(0.35)
      .arcDashGap(0.25)
      .arcDashAnimateTime(2500);

    globeInstance.controls().enableZoom = true;
    globeInstance.controls().autoRotate = true;
    globeInstance.controls().autoRotateSpeed = 0.35;

    aplicarEstiloPuntos();

    if (modoActivo === "equipos") {
      renderEquipo(equipoActivoId);
    } else {
      renderRuta(origenActivo, destinoActivo);
    }
  }

  function cambiarModo(modo) {
    modoActivo = modo;
    var panelSedes = document.getElementById("panel-sedes");
    var panelEquipos = document.getElementById("panel-equipos");
    var tabs = document.querySelectorAll(".logistica-tab");
    var hint = document.querySelector(".globe-hint");

    tabs.forEach(function (tab) {
      var activo = tab.getAttribute("data-modo") === modo;
      tab.classList.toggle("activo", activo);
      tab.setAttribute("aria-selected", activo ? "true" : "false");
    });

    if (panelSedes) {
      panelSedes.hidden = modo !== "sedes";
      panelSedes.classList.toggle("oculto", modo !== "sedes");
    }
    if (panelEquipos) {
      panelEquipos.hidden = modo !== "equipos";
      panelEquipos.classList.toggle("oculto", modo !== "equipos");
    }
    if (hint) {
      hint.textContent =
        modo === "equipos"
          ? "Ruta del equipo en amarillo/verde · Elige grupo y selección en el panel"
          : "Arrastra para girar · Rueda para zoom · Pasa el cursor sobre los puntos";
    }

    if (!globeInstance) return;

    if (modo === "equipos") {
      renderEquipo(equipoActivoId);
    } else {
      if (globeInstance.controls()) globeInstance.controls().autoRotate = true;
      renderRuta(origenActivo, destinoActivo);
    }
  }

  function poblarSelectoresSedes() {
    var selOrigen = document.getElementById("logistica-origen");
    var selDestino = document.getElementById("logistica-destino");
    var presets = document.getElementById("logistica-presets");
    if (!selOrigen || !selDestino) return;

    SEDES_LOGISTICA.forEach(function (s) {
      var label = s.pais + " " + s.ciudad + " — " + s.estadio;
      selOrigen.innerHTML += '<option value="' + s.id + '">' + label + "</option>";
      selDestino.innerHTML += '<option value="' + s.id + '">' + label + "</option>";
    });

    selOrigen.value = origenActivo;
    selDestino.value = destinoActivo;

    selOrigen.addEventListener("change", function () {
      if (modoActivo === "sedes") renderRuta(selOrigen.value, selDestino.value);
    });
    selDestino.addEventListener("change", function () {
      if (modoActivo === "sedes") renderRuta(selOrigen.value, selDestino.value);
    });

    if (presets) {
      RUTAS_LOGISTICA.forEach(function (r) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn-logistica-ruta";
        btn.textContent = r.etiqueta;
        btn.addEventListener("click", function () {
          selOrigen.value = r.origen;
          selDestino.value = r.destino;
          renderRuta(r.origen, r.destino);
          var info = document.getElementById("logistica-ruta-info");
          if (info && r.dato) info.textContent = r.dato;
        });
        presets.appendChild(btn);
      });
    }
  }

  function poblarSelectoresEquipos() {
    var selGrupo = document.getElementById("logistica-grupo");
    var selEquipo = document.getElementById("logistica-equipo");
    if (!selGrupo || !selEquipo) return;

    GRUPOS_2026.forEach(function (g) {
      selGrupo.innerHTML +=
        '<option value="' + g.grupo + '">Grupo ' + g.grupo + "</option>";
    });
    selGrupo.value = grupoActivo;

    function cargarEquiposGrupo(letra) {
      var grupo = getGrupo(letra);
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
      renderEquipo(selEquipo.value);
    });

    selEquipo.addEventListener("change", function () {
      renderEquipo(selEquipo.value);
    });
  }

  function initTabs() {
    document.querySelectorAll(".logistica-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        cambiarModo(tab.getAttribute("data-modo"));
      });
    });
  }

  function initLogistica() {
    var section = document.getElementById("logistica");
    var container = document.getElementById("globe-container");
    if (!section || !container) return;

    poblarSelectoresSedes();
    poblarSelectoresEquipos();
    initTabs();
    renderRuta(origenActivo, destinoActivo);
    renderEquipo(equipoActivoId);

    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          initGlobe(container);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "80px" }
    );
    observer.observe(section);

    window.addEventListener("resize", function () {
      if (globeInstance && container) {
        globeInstance.width(container.clientWidth).height(container.clientHeight);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initLogistica);
})();
