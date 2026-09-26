"use strict";

(function(){
  const pasosBase = [
    { selector:".navegacion, .navegacion-bda-hero", titulo:"Navegación principal", texto:"En esta zona puedes regresar al Banco Digital Accesible, volver al inicio principal o abrir el contacto institucional." },
    { selector:".portada, .presentacion-bda-hero", titulo:"Portada del módulo", texto:"Aquí se presenta la identidad del recurso y una breve descripción de su finalidad educativa." },
    { selector:".hero-busqueda, .panel-busqueda, .panel-biblioteca", titulo:"Área de consulta", texto:"Este bloque reúne las opciones principales de búsqueda, filtros, accesos o presentación del contenido disponible." },
    { selector:".grid-materiales, .galeria, .lista-tarjetas, .lista-recursos, #lista-biblioteca, #lista-gutendex, .pagina-teoria", titulo:"Resultados o contenido", texto:"En esta sección aparecen los módulos, recursos, señas, signos, libros o contenidos que puedes revisar." },
    { selector:".footer-crebe, footer", titulo:"Pie de página institucional", texto:"Al final encontrarás enlaces relacionados, contacto y reconocimiento de autoría del desarrollo original." }
  ];

  let resaltado = null;
  let cajaGuia = null;
  let pasosActivos = [];
  let indicePaso = 0;

  function anunciar(mensaje){
    let nodo = document.querySelector("#eva-anunciador-accesibilidad");
    if(!nodo){
      nodo = document.createElement("div");
      nodo.id = "eva-anunciador-accesibilidad";
      nodo.className = "eva-solo-lectores";
      nodo.setAttribute("aria-live","polite");
      nodo.setAttribute("aria-atomic","true");
      document.body.appendChild(nodo);
    }
    nodo.textContent = "";
    window.setTimeout(() => { nodo.textContent = mensaje; },30);
  }

  function obtenerPasos(){
    const pasos = [];
    pasosBase.forEach((paso) => {
      const elemento = document.querySelector(paso.selector);
      if(elemento && elemento.offsetParent !== null) pasos.push({...paso,elemento});
    });

    document.querySelectorAll("[data-guia-titulo], [data-guia-texto]").forEach((elemento) => {
      if(elemento.offsetParent === null || pasos.some((paso) => paso.elemento === elemento)) return;
      pasos.push({
        elemento,
        titulo:elemento.dataset.guiaTitulo || "Sección de la página",
        texto:elemento.dataset.guiaTexto || "Revisa este bloque para conocer mejor el contenido disponible."
      });
    });

    return pasos;
  }

  function escaparHtml(texto){
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
  }

  function cerrarRecorrido(avisar=false){
    resaltado?.remove();
    cajaGuia?.remove();
    resaltado = null;
    cajaGuia = null;
    if(avisar) anunciar("Recorrido guiado cerrado.");
  }

  function crearElementosGuia(){
    cerrarRecorrido();
    resaltado = document.createElement("div");
    resaltado.className = "bda-guia-resaltado";
    resaltado.setAttribute("aria-hidden","true");

    cajaGuia = document.createElement("section");
    cajaGuia.className = "bda-caja-guia";
    cajaGuia.setAttribute("role","dialog");
    cajaGuia.setAttribute("aria-modal","true");
    cajaGuia.setAttribute("aria-live","polite");

    document.body.append(resaltado,cajaGuia);
  }

  function posicionarResaltado(elemento){
    const rect = elemento.getBoundingClientRect();
    const margen = 8;
    resaltado.style.top = `${Math.max(rect.top-margen,8)}px`;
    resaltado.style.left = `${Math.max(rect.left-margen,8)}px`;
    resaltado.style.width = `${Math.min(rect.width+margen*2,window.innerWidth-16)}px`;
    resaltado.style.height = `${Math.min(rect.height+margen*2,window.innerHeight-16)}px`;
  }

  function posicionarCaja(elemento){
    const rect = elemento.getBoundingClientRect();
    const espacio = 14;
    const ancho = Math.min(360,window.innerWidth-32);
    const altoEstimado = 220;
    let top = rect.bottom + espacio;
    const left = Math.min(Math.max(rect.left,16),window.innerWidth-ancho-16);
    if(top+altoEstimado>window.innerHeight) top=Math.max(16,rect.top-altoEstimado-espacio);
    cajaGuia.style.top = `${top}px`;
    cajaGuia.style.left = `${left}px`;
  }

  function mostrarPaso(){
    const paso = pasosActivos[indicePaso];
    if(!paso || !resaltado || !cajaGuia) return;

    const reducir = document.documentElement.classList.contains("eva-reducir-movimiento") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    paso.elemento.scrollIntoView({behavior:reducir ? "auto" : "smooth",block:"center",inline:"nearest"});

    window.setTimeout(() => {
      if(!resaltado || !cajaGuia) return;
      posicionarResaltado(paso.elemento);
      posicionarCaja(paso.elemento);
    },reducir ? 0 : 220);

    cajaGuia.innerHTML = `
      <p class="bda-guia-progreso">Paso ${indicePaso + 1} de ${pasosActivos.length}</p>
      <h2>${escaparHtml(paso.titulo)}</h2>
      <p>${escaparHtml(paso.texto)}</p>
      <div class="bda-controles-guia">
        <button type="button" data-bda-tour="anterior" ${indicePaso === 0 ? "disabled" : ""}>Anterior</button>
        <button type="button" data-bda-tour="cerrar">Cerrar</button>
        <button type="button" data-bda-tour="siguiente">${indicePaso === pasosActivos.length - 1 ? "Finalizar" : "Siguiente"}</button>
      </div>
    `;

    cajaGuia.querySelector('[data-bda-tour="siguiente"]')?.focus({preventScroll:true});
  }

  function iniciarRecorrido(){
    pasosActivos = obtenerPasos();
    if(!pasosActivos.length){
      anunciar("No se encontraron secciones para el recorrido.");
      return;
    }

    const menu = document.querySelector(".eva-accesibilidad-menu");
    const abrir = document.querySelector(".eva-accesibilidad-boton");
    if(menu) menu.hidden = true;
    abrir?.setAttribute("aria-expanded","false");

    indicePaso = 0;
    crearElementosGuia();
    mostrarPaso();
    anunciar("Recorrido guiado iniciado.");
  }

  function avanzarPaso(){
    if(indicePaso >= pasosActivos.length - 1){
      cerrarRecorrido();
      anunciar("Recorrido guiado finalizado.");
      return;
    }
    indicePaso += 1;
    mostrarPaso();
  }

  function retrocederPaso(){
    if(indicePaso <= 0) return;
    indicePaso -= 1;
    mostrarPaso();
  }

  function reposicionarGuia(){
    if(!cajaGuia || !resaltado || !pasosActivos[indicePaso]) return;
    const elemento = pasosActivos[indicePaso].elemento;
    posicionarResaltado(elemento);
    posicionarCaja(elemento);
  }

  function integrarEnPanel(){
    const panel = document.querySelector(".eva-accesibilidad-panel");
    const opciones = panel?.querySelector(".eva-accesibilidad-opciones");
    if(!panel || !opciones) return false;
    if(opciones.querySelector('[data-bda-accion="recorrido"]')) return true;

    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "eva-accesibilidad-opcion";
    boton.dataset.bdaAccion = "recorrido";
    boton.textContent = "Iniciar recorrido";
    boton.addEventListener("click", iniciarRecorrido);

    const restablecer = opciones.querySelector(".eva-accesibilidad-restablecer");
    opciones.insertBefore(boton,restablecer || null);
    return true;
  }

  function iniciar(){
    if(document.documentElement.dataset.bdaExtensionAccesibilidad === "true") return;
    document.documentElement.dataset.bdaExtensionAccesibilidad = "true";

    if(!integrarEnPanel()){
      const observador = new MutationObserver(() => {
        if(integrarEnPanel()) observador.disconnect();
      });
      observador.observe(document.body,{childList:true,subtree:true});
    }

    document.addEventListener("click",(evento) => {
      const boton = evento.target.closest("button[data-bda-tour]");
      if(!boton) return;
      if(boton.dataset.bdaTour === "anterior") retrocederPaso();
      if(boton.dataset.bdaTour === "siguiente") avanzarPaso();
      if(boton.dataset.bdaTour === "cerrar") cerrarRecorrido(true);
    });

    document.addEventListener("keydown",(evento) => {
      if(evento.key === "Escape" && cajaGuia){
        cerrarRecorrido(true);
        return;
      }
      if(!cajaGuia) return;
      if(evento.key === "ArrowRight"){
        evento.preventDefault();
        avanzarPaso();
      }
      if(evento.key === "ArrowLeft"){
        evento.preventDefault();
        retrocederPaso();
      }
    });

    window.addEventListener("resize",reposicionarGuia);
    window.addEventListener("scroll",reposicionarGuia,{passive:true});
  }

  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded",iniciar,{once:true});
  else iniciar();
})();
