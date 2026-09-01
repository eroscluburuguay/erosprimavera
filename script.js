/* ==========================================================================
   EROS · Elegí tu RRPP
   script.js

   Para agregar un nuevo RRPP, sumá un objeto al array RRPP_LIST con el
   mismo formato. No hace falta tocar nada más del código.

   Campos:
     nombre        -> string, nombre visible en la tarjeta
     ciudad        -> string, se usa también para la búsqueda
     instagram     -> string, handle visible (ej: "@usuario")
     whatsapp      -> número completo con código de país, solo dígitos
     instagramUrl  -> URL completa del perfil de Instagram

   No hace falta ningún campo de foto: la imagen de perfil se genera
   automáticamente con las iniciales del nombre (ver generateInitialsAvatar).
   ========================================================================== */

const RRPP_LIST = [
  {
    nombre: "Francisco Fleitas",
    ciudad: "Santa Lucía",
    instagram: "@fraanfleitass",
    whatsapp: "59891317125",
    instagramUrl: "https://instagram.com/fraanfleitass",
  },
  {
    nombre: "Pilar Lapeyre",
    ciudad: "Canelones",
    instagram: "@pilarlapeyre__",
    whatsapp: "59895288335",
    instagramUrl: "https://instagram.com/pilarlapeyre__",
  },
  {
    nombre: "Nacho",
    ciudad: "Santa Lucía",
    instagram: "@itz.nach__",
    whatsapp: "59894851145",
    instagramUrl: "https://instagram.com/itz.nach__",
  },
  {
    nombre: "Julieta Gonzalez",
    ciudad: "Santa Lucía",
    instagram: "@juuli.gonzalezz",
    whatsapp: "59892683274",
    instagramUrl: "https://instagram.com/juuli.gonzalezz",
  },
  {
    nombre: "Milagros Illada",
    ciudad: "Santa Lucía",
    instagram: "@mili_illadaaa",
    whatsapp: "59899274539",
    instagramUrl: "https://instagram.com/mili_illadaaa",
  },
  {
    nombre: "Naomi Perez",
    ciudad: "Santa Lucía",
    instagram: "@naomiperez.uy",
    whatsapp: "59891989689",
    instagramUrl: "https://instagram.com/naomiperez.uy",
  },
  {
    nombre: "Guzman Gonzalez",
    ciudad: "Santa Lucía",
    instagram: "@guzmangonzaq",
    whatsapp: "59898833402",
    instagramUrl: "https://instagram.com/guzmangonzaq",
  },
  {
    nombre: "Melanie Pose",
    ciudad: "Santa Lucía",
    instagram: "@melany_posse",
    whatsapp: "59891096501",
    instagramUrl: "https://instagram.com/melany_posse",
  },
  {
    nombre: "Emilia Soria",
    ciudad: "Santa Lucía",
    instagram: "@emiliasoriaa_",
    whatsapp: "59892712813",
    instagramUrl: "https://instagram.com/emiliasoriaa_",
  },
  {
    nombre: "Leandro Lopez",
    ciudad: "Santa Lucía",
    instagram: "@leandrolopez.01",
    whatsapp: "59898097221",
    instagramUrl: "https://instagram.com/leandrolopez.01",
  },
  {
    nombre: "Josefina Perera",
    ciudad: "Santa Lucía",
    instagram: "@josefinaaperera",
    whatsapp: "59891637146",
    instagramUrl: "https://instagram.com/josefinaaperera",
  },
  {
    nombre: "Kevin Garcia",
    ciudad: "Santa Lucía",
    instagram: "@kevin.nacio",
    whatsapp: "59892501461",
    instagramUrl: "https://instagram.com/kevin.nacio",
  },
  {
    nombre: "Facundo Tejera",
    ciudad: "Santa Lucía",
    instagram: "@facundo.t666",
    whatsapp: "59891360970",
    instagramUrl: "https://instagram.com/facundo.t666",
  },
  {
    nombre: "Pilar Silva",
    ciudad: "Santa Lucía",
    instagram: "@piilarsilvaaa",
    whatsapp: "59895844353",
    instagramUrl: "https://instagram.com/piilarsilvaaa",
  },
  {
    nombre: "Santiago Machi",
    ciudad: "Los Cerrillos",
    instagram: "@machi.santiagoo",
    whatsapp: "59892498988",
    instagramUrl: "https://instagram.com/machi.santiagoo",
  },
  {
    nombre: "Natalia Alonzo",
    ciudad: "Santa Lucía",
    instagram: "@nati_alonzo1",
    whatsapp: "59899558388",
    instagramUrl: "https://instagram.com/nati_alonzo1",
  },
  {
    nombre: "Bruno Ferreyra",
    ciudad: "Santa Lucía",
    instagram: "@brunoferreyra__",
    whatsapp: "59891572361",
    instagramUrl: "https://instagram.com/brunoferreyra__",
  },
  {
    nombre: "Octavio Ibarra",
    ciudad: "Santa Lucía",
    instagram: "@octavio_ibarrra",
    whatsapp: "59894444223",
    instagramUrl: "https://instagram.com/octavio_ibarrra",
  },
  {
    nombre: "Juan Manuel Sandro",
    ciudad: "Santa Lucía",
    instagram: "@_juaanma_27",
    whatsapp: "59899736222",
    instagramUrl: "https://instagram.com/_juaanma_27",
  },
  {
    nombre: "Ivan Shamlian",
    ciudad: "Las Piedras",
    instagram: "@ivanshamlian",
    whatsapp: "59897376917",
    instagramUrl: "https://instagram.com/ivanshamlian",
  },
  {
    nombre: "Emiliano",
    ciudad: "Santa Lucia",
    instagram: "@malditoemi",
    whatsapp: "59898643457",
    instagramUrl: "https://instagram.com/malditoemi",
  },
  {
    nombre: "Facundo Perez",
    ciudad: "Ituzaingo",
    instagram: "_facu_p_",
    whatsapp: "59895686477",
    instagramUrl: "https://instagram.com/_facu_p_",
  },
  {
    nombre: "Juanma Piccardo",
    ciudad: "Santa Lucia",
    instagram: "@juanmapiccardo",
    whatsapp: "59897357392",
    instagramUrl: "https://instagram.com/juanmapiccardo",
  },
  {
    nombre: "Valentin Camacho",
    ciudad: "Juanicó",
    instagram: "@valentin_cama",
    whatsapp: "59893461213",
    instagramUrl: "https://instagram.com/valentin_cama",
  },
  {
    nombre: "Tadeo Arca",
    ciudad: "Maldonado",
    instagram: "@tade_arca",
    whatsapp: "59892647913",
    instagramUrl: "https://instagram.com/tade_arca",
  },
  {
    nombre: "Tomas Muracciole",
    ciudad: "Paso Pache",
    instagram: "@tomiiimh",
    whatsapp: "59898835082",
    instagramUrl: "https://instagram.com/tomiiimh",
  },
  {
    nombre: "Kathya Hernandez",
    ciudad: "Santa Lucía",
    instagram: "@kathyahernandez1",
    whatsapp: "59891048839",
    instagramUrl: "https://instagram.com/kathyahernandez1",
  },
  {
    nombre: "Luz Nicole",
    ciudad: "Montevideo",
    instagram: "@luznicollee",
    whatsapp: "59896494907",
    instagramUrl: "https://instagram.com/luznicollee",
  },
  {
    nombre: "Tomas Pedrazzi",
    ciudad: "Canelones",
    instagram: "@tomipedrazzi",
    whatsapp: "59892128543",
    instagramUrl: "https://instagram.com/tomipedrazzi",
  },
  {
    nombre: "Manuela Gonzalez",
    ciudad: "Santa Lucia",
    instagram: "@mmanu_gonzalez",
    whatsapp: "59893646507",
    instagramUrl: "https://instagram.com/mmanu_gonzalez",
  },
  {
    nombre: "Sabrina Lopez",
    ciudad: "Santa Lucia",
    instagram: "@sabrinalopezzt",
    whatsapp: "59898776883",
    instagramUrl: "https://instagram.com/sabrinalopezzt",
  },
  {
    nombre: "Lucas Armerllino",
    ciudad: "Santa Lucia",
    instagram: "@lucasarmellino",
    whatsapp: "59891611277",
    instagramUrl: "https://instagram.com/lucasarmellino",
  },
  {
    nombre: "Valentin Torres",
    ciudad: "Los Cerrillos",
    instagram: "@valeen_torres_",
    whatsapp: "59891611277",
    instagramUrl: "https://instagram.com/valeen_torres_",
  },
];

