/**
 * Mundial — Interactividad dinámica
 */

document.addEventListener("DOMContentLoaded", init);

function init() {
  renderCountdown();
  renderMundial2026();
  initTimeline();
  renderTablaCampeones();
  renderFiltroPaises();
  renderRanking();
  renderAficionados();
  renderIncidencias();
  renderComparativa();
  initTabs();
  initTema();
  initNav();
  initReveal();
  initCursorGlow();
  initFormulario();
  cargarPronosticos();
}

/* --- Cuenta atrás del hero --- */
var countdownInterval = null;

function renderCountdown() {
  var contenedor = document.getElementById("hero-stats");
  if (!contenedor) return;

  contenedor.className = "hero-countdown";
  contenedor.setAttribute("role", "timer");
  contenedor.setAttribute("aria-live", "polite");
  contenedor.innerHTML =
    '<p class="countdown-etiqueta">⏱ Cuenta atrás para el inicio</p>' +
    '<div class="countdown-grid">' +
      '<div class="countdown-item countdown-item--destacado">' +
        '<span class="countdown-num" id="cd-dias">--</span>' +
        '<span class="countdown-label">Días</span>' +
      '</div>' +
      '<div class="countdown-item">' +
        '<span class="countdown-num" id="cd-horas">--</span>' +
        '<span class="countdown-label">Horas</span>' +
      '</div>' +
      '<div class="countdown-item">' +
        '<span class="countdown-num" id="cd-minutos">--</span>' +
        '<span class="countdown-label">Minutos</span>' +
      '</div>' +
      '<div class="countdown-item">' +
        '<span class="countdown-num" id="cd-segundos">--</span>' +
        '<span class="countdown-label">Segundos</span>' +
      '</div>' +
    '</div>' +
    '<p class="countdown-fecha">11 de junio de 2026<br>Apertura del torneo</p>';

  actualizarCountdown();
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(actualizarCountdown, 1000);
}

function actualizarCountdown() {
  var inicio = new Date(MUNDIAL_2026.fechaInicio);
  var ahora = new Date();
  var diff = inicio - ahora;

  var elDias = document.getElementById("cd-dias");
  var elHoras = document.getElementById("cd-horas");
  var elMinutos = document.getElementById("cd-minutos");
  var elSegundos = document.getElementById("cd-segundos");
  if (!elDias) return;

  if (diff <= 0) {
    elDias.textContent = "0";
    elHoras.textContent = "00";
    elMinutos.textContent = "00";
    elSegundos.textContent = "00";
    var etiqueta = document.querySelector(".countdown-etiqueta");
    if (etiqueta) etiqueta.textContent = "⚽ ¡El Mundial 2026 ya ha comenzado!";
    if (countdownInterval) clearInterval(countdownInterval);
    return;
  }

  var dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  var minutos = Math.floor((diff / (1000 * 60)) % 60);
  var segundos = Math.floor((diff / 1000) % 60);

  elDias.textContent = String(dias);
  elHoras.textContent = String(horas).padStart(2, "0");
  elMinutos.textContent = String(minutos).padStart(2, "0");
  elSegundos.textContent = String(segundos).padStart(2, "0");
}

function animarContadores() {
  var elementos = document.querySelectorAll(".stat-num[data-target]");
  elementos.forEach(function (el) {
    var objetivo = parseInt(el.dataset.target, 10);
    if (isNaN(objetivo)) {
      el.textContent = el.dataset.target;
      return;
    }
    var duracion = 1200;
    var inicio = performance.now();
    function tick(ahora) {
      var progreso = Math.min((ahora - inicio) / duracion, 1);
      var ease = 1 - Math.pow(1 - progreso, 3);
      el.textContent = Math.floor(ease * objetivo);
      if (progreso < 1) requestAnimationFrame(tick);
      else el.textContent = objetivo;
    }
    requestAnimationFrame(tick);
  });
}

