"use strict";
(() => {
  const galeria = document.getElementById("galeria");
  if (!galeria) return;
  const modal = document.createElement("div");
  modal.className = "visor-senas";
  modal.hidden = true;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "visor-senas-titulo");
  modal.innerHTML = '<div class="visor-senas-panel"><button type="button" class="visor-senas-cerrar" aria-label="Cerrar imagen ampliada">×</button><h2 class="visor-senas-titulo" id="visor-senas-titulo"></h2><img class="visor-senas-imagen" alt=""><p class="visor-senas-descripcion"></p><p class="visor-senas-fuente"></p><div class="visor-senas-acciones"><a class="visor-senas-descarga" download>Descargar imagen original</a><a href="creditos.html">Créditos y condiciones de uso</a></div></div>';
  document.body.appendChild(modal);
  const cerrar = modal.querySelector(".visor-senas-cerrar");
  const titulo = modal.querySelector(".visor-senas-titulo");
  const grande = modal.querySelector(".visor-senas-imagen");
  const descripcion = modal.querySelector(".visor-senas-descripcion");
  const fuente = modal.querySelector(".visor-senas-fuente");
  const descargar = modal.querySelector(".visor-senas-descarga");
  let origen = null;
  function cerrarVisor() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("visor-senas-abierto");
    grande.removeAttribute("src");
    if (origen && origen.isConnected) origen.focus();
    origen = null;
  }
  function abrirVisor(img) {
    if (!img.hasAttribute("src")) return;
    const tarjeta = img.closest(".tarjeta");
    if (!tarjeta) return;
    const url = new URL(img.currentSrc || img.src, location.href);
    if (url.protocol !== "https:" || url.origin !== location.origin) return;
    origen = img;
    titulo.textContent = tarjeta.querySelector(".palabra-tarjeta")?.textContent || "Seña";
    descripcion.textContent = tarjeta.querySelector(".descripcion-tarjeta")?.textContent || "";
    descripcion.hidden = !descripcion.textContent;
    fuente.textContent = (tarjeta.querySelector(".fuente-tarjeta")?.textContent || "Ministerio de Educación del Perú - Guía de Lengua de Señas Peruana") + ". Imagen del material de referencia. Uso sujeto a sus condiciones de procedencia.";
    grande.src = url.href;
    grande.alt = img.alt;
    descargar.href = url.href;
    descargar.download = url.pathname.split("/").pop() || "sena.png";
    modal.hidden = false;
    document.body.classList.add("visor-senas-abierto");
    cerrar.focus();
  }
  function prepararImagenes() {
    galeria.querySelectorAll(".imagen-sena").forEach(img => {
      img.setAttribute("role", "button");
      img.setAttribute("tabindex", "0");
      img.setAttribute("aria-label", "Ampliar imagen: " + (img.closest(".tarjeta")?.querySelector(".palabra-tarjeta")?.textContent || "seña"));
    });
  }
  new MutationObserver(prepararImagenes).observe(galeria, {childList:true});
  prepararImagenes();
  galeria.addEventListener("click", event => {
    const img = event.target.closest(".imagen-sena");
    if (img && galeria.contains(img)) abrirVisor(img);
  });
  galeria.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const img = event.target.closest(".imagen-sena");
    if (!img || !galeria.contains(img)) return;
    event.preventDefault();
    abrirVisor(img);
  });
  cerrar.addEventListener("click", cerrarVisor);
  modal.addEventListener("click", event => { if (event.target === modal) cerrarVisor(); });
  document.addEventListener("keydown", event => {
    if (modal.hidden) return;
    if (event.key === "Escape") cerrarVisor();
    if (event.key === "Tab") {
      const focos = [...modal.querySelectorAll("button,a[href]")];
      const primero = focos[0], ultimo = focos[focos.length - 1];
      if (event.shiftKey && document.activeElement === primero) {event.preventDefault(); ultimo.focus();}
      else if (!event.shiftKey && document.activeElement === ultimo) {event.preventDefault(); primero.focus();}
    }
  });
})();
