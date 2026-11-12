// Contrato de datos reutilizable para las futuras páginas del RA.
// No reemplaza el cargador público actual hasta completar la etapa 3.
export const CATEGORIAS = Object.freeze(["materiales_disponibles", "equipos_tecnologicos", "materiales_elaborados"]);
export const NIVELES = Object.freeze({ inicial: "Inicial", primaria: "Primaria", inicial_primaria: "Inicial y primaria" });
export const TAMANO_PAGINA = 9;
const CAMPOS = "id,categoria,nivel_educativo,orden,titulo,descripcion,imagen_url,imagen_alt,estado_publicacion,visible,updated_at";
const ORIGEN_RA = "https://crebeucayali.github.io/banco-digital-accesible/repositorio-accesible/";
const ORIGEN_IMAGEN_RA = "https://crebeucayali.github.io/repositorio-accesible/";
const STORAGE = "https://dteimbhwtzghhsijeeld.supabase.co";

export function categoriaValida(categoria) {
  return CATEGORIAS.includes(categoria);
}

export function filtroValido(categoria, nivel = "todos") {
  return categoria === "materiales_elaborados"
    ? nivel === "todos" || nivel === "pendiente" || Object.hasOwn(NIVELES, nivel)
    : nivel === "todos";
}

export function etiquetaNivel(nivel) {
  return NIVELES[nivel] || "Pendiente de clasificar";
}

export function urlImagenSegura(valor) {
  const ruta = String(valor ?? "").trim();
  if (!ruta) return "";
  // Solo se admiten rutas de imágenes del RA, nunca rutas arbitrarias.
  if (/^assets\/[a-z0-9._/-]+\.(?:webp|png|jpg|jpeg)$/i.test(ruta) && !ruta.includes("..")) {
    return new URL(ruta, ORIGEN_IMAGEN_RA).href;
  }
  try {
    const url = new URL(ruta);
    if (url.protocol !== "https:" || url.search || url.hash) return "";
    if (url.origin === "https://crebeucayali.github.io" &&
        /^\/repositorio-accesible\/assets\/[a-z0-9._/-]+\.(?:webp|png|jpg|jpeg)$/i.test(url.pathname) &&
        !url.pathname.includes("..")) return url.href;
    if (url.origin === STORAGE &&
        /^\/storage\/v1\/object\/public\/eva-publico\/repositorio\/[a-z0-9._/-]+\.(?:webp|png|jpg|jpeg)$/i.test(url.pathname) &&
        !url.pathname.includes("..")) return url.href;
  } catch { /* URL no válida */ }
  return "";
}

export function construirConsulta({ categoria, nivel = "todos", pagina = 1, tamano = TAMANO_PAGINA, supabaseUrl }) {
  if (!categoriaValida(categoria) || !filtroValido(categoria, nivel)) throw new RangeError("Categoría o nivel no permitido");
  if (!Number.isSafeInteger(pagina) || pagina < 1 || !Number.isSafeInteger(tamano) || tamano < 1 || tamano > 24)
    throw new RangeError("Paginación inválida");
  const origen = new URL(supabaseUrl);
  if (origen.protocol !== "https:" || origen.username || origen.password) throw new TypeError("Origen Supabase inválido");
  const url = new URL("/rest/v1/repositorio_recursos", origen);
  url.searchParams.set("select", CAMPOS);
  url.searchParams.set("categoria", "eq." + categoria);
  url.searchParams.set("visible", "eq.true");
  url.searchParams.set("estado_publicacion", "eq.publicado");
  if (nivel === "pendiente") url.searchParams.set("nivel_educativo", "is.null");
  else if (nivel !== "todos") url.searchParams.set("nivel_educativo", "eq." + nivel);
  url.searchParams.set("order", "orden.asc,id.asc");
  url.searchParams.set("limit", String(tamano));
  url.searchParams.set("offset", String((pagina - 1) * tamano));
  return url;
}

export function normalizarRespuesta(datos, categoria, nivel = "todos") {
  if (!Array.isArray(datos)) throw new TypeError("Respuesta inválida del catálogo");
  return datos.filter(item => item && item.categoria === categoria &&
    item.visible === true && item.estado_publicacion === "publicado" &&
    typeof item.titulo === "string" && item.titulo.trim() !== "" &&
    (nivel === "todos" || (nivel === "pendiente" ? item.nivel_educativo == null : item.nivel_educativo === nivel)))
    .map(item => ({
      id: item.id,
      categoria: item.categoria,
      nivel_educativo: categoria === "materiales_elaborados" ? item.nivel_educativo : null,
      titulo: item.titulo.trim(),
      descripcion: String(item.descripcion || "").trim(),
      imagen_url: urlImagenSegura(item.imagen_url),
      imagen_alt: String(item.imagen_alt || item.titulo).trim(),
      orden: item.orden
    }));
}