/* ==========================================================================
   Avatar automático con iniciales
   --------------------------------------------------------------------------
   No hace falta subir ninguna foto: a partir del nombre se generan
   automáticamente las iniciales y un color de fondo (dentro de la paleta
   violeta del sitio), y se arma un SVG en formato data URI al vuelo.
   Cada nombre siempre obtiene el mismo color, así que es consistente
   cada vez que se recarga la página.
   ========================================================================== */

// Saca hasta 2 iniciales de un nombre completo (ej: "Diego Lenzi" -> "DL")
function getInitials(nombre) {
  const palabras = nombre.trim().split(/\s+/);
  const iniciales = palabras
    .slice(0, 2)
    .map((palabra) => palabra.charAt(0).toUpperCase())
    .join("");
  return iniciales || "?";
}

// Genera un tono (hue) estable a partir del texto, dentro del rango
// violeta-azulado (250 a 300) para que combine con el resto del sitio
function getHueFromName(nombre) {
  let hash = 0;
  for (let i = 0; i < nombre.length; i++) {
    hash = nombre.charCodeAt(i) + ((hash << 5) - hash);
  }
  const rango = 50; // ancho del rango de tonos
  const base = 250; // punto de partida (violeta)
  return base + (Math.abs(hash) % rango);
}

// Arma el SVG del avatar con iniciales y devuelve un data URI listo para <img src="">
function generateInitialsAvatar(nombre) {
  const iniciales = getInitials(nombre);
  const hue = getHueFromName(nombre);
  const colorA = `hsl(${hue}, 70%, 42%)`;
  const colorB = `hsl(${hue + 25}, 65%, 22%)`;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorA}"/>
          <stop offset="100%" stop-color="${colorB}"/>
        </linearGradient>
      </defs>
      <rect width="92" height="92" fill="url(#g)"/>
      <text
        x="50%" y="53%"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Poppins, sans-serif"
        font-weight="600"
        font-size="34"
        fill="#f5f4f8"
      >${iniciales}</text>
    </svg>
  `;

  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

/* ==========================================================================
   Íconos inline (WhatsApp / Instagram) para no depender de recursos externos
   ========================================================================== */
const ICON_WHATSAPP = `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.14 8.14 0 0 1-1.25-4.33c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.39a8.09 8.09 0 0 1 2.39 5.78c0 4.5-3.67 8.2-8.08 8.2Zm4.48-6.13c-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.96-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.22-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42-.14-.01-.31-.01-.47-.01a.9.9 0 0 0-.65.31c-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/>
  </svg>
