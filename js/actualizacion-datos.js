/**
 * Sincronización de datos — lee data/partidos-live.json cada 5 min
 * y fusiona resultados con el calendario local.
 */
var DatosEnVivo = (function () {
  var INTERVALO_MS = 5 * 60 * 1000;
  var DATA_URL = "data/partidos-live.json";

  var estado = {
    fuente: "Calendario local (JS)",
    ultimaSync: null,
    partidosActualizados: 0,
    sincronizando: false,
    error: null
  };

  function formatearFecha(iso) {
    if (!iso) return "—";
    try {
      return new Date(iso).toLocaleString("es", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (e) {
      return iso;
    }
  }

  function renderAvisoGlobal() {
    var aviso = document.getElementById("aviso-datos-global");
    if (!aviso) return;

    aviso.innerHTML =
      '<div class="aviso-global-inner">' +
      '<span class="aviso-global-icon" aria-hidden="true">ℹ️</span>' +
      '<div class="aviso-global-texto">' +
      "<strong>Datos ilustrativos — no es información oficial en vivo.</strong> " +
      "Historia y palmarés son fijos. Los partidos se pueden actualizar editando " +
      "<code>data/partidos-live.json</code> en el repositorio; la web los revisa cada 5 minutos." +
      "</div>" +
      '<button type="button" class="aviso-global-cerrar" id="aviso-datos-cerrar" aria-label="Ocultar aviso">✕</button>' +
      "</div>";

    var btn = document.getElementById("aviso-datos-cerrar");
    if (btn) {
      btn.addEventListener("click", function () {
        aviso.classList.add("aviso-global--oculto");
        try {
          sessionStorage.setItem("mundial-aviso-oculto", "1");
        } catch (e) {}
      });
    }

    try {
      if (sessionStorage.getItem("mundial-aviso-oculto") === "1") {
        aviso.classList.add("aviso-global--oculto");
      }
    } catch (e) {}
  }

  function renderBarraPartidos() {
    var barra = document.getElementById("partidos-sync-bar");
    if (!barra) return;

    var claseEstado = estado.error
      ? "partidos-sync--error"
      : estado.sincronizando
        ? "partidos-sync--cargando"
        : "partidos-sync--ok";

    barra.className = "partidos-sync-bar " + claseEstado;
    barra.innerHTML =
      '<div class="partidos-sync-info">' +
      '<span class="partidos-sync-dot" aria-hidden="true"></span>' +
      "<span><strong>Fuente:</strong> " +
      estado.fuente +
      "</span>" +
      (estado.ultimaSync
        ? " · <span><strong>Última revisión:</strong> " + formatearFecha(estado.ultimaSync) + "</span>"
        : "") +
      (estado.partidosActualizados > 0
        ? ' · <span class="partidos-sync-badge">' +
          estado.partidosActualizados +
          " partido(s) actualizado(s)</span>"
        : "") +
      (estado.error ? ' · <span class="partidos-sync-error">' + estado.error + "</span>" : "") +
      "</div>" +
      '<button type="button" class="partidos-sync-btn" id="partidos-sync-btn">↻ Actualizar ahora</button>';

    var btn = document.getElementById("partidos-sync-btn");
    if (btn) {
      btn.onclick = function () {
        sincronizar();
      };
    }
  }

  function notificarCambio() {
    renderBarraPartidos();
    document.dispatchEvent(new CustomEvent("mundial:datos-actualizados"));
  }

  function sincronizar() {
    if (estado.sincronizando) {
      return Promise.resolve();
    }

    estado.sincronizando = true;
    estado.error = null;
    renderBarraPartidos();

    var url = DATA_URL + "?t=" + Date.now();

    return fetch(url)
      .then(function (res) {
        if (!res.ok) {
          throw new Error("No se encontró " + DATA_URL);
        }
        return res.json();
      })
      .then(function (data) {
        if (data && data.partidos && typeof aplicarOverridesPartidos === "function") {
          estado.partidosActualizados = aplicarOverridesPartidos(data.partidos);
        } else {
          estado.partidosActualizados = 0;
        }

        if (data && data.meta) {
          estado.fuente = data.meta.fuente || "Archivo remoto";
          estado.ultimaSync = data.meta.actualizado || new Date().toISOString();
        } else {
          estado.fuente = "Archivo remoto";
          estado.ultimaSync = new Date().toISOString();
        }
      })
      .catch(function (err) {
        estado.fuente = "Calendario local (sin conexión al JSON)";
        estado.partidosActualizados = 0;
        estado.error =
          err && err.message
            ? "Modo offline: abre con un servidor local o GitHub Pages."
            : "Error al cargar datos.";
      })
      .then(function () {
        estado.sincronizando = false;
        notificarCambio();
      });
  }

  function init() {
    renderAvisoGlobal();
    renderBarraPartidos();
    return sincronizar().then(function () {
      setInterval(sincronizar, INTERVALO_MS);
    });
  }

  return {
    init: init,
    sincronizar: sincronizar,
    getEstado: function () {
      return estado;
    }
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  DatosEnVivo.init();
});
