"use strict";

function mostrarRespaldoImagen(imagen) {
  if (!(imagen instanceof HTMLImageElement)) return;
  imagen.hidden = true;

  const respaldo = imagen.nextElementSibling;
  if (respaldo?.classList.contains("imagen-pendiente")) {
    respaldo.hidden = false;
  }
}

document.addEventListener("error", (evento) => {
  const imagen = evento.target;
  if (imagen instanceof HTMLImageElement && imagen.closest(".recuadro-detalle")) {
    mostrarRespaldoImagen(imagen);
  }
}, true);

document.querySelectorAll(".recuadro-detalle img").forEach((imagen) => {
  if (imagen.complete && imagen.naturalWidth === 0) {
    mostrarRespaldoImagen(imagen);
  }
});