/* --- Mundial 2026 --- */
var IMG_FALLBACK = "img/mundial-2026/partidos.jpg";

function imgTag(src, alt) {
  return '<img src="' + src + '" alt="' + alt + '" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=\'' + IMG_FALLBACK + '\'">';
}

function renderMundial2026() {
  var grid = document.getElementById("grid-2026");
  var sedes = document.getElementById("sedes-grid");
  if (!grid || !sedes) return;

  var m = MUNDIAL_2026;

  grid.innerHTML =
    '<div class="mundial-2026-layout">' +
      '<article class="banner-2026">' +
        '<div class="banner-2026-tricolor" aria-hidden="true"></div>' +
        imgTag(m.imagenBanner, "Afición en un estadio durante un partido de fútbol").replace("<img", '<img class="banner-2026-bg"') +
        '<div class="banner-2026-overlay" aria-hidden="true"></div>' +
        '<div class="banner-2026-grid">' +
          '<div class="banner-2026-body">' +
            '<div class="banner-2026-top">' +
              '<div class="banner-2026-badges">' +
                '<span class="badge-2026 badge-2026-live">● En preparación</span>' +
                '<span class="badge-2026">Jun–Jul 2026</span>' +
              '</div>' +
              '<div class="banner-2026-banderas" aria-hidden="true">' +
                m.banderas.map(function (b) { return '<span class="bandera-float">' + b + '</span>'; }).join("") +
              '</div>' +
            '</div>' +
            '<h3 class="banner-2026-titulo">' + m.titulo + '</h3>' +
            '<p class="banner-2026-meta">' + m.fechas + '</p>' +
            '<p class="banner-2026-desc">' + m.descripcion + '</p>' +
            '<div class="banner-2026-stats">' +
              '<div class="stat-pill stat-pill--verde"><strong>' + m.equipos + '</strong><span>Selecciones</span></div>' +
              '<div class="stat-pill stat-pill--azul"><strong>' + m.partidos + '</strong><span>Partidos</span></div>' +
              '<div class="stat-pill stat-pill--rojo"><strong>' + m.sedes + '</strong><span>Sedes</span></div>' +
              '<div class="stat-pill stat-pill--dorado"><strong>3</strong><span>Países</span></div>' +
            '</div>' +
          '</div>' +
          '<div class="banner-2026-paises">' +
            m.imagenesPaises.map(function (p) {
              return '<figure class="pais-card pais-card--' + p.pais.toLowerCase().replace("é", "e").replace("á", "a") + '" style="--pais-color:' + p.color + '">' +
                imgTag(p.img, p.pais + " — sede del Mundial 2026") +
                '<figcaption><span>' + p.bandera + '</span> ' + p.pais + '</figcaption>' +
              '</figure>';
            }).join("") +
          '</div>' +
        '</div>' +
      '</article>' +
      '<div class="cards-2026">' +
        m.novedades.map(function (n, i) {
          var esLogistica = n.titulo === "Logística continental";
          var esPartidos = n.titulo === "104 partidos";
          var tag = esLogistica || esPartidos ? "a" : "article";
          var href = esLogistica ? "#logistica" : esPartidos ? "#partidos" : "";
          var attrs = href
            ? ' href="' + href + '" class="card-2026 card-2026--' + (i + 1) + ' card-2026--link"'
            : ' class="card-2026 card-2026--' + (i + 1) + '"';
          return '<' + tag + attrs + '>' +
            '<div class="card-2026-img">' +
              imgTag(n.imagen, n.titulo) +
              '<span class="card-2026-icon">' + n.icono + '</span>' +
            '</div>' +
            '<div class="card-2026-content">' +
              '<span class="card-2026-num">0' + (i + 1) + '</span>' +
              '<h3>' + n.titulo + '</h3>' +
              '<p>' + n.texto + '</p>' +
              (esLogistica ? '<span class="card-2026-cta">Ver mapa 3D →</span>' : '') +
              (esPartidos ? '<span class="card-2026-cta">Ver calendario →</span>' : '') +
            '</div>' +
          '</' + tag + '>';
        }).join("") +
      '</div>' +
    '</div>';

  var paisClase = { "🇲🇽": "sede-mx", "🇺🇸": "sede-us", "🇨🇦": "sede-ca" };

  sedes.innerHTML = m.ciudades.map(function (c) {
    var clase = paisClase[c.pais] || "";
    return '<article class="sede-card ' + clase + '">' +
      '<div class="sede-card-img">' +
        imgTag(c.imagen, c.ciudad + " — " + c.estadio) +
        '<span class="sede-bandera-overlay">' + c.pais + '</span>' +
      '</div>' +
      '<div class="sede-card-inner">' +
        '<h4>' + c.ciudad + '</h4>' +
        '<p class="estadio">' + c.estadio + '</p>' +
        '<p class="dato">' + c.dato + '</p>' +
      '</div>' +
    '</article>';
  }).join("");
}

