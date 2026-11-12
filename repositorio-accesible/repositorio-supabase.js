(() => {
  "use strict";

  const SUPABASE_URL = "https://dteimbhwtzghhsijeeld.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_tHbo1jTeW_dC90hdA5DvyQ_a6LrfKpq";
  const CATEGORIAS = new Set([
    "materiales_disponibles",
    "equipos_tecnologicos",
    "materiales_elaborados"
  ]);

  function urlImagenSegura(valor) {
    const texto = String(valor || "").trim();
    if (!texto) return "";

    if (/^assets\/[a-z0-9._/-]+\.(jpg|jpeg|png|webp)$/i.test(texto)) {
      return texto;
    }

    try {
      const url = new URL(texto, window.location.href);

      const githubRepositorio =
        url.protocol === "https:" &&
        url.hostname.toLowerCase() === "crebeucayali.github.io" &&
        /^\/repositorio-accesible\/assets\/[a-z0-9._/-]+\.(jpg|jpeg|png|webp)$/i.test(url.pathname);

      const storageRepositorio =
        url.protocol === "https:" &&
        url.hostname.toLowerCase() === "dteimbhwtzghhsijeeld.supabase.co" &&
        /^\/storage\/v1\/object\/public\/eva-publico\/repositorio\/[a-z0-9._/-]+\.(jpg|jpeg|png|webp)$/i.test(url.pathname);

      return githubRepositorio || storageRepositorio ? url.href : "";
    } catch {
      return "";
    }
  }

  async function consultarRecursos() {
    const endpoint = new URL(SUPABASE_URL + "/rest/v1/repositorio_recursos");
    endpoint.searchParams.set(
      "select",
      "id,categoria,nivel_educativo,orden,titulo,descripcion,imagen_url,imagen_alt,estado_publicacion,updated_at"
    );
    endpoint.searchParams.set("visible", "eq.true");
    endpoint.searchParams.set("estado_publicacion", "eq.publicado");
    endpoint.searchParams.set("order", "categoria.asc,orden.asc,titulo.asc");

    const respuesta = await fetch(endpoint.href, {
      method: "GET",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Accept: "application/json"
      },
      credentials: "omit",
      cache: "no-store",
      referrerPolicy: "strict-origin-when-cross-origin"
    });

    if (!respuesta.ok) {
      throw new Error("Supabase respondió con estado " + respuesta.status + ".");
    }

    const datos = await respuesta.json();
    if (!Array.isArray(datos)) {
      throw new Error("La respuesta de Supabase no tiene el formato esperado.");
    }

    return datos.filter((recurso) =>
      recurso &&
      CATEGORIAS.has(recurso.categoria) &&
      typeof recurso.titulo === "string" &&
      recurso.titulo.trim()
    );
  }

  const NIVELES = new Map([["inicial", "Inicial"], ["primaria", "Primaria"], ["inicial_primaria", "Inicial y primaria"]]);

  function etiquetaNivel(recurso) {
    if (recurso.categoria !== "materiales_elaborados") return "";
    return NIVELES.get(recurso.nivel_educativo) || "Pendiente de clasificar";
  }

  function crearDetalle(recurso) {
    const imagenUrl = urlImagenSegura(recurso.imagen_url);
    const descripcion = String(recurso.descripcion || "").trim();

    if (!imagenUrl && !descripcion && recurso.categoria !== "materiales_elaborados") return null;

    const detalle = document.createElement("div");
    detalle.className = "recuadro-detalle";
    detalle.setAttribute("role", "group");
    detalle.setAttribute("aria-label", "Vista previa de " + recurso.titulo);

    if (imagenUrl) {
      const imagen = document.createElement("img");
      imagen.src = imagenUrl;
      imagen.alt = String(recurso.imagen_alt || recurso.titulo).trim();
      imagen.loading = "lazy";

      const pendiente = document.createElement("div");
      pendiente.className = "imagen-pendiente";
      pendiente.hidden = true;
      pendiente.textContent = "Imagen pendiente de subir";

      imagen.addEventListener("error", () => {
        imagen.hidden = true;
        pendiente.hidden = false;
      }, { once: true });

      detalle.append(imagen, pendiente);
    } else if (recurso.categoria === "materiales_elaborados") {
      const pendiente = document.createElement("div");
      pendiente.className = "imagen-pendiente";
      pendiente.textContent = "Fotografía pendiente de incorporar";
      detalle.appendChild(pendiente);
    }

    const texto = document.createElement("div");
    texto.className = "detalle-texto";

    const titulo = document.createElement("strong");
    titulo.textContent = recurso.titulo;
    texto.appendChild(titulo);

    if (recurso.categoria === "materiales_elaborados") {
      const nivel = document.createElement("span");
      nivel.className = "recurso-nivel-educativo";
      nivel.textContent = "Nivel educativo: " + etiquetaNivel(recurso);
      texto.appendChild(nivel);
    }

    if (descripcion) {
      const descripcionNodo = document.createElement("span");
      descripcionNodo.textContent = descripcion;
      texto.appendChild(descripcionNodo);
    }

    detalle.appendChild(texto);
    return detalle;
  }

  function crearRecurso(recurso) {
    const item = document.createElement("li");
    item.className = "item-recurso";
    item.tabIndex = 0;
    item.dataset.recursoId = String(recurso.id);
    item.appendChild(document.createTextNode(recurso.titulo));
    if (recurso.categoria === "materiales_elaborados") {
      const nivel = document.createElement("small");
      nivel.className = "recurso-nivel-etiqueta";
      nivel.textContent = etiquetaNivel(recurso);
      item.appendChild(nivel);
    }

    const detalle = crearDetalle(recurso);
    if (detalle) item.appendChild(detalle);

    return item;
  }

  function controlesNiveles(lista, recursos) {
    const anterior = document.getElementById("ra-filtros-nivel");
    if (anterior) anterior.remove();
    const filtros = document.createElement("div");
    filtros.id = "ra-filtros-nivel";
    filtros.className = "ra-filtros-nivel";
    filtros.setAttribute("role", "group");
    filtros.setAttribute("aria-label", "Filtrar materiales elaborados por nivel educativo");
    const opciones = [["todos", "Todos"], ...NIVELES.entries(), ["pendiente", "Pendientes"]];
    // Los botones se crean con texto visible y estado accesible.
    for (const [clave, nombre] of opciones) {
      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "ra-filtro-nivel";
      boton.textContent = nombre;
      boton.setAttribute("aria-pressed", String(clave === "todos"));
      boton.addEventListener("click", () => {
        filtros.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b === boton)));
        const seleccion = recursos.filter(r => clave === "todos" || (clave === "pendiente" ? !NIVELES.has(r.nivel_educativo) : r.nivel_educativo === clave));
        lista.replaceChildren();
        if (!seleccion.length) {
          const vacio = document.createElement("li");
          vacio.className = "item-recurso item-recurso-vacio";
          vacio.textContent = "No hay materiales registrados para este nivel educativo.";
          lista.appendChild(vacio);
        } else {
          seleccion.forEach(r => lista.appendChild(crearRecurso(r)));
        }
      });
      filtros.appendChild(boton);
    }
    lista.before(filtros);
  }

  function aplicarRecursos(recursos) {
    const porCategoria = new Map();

    recursos.forEach((recurso) => {
      if (!porCategoria.has(recurso.categoria)) {
        porCategoria.set(recurso.categoria, []);
      }
      porCategoria.get(recurso.categoria).push(recurso);
    });

    document.querySelectorAll(".lista-ejemplos[data-categoria]").forEach((lista) => {
      const categoria = lista.dataset.categoria;
      const items = porCategoria.get(categoria) || [];
      lista.replaceChildren();
      lista.hidden = false;

      if (!items.length) {
        const vacio = document.createElement("li");
        vacio.className = "item-recurso item-recurso-vacio";
        vacio.textContent = "No hay recursos publicados en esta categoría por el momento.";
        vacio.tabIndex = 0;
        lista.appendChild(vacio);
        return;
      }

      const fragmento = document.createDocumentFragment();
      items.forEach((recurso) => fragmento.appendChild(crearRecurso(recurso)));
      lista.appendChild(fragmento);
      if (categoria === "materiales_elaborados") controlesNiveles(lista, items);
    });
  }

  async function cargarRepositorioDesdeSupabase() {
    // Conservar el inventario HTML como respaldo mientras se consulta Supabase.
    document.querySelectorAll(".lista-ejemplos[data-categoria]").forEach((lista) => { lista.hidden = false; });
    try {
      const recursos = await consultarRecursos();
      if (recursos.length) {
        aplicarRecursos(recursos);
        document.documentElement.dataset.repositorioFuente = "supabase";
      } else {
        document.documentElement.dataset.repositorioFuente = "respaldo-local";
      }
    } catch (error) {
      document.documentElement.dataset.repositorioFuente = "respaldo-local";
      console.warn("Repositorio Accesible: no se pudo verificar el contenido publicado.", error);
    }
  }

  cargarRepositorioDesdeSupabase();
})();
