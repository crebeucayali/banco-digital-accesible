// Presentación reutilizable en Equipos tecnológicos y Materiales disponibles. No modifica datos ni panel.
const contenedor = document.querySelector('#catalogo-ra:is([data-categoria="equipos_tecnologicos"],[data-categoria="materiales_disponibles"])');
if (contenedor) {
  const dialogo = document.createElement('dialog');
  dialogo.className = 'ra-et-dialogo';
  dialogo.setAttribute('aria-label', 'Ficha ampliada del recurso');
  dialogo.innerHTML = '<div class="ra-et-panel"><button type="button" class="ra-et-cerrar" aria-label="Cerrar ficha">Cerrar ×</button><div class="ra-et-detalle"></div></div>';
  document.body.appendChild(dialogo);
  const detalle = dialogo.querySelector('.ra-et-detalle');
  const cerrar = dialogo.querySelector('.ra-et-cerrar');
  let activador = null;
  let zoom = false;
  const restaurar = () => {
    zoom = false;
    detalle.querySelector('.ra-et-imagen-grande')?.classList.remove('ra-et-zoom');
    document.body.classList.remove('ra-et-bloqueo');
    activador?.focus({ preventScroll: true });
  };
  dialogo.addEventListener('close', restaurar);
  cerrar.addEventListener('click', () => dialogo.close());
  dialogo.addEventListener('click', event => {
    if (event.target === dialogo) dialogo.close();
  });
  function abrir(tarjeta, boton) {
    const titulo = tarjeta.querySelector('.ra-catalogo-titulo')?.textContent?.trim() || 'Recurso';
    const descripcion = tarjeta.querySelector('.ra-catalogo-descripcion')?.textContent?.trim() || 'Descripción no disponible.';
    const foto = tarjeta.querySelector('.ra-catalogo-imagen');
    const enlace = tarjeta.querySelector('.ra-catalogo-enlace');
    detalle.replaceChildren();
    const encabezado = document.createElement('h2');
    encabezado.textContent = titulo;
    encabezado.className = 'ra-et-encabezado';
    detalle.append(encabezado);
    if (foto) {
      const imagen = document.createElement('img');
      imagen.className = 'ra-et-imagen-grande';
      imagen.src = foto.currentSrc || foto.src;
      imagen.alt = foto.alt || titulo;
      imagen.decoding = 'async';
      const instruccion = document.createElement('p');
      instruccion.className = 'ra-et-ayuda';
      instruccion.textContent = 'Selecciona la imagen para ampliar o reducir su tamaño.';
      const controlImagen = document.createElement('button');
      controlImagen.type = 'button';
      controlImagen.className = 'ra-et-control-imagen';
      controlImagen.setAttribute('aria-label', 'Ampliar o reducir fotografía del material');
      controlImagen.appendChild(imagen);
      detalle.append(controlImagen, instruccion);
      controlImagen.setAttribute('aria-pressed', 'false');
      controlImagen.addEventListener('click', () => {
        zoom = !zoom;
        imagen.classList.toggle('ra-et-zoom', zoom);
        controlImagen.setAttribute('aria-pressed', String(zoom));
      });
    }
    const subtitulo = document.createElement('h3');
    subtitulo.textContent = 'Descripción del material';
    const texto = document.createElement('p');
    texto.className = 'ra-et-texto';
    texto.textContent = descripcion;
    detalle.append(subtitulo, texto);
    if (enlace) {
      const directo = document.createElement('a');
      directo.className = 'ra-et-enlace';
      directo.href = enlace.href;
      directo.textContent = 'Enlace directo al material';
      detalle.append(directo);
    }
    activador = boton;
    zoom = false;
    dialogo.showModal();
    document.body.classList.add('ra-et-bloqueo');
    cerrar.focus();
  }
  function preparar() {
    for (const tarjeta of contenedor.querySelectorAll('.ra-catalogo-tarjeta:not([data-et-preparada])')) {
      tarjeta.dataset.etPreparada = 'true';
      const descripcion = tarjeta.querySelector('.ra-catalogo-descripcion');
      if (descripcion) descripcion.classList.add('ra-et-resumen');
      const boton = document.createElement('button');
      boton.type = 'button';
      boton.className = 'ra-et-ver';
      boton.textContent = 'Ver ficha ampliada';
      boton.addEventListener('click', () => abrir(tarjeta, boton));
      const enlace = tarjeta.querySelector('.ra-catalogo-enlace');
      if (enlace) tarjeta.insertBefore(boton, enlace);
      else tarjeta.append(boton);
      const previa = document.createElement('div');
      previa.className = 'ra-et-previa';
      previa.setAttribute('aria-hidden', 'true');
      const foto = tarjeta.querySelector('.ra-catalogo-imagen');
      if (foto) {
        const miniatura = document.createElement('img');
        miniatura.src = foto.src;
        miniatura.alt = '';
        miniatura.loading = 'lazy';
        previa.appendChild(miniatura);
      }
      if (descripcion) {
        const texto = document.createElement('p');
        texto.textContent = descripcion.textContent;
        previa.appendChild(texto);
      }
      tarjeta.appendChild(previa);
    }
  }
  const observador = new MutationObserver(preparar);
  observador.observe(contenedor, { childList: true, subtree: true });
  preparar();
}