/* --- Timeline interactiva --- */
function initTimeline() {
  var slider = document.getElementById("timeline-slider");
  var yearLabel = document.getElementById("timeline-year");
  var card = document.getElementById("timeline-card");
  var track = document.getElementById("timeline-track");
  if (!slider || !card || !track) return;

  var anios = MUNDIALES.map(function (m) { return m.anio; });

  track.innerHTML = MUNDIALES.map(function (m) {
    return '<button class="timeline-dot" data-anio="' + m.anio + '" aria-label="Mundial ' + m.anio + '">' + String(m.anio).slice(2) + "</button>";
  }).join("");

  function mostrar(anio) {
    var datos = MUNDIALES.find(function (m) { return m.anio === anio; });
    if (!datos) return;

    yearLabel.textContent = anio;
    slider.value = anio;

    card.style.opacity = "0";
    card.style.transform = "translateY(8px)";

    setTimeout(function () {
      card.innerHTML =
        '<div class="timeline-card-header">' +
          '<span class="bandera">' + datos.bandera + "</span>" +
          "<div><h3>" + datos.sede + " " + datos.anio + "</h3>" +
          '<p class="meta">Campeón: ' + datos.campeon + " · Subcampeón: " + datos.subcampeon + "</p></div>" +
        "</div>" +
        '<p class="resultado">' + datos.bandera + " " + datos.campeon + " " + datos.resultado + "</p>" +
        '<p class="dato">' + datos.dato + "</p>";

      card.style.transition = "opacity 0.3s, transform 0.3s";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 150);

    track.querySelectorAll(".timeline-dot").forEach(function (dot) {
      dot.classList.toggle("activo", parseInt(dot.dataset.anio, 10) === anio);
    });

    var dotActivo = track.querySelector('[data-anio="' + anio + '"]');
    if (dotActivo) {
      dotActivo.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  slider.min = anios[0];
  slider.max = anios[anios.length - 1];
  slider.step = 1;

  slider.addEventListener("input", function () {
    var valor = parseInt(slider.value, 10);
    var cercano = anios.reduce(function (prev, curr) {
      return Math.abs(curr - valor) < Math.abs(prev - valor) ? curr : prev;
    });
    mostrar(cercano);
  });

  track.addEventListener("click", function (e) {
    var dot = e.target.closest(".timeline-dot");
    if (dot) mostrar(parseInt(dot.dataset.anio, 10));
  });

  mostrar(anios[anios.length - 1]);
}

/* --- Tabla campeones --- */
var filtroPaisActual = "todos";

function renderTablaCampeones(filtro) {
  var tbody = document.getElementById("tbody-campeones");
  if (!tbody) return;

  var busqueda = (filtro || "").toLowerCase();

  tbody.innerHTML = MUNDIALES.map(function (m) {
    var visible =
      (filtroPaisActual === "todos" || m.campeon === filtroPaisActual) &&
      (!busqueda ||
        String(m.anio).includes(busqueda) ||
        m.campeon.toLowerCase().includes(busqueda) ||
        m.sede.toLowerCase().includes(busqueda));

    return '<tr class="' + (visible ? "" : "oculto-fila") + '">' +
      "<td><strong>" + m.anio + "</strong></td>" +
      "<td>" + m.sede + "</td>" +
      "<td>" + m.bandera + " " + m.campeon + "</td>" +
      "<td>" + m.subcampeon + "</td>" +
      "<td>" + m.resultado + "</td>" +
      "<td>" + m.dato + "</td>" +
    "</tr>";
  }).join("");
}

function renderFiltroPaises() {
  var contenedor = document.getElementById("filtro-paises");
  var buscar = document.getElementById("buscar-campeon");
  if (!contenedor) return;

  var paises = ["todos"].concat(RANKING_COPAS.map(function (r) { return r.pais; }));

  contenedor.innerHTML = paises.map(function (p) {
    var label = p === "todos" ? "Todos" : p;
    return '<button class="filtro-btn' + (p === "todos" ? " activo" : "") + '" data-pais="' + p + '">' + label + "</button>";
  }).join("");

  contenedor.addEventListener("click", function (e) {
    var btn = e.target.closest(".filtro-btn");
    if (!btn) return;
    filtroPaisActual = btn.dataset.pais;
    contenedor.querySelectorAll(".filtro-btn").forEach(function (b) {
      b.classList.toggle("activo", b === btn);
    });
    renderTablaCampeones(buscar ? buscar.value : "");
  });

  if (buscar) {
    buscar.addEventListener("input", function () {
      renderTablaCampeones(buscar.value);
    });
  }
}

function renderRanking() {
  var contenedor = document.getElementById("ranking-copas");
  if (!contenedor) return;

  contenedor.innerHTML = RANKING_COPAS.map(function (r) {
    return '<div class="ranking-item">' +
      "<span>" + r.bandera + " " + r.pais + "</span>" +
      '<span class="copas">' + r.copas + "</span>" +
    "</div>";
  }).join("");
}

/* --- Aficionados tabs --- */
function renderAficionados() {
  renderFanPanel("panel-celebraciones", AFICIONADOS.celebraciones, true);
  renderFanPanel("panel-tradiciones", AFICIONADOS.tradiciones, false);
  renderFanPanel("panel-impacto", AFICIONADOS.impacto, false);
  initFanVideos();
}

function renderFanPanel(id, items, conAnio) {
  var panel = document.getElementById(id);
  if (!panel) return;

  panel.innerHTML = items.map(function (item, index) {
    var videoId = "fan-video-" + id + "-" + index;
    var imgHtml = imgTag(item.imagen, item.titulo).replace("<img ", '<img class="fan-card-img" ');
    return (
      '<article class="fan-card fan-card--' + ((index % 3) + 1) + '">' +
      '<div class="fan-card-tricolor" aria-hidden="true"></div>' +
      '<div class="fan-card-media">' +
      imgHtml +
      '<div class="fan-card-overlay">' +
      '<span class="fan-card-emoji">' + item.emoji + "</span>" +
      (conAnio ? '<span class="fan-card-anio">' + item.anio + "</span>" : "") +
      "</div>" +
      "</div>" +
      '<div class="fan-card-body">' +
      "<h4>" + item.titulo + "</h4>" +
      "<p>" + item.texto + "</p>" +
      '<button type="button" class="fan-card-btn-video" data-target="' + videoId + '" aria-expanded="false">' +
      "▶ Ver video" +
      "</button>" +
      '<div class="fan-card-video oculto" id="' + videoId + '">' +
      '<div class="video-responsive">' +
      '<iframe title="' + item.videoLabel + '" data-src="https://www.youtube-nocookie.com/embed/' + item.video + '?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' +
      "</div>" +
      '<p class="fan-video-caption">' + item.videoLabel + "</p>" +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }).join("");
}

function initFanVideos() {
  document.querySelectorAll(".fan-card-btn-video").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = btn.dataset.target;
      var contenedor = document.getElementById(targetId);
      if (!contenedor) return;

      var iframe = contenedor.querySelector("iframe");
      var abierto = !contenedor.classList.contains("oculto");

      document.querySelectorAll(".fan-card-video").forEach(function (v) {
        if (v.id !== targetId) {
          v.classList.add("oculto");
          var f = v.querySelector("iframe");
          if (f) f.removeAttribute("src");
          var b = document.querySelector('[data-target="' + v.id + '"]');
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
        if (iframe && iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
        }
        btn.setAttribute("aria-expanded", "true");
        btn.textContent = "✕ Ocultar video";
        contenedor.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  });
}

function cerrarVideosAficion() {
  document.querySelectorAll(".fan-card-video").forEach(function (v) {
    v.classList.add("oculto");
    var f = v.querySelector("iframe");
    if (f) f.removeAttribute("src");
  });
  document.querySelectorAll(".fan-card-btn-video").forEach(function (b) {
    b.setAttribute("aria-expanded", "false");
    b.textContent = "▶ Ver video";
  });
}

function initTabs() {
  var tabs = document.getElementById("tabs-aficion");
  if (!tabs) return;

  tabs.addEventListener("click", function (e) {
    var tab = e.target.closest(".tab");
    if (!tab) return;

    cerrarVideosAficion();

    var nombre = tab.dataset.tab;
    tabs.querySelectorAll(".tab").forEach(function (t) {
      var activo = t === tab;
      t.classList.toggle("activo", activo);
      t.setAttribute("aria-selected", activo ? "true" : "false");
    });

    document.querySelectorAll(".tab-panel").forEach(function (p) {
      p.classList.remove("activo");
      p.hidden = true;
    });

    var panel = document.getElementById("panel-" + nombre);
    if (panel) {
      panel.classList.add("activo");
      panel.hidden = false;
    }
  });
}

/* --- Acordeón incidencias --- */
function renderIncidencias() {
  var contenedor = document.getElementById("acordeon-incidencias");
  if (!contenedor) return;

  contenedor.innerHTML = INCIDENCIAS.map(function (inc, i) {
    return '<div class="acordeon-item' + (i === 0 ? " abierto" : "") + '">' +
      '<button class="acordeon-header" aria-expanded="' + (i === 0) + '">' +
        '<div class="acordeon-header-left">' +
          '<span class="acordeon-anio">' + inc.anio + "</span>" +
          "<h4>" + inc.titulo + "</h4>" +
        "</div>" +
        '<span class="acordeon-icono">+</span>' +
      "</button>" +
      '<div class="acordeon-body" style="max-height:' + (i === 0 ? "200px" : "0") + '">' +
        '<div class="acordeon-body-inner">' + inc.texto + "</div>" +
      "</div>" +
    "</div>";
  }).join("");

  var primerBody = contenedor.querySelector(".acordeon-item.abierto .acordeon-body");
  if (primerBody) primerBody.style.maxHeight = primerBody.scrollHeight + "px";

  contenedor.addEventListener("click", function (e) {
    var header = e.target.closest(".acordeon-header");
    if (!header) return;

    var item = header.closest(".acordeon-item");
    var body = item.querySelector(".acordeon-body");
    var abierto = item.classList.contains("abierto");

    contenedor.querySelectorAll(".acordeon-item").forEach(function (el) {
      el.classList.remove("abierto");
      el.querySelector(".acordeon-body").style.maxHeight = "0";
      el.querySelector(".acordeon-header").setAttribute("aria-expanded", "false");
    });

    if (!abierto) {
      item.classList.add("abierto");
      body.style.maxHeight = body.scrollHeight + "px";
      header.setAttribute("aria-expanded", "true");
    }
  });
}

/* --- Comparativa primer vs último --- */
function renderComparativa() {
  var contenedor = document.getElementById("comparativa");
  if (!contenedor) return;

  contenedor.innerHTML = [COMPARATIVA.primero, COMPARATIVA.ultimo].map(function (c) {
    return '<article class="comp-card">' +
      '<div class="comp-card-header">' +
        '<span class="bandera">' + c.bandera + "</span>" +
        "<div><p class='anio-label'>" + c.anio + "</p><h3>" + c.titulo + "</h3></div>" +
      "</div>" +
      '<div class="comp-datos">' +
        c.datos.map(function (d) {
          return '<div class="comp-dato"><p class="comp-dato-label">' + d.label + '</p><p class="comp-dato-valor">' + d.valor + "</p></div>";
        }).join("") +
      "</div>" +
      '<p class="comp-historia">' + c.historia + "</p>" +
    "</article>";
  }).join("");
}

/* --- Tema oscuro --- */
function initTema() {
  var btn = document.getElementById("btn-tema");
  var guardado = localStorage.getItem("mundial-tema");

  if (guardado === "oscuro") {
    document.documentElement.setAttribute("data-tema", "oscuro");
  }

  if (btn) {
    btn.addEventListener("click", function () {
      var oscuro = document.documentElement.getAttribute("data-tema") === "oscuro";
      if (oscuro) {
        document.documentElement.removeAttribute("data-tema");
        localStorage.setItem("mundial-tema", "claro");
      } else {
        document.documentElement.setAttribute("data-tema", "oscuro");
        localStorage.setItem("mundial-tema", "oscuro");
      }
    });
  }
}

/* --- Nav móvil --- */
function initNav() {
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var abierto = links.classList.toggle("abierto");
      toggle.setAttribute("aria-expanded", abierto);
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("abierto");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

/* --- Scroll reveal --- */
function initReveal() {
  var elementos = document.querySelectorAll(".reveal");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elementos.forEach(function (el) { observer.observe(el); });
}

/* --- Cursor glow --- */
function initCursorGlow() {
  var glow = document.getElementById("cursor-glow");
  if (!glow || !window.matchMedia("(hover: hover)").matches) return;

  document.addEventListener("mousemove", function (e) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

/* --- Formulario pronóstico --- */
function initFormulario() {
  var form = document.getElementById("form-pronostico");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var input = document.getElementById("equipo");
    var resultado = document.getElementById("resultado-pronostico");
    var valor = input.value.trim();

    if (!valor) {
      resultado.textContent = "Escribe el nombre de una selección.";
      resultado.style.color = "#c0392b";
      input.focus();
      return;
    }

    resultado.style.color = "";
    resultado.textContent = "Tu pronóstico para 2026: " + valor + " — ¡Ojalá se cumpla!";

    var pronosticos = JSON.parse(localStorage.getItem("mundial-pronosticos") || "[]");
    pronosticos.unshift(valor);
    if (pronosticos.length > 12) pronosticos.pop();
    localStorage.setItem("mundial-pronosticos", JSON.stringify(pronosticos));

    renderPronosticosNube(pronosticos);
    form.reset();
  });
}

function cargarPronosticos() {
  var pronosticos = JSON.parse(localStorage.getItem("mundial-pronosticos") || "[]");
  renderPronosticosNube(pronosticos);
}

function renderPronosticosNube(lista) {
  var contenedor = document.getElementById("pronosticos-nube");
  if (!contenedor || !lista.length) return;

  contenedor.innerHTML = "<p style='font-size:0.8rem;color:var(--text-light);width:100%;margin-bottom:0.25rem'>Pronósticos recientes:</p>" +
    lista.map(function (p) {
      return '<span class="pronostico-tag">' + p + "</span>";
    }).join("");
}