export async function consultarPagina({ categoria, nivel = "todos", pagina = 1, tamano = TAMANO_PAGINA, supabaseUrl, publishableKey, fetchImpl = globalThis.fetch, signal }) {
  const url = construirConsulta({ categoria, nivel, pagina, tamano, supabaseUrl });
  if (typeof fetchImpl !== "function" || !publishableKey) throw new TypeError("Configuración de consulta incompleta");
  const respuesta = await fetchImpl(url.href, {
    method: "GET",
    headers: { apikey: publishableKey, Accept: "application/json", Prefer: "count=exact" },
    credentials: "omit",
    cache: "no-store",
    signal
  });
  if (!respuesta.ok) throw new Error("No se pudo recuperar el catálogo (HTTP " + respuesta.status + ")");
  const recursos = normalizarRespuesta(await respuesta.json(), categoria, nivel);
  const rango = respuesta.headers?.get?.("content-range") || "";
  const totalTexto = rango.split("/")[1];
  const total = totalTexto && /^\d+$/.test(totalTexto) ? Number(totalTexto) : null;
  return {
    recursos,
    pagina,
    tamano,
    total,
    paginas: total === null ? null : Math.max(1, Math.ceil(total / tamano)),
    siguientePosible: total === null ? recursos.length === tamano : pagina * tamano < total
  };
}


export function idDesdeFragmento(fragmento) {
  let texto = String(fragmento || "").replace(/^#/, "");
  try { texto = decodeURIComponent(texto); } catch { return null; }
  if (!/^recurso-[1-9][0-9]*$/.test(texto)) return null;
  const id = Number(texto.slice(8));
  return Number.isSafeInteger(id) ? id : null;
}

// Calcula la página mediante dos lecturas pequeñas; no descarga todo el inventario.
export async function localizarPaginaRecurso({
  id, categoria, tamano = TAMANO_PAGINA, supabaseUrl, publishableKey,
  fetchImpl = globalThis.fetch, signal
}) {
  if (!Number.isSafeInteger(id) || id <= 0 || !categoriaValida(categoria))
    throw new RangeError("Recurso o categoría inválidos");
  const base = construirConsulta({ categoria, tamano, supabaseUrl });
  if (!publishableKey || typeof fetchImpl !== "function")
    throw new TypeError("Configuración incompleta");
  const headers = { apikey: publishableKey, Accept: "application/json", Prefer: "count=exact" };
  const opciones = { method: "GET", headers, credentials: "omit", cache: "no-store", signal };
  const detalle = new URL(base);
  detalle.searchParams.set("select", "id,orden");
  detalle.searchParams.set("id", "eq." + id);
  detalle.searchParams.set("limit", "1");
  detalle.searchParams.delete("offset");
  detalle.searchParams.delete("order");
  const respuesta = await fetchImpl(detalle.href, opciones);
  if (!respuesta.ok) throw new Error("Error al localizar material (HTTP " + respuesta.status + ")");
  const filas = await respuesta.json();
  if (!Array.isArray(filas) || filas.length === 0) return null;
  const orden = Number(filas[0].orden);
  if (!Number.isSafeInteger(orden) || !Number.isSafeInteger(Number(filas[0].id)) ||
      Number(filas[0].id) !== id) throw new TypeError("Orden del material inválido");
  const anteriores = new URL(base);
  anteriores.searchParams.set("select", "id");
  anteriores.searchParams.set("or", "(orden.lt." + orden + ",and(orden.eq." + orden + ",id.lt." + id + "))");
  anteriores.searchParams.set("limit", "1");
  anteriores.searchParams.delete("offset");
  anteriores.searchParams.delete("order");
  const conteo = await fetchImpl(anteriores.href, opciones);
  if (!conteo.ok) throw new Error("Error al calcular página del material (HTTP " + conteo.status + ")");
  const rango = conteo.headers?.get?.("content-range") || "";
  const cantidad = rango.split("/")[1];
  if (!cantidad || !/^\d+$/.test(cantidad)) throw new Error("Conteo de material no disponible");
  return Math.floor(Number(cantidad) / tamano) + 1;
}

export function enlaceRecurso(id, categoria) {
  if (!Number.isSafeInteger(Number(id)) || Number(id) <= 0 || !categoriaValida(categoria)) throw new TypeError("Recurso inválido");
  const rutas = {
    materiales_disponibles: "materiales-disponibles/",
    equipos_tecnologicos: "equipos-tecnologicos/",
    materiales_elaborados: "materiales-elaborados/"
  };
  return ORIGEN_RA + rutas[categoria] + "#recurso-" + Number(id);
}
