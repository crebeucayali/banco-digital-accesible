// Componente visual desacoplado de las páginas; se utilizará a partir de etapa 3.
import { consultarPagina, enlaceRecurso, etiquetaNivel, categoriaValida, idDesdeFragmento, localizarPaginaRecurso } from "./catalogo-ra.mjs";

const NOMBRES_FILTROS = [["todos", "Todos"], ["inicial", "Inicial"], ["primaria", "Primaria"],
  ["inicial_primaria", "Inicial y primaria"], ["pendiente", "Pendientes"]];

function nodo(etiqueta, clase, texto) {
  const elemento = document.createElement(etiqueta);
  if (clase) elemento.className = clase;
  if (texto !== undefined) elemento.textContent = String(texto);
  return elemento;
}

export function tarjetaRecurso(recurso) {
  const articulo = nodo("article", "ra-catalogo-tarjeta");
  articulo.id = "recurso-" + recurso.id;
  articulo.tabIndex = -1;
  const titulo = nodo("h3", "ra-catalogo-titulo", recurso.titulo);
  articulo.appendChild(titulo);

  if (recurso.categoria === "materiales_elaborados") {
    articulo.appendChild(nodo("p", "ra-catalogo-nivel", "Nivel educativo: " + etiquetaNivel(recurso.nivel_educativo)));
  }

  if (recurso.imagen_url) {
    const imagen = nodo("img", "ra-catalogo-imagen");
    imagen.src = recurso.imagen_url;
    imagen.alt = recurso.imagen_alt || recurso.titulo;
    imagen.loading = "lazy";
    imagen.decoding = "async";
    imagen.addEventListener("error", () => {
      imagen.replaceWith(nodo("p", "ra-catalogo-imagen-pendiente", "Fotografía temporalmente no disponible"));
    }, { once: true });
    articulo.appendChild(imagen);
  } else {
    articulo.appendChild(nodo("p", "ra-catalogo-imagen-pendiente", "Fotografía pendiente de incorporar"));
  }

  if (recurso.descripcion) articulo.appendChild(nodo("p", "ra-catalogo-descripcion", recurso.descripcion));
  const enlace = nodo("a", "ra-catalogo-enlace", "Enlace directo al material");
  enlace.href = enlaceRecurso(recurso.id, recurso.categoria);
  articulo.appendChild(enlace);
  return articulo;
}