`;

const ICON_INSTAGRAM = `
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
`;

const ICON_PIN = `
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
`;

/* ==========================================================================
   Estado de la aplicación
   ========================================================================== */
const state = {
  searchTerm: "",
  sortAscending: true,
};

/* ==========================================================================
   Referencias al DOM
   ========================================================================== */
const gridEl = document.getElementById("rrppGrid");
const countEl = document.getElementById("rrppCount");
const emptyStateEl = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const sortToggleBtn = document.getElementById("sortToggle");

/* ==========================================================================
   Utilidades
   ========================================================================== */

// Normaliza texto para que la búsqueda ignore mayúsculas y acentos
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Arma el link de WhatsApp con mensaje predefinido
function buildWhatsappLink(numero, nombre) {
  const mensaje = encodeURIComponent(
    `Hola ${nombre}! Quiero comprar entradas para EROS`
  );
  return `https://wa.me/${numero}?text=${mensaje}`;
}

/* ==========================================================================
   Construye el HTML de una tarjeta individual
   ========================================================================== */
function createCard(rrpp, index) {
  const card = document.createElement("article");
  card.className = "rrpp-card";
  // Pequeño desfase por tarjeta para que la aparición se sienta escalonada
  card.style.animationDelay = `${Math.min(index, 10) * 60}ms`;

  card.innerHTML = `
    <div class="rrpp-card__photo-wrap">
      <img
        class="rrpp-card__photo"
        src="${generateInitialsAvatar(rrpp.nombre)}"
        alt="Iniciales de ${rrpp.nombre}"
        loading="lazy"
      >
    </div>

    <h3 class="rrpp-card__name">${rrpp.nombre}</h3>

    <span class="rrpp-card__city">${ICON_PIN} ${rrpp.ciudad}</span>
    <span class="rrpp-card__instagram">${rrpp.instagram}</span>

    <div class="rrpp-card__actions">
      <a
        class="btn-whatsapp"
        href="${buildWhatsappLink(rrpp.whatsapp, rrpp.nombre)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a ${rrpp.nombre} por WhatsApp"
      >
        ${ICON_WHATSAPP} WhatsApp
      </a>
      <a
        class="btn-instagram"
        href="${rrpp.instagramUrl}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver Instagram de ${rrpp.nombre}"
      >
        ${ICON_INSTAGRAM} Instagram
      </a>
    </div>
  `;

  return card;
}

