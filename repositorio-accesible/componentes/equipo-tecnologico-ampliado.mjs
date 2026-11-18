// Presentación reutilizable en Equipos tecnológicos y Materiales disponibles. No modifica datos ni panel.
import { montarLecturaQueBonito } from './lectura-que-bonito.mjs?v=2';
import { montarLecturaZorroLuna } from './lectura-zorro-luna.mjs?v=5';
import { montarLecturaMuqui } from './lectura-muqui.mjs?v=1';
import { montarLecturaRegaloRaton } from './lectura-regalo-raton.mjs?v=1';
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
  const esCuentoAntes = titulo => contenedor.dataset.categoria === 'materiales_disponibles'
    && /^antes[,]?\s+muy\s+antes\s*-\s*cuento\s*n[.º°]?\s*5\s*$/i.test(titulo.normalize('NFC').trim());
  // El recurso 60 mantiene sus lecturas al actualizar el título de la colección.
  const esZorroLuna = titulo => contenedor.dataset.categoria === 'materiales_disponibles'
    && ['colección de cuentos y tradiciones ii', 'cuentos y tradiciones ii - el zorro enamorado de la luna']
      .includes(titulo.normalize('NFC').trim().toLocaleLowerCase('es'));
  const esMuqui = titulo => contenedor.dataset.categoria === 'materiales_disponibles'
    && /^el\s+muqui\s*-\s*cuento\s*n[.º°°]?\s*11\s*$/i.test(titulo.normalize('NFC').trim());
  const esRegaloRaton = titulo => contenedor.dataset.categoria === 'materiales_disponibles'
    && titulo.normalize('NFC').trim().toLocaleLowerCase('es') === 'el regalo de ratón';
  const esCuentoConCopia = titulo => esCuentoAntes(titulo) || esZorroLuna(titulo) || esMuqui(titulo) || esRegaloRaton(titulo);
  function abrir(tarjeta, boton) {
    const tituloElemento = tarjeta.querySelector('.ra-catalogo-titulo');
    const titulo = tituloElemento?.dataset.tituloOriginal || tituloElemento?.textContent?.trim() || 'Recurso';
    const descripcion = tarjeta.querySelector('.ra-catalogo-descripcion')?.textContent?.trim() || 'Descripción no disponible.';
    const foto = tarjeta.querySelector('.ra-catalogo-imagen');
    const enlace = tarjeta.querySelector('.ra-catalogo-enlace');
    detalle.replaceChildren();
    const encabezado = document.createElement('h2');
    encabezado.textContent = titulo;
    encabezado.className = 'ra-et-encabezado';
    if (esCuentoConCopia(titulo) && enlace) {
      const botonCopiar = document.createElement('button');
      botonCopiar.type = 'button';
      botonCopiar.className = 'ra-et-copiar-titulo ra-et-copiar-modal';
      botonCopiar.innerHTML = '<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.7-1.7"/></svg>';
      botonCopiar.title = 'Copiar enlace directo al material';
      botonCopiar.setAttribute('aria-label', 'Copiar enlace directo de ' + titulo);
      const estadoCopia = document.createElement('span');
      estadoCopia.className = 'ra-et-copia-estado ra-et-copia-modal-estado';
      estadoCopia.setAttribute('role', 'status');
      botonCopiar.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(enlace.href);
          estadoCopia.textContent = 'Enlace copiado.';
          botonCopiar.title = 'Enlace copiado';
        } catch {
          const campo = document.createElement('input');
          campo.type = 'text';
          campo.value = enlace.href;
          campo.readOnly = true;
          campo.className = 'ra-et-copia-campo';
          estadoCopia.replaceChildren(campo);
          campo.focus();
          campo.select();
          botonCopiar.title = 'Selecciona y copia el enlace';
        }
      });
      encabezado.append(document.createTextNode(' '), botonCopiar, estadoCopia);
    }
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
    if (enlace && !esCuentoConCopia(titulo)) {
      const directo = document.createElement('a');
      directo.className = 'ra-et-enlace';
      directo.href = enlace.href;
      directo.textContent = 'Enlace directo al material';
      detalle.append(directo);
    }
    if (esCuentoAntes(titulo)) {
      montarLecturaQueBonito(detalle);
    } else if (esZorroLuna(titulo)) {
      montarLecturaZorroLuna(detalle);
    } else if (esMuqui(titulo)) {
      montarLecturaMuqui(detalle);
    } else if (esRegaloRaton(titulo)) {
      montarLecturaRegaloRaton(detalle);
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
      const tituloTarjeta = tarjeta.querySelector('.ra-catalogo-titulo');
      const enlaceParaCopiar = tarjeta.querySelector('.ra-catalogo-enlace');
      if (tituloTarjeta && enlaceParaCopiar && esCuentoConCopia(tituloTarjeta.textContent || '')) {
        const textoTitulo = tituloTarjeta.textContent.trim();
        tituloTarjeta.dataset.tituloOriginal = textoTitulo;
        tituloTarjeta.replaceChildren();
        const copiarTitulo = document.createElement('button');
        copiarTitulo.type = 'button';
        copiarTitulo.className = 'ra-et-copiar-titulo';
        copiarTitulo.innerHTML = '<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.7-1.7"/></svg>';
        copiarTitulo.title = 'Copiar enlace directo al material';
        copiarTitulo.setAttribute('aria-label', 'Copiar enlace directo de ' + textoTitulo);
        const confirmacion = document.createElement('span');
        confirmacion.className = 'ra-et-copia-estado';
        confirmacion.setAttribute('role', 'status');
        copiarTitulo.addEventListener('click', async () => {
          const url = enlaceParaCopiar.href;
          try {
            await navigator.clipboard.writeText(url);
            confirmacion.textContent = 'Enlace copiado.';
            copiarTitulo.title = 'Enlace copiado';
          } catch {
            // Alternativa disponible cuando el portapapeles del navegador está bloqueado.
            const campo = document.createElement('input');
            campo.type = 'text';
            campo.value = url;
            campo.readOnly = true;
            campo.className = 'ra-et-copia-campo';
            confirmacion.replaceChildren(campo);
            campo.focus();
            campo.select();
            copiarTitulo.title = 'Selecciona y copia el enlace';
          }
        });
        tituloTarjeta.append(document.createTextNode(textoTitulo + ' '), copiarTitulo, confirmacion);
      }
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
        if (contenedor.dataset.categoria === 'materiales_disponibles') {
          foto.addEventListener('pointerenter', event => {
            if (event.pointerType === 'mouse') foto.classList.add('ra-et-hover-activo');
          });
          foto.addEventListener('pointerleave', () => foto.classList.remove('ra-et-hover-activo'));
          foto.addEventListener('pointercancel', () => foto.classList.remove('ra-et-hover-activo'));
        }
      }
      if (descripcion) {
        const texto = document.createElement('p');
        texto.textContent = descripcion.textContent;
        previa.appendChild(texto);
      }
      tarjeta.appendChild(previa);
    }
  }
  if (contenedor.dataset.categoria === 'materiales_disponibles') {
    // Al desplazarse, la vista flotante se cierra y no tapa el prólogo ni el pie.
    window.addEventListener('scroll', () => {
      contenedor.querySelectorAll('.ra-et-hover-activo').forEach(imagen => imagen.classList.remove('ra-et-hover-activo'));
    }, { passive: true });
  }
  const observador = new MutationObserver(preparar);
  observador.observe(contenedor, { childList: true, subtree: true });
  preparar();
}