export function crearCatalogoRA({ categoria, contenedor, supabaseUrl, publishableKey, tamano = 9, fetchImpl = globalThis.fetch }) {
  if (!categoriaValida(categoria) || !(contenedor instanceof HTMLElement)) {
    throw new TypeError("Configuración del catálogo inválida");
  }
  let pagina = 1;
  let filtro = "todos";
  let secuencia = 0;
  let controlador = null;
  let objetivoId = null;
  let destruido = false;

  const estado = nodo("p", "ra-catalogo-estado", "Preparando recursos…");
  estado.setAttribute("role", "status");
  estado.setAttribute("aria-live", "polite");
  const rejilla = nodo("div", "ra-catalogo-rejilla");
  const paginacion = nodo("nav", "ra-catalogo-paginacion");
  paginacion.setAttribute("aria-label", "Paginación de recursos");
  const controles = nodo("div", "ra-catalogo-filtros");
  controles.setAttribute("role", "group");
  controles.setAttribute("aria-label", "Filtrar por nivel educativo");

  if (categoria === "materiales_elaborados") {
    for (const [valor, etiqueta] of NOMBRES_FILTROS) {
      const boton = nodo("button", "ra-catalogo-filtro", etiqueta);
      boton.type = "button";
      boton.dataset.nivel = valor;
      boton.setAttribute("aria-pressed", String(filtro === valor));
      boton.addEventListener("click", () => {
        if (valor === filtro) return;
        filtro = valor;
        objetivoId = null;
        pagina = 1;
        actualizar();
      });
      controles.appendChild(boton);
    }
  }

  contenedor.replaceChildren();
  if (categoria === "materiales_elaborados") contenedor.appendChild(controles);
  contenedor.append(estado, rejilla, paginacion);

  function botonPagina(texto, destino, deshabilitado, nombre) {
    const boton = nodo("button", "ra-catalogo-pagina", texto);
    boton.type = "button";
    boton.disabled = deshabilitado;
    boton.setAttribute("aria-label", nombre);
    boton.addEventListener("click", () => { objetivoId = null; pagina = destino; actualizar(); });
    return boton;
  }

  async function actualizar() {
    const actual = ++secuencia;
    controlador?.abort();
    controlador = new AbortController();
    estado.textContent = "Cargando recursos…";
    rejilla.replaceChildren();
    paginacion.replaceChildren();
    controles.querySelectorAll("button").forEach(button =>
      button.setAttribute("aria-pressed", String(button.dataset.nivel === filtro)));
    try {
      const resultado = await consultarPagina({
        categoria, nivel: filtro, pagina, tamano, supabaseUrl, publishableKey,
        fetchImpl, signal: controlador.signal
      });
      if (actual !== secuencia) return;
      if (!resultado.recursos.length && pagina > 1) {
        // Evitar páginas huérfanas si el catálogo cambia entre consultas.
        pagina = 1;
        await actualizar();
        return;
      }
      const fragmento = document.createDocumentFragment();
      resultado.recursos.forEach(recurso => fragmento.appendChild(tarjetaRecurso(recurso)));
      rejilla.appendChild(fragmento);
      estado.textContent = resultado.recursos.length
        ? "Mostrando " + resultado.recursos.length + " recursos. Página " + pagina +
          (resultado.paginas === null ? "." : " de " + resultado.paginas + ".")
        : "No hay recursos publicados en esta selección.";
      const anterior = botonPagina("‹", Math.max(1, pagina - 1), pagina <= 1, "Página anterior");
      const siguiente = botonPagina("›", pagina + 1, !resultado.siguientePosible, "Página siguiente");
      paginacion.append(anterior, nodo("span", "ra-catalogo-indicador", "Página " + pagina), siguiente);
      if (objetivoId !== null) {
        const objetivo = [...rejilla.querySelectorAll("article")].find(el => el.id === "recurso-" + objetivoId);
        if (objetivo) {
          objetivo.classList.add("ra-catalogo-tarjeta-destacada");
          objetivo.scrollIntoView({ block: "center", behavior: "auto" });
          objetivo.focus({ preventScroll: true });
          estado.textContent += " Material localizado: " + objetivo.querySelector("h3").textContent + ".";
          objetivoId = null;
        } else {
          estado.textContent += " No fue posible encontrar este material en la página calculada.";
        }
      }
    } catch (error) {
      if (actual !== secuencia || error?.name === "AbortError") return;
      estado.textContent = "No se pudieron cargar los recursos. Puedes volver a intentarlo.";
      const reintentar = botonPagina("Reintentar", pagina, false, "Reintentar carga de recursos");
      paginacion.replaceChildren(reintentar);
    }
  }

  async function navegarAncla() {
    if (destruido) return;
    const id = idDesdeFragmento(globalThis.location?.hash);
    if (id === null) {
      objetivoId = null;
      pagina = 1;
      return actualizar();
    }
    // Una búsqueda solo controla su propia respuesta: ignora resultados obsoletos.
    const actual = ++secuencia;
    controlador?.abort();
    controlador = new AbortController();
    const signal = controlador.signal;
    estado.textContent = "Buscando el material solicitado…";
    try {
      const encontrada = await localizarPaginaRecurso({
        id, categoria, tamano, supabaseUrl, publishableKey, fetchImpl, signal
      });
      if (destruido || actual !== secuencia) return;
      if (encontrada === null) {
        objetivoId = null;
        estado.textContent = "El material solicitado no está publicado en esta sección.";
        if (!rejilla.childElementCount) {
          pagina = 1;
          await actualizar();
          estado.textContent += " El enlace solicitado no se encontró.";
        }
        return;
      }
      filtro = "todos";
      pagina = encontrada;
      objetivoId = id;
      await actualizar();
    } catch (error) {
      if (destruido || actual !== secuencia || error?.name === "AbortError") return;
      objetivoId = null;
      pagina = 1;
      await actualizar();
      estado.textContent += " No se pudo verificar el enlace individual.";
    }
  }

  const manejarHash = () => { if (!destruido) navegarAncla(); };
  globalThis.addEventListener?.("hashchange", manejarHash);

  return {
    iniciar: navegarAncla,
    actualizar,
    destruir() {
      destruido = true;
      ++secuencia;
      controlador?.abort();
      globalThis.removeEventListener?.("hashchange", manejarHash);
      contenedor.replaceChildren();
    }
  };
}