/* ==========================================================================
   Filtra y ordena la lista según el estado actual, y la pinta en pantalla
   ========================================================================== */
function render() {
  const term = normalize(state.searchTerm.trim());

  let list = RRPP_LIST.filter((rrpp) => {
    const nombre = normalize(rrpp.nombre);
    const ciudad = normalize(rrpp.ciudad);
    return nombre.includes(term) || ciudad.includes(term);
  });

  list = list.sort((a, b) => {
    const comparison = a.nombre.localeCompare(b.nombre, "es");
    return state.sortAscending ? comparison : -comparison;
  });

  // Vaciar grid antes de re-pintar
  gridEl.innerHTML = "";

  if (list.length === 0) {
    emptyStateEl.hidden = false;
  } else {
    emptyStateEl.hidden = true;
    list.forEach((rrpp, index) => {
      gridEl.appendChild(createCard(rrpp, index));
    });

    // Dispara la animación de entrada en el siguiente frame
    requestAnimationFrame(() => {
      document.querySelectorAll(".rrpp-card").forEach((card) => {
        card.classList.add("is-visible");
      });
    });
  }

  updateCount(list.length);
}

/* ==========================================================================
   Actualiza el contador de RRPP disponibles
   ========================================================================== */
function updateCount(visibleCount) {
  const total = RRPP_LIST.length;

  if (state.searchTerm.trim() === "") {
    countEl.innerHTML = `<strong>${total}</strong> RRPP disponibles`;
  } else {
    countEl.innerHTML = `<strong>${visibleCount}</strong> de ${total} RRPP encontrados`;
  }
}

/* ==========================================================================
   Event listeners
   ========================================================================== */

// Búsqueda en tiempo real
searchInput.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  clearSearchBtn.hidden = state.searchTerm.length === 0;
  render();
});

// Botón para limpiar la búsqueda rápidamente
clearSearchBtn.addEventListener("click", () => {
  state.searchTerm = "";
  searchInput.value = "";
  clearSearchBtn.hidden = true;
  searchInput.focus();
  render();
});

// Orden alfabético A-Z / Z-A
sortToggleBtn.addEventListener("click", () => {
  state.sortAscending = !state.sortAscending;
  sortToggleBtn.setAttribute("aria-pressed", String(!state.sortAscending));
  sortToggleBtn.querySelector("span").textContent = state.sortAscending
    ? "A - Z"
    : "Z - A";
  render();
});

/* ==========================================================================
   Inicialización
   ========================================================================== */
document.getElementById("currentYear").textContent = new Date().getFullYear();
render();
