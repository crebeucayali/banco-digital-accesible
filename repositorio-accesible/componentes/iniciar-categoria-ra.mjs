// Integración pública de solo lectura para las páginas de categoría de RA.
// La clave publicable se comparte con el cargador público original; nunca usar service_role.
import { crearCatalogoRA } from "./catalogo-vista-ra.mjs";
import { categoriaValida } from "./catalogo-ra.mjs";

const SUPABASE_URL = "https://dteimbhwtzghhsijeeld.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_tHbo1jTeW_dC90hdA5DvyQ_a6LrfKpq";

const contenedor = document.getElementById("catalogo-ra");
const categoria = contenedor?.dataset.categoria;
const ruta = window.location.pathname.split("/").filter(Boolean).at(-1);
const rutas = {
  materiales_disponibles: "materiales-disponibles",
  equipos_tecnologicos: "equipos-tecnologicos",
  materiales_elaborados: "materiales-elaborados"
};

if (!contenedor || !categoriaValida(categoria) || ruta !== rutas[categoria]) {
  if (contenedor) {
    contenedor.replaceChildren();
    const aviso = document.createElement("p");
    aviso.setAttribute("role", "alert");
    aviso.textContent = "No se pudo identificar esta sección del repositorio.";
    contenedor.appendChild(aviso);
  }
} else {
  try {
    const catalogo = crearCatalogoRA({
      categoria,
      contenedor,
      supabaseUrl: SUPABASE_URL,
      publishableKey: SUPABASE_PUBLISHABLE_KEY,
      tamano: 9
    });
    catalogo.iniciar();
  } catch (error) {
    contenedor.replaceChildren();
    const aviso = document.createElement("p");
    aviso.setAttribute("role", "alert");
    aviso.textContent = "No se pudo iniciar el catálogo. Actualiza la página para volver a intentarlo.";
    contenedor.appendChild(aviso);
    console.error("RA: error al inicializar la sección.", error);
  }
}
